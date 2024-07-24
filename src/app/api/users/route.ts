import { db } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  let client;

  try {
    client = await db.connect();
    const data = await client.query(
      `SELECT 
         u.*, 
         COUNT(o.id) AS order_count, 
         COALESCE(SUM(o.amount), 0) AS total_amount
       FROM users u
       LEFT JOIN orders o ON u.id = o.userid
       GROUP BY u.id`
    );
    const users = data.rows;
    return NextResponse.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  } finally {
    if (client) {
      client.release();
    }
  }
}

export async function DELETE(req: NextRequest) {
  let client;

  try {
    client = await db.connect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Missing user ID" }, { status: 400 });
    }

    await client.query(`DELETE FROM users WHERE id = $1`, [id]);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error deleting user:", err);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  } finally {
    if (client) {
      client.release();
    }
  }
}
