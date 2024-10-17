"use server";
import { createClient } from "@/utils/supabase/server";

export default async function SignOut() {
  const supabase = createClient();
  return await supabase.auth.signOut();
}
