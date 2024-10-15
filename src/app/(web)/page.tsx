import Events from "@/app/(web)/modules/components/events/events";
import Destinations from "@/app/(web)/modules/components/destinations/destinations";
import Slider from "@/app/(web)/modules/components/slider/slider";
import Insider from "@/app/(web)/modules/components/insider/insider";
import Hotels from "@/app/(web)/modules/components/hotels/hotels";
import Streams from "@/app/(web)/modules/components/streams/streams";
import { createClient } from "@/utils/supabase/server";
export const revalidate = 604800;
export default async function Home() {
  const supabase = await createClient();
  const { data: destinations } = await supabase
    .from("destinations")
    .select("*")
    .order("id", { ascending: true });
  return (
    <>
      <Slider />
      <Events />
      <Destinations destinations={destinations} />
      <Hotels />
      <Streams />
      <Insider />
    </>
  );
}
