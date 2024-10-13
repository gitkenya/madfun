import Events from "@/app/(web)/modules/components/events/events";
import Packages from "@/app/(web)/modules/components/packages/packages";
import Destinations from "@/app/(web)/modules/components/destinations/destinations";
import Slider from "@/app/(web)/modules/components/slider/slider";
import Insider from "@/app/(web)/modules/components/insider/insider";
import Hotels from "@/app/(web)/modules/components/hotels/hotels";
import Streams from "@/app/(web)/modules/components/streams/streams";

export default function Home() {
  const events = [1, 2, 3, 4];
  return (
    <>
      <Slider />
      <Events events={events} mode="section" />
      <Destinations />
      <Hotels />
      <Streams />
      <Insider />
    </>
  );
}
