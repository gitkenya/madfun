import { createClient } from "@/utils/supabase/server";
import Navbar from "@/app/(account)/modules/shared/navbar/navbar";
import CreateEventForm from "./modules/form";

export default async function Page() {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return (
    <section className="w-full">
      <Navbar title="Create Event" user={user} />
      <CreateEventForm />
    </section>
  );
}
