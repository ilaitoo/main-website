import { mongooseConnection } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  await mongooseConnection();
  const request = new NextRequest(req);
  const ids = await request.json();
  const productsData = await Product.find({ _id: ids });
  return NextResponse.json({ message: "Here are cart products", productsData });
}
