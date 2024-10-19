import { createClient } from "@/utils/supabase/server";
import Navbar from "@/app/(account)/modules/shared/navbar/navbar";
import Mockup from "./modules/mockup";

export default async function Page() {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return (
    <section className="w-full">
      <Navbar title="Create Event" user={user} />
      <div className="w-full h-full flex flex-col sm:flex-row gap-4 sm:gap-6">
        <div className="p-4 w-full sm:w-3/5 min-h-[calc(100vh-64px)]">
          Create Event Form
        </div>
        <div className="w-full hidden sm:flex flex-col items-center justify-center sm:w-2/5 sm:border-l sm:border-slate-200 dark:border-slate-800">
          <Mockup />
        </div>
      </div>
    </section>
  );
}
