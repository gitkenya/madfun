import Image from "next/image";
import Hero from "@/app/(web)/modules/components/hero/hero";
import Events from "@/app/(web)/modules/components/events/events";

export default function Home() {
  return (
    <>
      <Hero />
      <Events />
      Home
    </>
  );
}
