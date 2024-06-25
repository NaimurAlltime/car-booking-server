import express, { Router } from "express";
import { createPaymentIntentHandler } from "./payment.controller";

const paymentRoutes: Router = express.Router();

paymentRoutes.post("/create-payment-intent", createPaymentIntentHandler);

export default paymentRoutes;
