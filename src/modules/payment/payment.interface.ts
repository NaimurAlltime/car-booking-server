export interface PaymentIntentData {
  amount: number;
  currency: string;
  payment_method: string;
  confirmation_method: "manual" | "automatic";
}
