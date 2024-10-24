import React, { useEffect, useId, useState } from "react";
import { IoCameraOutline, IoChevronDownOutline } from "react-icons/io5";
import Select, { components } from "react-select";
import CroppieModal from "./cropper";

export default function Step1({ formData, handleChange }: any) {
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [eventCategories, setEventCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoadingCategories(true);
      try {
        const reqData = await fetch(
          `https://api.v1.interactive.madfun.com/v1/api/event/view/category`,
          {
            method: "POST",
            headers: {
              accept: "application/json",
              "content-type": "application/json",
            },
            body: JSON.stringify({
              api_key: "4ba0e1aae090cdefc1887d2689b25e3f",
              source: "MOBILE",
              limit: 10,
            }),
          }
        );
        if (reqData.ok) {
          const resData = await reqData.json();
          console.log(resData);
          if (resData.code === "Success") {
            const {
              data: { data },
            } = resData;
            //console.log(data);
            const categories: any[] = data.map((cat: any) => ({
              value: cat.id,
              label: cat.desciption,
              name: "event_category",
            }));
            setEventCategories(categories); // Set the fetched events
          }
        } else {
          console.error("Failed to fetch events");
        }
        setLoadingCategories(false);
      } catch (error) {
        console.error("An error occurred while fetching events:", error);
        setLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  const CustomDropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <IoChevronDownOutline />
      </components.DropdownIndicator>
    );
  };
  return (
    <div className="text-slate-600 dark:text-slate-300 sm:p-6">
      <h2 className="flex flex-row items-center gap-5 font-semibold text-slate-800 dark:text-slate-300 text-lg sm:text-2xl mb-5">
        <span className="text-sm w-8 h-8 rounded-full flex flex-row items-center justify-center font-medium border border-green-500 text-green-500">
          1
        </span>
        Basic Info
      </h2>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-600 dark:text-slate-300">
              Event poster
            </h3>
            <p className="">
              Upload an image that represents your event (Aspect ratio 1:1)
            </p>
          </div>
          <CroppieModal handleChange={handleChange} />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-600 dark:text-slate-300">
              Event title
            </h3>
            <p className="">
              Craft a clear, concise title that instantly tells people what your
              event is about
            </p>
          </div>
          <input
            type="text"
            name="event_title"
            className="appearance-none block w-full outline-none text-sm border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 rounded-lg py-3 px-4 focus:outline-none"
            placeholder="Event title"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-600 dark:text-slate-300">
              Event description
            </h3>
            <p className="">Outline what your event is about</p>
          </div>
          <textarea
            name="event_description"
            className="appearance-none block w-full min-h-[100px] outline-none text-sm border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 rounded-lg py-3 px-4 focus:outline-none"
            placeholder="Event description"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-600 dark:text-slate-300">
              Special guests
            </h3>
            <p className="">Add notable guests for your event</p>
          </div>
          <textarea
            name="event_guests"
            className="appearance-none block w-full min-h-[100px] outline-none text-sm border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 rounded-lg py-3 px-4 focus:outline-none"
            placeholder="List your guests"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-600 dark:text-slate-300">
              Event category
            </h3>
            <p className="">
              Classify your event to make attendees find it more easily
            </p>
          </div>
          <Select
            defaultValue={null}
            options={eventCategories}
            onChange={handleChange}
            placeholder="Select category"
            unstyled
            instanceId={useId()}
            components={{ DropdownIndicator: CustomDropdownIndicator }}
            className="w-full"
            name="event_category"
            classNames={{
              control: () =>
                "appearance-none flex items-center w-full h-full outline-none bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg py-3 px-4 focus:outline-none",
              menu: () =>
                "p-1 mt-1 border min-w-[200px] left-0 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 rounded-lg py-3 px-4 focus:outline-none",
              option: () =>
                "cursor-pointer p-2 hover:bg-slate-100 dark:hover:bg-slate-600 rounded-sm",
              menuList: () => "cursor-pointer text-base",
              placeholder: () => "text-base text-slate-600 dark:text-slate-500",
              dropdownIndicator: () => "pt-1",
            }}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-600 dark:text-slate-300">
              Age limit
            </h3>
            <p className="">
              Define the age limit for this event to ensure the right audience
              attends
            </p>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="flex flex-row gap-2">
              <input
                id="all_ages"
                type="radio"
                name="event_age"
                className="radio radio-success outline-none shadow-slate-100"
                defaultChecked
              />
              <label htmlFor="all_ages">All Ages</label>
            </div>
            <div className="flex flex-row gap-2">
              <input
                id="only_adults"
                type="radio"
                name="event_age"
                className="radio radio-success outline-none shadow-slate-100"
              />
              <label htmlFor="only_adults">Only adults (over 18)</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-600 dark:text-slate-300">
              Event visibility
            </h3>
            <p className="">
              Public event is open to everyone, while private event is exclusive
              to invited guests only
            </p>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="flex flex-row gap-2">
              <input
                id="public"
                type="radio"
                name="event_visibility"
                className="radio radio-success outline-none shadow-slate-100"
                defaultChecked
              />
              <label htmlFor="public">Public</label>
            </div>
            <div className="flex flex-row gap-2">
              <input
                id="private"
                type="radio"
                name="event_visibility"
                className="radio radio-success outline-none shadow-slate-100"
              />
              <label htmlFor="private">Private</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-600 dark:text-slate-300">
              Set event type
            </h3>
            <p className="">
              A single show has one date and time, while a multiple show has
              multiple dates, times, or locations
            </p>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="flex flex-row gap-2">
              <input
                id="single"
                type="radio"
                name="event_type"
                className="radio radio-success outline-none shadow-slate-100"
                defaultChecked
              />
              <label htmlFor="single">Single</label>
            </div>
            <div className="flex flex-row gap-2">
              <input
                id="multiple"
                type="radio"
                name="event_type"
                className="radio radio-success outline-none shadow-slate-100"
              />
              <label htmlFor="multiple">Multiple shows</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
