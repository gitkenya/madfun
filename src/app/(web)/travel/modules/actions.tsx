"use server";
import { createClient } from "@/utils/supabase/server";

export async function submitRequest(formData: FormData): Promise<any> {
  const lowerCase = async (field: string) => {
    const res = field.toLowerCase();
    return res;
  };

  const name = (await formData.get("book_name")) as string;
  const email = await lowerCase(formData.get("book_email") as string);
  const phone = await lowerCase(formData.get("book_phone") as string);
  const date = await lowerCase(formData.get("book_date") as string);
  const travellers = await lowerCase(formData.get("book_travellers") as string);

  const supabase = await createClient();

  const reqData = {
    name,
    email,
    phone,
    date,
    travellers,
  };
  console.log(reqData);
  return {
    success: true,
    info: {
      title: "Request Successfull",
      message: `Thank you ${
        name.split(" ")[0]
      }. Your request has been processed and we will be in touch shortly.`,
    },
  };
}
