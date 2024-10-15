"use client";
import { useId, useState } from "react";
import { IoEllipse, IoChevronDownOutline } from "react-icons/io5";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Select, { components } from "react-select";
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

  const CustomDropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <IoChevronDownOutline />
      </components.DropdownIndicator>
    );
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
      <TabPanels className={`min-h-[124px]`}>
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
                instanceId={useId()}
                components={{ DropdownIndicator: CustomDropdownIndicator }}
                className="w-full"
                classNames={{
                  control: () =>
                    "appearance-none flex items-center w-full h-full outline-none text-base text-slate-800 bg-white rounded py-2 px-4 focus:outline-none",
                  menu: () =>
                    "p-1 mt-1 border min-w-[200px] left-0  border-slate-200 text-slate-800 bg-white rounded-lg py-3 px-4 focus:outline-none",
                  option: () =>
                    "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
                  menuList: () => "cursor-pointer text-base",
                  placeholder: () => "text-base text-slate-600",
                  dropdownIndicator: () => "pt-1",
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
          <div className="w-full p-4 rounded-lg bg-white grid grid-cols-5 gap-4">
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
                <div className="w-full flex flex-row justify-between items-center py-1 rounded-lg border border-slate-200">
                  <Select
                    defaultValue={selectedLocation}
                    onChange={handleLocationChange}
                    options={locations}
                    placeholder="From"
                    unstyled
                    components={{ DropdownIndicator: CustomDropdownIndicator }}
                    className="w-full"
                    classNames={{
                      control: () =>
                        "appearance-none flex items-center w-full h-full outline-none text-base text-slate-800 bg-white rounded py-2 px-4 focus:outline-none",
                      menu: () =>
                        "p-1 mt-1 border min-w-[200px] left-0  border-slate-200 text-slate-800 bg-white rounded-lg py-3 px-4 focus:outline-none",
                      option: () =>
                        "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
                      menuList: () => "cursor-pointer text-base",
                      placeholder: () => "text-base text-slate-600",
                      dropdownIndicator: () => "pt-1",
                    }}
                  />
                  <Select
                    defaultValue={selectedLocation}
                    onChange={handleLocationChange}
                    options={locations}
                    placeholder="To"
                    unstyled
                    components={{ DropdownIndicator: CustomDropdownIndicator }}
                    className="w-full"
                    classNames={{
                      control: () =>
                        "appearance-none flex w-full h-full outline-none text-base text-slate-800 bg-white rounded py-2 px-4 focus:outline-none",
                      menu: () =>
                        "p-1 mt-1 border min-w-[200px] right-0 border-slate-200 text-slate-800 bg-white rounded-lg py-3 px-4 focus:outline-none",
                      option: () =>
                        "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
                      menuList: () => "cursor-pointer text-base",
                      placeholder: () => "text-base text-slate-600",
                      dropdownIndicator: () => "pt-1",
                    }}
                  />
                </div>
                <div className="w-full flex flex-row justify-between items-center py-1 rounded-lg border border-slate-200">
                  <Select
                    defaultValue={selectedLocation}
                    onChange={handleLocationChange}
                    options={locations}
                    placeholder="Departure"
                    unstyled
                    components={{ DropdownIndicator: CustomDropdownIndicator }}
                    className="w-full"
                    classNames={{
                      control: () =>
                        "appearance-none flex w-full h-full outline-none text-base text-slate-800 bg-white rounded py-2 px-4 focus:outline-none",
                      menu: () =>
                        "p-1 mt-1 border min-w-[200px] left-0  border-slate-200 text-slate-800 bg-white rounded-lg py-3 px-4 focus:outline-none",
                      option: () =>
                        "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
                      menuList: () => "cursor-pointer text-base",
                      placeholder: () => "text-base text-slate-600",
                      dropdownIndicator: () => "pt-1",
                    }}
                  />
                  <Select
                    defaultValue={selectedLocation}
                    onChange={handleLocationChange}
                    options={locations}
                    placeholder="Return"
                    unstyled
                    components={{ DropdownIndicator: CustomDropdownIndicator }}
                    className="w-full"
                    classNames={{
                      control: () =>
                        "appearance-none flex w-full h-full outline-none text-base text-slate-800 bg-white rounded py-2 px-4 focus:outline-none",
                      menu: () =>
                        "p-1 mt-1 border w-full min-w-[200px] right-0 border-slate-200 text-slate-800 bg-white rounded-lg py-3 px-4 focus:outline-none",
                      option: () =>
                        "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
                      menuList: () => "cursor-pointer text-base",
                      placeholder: () => "text-base text-slate-600",
                      dropdownIndicator: () => "pt-1",
                    }}
                  />
                </div>
                <div className="w-full flex flex-row justify-between items-center py-1 rounded-lg border border-slate-200">
                  <Select
                    defaultValue={selectedLocation}
                    onChange={handleLocationChange}
                    options={locations}
                    placeholder="Travelers & class"
                    unstyled
                    components={{ DropdownIndicator: CustomDropdownIndicator }}
                    className="w-full"
                    classNames={{
                      control: () =>
                        "appearance-none flex w-full h-full outline-none text-base text-slate-800 bg-white rounded py-2 px-4 focus:outline-none",
                      menu: () =>
                        "p-1 mt-1 border w-full min-w-[200px] right-0 border-slate-200 text-slate-800 bg-white rounded-lg py-3 px-4 focus:outline-none",
                      option: () =>
                        "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
                      menuList: () => "cursor-pointer text-base",
                      placeholder: () => "text-base text-slate-600",
                      dropdownIndicator: () => "pt-1",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <button className="transition-all duration-300 w-full bg-slate-800 hover:bg-slate-950 text-white rounded-lg px-4 py-3 text-center">
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
                instanceId={useId()}
                components={{ DropdownIndicator: CustomDropdownIndicator }}
                className="w-full"
                classNames={{
                  control: () =>
                    "appearance-none flex items-center w-full h-full outline-none text-base text-slate-800 bg-white rounded py-2 px-4 focus:outline-none",
                  menu: () =>
                    "p-1 mt-1 border min-w-[200px] left-0  border-slate-200 text-slate-800 bg-white rounded-lg py-3 px-4 focus:outline-none",
                  option: () =>
                    "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
                  menuList: () => "cursor-pointer text-base",
                  placeholder: () => "text-base text-slate-600",
                  dropdownIndicator: () => "pt-1",
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
                instanceId={useId()}
                components={{ DropdownIndicator: CustomDropdownIndicator }}
                className="w-full"
                classNames={{
                  control: () =>
                    "appearance-none flex items-center w-full h-full outline-none text-base text-slate-800 bg-white rounded py-2 px-4 focus:outline-none",
                  menu: () =>
                    "p-1 mt-1 border min-w-[200px] left-0  border-slate-200 text-slate-800 bg-white rounded-lg py-3 px-4 focus:outline-none",
                  option: () =>
                    "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
                  menuList: () => "cursor-pointer text-base",
                  placeholder: () => "text-base text-slate-600",
                  dropdownIndicator: () => "pt-1",
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
                instanceId={useId()}
                components={{ DropdownIndicator: CustomDropdownIndicator }}
                className="w-full"
                classNames={{
                  control: () =>
                    "appearance-none flex items-center w-full h-full outline-none text-base text-slate-800 bg-white rounded py-2 px-4 focus:outline-none",
                  menu: () =>
                    "p-1 mt-1 border min-w-[200px] left-0  border-slate-200 text-slate-800 bg-white rounded-lg py-3 px-4 focus:outline-none",
                  option: () =>
                    "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
                  menuList: () => "cursor-pointer text-base",
                  placeholder: () => "text-base text-slate-600",
                  dropdownIndicator: () => "pt-1",
                }}
              />
            </div>
            <div className="flex flex-row items-center">
              <Select
                defaultValue={selectedLocation}
                onChange={handleLocationChange}
                options={locations}
                placeholder="Number of travellers"
                unstyled
                instanceId={useId()}
                components={{ DropdownIndicator: CustomDropdownIndicator }}
                className="w-full"
                classNames={{
                  control: () =>
                    "appearance-none flex items-center w-full h-full outline-none text-base text-slate-800 bg-white rounded py-2 px-4 focus:outline-none",
                  menu: () =>
                    "p-1 mt-1 border min-w-[200px] left-0  border-slate-200 text-slate-800 bg-white rounded-lg py-3 px-4 focus:outline-none",
                  option: () =>
                    "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
                  menuList: () => "cursor-pointer text-base",
                  placeholder: () => "text-base text-slate-600",
                  dropdownIndicator: () => "pt-1",
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
