import stripe from "../../utils/stripeConfig";
import { PaymentIntentData } from "./payment.interface";

export const createPaymentIntent = async (data: PaymentIntentData) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create(data);
    return paymentIntent;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
