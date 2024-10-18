"use client";
import { useId, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Select, { components } from "react-select";
import FlightSearch from "@/app/(web)/modules/components/search/flights";
import ReactLoading from "react-loading";
import { toast } from "sonner";
import { FiSearch } from "react-icons/fi";

export default function SearchBar(props: any) {
  const { flight_types, location_types, flight_stops, flight_classes } = props;
  const locations: any[] = [
    { value: 1, label: "Nairobi" },
    { value: 2, label: "Mombasa" },
    { value: 3, label: "Kisumu" },
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchEventKey, setSearchEventKey] = useState("");
  const [searchingEvents, setSearchingEvents] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

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

  const searchEvents = async () => {
    if (searchEventKey.length > 2) {
      setSearchingEvents(true);
    } else {
      toast.error("Invalid Request!", {
        description:
          "Please enter a minimum of 3 characters to search for events on madfun",
        position: "bottom-right",
        icon: " ",
        duration: 5000,
      });
    }
  };
  return (
    <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <TabList>
        <Tab
          className={`px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-base data-[selected]:bg-white/80 data-[selected]:text-slate-800 text-white data-[selected]:font-medium font-medium data-[selected]:rounded-t-lg data-[selected]:focus:outline-none data-[selected]:outline-none data-[selected]:hover:outline-none outline-none focus:outline-none hover:outline-none`}
        >
          Events
        </Tab>
        <Tab
          className={`px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-base data-[selected]:bg-white/80 data-[selected]:text-slate-800 text-white data-[selected]:font-medium font-medium data-[selected]:rounded-t-lg data-[selected]:focus:outline-none data-[selected]:outline-none data-[selected]:hover:outline-none outline-none focus:outline-none hover:outline-none`}
        >
          Flights
        </Tab>
        <Tab
          className={`px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-base data-[selected]:bg-white/80 data-[selected]:text-slate-800 text-white data-[selected]:font-medium font-medium data-[selected]:rounded-t-lg data-[selected]:focus:outline-none data-[selected]:outline-none data-[selected]:hover:outline-none outline-none focus:outline-none hover:outline-none`}
        >
          Hotels
        </Tab>
        <Tab
          className={`px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-base data-[selected]:bg-white/80 data-[selected]:text-slate-800 text-white data-[selected]:font-medium font-medium data-[selected]:rounded-t-lg data-[selected]:focus:outline-none data-[selected]:outline-none data-[selected]:hover:outline-none outline-none focus:outline-none hover:outline-none`}
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
          <form
            className="grid grid-cols-1 sm:grid-cols-4 gap-3 py-3"
            action={async (formData) => {
              // Input Validation
              const eventKey = (await formData.get("event_key")) as string;
              const eventLoc = (await formData.get("event_loc")) as string;
              if (eventKey.length < 2) {
                toast.error("Invalid Request!", {
                  description:
                    "Please enter a minimum of 3 characters to search for events on madfun",
                  position: "bottom-right",
                  icon: " ",
                  duration: 5000,
                });
              } else {
                try {
                  setSearchingEvents(true);
                  const reqData = await fetch(
                    `https://api.v1.interactive.madfun.com/v1/api/event/view`,
                    {
                      method: "POST",
                      headers: {
                        accept: "application/json",
                        "content-type": "application/json",
                      },
                      body: JSON.stringify({
                        api_key: "4ba0e1aae090cdefc1887d2689b25e3f",
                        source: "MOBILE",
                        limit: 0,
                        page: 1,
                        sort: "",
                        pastEvent: 0,
                        eventID: "",
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
                      const filteredEvents = data.filter((event: any) =>
                        Object.values(event)
                          .join(" ")
                          .toLowerCase()
                          .includes(eventKey.toLowerCase())
                      );

                      if (filteredEvents.length > 0) {
                        toast.success("Search complete!", {
                          description: `Search Complete! We found ${
                            filteredEvents.length
                          } result${
                            filteredEvents.length === 1 ? "" : "s"
                          } matching your search query "${eventKey}"`,
                          position: "bottom-right",
                          icon: " ",
                          duration: 5000,
                        });
                        console.log(filteredEvents); // Handle the filtered events (e.g., set them in state)
                      } else {
                        toast.info("No matching events found", {
                          description: `No results match your search query.`,
                          position: "bottom-right",
                          icon: " ",
                          duration: 5000,
                        });
                      }
                    } else {
                      toast.error("Event Search Failed!", {
                        description:
                          "We could not complete your search request at the moment. Please try again later.",
                        position: "bottom-right",
                        icon: " ",
                        duration: 5000,
                      });
                    }
                  } else {
                    console.error("Failed to fetch events");
                    toast.error("Event Search Failed!", {
                      description:
                        "We could not complete your search request at the moment. Please try again.",
                      position: "bottom-right",
                      icon: " ",
                      duration: 5000,
                    });
                  }
                  setSearchingEvents(false);
                } catch (error) {
                  console.error(
                    "An error occurred while fetching events:",
                    error
                  );
                  setSearchingEvents(false);
                  toast.error("An error occured!", {
                    description:
                      "Your search request could not be completed at the moment. Please try again later.",
                    position: "bottom-right",
                    icon: " ",
                    duration: 5000,
                  });
                }
              }
            }}
          >
            <div className="col-span-2 px-3">
              <input
                type="text"
                placeholder="Search event"
                name="event_key"
                className="appearance-none block w-full outline-none border border-slate-200 rounded sm:rounded-lg text-slate-800 bg-white py-3 px-5 focus:outline-none"
                onChange={(e) => setSearchEventKey(e.target.value)}
              />
            </div>
            <div className="flex flex-row items-center ps-3">
              <Select
                defaultValue={selectedLocation}
                onChange={handleLocationChange}
                options={locations}
                placeholder="Location"
                unstyled
                name="event_location"
                instanceId={useId()}
                components={{ DropdownIndicator: CustomDropdownIndicator }}
                className="w-full"
                classNames={{
                  control: () =>
                    "appearance-none flex items-center w-full h-full outline-none border border-slate-200 rounded sm:rounded-lg text-base text-slate-800 bg-white rounded py-3 px-4 focus:outline-none",
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
              <button
                className="transition-all duration-300 sm:min-w-[120px] flex flex-row items-center justify-center me-3 sm:mx-4 bg-slate-800 hover:bg-slate-950 text-white rounded sm:rounded-lg px-4 py-3 text-center"
                type="submit"
              >
                {searchingEvents ? (
                  <ReactLoading
                    className=""
                    type="spin"
                    color="#ffd100"
                    width={24}
                    height={24}
                  />
                ) : (
                  <span>
                    <span className="hidden sm:flex">Search</span>
                    <FiSearch size={24} className="sm:hidden" />
                  </span>
                )}
              </button>
            </div>
          </form>
        </TabPanel>
        <TabPanel
          className={`bg-white rounded-lg ${
            selectedIndex === 0 ? "rounded-tl-none" : ""
          }`}
        >
          <FlightSearch
            flight_types={flight_types}
            location_types={location_types}
            flight_stops={flight_stops}
            flight_classes={flight_classes}
          />
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
