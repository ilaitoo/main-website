import { mongooseConnection } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(req) {
  console.log("hello");
  await mongooseConnection();
  const id = await req.nextUrl.searchParams.get("id");
  if (id) {
    const product = await Product.findById(id);
    return NextResponse.json({ message: "Here is the product", product });
  }
  const products = await Product.find({}, null, { sort: { _id: -1 } });
  return NextResponse.json({
    message: "Here are all products",
    status: 200,
    products,
  });
}
