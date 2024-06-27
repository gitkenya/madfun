import Image from "next/image";
export default async function Page({ params }: { params: { slug: string } }) {
  return (
    <section className="w-full bg-slate-100 py-12">
      <div className="mx-auto max-w-[90rem] px-2 md:px-4 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="grid bg-slate-50 rounded-lg md:rounded-xl">
            <div className="p-4 md:p-12 flex flex-col gap-6">
              <Image
                src="/assets/img/events/featured.svg"
                width={800}
                height={800}
                alt="Featured Event"
              />
              <div className="flex flex-col gap-4">
                <h1 className="text-xl font-bold">Event Description</h1>
                <p>
                  When Mum's in the hospital and Dad says she's 'done something
                  stupid', there's not much a seven year old can do.
                </p>
                <ol>
                  <li>1. Ice cream</li>
                  <li>2. Water fights</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
