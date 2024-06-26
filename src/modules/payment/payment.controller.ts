import { Request, Response } from "express";
import { Payment } from "./payment.interface";
import { createPayment, getPaymentHistory } from "./payment.service";

export const handlePayment = async (req: Request, res: Response) => {
  const { amount, currency, description, source }: Payment = req.body;

  try {
    const charge = await createPayment({
      amount,
      currency,
      description,
      source,
    });
    res.status(201).json(charge);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const handleGetPaymentHistory = async (req: Request, res: Response) => {
  try {
    const payments = await getPaymentHistory();
    res.status(200).json(payments);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
