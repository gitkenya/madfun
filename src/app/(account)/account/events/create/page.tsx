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
      <Navbar title="Create Event" user={user} />
      <div className="w-full h-full flex flex-col sm:flex-row gap-4 sm:gap-6">
        <div className="p-4 w-full sm:w-3/5 min-h-[calc(100vh-64px)]">
          Create Event Form
        </div>
        <div className="w-full hidden sm:flex flex-col items-center justify-center sm:w-2/5 sm:border-l sm:border-slate-300 dark:border-slate-800">
          <div className="mockup-phone bg-slate-300 dark:bg-slate-700 border-slate-400 dark:border-slate-600">
            <div className="camera bg-slate-300 dark:bg-slate-700"></div>
            <div className="display bg-slate-100 dark:bg-slate-500">
              <div className="artboard artboard-demo phone-1 bg-slate-100 dark:bg-slate-800">
                Event Preview Mockup
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
