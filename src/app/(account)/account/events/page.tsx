import { createClient } from "@/utils/supabase/server";
import Navbar from "@/app/(account)/modules/shared/navbar/navbar";
import Link from "next/link";
import { IoAddOutline } from "react-icons/io5";

export default async function Page() {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  const button = {
    link: "/account/events/create",
    icon: <IoAddOutline size={20} />,
    title: "Create Event",
  };
  return (
    <section className="w-full">
      <Navbar title="Events" user={user} button={button} />
      <div className="p-4 w-full flex flex-col gap-4 sm:gap-6"></div>
    </section>
  );
}
