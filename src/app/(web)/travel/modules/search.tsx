"use client";
import { useId, useState } from "react";
import { IoEllipse, IoChevronDownOutline } from "react-icons/io5";
import Select, { components } from "react-select";

export default function SearchForm(props: any) {
  const { destinations } = props;
  const [selectedLocation, setSelectedLocation] = useState(1);
  const locations: any[] = destinations.map((destination: any) => ({
    value: destination.id,
    label: destination.name,
  }));
  const handleLocationChange = (event: any) => {
    setSelectedLocation(event.value);
  };

  const CustomDropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <IoChevronDownOutline />
      </components.DropdownIndicator>
    );
  };

  return (
    <div className="w-full hidden sm:flex flex-col gap-6">
      <h1 className="flex flex-row items-end gap-3 font-poppins text-lg sm:text-4xl font-bold text-white tracking-wider">
        Travel Experiences
        <IoEllipse size={14} className="text-primary-500 mb-[0.4rem]" />
      </h1>
      <div className="grid grid-cols-3 rounded-lg bg-white">
        <div className="flex flex-row items-center border-r border-slate-200">
          <Select
            defaultValue={selectedLocation}
            onChange={handleLocationChange}
            options={locations}
            placeholder="Destination"
            unstyled
            instanceId={useId()}
            components={{ DropdownIndicator: CustomDropdownIndicator }}
            className="w-full m-4"
            classNames={{
              control: () =>
                "appearance-none flex items-center w-full h-full outline-none text-base text-slate-800 bg-white rounded py-2 px-4 focus:outline-none",
              menu: () =>
                "p-1 mt-2 border w-full left-0 border-slate-200 text-slate-800 bg-white rounded-lg py-3 px-4 pe-0 focus:outline-none",
              option: () => "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
              menuList: () => "cursor-pointer text-base",
              placeholder: () => "text-base text-slate-600",
              dropdownIndicator: () => "pt-1",
            }}
          />
        </div>
        <div className="flex flex-row items-center sm:px-5">
          <input
            type="number"
            placeholder="Number of travellers"
            className="appearance-none items-center w-full outline-none text-base text-slate-800 bg-white rounded py-3 px-4 focus:outline-none"
          />
        </div>
        <div className="flex flex-row items-center justify-end">
          <button className="transition-all duration-300 m-4 sm:min-w-[120px] bg-slate-800 hover:bg-slate-950 text-white rounded-lg px-4 py-3 text-center">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
