import mongoose, { Document, Schema } from "mongoose";
import { Payment } from "./payment.interface";

interface PaymentDocument extends Payment, Document {
  createdAt: Date;
}

const paymentSchema = new Schema({
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  description: { type: String, required: true },
  source: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const PaymentModel = mongoose.model<PaymentDocument>("Payment", paymentSchema);

export default PaymentModel;
