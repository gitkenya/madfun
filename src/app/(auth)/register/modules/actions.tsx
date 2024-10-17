"use server";

import authErrorCodes from "@/utils/supabase/helpers/errorCodes";
import { createClient } from "@/utils/supabase/server";
type AuthErrorCode = keyof typeof authErrorCodes;

export async function signUp(formData: FormData, ipData: any): Promise<any> {
  const supabase = createClient();

  const lCase = async (field: string) => {
    const res = field.toLowerCase();
    return res;
  };
  const uCase = async (field: string) => {
    const iname = field.toLowerCase();
    let res = iname.charAt(0).toUpperCase() + iname.slice(1);
    return res.replace(/\s+/g, "");
  };
  const fPhone = async (field: string) => {
    const res = field.replace(/\s/g, "");
    return res;
  };

  const name = await (formData.get("register_name") as string);
  const email = await lCase(formData.get("register_email") as string);
  const phone = await fPhone(formData.get("register_phone") as string);
  const password = formData.get("register_password") as string;
  const gender = await uCase(formData.get("register_gender") as string);
  const yob = await uCase(formData.get("register_yob") as string);
  const terms =
    (await uCase(formData.get("register_terms") as string)) === "On" ? 1 : 0;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/validation/email`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
      cache: "no-store",
    }
  );
  const resval = await res.json();
  if (resval.success) {
    if (resval.data.result === "valid") {
      const { data: user } = await supabase
        .from("users")
        .select("*")
        .eq("phone", phone)
        .single();
      if (user) {
        return {
          success: false,
          data: { result: "valid" },
          info: {
            title: `Phone number is already registered!`,
            message:
              "Please use a unique and accessible phone number to register your account.",
          },
          message:
            "Please use a unique and accessible phone number to register your account.",
        };
      } else {
        return await supabase.auth
          .signUp({
            email,
            password,
            options: {
              data: {
                name: name,
                first_name: name.split(" ")[0],
                last_name: name.split(" ")[1] ? name.split(" ")[1] : null,
                phone: phone,
              },
            },
          })
          .then(async (res: any) => {
            if (res.data.user) {
              const { data: userAccount } = await supabase
                .from("users")
                .insert({
                  id: res.data.user.id,
                  name: name,
                  email: email,
                  phone: phone,
                  gender: gender,
                  dob: parseInt(yob),
                  terms: terms,
                  location:
                    "SRID=4326;POINT(" +
                    ipData.latitude +
                    " " +
                    ipData.longitude +
                    ")",
                  geodata: ipData,
                })
                .select()
                .single();
              return {
                success: true,
                data: userAccount,
                info: {
                  title: "Account created successfully",
                  message:
                    "Welcome to the Madfun Family. Explore, travel and manage your events.",
                },
              };
            } else {
              const json_error: { code: string } = JSON.parse(
                JSON.stringify(res.error)
              );
              console.log(json_error);

              // Safely check if the error code exists in the authErrorCodes
              const errorDetails = authErrorCodes[
                json_error.code as AuthErrorCode
              ] || {
                title: "Unknown Auth Error",
                message:
                  "An unexpected error occurred. Please try again or contact us.",
              };
              return {
                success: false,
                data: { result: "valid" },
                info: {
                  title: errorDetails.title,
                  message: errorDetails.message,
                },
              };
            }
          })
          .catch((error: any) => {
            console.log(error);
            const json_error: { code: string } = JSON.parse(
              JSON.stringify(error)
            );

            // Safely check if the error code exists in the authErrorCodes
            const errorDetails = authErrorCodes[
              json_error.code as AuthErrorCode
            ] || {
              title: "Unknown Auth Error",
              message:
                "An unexpected error occurred. Please try again or contact us.",
            };
            return {
              success: false,
              data: { result: "valid" },
              info: {
                title: errorDetails.title,
                message: errorDetails.message,
              },
            };
          });
      }
    } else {
      return {
        success: false,
        data: { result: "invalid" },
        info: {
          title: "Invalid email address!",
          message:
            "Your email address was detected as invalid. Please use a different email.",
        },
        message: "Invalid Email Address",
      };
    }
  } else {
    return {
      success: false,
      data: { result: "valid" },
      info: {
        title: "Email Verification Failed!",
        message:
          "We could not verify your email address. Please try again later.",
      },
      message: "System overload failure! Please try again later.",
    };
  }
}
