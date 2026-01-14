import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      return NextResponse.json(data ?? { message: "Request error" }, {
        status: res.status,
      });
    }

    const token = data?.token as string | undefined;

    if (!token) {
      return NextResponse.json(
        { message: "Token not returned by backend" },
        { status: 500 }
      );
    }

    const response = NextResponse.json({
      success: true,
      phone: data.phone,
      userId: data.userId,
      role: data.role,
    });

    response.cookies.set("pending_token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 10 * 60,
    });

    return response;
  } catch {
    return NextResponse.json({ message: "Request error" }, { status: 500 });
  }
};
