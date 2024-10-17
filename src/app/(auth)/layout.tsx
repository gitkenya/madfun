import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (!error && data?.user) {
    redirect("/");
  }

  return <section className="bg-white w-full h-screen">{children}</section>;
}
