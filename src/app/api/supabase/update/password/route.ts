import { NextRequest, NextResponse } from "next/server";
import UpdatedPassword from "@/emails/UpdatedPassword";
import { supabase } from "@/utils/supabase/admin";
import { ZeptoMailer } from "@/lib/mailers/zepto";
import { render } from "@react-email/components";

export async function POST(req: NextRequest) {
  const reqData = await req.json();
  //console.log(reqData);
  const {
    data: { user },
    error,
  } = await supabase.auth.admin.updateUserById(reqData.account.id, {
    password: reqData.password,
  });
  if (error) {
    const eRaw = JSON.stringify(error);
    const ePro = JSON.parse(eRaw);
    return NextResponse.json(
      {
        success: false,
        info: { message: ePro.message },
        error,
      },
      { status: ePro.status }
    );
  } else {
    try {
      const userData = {
        email: user?.email,
        fname: user?.user_metadata.first_name,
        lname: user?.user_metadata.last_name,
        phone: user?.user_metadata.phone,
        timezone: user?.user_metadata.verification.timezone,
        expires_at: user?.user_metadata.verification.expires_at,
        requested_at: user?.user_metadata.verification.requested_at,
      };
      const response = await ZeptoMailer({
        to: userData.email!,
        replyTo: process.env.ZEPTO_MAIL_SMTP_FROM!,
        subject: "Account Password Changed",
        html: await render(UpdatedPassword(userData)),
      });
      return NextResponse.json(
        { success: true, user: user, response },
        { status: 200 }
      );
    } catch (error) {
      //console.log(error);
      return NextResponse.json(
        {
          success: false,
          info: {
            message:
              "Password reset verification email was not sent. Please try again later.",
          },
          error: error,
        },
        { status: 500 }
      );
    }
  }
}
