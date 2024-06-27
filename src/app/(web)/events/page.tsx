import Events from "@/app/(web)/modules/components/events/events";
export default function Page() {
  const events = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <Events events={events} mode="page" />
    </>
  );
}
