import { db } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  let client;

  try {
    client = await db.connect();
    const data = await client.query(`SELECT * FROM orders`);
    const orders = data.rows;
    return NextResponse.json(orders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  } finally {
    if (client) {
      client.release();
    }
  }
}
