import { IoEllipse } from "react-icons/io5";

export default function Flights() {
  return (
    <div className="w-full max-w-[56rem] flex flex-col gap-4">
      <h1 className="flex flex-row items-end gap-3 font-poppins text-lg sm:text-4xl uppercase font-bold text-white tracking-wider">
        Flights
        <IoEllipse size={14} className="text-yellow-400 mb-[0.4rem]" />
      </h1>
      <div className="w-full p-4 rounded-lg bg-white grid grid-cols-5">
        <div className="col-span-4 flex flex-col gap-4">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-5">
              <div className="flex flex-row gap-2 items-center">
                <input
                  id="one-way"
                  type="radio"
                  name="flight-type"
                  className="radio"
                />
                <label htmlFor="one-way" className="cursor-pointer">
                  One Way
                </label>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <input
                  id="round-trip"
                  type="radio"
                  name="flight-type"
                  className="radio"
                />
                <label htmlFor="round-trip" className="cursor-pointer">
                  Round Trip
                </label>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <input
                  id="multi-city"
                  type="radio"
                  name="flight-type"
                  className="radio"
                />
                <label htmlFor="multi-city" className="cursor-pointer">
                  Multi City
                </label>
              </div>
            </div>
            <div>
              <div className="flex flex-row gap-2 items-center">
                <input
                  id="non-stop"
                  type="checkbox"
                  name="non-stop"
                  className="checkbox"
                />
                <label htmlFor="non-stop" className="cursor-pointer">
                  Non Stop Only
                </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="w-full p-2 py-5 rounded-lg border border-slate-200"></div>
            <div className="w-full p-2 py-5 rounded-lg border border-slate-200"></div>
            <div className="w-full p-2 py-5 rounded-lg border border-slate-200"></div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
