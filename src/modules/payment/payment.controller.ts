import { Request, Response } from "express";
import { createPaymentIntent } from "./payment.service";

export const createPaymentIntentHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const paymentIntent = await createPaymentIntent(req.body);
    res.status(201).json(paymentIntent);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
