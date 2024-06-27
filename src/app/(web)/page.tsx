import Image from "next/image";
import Hero from "@/app/(web)/modules/components/hero/hero";
import Events from "@/app/(web)/modules/components/events/events";
import Packages from "@/app/(web)/modules/components/packages/packages";
import Destinations from "@/app/(web)/modules/components/destinations/destinations";

export default function Home() {
  return (
    <>
      <Hero />
      <Events />
      <Packages />
      <Destinations />
    </>
  );
}
