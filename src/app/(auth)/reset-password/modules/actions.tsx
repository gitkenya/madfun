"use server";
import ResetTemplate from "@/emails/ResetTemplate";
import { supabase } from "@/utils/supabase/admin";
import { ZeptoMailer } from "@/lib/mailers/zepto";
import { render } from "@react-email/components";
import moment from "moment";

export async function ResetPassword(
  formData: FormData,
  resetData: any
): Promise<any> {
  const code = await (formData.get("reset_code") as string);
  const newPassword = await (formData.get("reset_password") as string);

  const { data: user } = await supabase
    .from("users")
    .select("*")
    .eq("email", resetData.email)
    .single();
  if (user) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/supabase/update/password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          account: resetData,
          code: code,
          password: newPassword,
        }),
        cache: "no-store",
      }
    );
    const response = await res.json();

    if (response.success) {
      return {
        success: true,
        info: {
          title: "Password reset successful!",
          message:
            "Your Account Password has been successfully reset! Please proceed to login.",
        },
      };
    } else {
      return {
        success: false,
        info: { title: "An error occurred!", message: response.message },
      };
    }
  } else {
    return {
      success: false,
      info: {
        title: "Password reset failed!",
        message: "We could not locate your account. Please contact us",
      },
    };
  }
}

export async function ResendCode(reqData: any): Promise<any> {
  const formattedDate = moment(new Date()).format();
  const currentTimestamp = Date.parse(formattedDate);
  const expiryTimeStamp = currentTimestamp + 30 * 60 * 1000;
  if (reqData.newCode) {
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
        return {
          success: true,
          info: {
            title: "Request successful!",
            message:
              "Please check your email for the account password reset code.",
            resetData: user.user,
          },
        };
      } catch (error) {
        console.log(error);

        return {
          success: false,
          info: {
            title: "Reset code not sent!",
            message:
              "The password reset code was not be sent. Please try again later or contact us.",
          },
        };
      }
    } else {
      return {
        success: false,
        info: {
          title: "An error occurred!",
          message: "An error occurred. Please try again later or contact us.",
        },
      };
    }
  } else {
    try {
      const userData = {
        email: reqData.email,
        name: reqData.name,
        phone: reqData.phone,
        code: reqData.resetCode,
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
      let updatedUser: any = reqData.user;
      updatedUser.user_metadata.verification = {
        code: reqData.resetCode,
        timezone: reqData.timezone,
        expires_at: expiryTimeStamp,
        requested_at: currentTimestamp,
      };
      return {
        success: true,
        info: {
          title: "Request successful!",
          message: "Please check your email for the password reset code.",
          resetData: updatedUser,
        },
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message:
          "The password reset code was not be sent. Please try again later.",
        error: error,
      };
    }
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
