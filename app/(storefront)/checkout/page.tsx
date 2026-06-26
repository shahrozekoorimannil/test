"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cart";
import { createOrder } from "@/actions/order";
import { ShieldCheck, Truck, CreditCard } from "lucide-react";
// In a real app we'd use react-hook-form and zodResolver, but sticking to standard state for demo
import { addressSchema } from "@/lib/validations";

export default function CheckoutPage() {
  const { items, clearCart } = useCartStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState<1 | 2>(1);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const proceedToPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // 1. Zod Validation on Client
    const validation = addressSchema.safeParse(formData);
    if (!validation.success) {
      setError(validation.error.issues[0].message);
      return;
    }

    setLoading(true);

    try {
      // 2. Call Server Action to reserve stock and create Razorpay order
      const payload = {
        items: items.map(i => ({ productId: i.productId, variantId: i.variantId, quantity: i.quantity })),
        shippingAddress: formData
      };

      const result = await createOrder(payload);

      if (!result.success || !("razorpayOrderId" in result)) {
        throw new Error((result as any).error || "Failed to initialize payment");
      }

      // 3. Open Razorpay Checkout Widget
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_dummy", // Enter the Key ID generated from the Dashboard
        amount: result.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: result.currency,
        name: "Techno Designer",
        description: "Test Transaction",
        order_id: result.razorpayOrderId, 
        handler: function (response: any) {
          // Webhook handles the actual logic, this is just for UI redirect
          clearCart();
          window.location.href = `/account/orders?success=true`;
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#0A1931",
        },
      };

      const rzp1 = new (window as any).Razorpay(options);
      rzp1.on('payment.failed', function (response: any){
        setError(response.error.description);
        // Note: Our webhook will automatically release stock since payment failed
      });
      rzp1.open();

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Your cart is empty</h2>
          <button onClick={() => window.location.href = '/products'} className="bg-gold text-navy px-6 py-2 rounded-lg font-semibold">
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  // Calculate totals
  const subtotal = items.reduce((acc, i) => acc + (i.price * i.quantity), 0);
  const gst = subtotal * 0.18; // 18% dummy GST
  const finalTotal = subtotal + gst;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl font-heading font-bold text-navy mb-8">Secure Checkout</h1>
        
        {/* Load Razorpay Script */}
        <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left: Forms */}
          <div className="lg:col-span-2 space-y-6">
            
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 text-red-700 rounded shadow-sm">
                {error}
              </div>
            )}

            {/* Step 1: Shipping */}
            <div className={`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 ${step !== 1 && 'opacity-60 pointer-events-none'}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center font-bold">1</div>
                <h2 className="text-xl font-bold text-navy">Shipping Details</h2>
              </div>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-gold outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-gold outline-none" required />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-gold outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-gold outline-none" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                  <input name="street" value={formData.street} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-gold outline-none" required />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input name="city" value={formData.city} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-gold outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                    <input name="state" value={formData.state} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-gold outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">PIN Code</label>
                    <input name="postalCode" value={formData.postalCode} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-gold outline-none" required />
                  </div>
                </div>
              </form>
            </div>

          </div>

          {/* Right: Order Summary */}
          <div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-28">
              <h2 className="text-xl font-bold text-navy mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
                {items.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-gray-50 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                      <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-navy line-clamp-1">{item.name}</h4>
                      {item.variantTitle && <p className="text-xs text-gray-500">{item.variantTitle}</p>}
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500">Qty: {item.quantity}</span>
                        <span className="text-sm font-semibold text-navy">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t border-gray-100 pt-4 mb-6">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Estimated GST (18%)</span>
                  <span>₹{gst.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="flex justify-between font-bold text-lg text-navy border-t border-gray-100 pt-3">
                  <span>Total</span>
                  <span>₹{finalTotal.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                </div>
              </div>

              <button 
                onClick={proceedToPayment}
                disabled={loading}
                className="w-full bg-navy text-white hover:bg-gold py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {loading ? (
                  "Processing..."
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" /> Pay Securely
                  </>
                )}
              </button>
              <p className="text-xs text-gray-400 text-center mt-3 flex items-center justify-center gap-1">
                <ShieldCheck className="w-4 h-4" /> SSL Encrypted Checkout
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
