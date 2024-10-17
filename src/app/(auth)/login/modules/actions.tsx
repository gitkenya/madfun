"use server";
import authErrorCodes from "@/utils/supabase/helpers/errorCodes";
import { createClient } from "@/utils/supabase/server";
type AuthErrorCode = keyof typeof authErrorCodes;

export async function signIn(formData: FormData): Promise<any> {
  const lowerCase = async (field: string) => {
    const res = field.toLowerCase();
    return res;
  };

  const email = await lowerCase(formData.get("login_email") as string);
  const password = formData.get("login_password") as string;
  const supabase = createClient();
  const { error, data } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    const json_error: { code: string } = JSON.parse(JSON.stringify(error));

    // Safely check if the error code exists in the authErrorCodes
    const errorDetails = authErrorCodes[json_error.code as AuthErrorCode] || {
      title: "Unknown Auth Error",
      message: "An unexpected error occurred. Please try again or contact us.",
    };

    return {
      success: false,
      info: {
        title: errorDetails.title, // Title from authErrorCodes
        message: errorDetails.message, // Message from authErrorCodes
      },
    };
  }
  if (data) {
    return {
      success: true,
      info: {
        title: "Signed in successfully",
        message: `Welcome to Madfun. You have successfully signed in to your account`,
      },
    };
  }
}
