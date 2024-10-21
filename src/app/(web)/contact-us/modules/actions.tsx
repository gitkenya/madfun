"use server";

export async function sendMessage(
  formData: FormData,
  ipData: any
): Promise<any> {
  const lCase = async (field: string) => {
    const res = field.toLowerCase();
    return res;
  };

  const fPhone = async (field: string) => {
    const res = field.replace(/\s/g, "");
    return res;
  };

  const name = (await formData.get("contact_name")) as string;
  const email = await lCase(formData.get("contact_email") as string);
  const phone = await fPhone(formData.get("contact_phone") as string);
  const message = formData.get("contact_message") as string;

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
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/emails/support`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          message: message,
          result: "valid",
          source: "Web",
        }),
        cache: "no-store",
      });

      return {
        success: true,
        data: { result: "valid" },
        info: {
          title: "Request processed successfully!",
          message:
            "Your message has been successfully sent! We will get in touch shortly.",
        },
        message: "Request Successful",
      };
    } else {
      return {
        success: false,
        data: { result: "invalid" },
        info: {
          title: "Request failed!",
          message:
            "Please check and enter a valid email address then resend your message!.",
        },
        message: "Invalid Email Address",
      };
    }
  } else {
    return {
      success: false,
      data: { result: "valid" },
      info: {
        title: "Request failed!",
        message:
          "We could not validate your email address at the moment! Please try again later.",
      },
      message: "Email validation failed. Please try again later!",
    };
  }
}
