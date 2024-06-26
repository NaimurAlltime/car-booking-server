import express, { Router } from "express";
import { handleGetPaymentHistory, handlePayment } from "./payment.controller";

const paymentRoutes: Router = express.Router();

paymentRoutes.post("/pay", handlePayment);
paymentRoutes.get("/history", handleGetPaymentHistory);

export default paymentRoutes;
