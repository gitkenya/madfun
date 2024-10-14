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
          className={`px-4 sm:px-6 py-2 sm:py-3 data-[selected]:bg-white/80 data-[selected]:text-slate-800 text-white data-[selected]:font-medium font-medium data-[selected]:rounded-t-lg data-[selected]:focus:outline-none data-[selected]:outline-none data-[selected]:hover:outline-none outline-none focus:outline-none hover:outline-none`}
        >
          Events
        </Tab>
        <Tab
          className={`px-4 sm:px-6 py-2 sm:py-3 data-[selected]:bg-white/80 data-[selected]:text-slate-800 text-white data-[selected]:font-medium font-medium data-[selected]:rounded-t-lg data-[selected]:focus:outline-none data-[selected]:outline-none data-[selected]:hover:outline-none outline-none focus:outline-none hover:outline-none`}
        >
          Flights
        </Tab>
        <Tab
          className={`px-4 sm:px-6 py-2 sm:py-3 data-[selected]:bg-white/80 data-[selected]:text-slate-800 text-white data-[selected]:font-medium font-medium data-[selected]:rounded-t-lg data-[selected]:focus:outline-none data-[selected]:outline-none data-[selected]:hover:outline-none outline-none focus:outline-none hover:outline-none`}
        >
          Hotels
        </Tab>
        <Tab
          className={`px-4 sm:px-6 py-2 sm:py-3 data-[selected]:bg-white/80 data-[selected]:text-slate-800 text-white data-[selected]:font-medium font-medium data-[selected]:rounded-t-lg data-[selected]:focus:outline-none data-[selected]:outline-none data-[selected]:hover:outline-none outline-none focus:outline-none hover:outline-none`}
        >
          Travel Experiences
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel
          className={`bg-white rounded-lg max-w-[50rem] ${
            selectedIndex === 0 ? "rounded-tl-none" : ""
          }`}
        >
          <div className="grid grid-cols-3 py-3">
            <div>
              <input
                type="text"
                placeholder="Search event"
                className="appearance-none block w-full outline-none border-r border-slate-200 text-slate-800 bg-white py-3 px-5 focus:outline-none"
              />
            </div>
            <div className="flex flex-row items-center">
              <Select
                defaultValue={selectedLocation}
                onChange={handleLocationChange}
                options={locations}
                placeholder="Location"
                unstyled
                classNames={{
                  control: () =>
                    "appearance-none block w-full min-w-[200px] h-full outline-none text-base text-slate-800 bg-white rounded py-3 px-4 ps-6 focus:outline-none",
                  menu: () =>
                    "p-1 mt-3 border border-slate-200 text-slate-800 bg-white rounded-b-lg py-3 px-4 focus:outline-none",
                  option: () =>
                    "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
                  menuList: () => "cursor-pointer text-base",
                  placeholder: () => "text-base text-slate-600",
                }}
              />
            </div>
            <div className="flex flex-row items-center justify-end">
              <button className="transition-all duration-300 sm:min-w-[120px] mx-4 bg-slate-800 hover:bg-slate-950 text-white rounded-lg px-4 py-3 text-center">
                Search
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel
          className={`bg-white rounded-lg ${
            selectedIndex === 0 ? "rounded-tl-none" : ""
          }`}
        >
          <div className="grid grid-cols-6 py-3">
            <div className="flex flex-row items-center border-r border-slate-200">
              <Select
                defaultValue={selectedLocation}
                onChange={handleLocationChange}
                options={locations}
                placeholder="From"
                unstyled
                classNames={{
                  control: () =>
                    "appearance-none block w-full min-w-[170px] h-full outline-none text-base text-slate-800 bg-white rounded py-3 px-4 ps-6 focus:outline-none",
                  menu: () =>
                    "p-1 mt-3 border border-slate-200 text-slate-800 bg-white rounded-lg py-3 px-4 focus:outline-none",
                  option: () =>
                    "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
                  menuList: () => "cursor-pointer text-base",
                  placeholder: () => "text-base text-slate-600",
                }}
              />
            </div>
            <div className="flex flex-row items-center border-r border-slate-200">
              <Select
                defaultValue={selectedLocation}
                onChange={handleLocationChange}
                options={locations}
                placeholder="To"
                unstyled
                classNames={{
                  control: () =>
                    "appearance-none block w-full min-w-[170px] h-full outline-none text-base text-slate-800 bg-white rounded py-3 px-4 ps-6 focus:outline-none",
                  menu: () =>
                    "p-1 mt-3 border border-slate-200 text-slate-800 bg-white rounded-b-lg py-3 px-4 focus:outline-none",
                  option: () =>
                    "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
                  menuList: () => "cursor-pointer text-base",
                  placeholder: () => "text-base text-slate-600",
                }}
              />
            </div>
            <div className="flex flex-row items-center border-r border-slate-200">
              <Select
                defaultValue={selectedLocation}
                onChange={handleLocationChange}
                options={locations}
                placeholder="Departure"
                unstyled
                classNames={{
                  control: () =>
                    "appearance-none block w-full min-w-[170px] h-full outline-none text-base text-slate-800 bg-white rounded py-3 px-4 ps-6 focus:outline-none",
                  menu: () =>
                    "p-1 mt-3 border border-slate-200 text-slate-800 bg-white rounded-b-lg py-3 px-4 focus:outline-none",
                  option: () =>
                    "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
                  menuList: () => "cursor-pointer text-base",
                  placeholder: () => "text-base text-slate-600",
                }}
              />
            </div>

            <div className="flex flex-row items-center border-r border-slate-200">
              <Select
                defaultValue={selectedLocation}
                onChange={handleLocationChange}
                options={locations}
                placeholder="Return"
                unstyled
                classNames={{
                  control: () =>
                    "appearance-none block w-full min-w-[170px] h-full outline-none text-base text-slate-800 bg-white rounded py-3 px-4 ps-6 focus:outline-none",
                  menu: () =>
                    "p-1 mt-3 border border-slate-200 text-slate-800 bg-white rounded-b-lg py-3 px-4 focus:outline-none",
                  option: () =>
                    "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
                  menuList: () => "cursor-pointer text-base",
                  placeholder: () => "text-base text-slate-600",
                }}
              />
            </div>
            <div className="flex flex-row items-center border-r border-slate-200">
              <Select
                defaultValue={selectedLocation}
                onChange={handleLocationChange}
                options={locations}
                placeholder="Travellers & class"
                unstyled
                classNames={{
                  control: () =>
                    "appearance-none block w-full min-w-[200px] h-full outline-none text-base text-slate-800 bg-white rounded py-3 px-4 ps-6 focus:outline-none",
                  menu: () =>
                    "p-1 mt-3 border border-slate-200 text-slate-800 bg-white rounded-b-lg py-3 px-4 focus:outline-none",
                  option: () =>
                    "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
                  menuList: () => "cursor-pointer text-base",
                  placeholder: () => "text-base text-slate-600",
                }}
              />
            </div>
            <div className="flex flex-row items-center justify-end">
              <button className="transition-all duration-300 sm:min-w-[120px] mx-4 bg-slate-800 hover:bg-slate-950 text-white rounded-lg px-4 py-3 text-center">
                Search
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel
          className={`bg-white rounded-lg max-w-[50rem] ${
            selectedIndex === 0 ? "rounded-tl-none" : ""
          }`}
        >
          <div className="grid grid-cols-3 py-3">
            <div className="flex flex-row items-center border-r border-slate-200">
              <Select
                defaultValue={selectedLocation}
                onChange={handleLocationChange}
                options={locations}
                placeholder="Destination"
                unstyled
                classNames={{
                  control: () =>
                    "appearance-none flex w-full min-w-[170px] h-full outline-none text-base text-slate-800 bg-white rounded py-3 px-4 ps-6 focus:outline-none",
                  menu: () =>
                    "p-1 mt-3 border border-slate-200 text-slate-800 bg-white rounded-lg py-3 px-4 focus:outline-none",
                  option: () =>
                    "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
                  menuList: () => "cursor-pointer text-base",
                  placeholder: () => "text-base text-slate-600",
                }}
              />
            </div>
            <div className="flex flex-row items-center">
              <Select
                defaultValue={selectedLocation}
                onChange={handleLocationChange}
                options={locations}
                placeholder="Date"
                unstyled
                classNames={{
                  control: () =>
                    "appearance-none block w-full min-w-[170px] h-full outline-none text-base text-slate-800 bg-white rounded py-3 px-4 ps-6 focus:outline-none",
                  menu: () =>
                    "p-1 mt-3 border border-slate-200 text-slate-800 bg-white rounded-b-lg py-3 px-4 focus:outline-none",
                  option: () =>
                    "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
                  menuList: () => "cursor-pointer text-base",
                  placeholder: () => "text-base text-slate-600",
                }}
              />
            </div>
            <div className="flex flex-row items-center justify-end">
              <button className="transition-all duration-300 sm:min-w-[120px] mx-4 bg-slate-800 hover:bg-slate-950 text-white rounded-lg px-4 py-3 text-center">
                Search
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel
          className={`bg-white rounded-lg max-w-[50rem] ${
            selectedIndex === 0 ? "rounded-tl-none" : ""
          }`}
        >
          <div className="grid grid-cols-3 py-3">
            <div className="flex flex-row items-center border-r border-slate-200">
              <Select
                defaultValue={selectedLocation}
                onChange={handleLocationChange}
                options={locations}
                placeholder="Destination"
                unstyled
                classNames={{
                  control: () =>
                    "appearance-none flex w-full min-w-[170px] h-full outline-none text-base text-slate-800 bg-white rounded py-3 px-4 ps-6 focus:outline-none",
                  menu: () =>
                    "p-1 mt-3 border border-slate-200 text-slate-800 bg-white rounded-lg py-3 px-4 focus:outline-none",
                  option: () =>
                    "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
                  menuList: () => "cursor-pointer text-base",
                  placeholder: () => "text-base text-slate-600",
                }}
              />
            </div>
            <div className="flex flex-row items-center">
              <Select
                defaultValue={selectedLocation}
                onChange={handleLocationChange}
                options={locations}
                placeholder="Number of Travellers"
                unstyled
                classNames={{
                  control: () =>
                    "appearance-none block w-full min-w-[170px] h-full outline-none text-base text-slate-800 bg-white rounded py-3 px-4 ps-6 focus:outline-none",
                  menu: () =>
                    "p-1 mt-3 border border-slate-200 text-slate-800 bg-white rounded-b-lg py-3 px-4 focus:outline-none",
                  option: () =>
                    "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
                  menuList: () => "cursor-pointer text-base",
                  placeholder: () => "text-base text-slate-600",
                }}
              />
            </div>
            <div className="flex flex-row items-center justify-end">
              <button className="transition-all duration-300 sm:min-w-[120px] mx-4 bg-slate-800 hover:bg-slate-950 text-white rounded-lg px-4 py-3 text-center">
                Search
              </button>
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
