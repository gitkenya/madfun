import Image from "next/image";
export default function Hero() {
  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[90rem] px-2 md:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="grid">
            <div className="rounded-xl bg-pink-100 flex flex-col sm:flex-row-reverse min-h-[18rem]">
              <div className="w-full h-full sm:w-1/2 relative">
                <Image
                  className="object-cover rounded-t-xl sm:rounded-e-xl sm:rounded-t-none"
                  src="/assets/img/hero/travel.jpg"
                  fill
                  alt="Madfun"
                />
              </div>
              <div className="w-full h-full sm:w-1/2 p-4">
                Content Placeholder
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="rounded-xl flex flex-col sm:flex-row min-h-[18rem] gap-6">
              <div className="w-full h-full sm:w-1/2 bg-slate-100 rounded-xl p-4">
                Content Placeholder
              </div>
              <div className="w-full h-full sm:w-1/2 relative">
                <div className="h-full flex flex-col justify-between gap-6">
                  <div className="w-full h-1/2 bg-pink-100 rounded-xl flex flex-row">
                    <div className="w-full h-full sm:w-1/2 relative">
                      <Image
                        className="object-cover rounded-s-xl"
                        src="/assets/img/hero/travel.jpg"
                        fill
                        alt="Madfun"
                      />
                    </div>
                    <div className="w-full h-full sm:w-1/2 p-4">
                      Content Placeholder
                    </div>
                  </div>
                  <div className="w-full h-1/2 bg-slate-100 rounded-xl flex flex-row">
                    <div className="w-full h-full sm:w-1/2 relative">
                      <Image
                        className="object-cover rounded-s-xl"
                        src="/assets/img/hero/travel.jpg"
                        fill
                        alt="Madfun"
                      />
                    </div>
                    <div className="w-full h-full sm:w-1/2 p-4">
                      Content Placeholder
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
