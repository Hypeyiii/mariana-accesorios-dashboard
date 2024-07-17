import { TUser } from "@/lib/types";
import { db } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  let client;

  try {
    client = await db.connect();
    const data = await client.query(`SELECT * FROM products`);
    const products = data.rows;
    return NextResponse.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  } finally {
    if (client) {
      client.release();
    }
  }
}

export async function getUsers(): Promise<any[]> {
  let client;

  try {
    client = await db.connect();
    const data = await client.query(`SELECT * FROM users`);
    const users = data.rows;
    return users;
  } catch (err) {
    console.error("Error fetching users:", err);
    return [];
  } finally {
    if (client) {
      client.release();
    }
  }
}
