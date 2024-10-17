import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    const res = await fetch(
      `https://api.quickemailverification.com/v1/verify?apikey=${process.env.QUICK_EMAIL_VALIDATION_API}&email=${data.email}`,
      { cache: "no-store" }
    );

    const response = await res.json();
    return NextResponse.json(
      { success: true, data: response },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error encountered");
    return NextResponse.json(
      {
        success: false,
        data: {},
      },
      { status: 500 }
    );
  }
}
