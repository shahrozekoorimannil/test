import { Resend } from "resend";
import * as React from "react";
import { 
  Html, Head, Preview, Body, Container, Section, Text, Button, Hr, Heading 
} from "@react-email/components";

export const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");

// --- Template: Order Confirmation ---
interface OrderConfirmationProps {
  orderId: string;
  customerName: string;
  totalAmount: string;
}

export const OrderConfirmationEmail = ({ orderId, customerName, totalAmount }: OrderConfirmationProps) => (
  <Html>
    <Head />
    <Preview>Your Techno Designer Order Confirmed</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Order Confirmed!</Heading>
        <Text style={text}>Hi {customerName},</Text>
        <Text style={text}>
          Thank you for shopping with Techno Designer Fans & Lights. We have received your payment of ₹{totalAmount} and your order <strong>{orderId}</strong> is now being processed.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href={`https://technodesigner.com/account/orders`}>
            Track Order
          </Button>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          Techno Designer Fans & Lights, Malappuram, Kerala.
        </Text>
      </Container>
    </Body>
  </Html>
);

// --- Template: Admin New Order Alert ---
export const AdminOrderAlertEmail = ({ orderId, amount }: { orderId: string, amount: string }) => (
  <Html>
    <Head />
    <Preview>New Order Received: {orderId}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Order: {orderId}</Heading>
        <Text style={text}>A new order has been placed for ₹{amount}.</Text>
        <Button style={button} href={`https://technodesigner.com/admin/orders/${orderId}`}>
          View in Dashboard
        </Button>
      </Container>
    </Body>
  </Html>
);

// --- Send Functions ---
export async function sendOrderConfirmation(email: string, props: OrderConfirmationProps) {
  try {
    await resend.emails.send({
      from: "Techno Designer <orders@technodesigner.com>",
      to: email,
      subject: `Order Confirmation - ${props.orderId}`,
      react: OrderConfirmationEmail(props),
    });
  } catch (error) {
    console.error("Failed to send email", error);
  }
}

export async function sendAdminOrderAlert(props: { orderId: string, amount: string }) {
  try {
    await resend.emails.send({
      from: "System <alerts@technodesigner.com>",
      to: "admin@technodesigner.com",
      subject: `🚨 New Order: ${props.orderId}`,
      react: AdminOrderAlertEmail(props),
    });
  } catch (error) {
    console.error("Failed to send admin alert", error);
  }
}

// Styles
const main = { backgroundColor: "#f6f9fc", fontFamily: "sans-serif" };
const container = { backgroundColor: "#ffffff", margin: "0 auto", padding: "20px 0 48px", marginBottom: "64px" };
const h1 = { color: "#0A1931", fontSize: "24px", fontWeight: "bold", padding: "0 48px" };
const text = { color: "#525f7f", fontSize: "16px", lineHeight: "24px", padding: "0 48px" };
const btnContainer = { textAlign: "center" as const, padding: "20px 0" };
const button = { backgroundColor: "#D4AF37", borderRadius: "5px", color: "#0A1931", fontSize: "16px", fontWeight: "bold", textDecoration: "none", textAlign: "center" as const, display: "inline-block", padding: "12px 24px" };
const hr = { borderColor: "#e6ebf1", margin: "20px 0" };
const footer = { color: "#8898aa", fontSize: "12px", padding: "0 48px" };
