import { mongooseConnection } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endpointSecret =
  "whsec_ed4b2190602d60683d11db0afde225c80578f870748432eacd9656219a1fd248";

export async function POST(req) {
  await mongooseConnection();
  const signature = req.headers.get("stripe-signature");
  const rawBody = await req.text();
  let event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, endpointSecret);
  } catch (err) {
    console.log(`⚠️  Webhook signature verification failed.`, err.message);
    return new NextResponse("Webhook signature verification failed", {
      status: 400,
    });
  }

  switch (event.type) {
    case "checkout.session.completed":
      const data = event.data.object;
      const orderId = data.metadata.orderId;
      const paid = data.payment_status === "paid";
      if (orderId && paid) {
        const orderDoc = await Order.findByIdAndUpdate(
          orderId,
          {
            paid: true,
          },
          { new: true }
        );
      }
      break;
    default:
      console.log(`Unhandled event type ${event.type}.`);
  }

  return new NextResponse("webhook processed successfully", { status: 200 });
}

export const config = {
  api: {
    bodyParser: false,
  },
};

// clever-master-pardon-abound
// account id:
// acct_1QtyTAQddh0uz2fp
