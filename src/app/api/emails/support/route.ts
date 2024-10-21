import SupportTemplate from "@/emails/SupportTemplate";
import { ZeptoMailer } from "@/lib/mailers/zepto";
import { render } from "@react-email/components";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log(data);
  try {
    const response = await ZeptoMailer({
      to: "lexacletechnologies@gmail.com",
      replyTo: data.email,
      subject: `Customer Inquiry - ${data.name}`,
      html: await render(SupportTemplate(data)),
    });
    console.log(response);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Message Not Sent",
        error: error,
      },
      { status: 500 }
    );
  }
}
