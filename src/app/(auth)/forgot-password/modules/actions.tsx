"use server";

import { createClient } from "@/utils/supabase/server";

export async function ForgotPassword(formData: FormData): Promise<any> {
  const lCase = async (field: string) => {
    const res = field.toLowerCase();
    return res;
  };

  const email = await lCase(formData.get("forgot_email") as string);
  const supabase = createClient();
  const { data: user } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();
  if (user) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/supabase/update/code`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          uid: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          created: user.created_at,
          timezone: user.geodata.time_zone.name,
        }),
        cache: "no-store",
      }
    );
    const response = await res.json();
    //console.log(response);
    if (response.success) {
      return {
        success: true,
        info: {
          title: "Request successful!",
          message: "Please check your email for the password reset code.",
          resetData: response.user,
        },
      };
    } else {
      return {
        success: false,
        info: { title: "Request failed!", message: response.message },
      };
    }
  } else {
    return {
      success: false,
      info: {
        title: "Request failed!",
        message:
          "Account not found. Please check your email address and try again.",
      },
    };
  }
}
