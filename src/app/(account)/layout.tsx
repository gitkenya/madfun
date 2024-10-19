import Sidebar from "@/app/(account)/modules/shared/sidebar/sidebar";
import { createClient } from "@/utils/supabase/server";
import AccountProvider from "@/providers/account/account";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/login");
  }
  const { data: userAccount } = await supabase
    .from("users")
    .select("*")
    .eq("id", user.id)
    .single();
  return (
    <AccountProvider>
      <main className="h-screen w-screen overflow-y-auto bg-slate-50 dark:bg-gray-950/50 flex flex-row">
        <Sidebar userAccount={userAccount} />
        <div className="w-full overflow-y-auto">{children}</div>
      </main>
    </AccountProvider>
  );
}
