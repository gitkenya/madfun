"use client";
import { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Select from "react-select";
export default function SearchBar() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState(1);
  const locations: any[] = [
    { value: 1, label: "Nairobi" },
    { value: 2, label: "Mombasa" },
    { value: 3, label: "Kisumu" },
  ];

  const handleLocationChange = (event: any) => {
    setSelectedLocation(event.value);
  };
  return (
    <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <TabList>
        <Tab
          className={`px-4 sm:px-6 py-2 sm:py-3 data-[selected]:bg-white data-[selected]:text-slate-800 text-white data-[selected]:font-medium font-medium data-[selected]:rounded-t-lg data-[selected]:focus:outline-none data-[selected]:outline-none data-[selected]:hover:outline-none outline-none focus:outline-none hover:outline-none`}
        >
          Events
        </Tab>
        <Tab
          className={`px-4 sm:px-6 py-2 sm:py-3 data-[selected]:bg-white data-[selected]:text-slate-800 text-white data-[selected]:font-medium font-medium data-[selected]:rounded-t-lg data-[selected]:focus:outline-none data-[selected]:outline-none data-[selected]:hover:outline-none outline-none focus:outline-none hover:outline-none`}
        >
          Flights
        </Tab>
        <Tab
          className={`px-4 sm:px-6 py-2 sm:py-3 data-[selected]:bg-white data-[selected]:text-slate-800 text-white data-[selected]:font-medium font-medium data-[selected]:rounded-t-lg data-[selected]:focus:outline-none data-[selected]:outline-none data-[selected]:hover:outline-none outline-none focus:outline-none hover:outline-none`}
        >
          Hotels
        </Tab>
        <Tab
          className={`px-4 sm:px-6 py-2 sm:py-3 data-[selected]:bg-white data-[selected]:text-slate-800 text-white data-[selected]:font-medium font-medium data-[selected]:rounded-t-lg data-[selected]:focus:outline-none data-[selected]:outline-none data-[selected]:hover:outline-none outline-none focus:outline-none hover:outline-none`}
        >
          Travel Experiences
        </Tab>
      </TabList>
      <TabPanels
        className={`bg-white rounded-lg ${
          selectedIndex === 0 ? "rounded-tl-none" : ""
        }`}
      >
        <TabPanel>
          <div className="flex flex-row justify-between">
            <input
              type="text"
              placeholder="Search event"
              className="appearance-none block w-full my-2 outline-none border-r border-slate-200 text-sm text-slate-800 bg-white py-3 px-4 focus:outline-none"
            />
            <Select
              defaultValue={selectedLocation}
              onChange={handleLocationChange}
              options={locations}
              placeholder="Location..."
              unstyled
              classNames={{
                control: () =>
                  "appearance-none block w-full h-full min-w-[200px] outline-none text-sm text-slate-800 bg-white rounded py-3 px-4 ps-6 focus:outline-none",
                menu: () =>
                  "p-1 mt-0 border border-slate-200 text-slate-800 bg-slate-100 rounded-b-lg py-3 px-4 focus:outline-none",
                option: () =>
                  "cursor-pointer p-2 hover:bg-slate-200 rounded-sm",
                menuList: () => "cursor-pointer text-xs",
              }}
            />
            <button className="sm:min-w-[120px] bg-slate-800 text-white rounded-e-lg px-4 py-2 text-center">
              Search
            </button>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-row justify-between">
            <Select
              defaultValue={selectedLocation}
              onChange={handleLocationChange}
              options={locations}
              placeholder="From"
              unstyled
              classNames={{
                control: () =>
                  "appearance-none block w-full h-full min-w-[160px] outline-none text-sm text-slate-800 bg-white rounded py-3 px-4 focus:outline-none",
                menu: () =>
                  "p-1 mt-1 border border-slate-200 text-slate-800 bg-slate-100 rounded-lg py-3 px-4 focus:outline-none",
                option: () =>
                  "cursor-pointer p-2 hover:bg-slate-200 rounded-sm",
                menuList: () => "cursor-pointer text-xs",
              }}
            />
            <Select
              defaultValue={selectedLocation}
              onChange={handleLocationChange}
              options={locations}
              placeholder="To"
              unstyled
              classNames={{
                control: () =>
                  "appearance-none block w-full h-full min-w-[160px] outline-none text-sm text-slate-800 bg-white rounded py-3 px-4 focus:outline-none",
                menu: () =>
                  "p-1 mt-1 border border-slate-200 text-slate-800 bg-slate-100 rounded-lg py-3 px-4 focus:outline-none",
                option: () =>
                  "cursor-pointer p-2 hover:bg-slate-200 rounded-sm",
                menuList: () => "cursor-pointer text-xs",
              }}
            />
            <select className="appearance-none block my-2 w-full outline-none border-r border-slate-200 text-sm text-slate-800 bg-white py-3 px-4 focus:outline-none">
              <option>Departure</option>
            </select>
            <select className="appearance-none block my-2 w-full outline-none border-r border-slate-200 text-sm text-slate-800 bg-white py-3 px-4 focus:outline-none">
              <option>Return</option>
            </select>
            <select className="appearance-none block my-2 w-full outline-none text-sm text-slate-800 bg-white py-3 px-4 focus:outline-none">
              <option>Travellers & class</option>
            </select>
            <button className="sm:min-w-[120px] bg-slate-800 text-white rounded-e-lg px-4 py-2 text-center">
              Search
            </button>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-row justify-between">
            <select className="appearance-none block my-2 w-full outline-none border-r border-slate-200 text-sm text-slate-800 bg-white py-3 px-4 focus:outline-none">
              <option>Destination</option>
            </select>
            <select className="appearance-none block my-2 w-full outline-none text-sm text-slate-800 bg-white py-3 px-4 focus:outline-none">
              <option>Date</option>
            </select>
            <button className="sm:min-w-[120px] bg-slate-800 text-white rounded-e-lg px-4 py-2 text-center">
              Search
            </button>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-row justify-between">
            <select className="appearance-none block my-2 w-full outline-none border-r border-slate-200 text-sm text-slate-800 bg-white py-3 px-4 focus:outline-none">
              <option>Destination</option>
            </select>
            <select className="appearance-none block my-2 w-full outline-none text-sm text-slate-800 bg-white py-3 px-4 focus:outline-none">
              <option>Number of travellers</option>
            </select>
            <button className="sm:min-w-[120px] bg-slate-800 text-white rounded-e-lg px-4 py-2 text-center">
              Search
            </button>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
