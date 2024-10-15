import Events from "@/app/(web)/modules/components/events/events";
import Destinations from "@/app/(web)/modules/components/destinations/destinations";
import Slider from "@/app/(web)/modules/components/slider/slider";
import Insider from "@/app/(web)/modules/components/insider/insider";
import Hotels from "@/app/(web)/modules/components/hotels/hotels";
import Streams from "@/app/(web)/modules/components/streams/streams";
export const revalidate = 604800;
export default function Home() {
  return (
    <>
      <Slider />
      <Events />
      <Destinations />
      <Hotels />
      <Streams />
      <Insider />
    </>
  );
}
