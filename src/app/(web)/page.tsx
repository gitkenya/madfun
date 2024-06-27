import Image from "next/image";
import Hero from "@/app/(web)/modules/components/hero/hero";
import Events from "@/app/(web)/modules/components/events/events";
import Packages from "@/app/(web)/modules/components/packages/packages";
import Destinations from "@/app/(web)/modules/components/destinations/destinations";

export default function Home() {
  const events = [1, 2, 3, 4];
  return (
    <>
      <Hero />
      <Events events={events} mode="section" />
      <Packages />
      <Destinations />
    </>
  );
}
