import { IoEllipse } from "react-icons/io5";

export default function Flights() {
  return (
    <div className="w-full max-w-[56rem] flex flex-col gap-4">
      <h1 className="flex flex-row items-end gap-3 font-poppins text-lg sm:text-4xl uppercase font-bold text-white tracking-wider">
        Flights
        <IoEllipse size={14} className="text-yellow-400 mb-[0.4rem]" />
      </h1>
      <div className="w-full p-4 rounded-lg bg-white"></div>
    </div>
  );
}
