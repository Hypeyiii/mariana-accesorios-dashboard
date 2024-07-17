import { db } from "@vercel/postgres";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const client = await db.connect();

  try {
    const data = await client.query(`SELECT * FROM users WHERE email = $1`, [
      email,
    ]);
    const user = data.rows[0];

    if (
      user &&
      user.role === "admin" &&
      (await bcrypt.compare(password, user.password))
    ) {
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
          id: user.id,
          email: user.email,
        },
        process.env.JWT_SECRET || "secret-json-web-token"
      );

      const serializedToken = serialize("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60,
        path: "/",
      });

      const response = NextResponse.json({
        success: true,
        message: "Login successful",
      });
      response.headers.set("Set-Cookie", serializedToken);

      return response;
    } else {
      return NextResponse.json({ error: "Credenciales invalidas" });
    }
  } catch (err) {
    console.error("Error logging in:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  } finally {
    client.release();
  }
}
