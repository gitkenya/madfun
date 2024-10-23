export default function Itinerary(props: any) {
  const { itinerary } = props;
  return (
    <div>
      <h3 className="text-lg sm:text-2xl text-slate-800 font-semibold font-poppins mb-4">
        Itinerary
      </h3>
      <div className="mb-6 text-slate-600">
        <div className="join join-vertical w-full">
          {itinerary?.map((itn: any, index: number) => (
            <div
              key={itn.id}
              className="collapse collapse-arrow join-item border-slate-300 border"
            >
              <input
                type="radio"
                name="my-accordion-4"
                defaultChecked={index === 0}
              />
              <div className="collapse-title text-lg font-medium font-poppins flex flex-row gap-2">
                <span className="font-semibold">{itn.day}:</span>
                <span>{itn.title}</span>
              </div>
              <div className="collapse-content">
                <p className="border-l-2 border-primary-500 ps-2 sm:ps-5">
                  {itn.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
