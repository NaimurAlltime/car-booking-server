import stripe from "../../utils/stripeConfig";
import { Payment } from "./payment.interface";
import PaymentModel from "./payment.model";

export const createPayment = async (payment: Payment) => {
  const charge = await stripe.charges.create({
    amount: payment.amount,
    currency: payment.currency,
    description: payment.description,
    source: payment.source,
  });

  const newPayment = new PaymentModel({
    amount: payment.amount,
    currency: payment.currency,
    description: payment.description,
    source: payment.source,
  });

  await newPayment.save();

  return charge;
};

export const getPaymentHistory = async () => {
  return PaymentModel.find().sort({ createdAt: -1 });
};
