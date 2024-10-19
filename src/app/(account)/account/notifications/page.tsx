import { createClient } from "@/utils/supabase/server";
import Navbar from "@/app/(account)/modules/shared/navbar/navbar";

export default async function Page() {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  return (
    <section className="w-full">
      <Navbar title="Notifications" user={user} />
      <div className="p-4 w-full flex flex-col gap-4 sm:gap-6"></div>
    </section>
  );
}
