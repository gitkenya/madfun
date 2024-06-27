import Image from "next/image";
export default function Hero() {
  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[90rem] px-2 md:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="grid">
            <div className="rounded-lg bg-violet-100 flex flex-row min-h-[18rem]">
              <div className="w-full h-full sm:w-1/2">Content</div>
              <div className="w-full h-full sm:w-1/2 relative">
                <Image
                  className="object-cover rounded-e-lg"
                  src="/assets/img/hero/hero1.svg"
                  fill
                  alt="Madfun"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
