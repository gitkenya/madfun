import { NextRequest, NextResponse } from "next/server";
import ResetTemplate from "@/emails/ResetTemplate";
import { supabase } from "@/utils/supabase/admin";
import { ZeptoMailer } from "@/lib/mailers/zepto";
import { render } from "@react-email/components";
import moment from "moment";

export async function POST(req: NextRequest) {
  const reqData = await req.json();
  const formattedDate = moment(new Date()).format();

  const currentTimestamp = Date.parse(formattedDate);
  const expiryTimeStamp = currentTimestamp + 30 * 60 * 1000;
  const code = await generateCode(6);
  const { data: user, error } = await supabase.auth.admin.updateUserById(
    reqData.uid,
    {
      user_metadata: {
        verification: {
          code: code,
          timezone: reqData.timezone,
          expires_at: expiryTimeStamp,
          requested_at: currentTimestamp,
        },
      },
    }
  );
  if (user) {
    try {
      const userData = {
        email: reqData.email,
        name: reqData.name,
        phone: reqData.phone,
        code: code,
        timezone: reqData.timezone,
        expires_at: expiryTimeStamp,
        requested_at: currentTimestamp,
      };
      const response = await ZeptoMailer({
        to: userData.email,
        replyTo: process.env.ZEPTO_MAIL_SMTP_FROM!,
        subject: "Account Password Reset Code",
        html: await render(ResetTemplate(userData)),
      });
      return NextResponse.json(
        { success: true, user: user.user, response },
        { status: 200 }
      );
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        {
          success: false,
          message:
            "The password reset code was not be sent. Please try again later.",
          error: error,
        },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred. Please try again later or contact us",
        error,
      },
      { status: 500 }
    );
  }
}

async function generateCode(length: number): Promise<string> {
  let result = "";
  var characters = "0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
