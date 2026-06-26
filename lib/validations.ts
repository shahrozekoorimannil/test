import { z } from "zod";

export const addressSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  street: z.string().min(5, "Street address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  postalCode: z.string().min(6, "Valid PIN code required"),
  country: z.string().default("India"),
});

export const checkoutPayloadSchema = z.object({
  items: z.array(z.object({
    productId: z.string(),
    variantId: z.string().optional(),
    quantity: z.number().positive(),
  })).min(1, "Cart cannot be empty"),
  shippingAddress: addressSchema,
  couponCode: z.string().optional(),
});
