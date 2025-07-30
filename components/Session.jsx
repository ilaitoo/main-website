"use server";
import { auth } from "@/auth";

export default async function Session() {
  const session = await auth();
  if (!session?.user) return null;
  return session;
}
