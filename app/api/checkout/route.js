import { mongooseConnection } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";
// import Stripe from "stripe";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
export async function POST(request) {
  const req = new NextRequest(request);
  const {
    cartProducts,
    name,
    email,
    city,
    postalCode,
    streetAddress,
    country,
  } = await req.json();
  await mongooseConnection();
  const productsIds = cartProducts;
  const uniqueIds = [...new Set(productsIds)];
  const productsInfo = await Product.find({ _id: uniqueIds });
  let line_items = [];
  for (const productId of uniqueIds) {
    const productInfo = productsInfo.find(
      ({ _id }) => _id.toString() === productId
    );
    const quantity = productsIds.filter((id) => id === productId)?.length || 0;
    if (quantity > 0 && productInfo) {
      line_items.push({
        quantity,
        price_data: {
          currency: "USD",
          product_data: { name: productInfo.title },
          unit_amount: 100 * productInfo.price,
        },
      });
    }
  }
  const orderDoc = await Order.create({
    line_items,
    name,
    email,
    city,
    postalCode,
    streetAddress,
    country,
    paid: false,
  });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    customer_email: email,
    success_url: process.env.PUBLIC_URL + "/cart?succeeded=1",
    cancel_url: process.env.PUBLIC_URL + "/cart?canceled=1",
    metadata: { orderId: orderDoc._id.toString() },
  });
  return NextResponse.json({ message: "payment done", url: session.url });
}
