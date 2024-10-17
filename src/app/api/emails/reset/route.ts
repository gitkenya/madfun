import ResetTemplate from "@/emails/ResetTemplate";
import { ZeptoMailer } from "@/lib/mailers/zepto";
import { render } from "@react-email/components";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    const response = await ZeptoMailer({
      to: data.email,
      replyTo: process.env.ZEPTO_MAIL_SMTP_FROM!,
      subject: "Madfun Account Password Reset Code",
      html: await render(ResetTemplate(data)),
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Message Not Sent",
        error: error,
      },
      { status: 500 }
    );
  }
}
