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

  const { data: flight_types } = await supabase
    .from("flight_types")
    .select("*")
    .order("id", { ascending: true });
  const { data: locations } = await supabase
    .from("locations")
    .select("*, countries(*)")
    .order("id", { ascending: true });
  const { data: flight_stops } = await supabase
    .from("flight_stops")
    .select("*")
    .order("id", { ascending: true });
  const { data: flight_classes } = await supabase
    .from("flight_classes")
    .select("*")
    .order("id", { ascending: true });
  return (
    <>
      <Slider
        flight_types={flight_types}
        location_types={locations}
        flight_stops={flight_stops}
        flight_classes={flight_classes}
      />
      <Events />
      <Destinations destinations={destinations} />
      <Hotels />
      <Streams />
      <Insider />
    </>
  );
}
