"use client";
import { useRef, useState } from "react";
import BookButton from "./button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { submitRequest } from "./actions";
import { toast } from "sonner";
export default function BookingForm(props: any) {
  const { user, destination } = props;
  const ref = useRef<HTMLFormElement>(null);
  const [travelDate, setTravelDate] = useState<any>(null);
  return (
    <div className="w-full text-slate-800 sm:sticky sm:top-20">
      <div className="w-full px-4 py-3 bg-gray-200 flex flex-row items-center justify-center rounded-t-xl">
        <h3 className="text-lg sm:text-2xl font-semibold font-poppins">
          Book Now
        </h3>
      </div>
      <form
        ref={ref}
        className="p-4 flex flex-col gap-4 bg-slate-100 rounded-b-xl"
        action={async (formData) => {
          // Input Validation
          const res = await submitRequest(formData);
          console.log(res);
          if (!res.success) {
            toast.error(res.info.title, {
              description: res.info.message,
              position: "bottom-right",
              icon: " ",
              duration: 5000,
            });
          } else if (res.success) {
            //ref.current?.reset();
            toast.success(res.info.title, {
              description: res.info.message,
              position: "bottom-right",
              icon: " ",
              duration: 5000,
            });
          }
        }}
      >
        <div className="grid grid-cols-1 gap-4">
          <div className="grid">
            <label
              className="block tracking-wide bg-white rounded-t-lg px-4 py-2 pb-0 text-slate-500 text-sm font-medium"
              htmlFor="book_name"
            >
              Full Name
            </label>
            <input
              type="text"
              className="appearance-none block w-full outline-none text-sm font-medium text-slate-800 bg-white rounded-b-lg py-2.5 px-4 focus:outline-none"
              id="book_name"
              name="book_name"
              placeholder="---"
              required
              defaultValue={user ? user.user_metadata.name : null}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="grid">
            <label
              className="block tracking-wide bg-white rounded-t-lg px-4 py-2 pb-0 text-slate-500 text-sm font-medium"
              htmlFor="book_email"
            >
              Email
            </label>
            <input
              type="email"
              className="appearance-none block w-full outline-none text-sm font-medium text-slate-800 bg-white rounded-b-lg py-2.5 px-4 focus:outline-none"
              id="book_email"
              name="book_email"
              placeholder="---"
              required
              defaultValue={user ? user.email : null}
            />
          </div>
          <div className="grid">
            <label
              className="block tracking-wide bg-white rounded-t-lg px-4 py-2 pb-0 text-slate-500 text-sm font-medium"
              htmlFor="book_phone"
            >
              Phone Number
            </label>
            <input
              type="tel"
              className="appearance-none block w-full outline-none text-sm font-medium text-slate-800 bg-white rounded-b-lg py-2.5 px-4 focus:outline-none"
              id="book_phone"
              name="book_phone"
              placeholder="---"
              required
              defaultValue={user ? user.user_metadata.phone : null}
            />
          </div>
          <div className="grid">
            <label
              className="block tracking-wide bg-white rounded-t-lg px-4 py-2 pb-0 text-slate-500 text-sm font-medium"
              htmlFor="book_date"
            >
              Travel Date
            </label>
            <DatePicker
              id="book_date"
              selected={travelDate}
              name="book_date"
              placeholderText="---"
              dateFormat={`dd-MM-YYYY`}
              minDate={new Date(new Date().setDate(new Date().getDate() + 1))}
              required
              onChange={(date) => {
                setTravelDate(date);
              }}
              className="appearance-none block w-full outline-none text-sm font-medium text-slate-800 bg-white rounded-b-lg py-2.5 px-4 focus:outline-none"
            />
          </div>
          <div className="grid">
            <label
              className="block tracking-wide bg-white rounded-t-lg px-4 py-2 pb-0 text-slate-500 text-sm font-medium"
              htmlFor="book_travellers"
            >
              Travellers
            </label>
            <input
              type="number"
              className="appearance-none block w-full outline-none text-sm font-medium text-slate-800 bg-white rounded-b-lg py-2.5 px-4 focus:outline-none"
              id="book_travellers"
              name="book_travellers"
              placeholder="---"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:mt-4">
          {destination?.from ? (
            <div className="flex flex-col">
              <div>From</div>
              <div className="flex flex-row items-center gap-2">
                <span className="line-through text-slate-500">
                  {destination.currency}.{" "}
                  {(parseFloat(destination.from) * 1.2).toLocaleString()}
                </span>
                <span className="font-bold text-lg">
                  {destination.currency}.{" "}
                  {parseFloat(destination.from).toLocaleString()}
                </span>
              </div>
            </div>
          ) : (
            <div></div>
          )}
          <div>
            <BookButton />
          </div>
        </div>
      </form>
    </div>
  );
}
