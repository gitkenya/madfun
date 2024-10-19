"use client";
import { useId, useState } from "react";
import {
  IoEllipse,
  IoChevronDownOutline,
  IoChevronForwardOutline,
  IoAddOutline,
} from "react-icons/io5";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { GiCommercialAirplane } from "react-icons/gi";
import { FiMinusCircle } from "react-icons/fi";
import Select, { components } from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import moment from "moment";

export default function FlightSearch(props: any) {
  const { flight_types, location_types, flight_stops, flight_classes } = props;
  const [selectedOrigin, setSelectedOrigin] = useState<any>(null);
  const [selectedDestination, setSelectedDestination] = useState<any>(null);
  const [selectedFlightType, setSelectedFlightType] = useState<any>(null);
  const [selectedFlightStop, setSelectedFlightStop] = useState<any>(null);
  const [selectedFlightClass, setSelectedFlightClass] = useState<any>(null);
  const [departureDate, setDepartureDate] = useState<any>(new Date());
  const [returnDate, setReturnDate] = useState<any>(null);
  const flightTypes: any[] = flight_types.map((flight: any) => ({
    value: flight.id,
    label: flight.name,
  }));
  const flightStops: any[] = flight_stops.map((stop: any) => ({
    value: stop.id,
    label: (
      <span className="flex flex-row items-center gap-2">
        <GiCommercialAirplane size={20} /> {stop.name}
      </span>
    ),
  }));

  const flightClasses: any[] = flight_classes.map((fclass: any) => ({
    value: fclass.id,
    label: (
      <span className="flex flex-row items-center gap-1">
        <span className="font-bold">{fclass.passengers} Adults,</span>{" "}
        {fclass.name}
      </span>
    ),
  }));

  const origins: any[] = location_types.map((location: any) => ({
    value: location.id,
    label: (
      <span className="flex flex-row items-center gap-1">
        <span className="flex flex-row items-center gap-1 font-semibold">
          <span className="">
            <Image
              className="rounded-sm"
              width={24}
              height={18}
              src={`/assets/img/flags/${location.countries.code.toLowerCase()}.svg`}
              alt={location.name}
            />
          </span>
          {location.code}
        </span>
        {location.name}
      </span>
    ),
    textLabel: `${location.countries.name} ${location.code} ${location.name}`,
    isDisabled: selectedDestination === location.id,
  }));
  const destinations: any[] = location_types.map((location: any) => ({
    value: location.id,
    label: (
      <span className="flex flex-row items-center gap-1">
        <span className="flex flex-row items-center gap-1 font-semibold">
          <span className="">
            <Image
              className="rounded-sm"
              width={24}
              height={18}
              src={`/assets/img/flags/${location.countries.code.toLowerCase()}.svg`}
              alt={location.name}
            />
          </span>
          {location.code}
        </span>
        {location.name}
      </span>
    ),
    textLabel: `${location.countries.name} ${location.code} ${location.name}`,
    isDisabled: selectedOrigin === location.id,
  }));
  useState(() => {
    setSelectedOrigin(origins[0]);
    setSelectedFlightType(flightTypes[1]);
    setSelectedFlightStop(flightStops[0]);
    setSelectedFlightClass(flightClasses[0]);
  });

  const filterOption = (option: any, inputValue: string) => {
    return option.data.textLabel
      .toLowerCase()
      .includes(inputValue.toLowerCase());
  };
  const handleFlightTypeChange = (event: any) => {
    setSelectedFlightType(event.value);
  };
  const handleFlightStopChange = (event: any) => {
    setSelectedFlightStop(event.value);
  };
  const handleFlightClassChange = (event: any) => {
    setSelectedFlightClass(event.value);
  };
  const handleOriginChange = (event: any) => {
    setSelectedOrigin(event.value);
  };
  const handleDestinationChange = (event: any) => {
    setSelectedDestination(event.value);
  };

  const switchLocations = () => {};

  const CustomDropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <IoChevronDownOutline />
      </components.DropdownIndicator>
    );
  };

  return (
    <div className="flex flex-col rounded-lg shadow-lg">
      <div className="w-full grid grid-cols-1 sm:grid-cols-8 gap-3 rounded-t-lg p-4 bg-white">
        <div className="grid">
          <label className="flex flex-row justify-between items-center uppercase text-slate-400 text-sm">
            Flight Type
          </label>
          <div className="border border-slate-200 rounded-lg">
            <Select
              defaultValue={selectedFlightType}
              onChange={handleFlightTypeChange}
              options={flightTypes}
              placeholder="Flight Type"
              unstyled
              instanceId={useId()}
              components={{ DropdownIndicator: CustomDropdownIndicator }}
              className="w-full"
              classNames={{
                control: () =>
                  "appearance-none flex items-center w-full h-full outline-none text-base text-slate-800 bg-white rounded-lg py-2 px-4 focus:outline-none",
                menu: () =>
                  "p-2 mt-1 border min-w-[200px] left-0 border-slate-200 text-slate-800 bg-white rounded-lg focus:outline-none",
                option: () =>
                  "cursor-pointer p-2 hover:bg-slate-100 rounded-lg disabled:opacity-20",
                menuList: () => "cursor-pointer text-base",
                placeholder: () => "text-base text-slate-600",
                dropdownIndicator: () => "pt-1",
              }}
            />
          </div>
        </div>
        <div className="w-full flex flex-col sm:col-span-3">
          <div className="w-full flex flex-row">
            <div className="w-1/2">
              <label className="flex flex-row justify-between items-center uppercase text-slate-400 text-sm">
                <span>From</span>
              </label>
            </div>
            <div className="w-1/2">
              <label className="flex flex-row justify-between items-center uppercase text-slate-400 text-sm ps-4">
                <span className="">To</span>
              </label>
            </div>
          </div>
          <div className="w-full flex flex-row items-center border border-slate-200 rounded-lg">
            <div className="w-1/2 flex flex-row items-center">
              <Select
                defaultValue={selectedOrigin}
                onChange={handleOriginChange}
                options={origins}
                placeholder="Origin"
                unstyled
                instanceId={useId()}
                components={{ DropdownIndicator: null }}
                className="w-full"
                classNames={{
                  control: () =>
                    "appearance-none flex items-center w-full h-full outline-none text-base text-slate-800 bg-white rounded-lg py-2 px-4 focus:outline-none",
                  menu: () =>
                    "p-2 mt-1 border min-w-[200px] left-0 border-slate-200 text-slate-800 bg-white rounded-lg focus:outline-none",
                  option: ({ isDisabled }) =>
                    `cursor-pointer p-2 hover:bg-slate-100 rounded-lg ${
                      isDisabled ? "opacity-30" : ""
                    }`,
                  menuList: () => "cursor-pointer text-base",
                  placeholder: () => "text-base text-slate-600",
                  dropdownIndicator: () => "pt-1",
                }}
                filterOption={filterOption}
              />
              <button
                className={` text-white bg-slate-900 p-1.5 rounded-full`}
                onClick={() => switchLocations()}
              >
                <HiOutlineSwitchHorizontal size={16} />
              </button>
            </div>
            <div className="w-1/2">
              <Select
                defaultValue={selectedDestination}
                onChange={handleDestinationChange}
                options={destinations}
                placeholder="Destination"
                unstyled
                instanceId={useId()}
                components={{ DropdownIndicator: null }}
                className="w-full"
                classNames={{
                  control: () =>
                    "appearance-none flex items-center w-full h-full outline-none text-base text-slate-800 bg-white rounded-lg py-2 px-4 focus:outline-none",
                  menu: () =>
                    "p-2 mt-1 border min-w-[200px] left-0 border-slate-200 text-slate-800 bg-white rounded-lg focus:outline-none",
                  option: ({ isDisabled }) =>
                    `cursor-pointer p-2 hover:bg-slate-100 rounded-lg ${
                      isDisabled ? "opacity-30" : ""
                    }`,
                  menuList: () => "cursor-pointer text-base",
                  placeholder: () => "text-base text-slate-600",
                  dropdownIndicator: () => "pt-1",
                }}
                filterOption={filterOption}
              />
            </div>
          </div>
        </div>

        <div className="sm:col-span-2 grid grid-cols-2 gap-3">
          <div className="grid">
            <label className="flex flex-row justify-center items-center uppercase text-slate-400 text-sm">
              Departure
            </label>

            <div className="relative border border-slate-200 rounded-lg">
              <DatePicker
                id="departure-input"
                selected={departureDate}
                minDate={new Date()}
                onChange={(date) => {
                  setDepartureDate(date); // Update departureDate first

                  if (date && returnDate) {
                    if (returnDate > date) {
                      // Do nothing if returnDate is greater than departureDate
                      return;
                    } else if (date >= returnDate) {
                      // If departureDate is equal or greater than returnDate, add 1 day to returnDate
                      setReturnDate(
                        new Date(new Date(date).setDate(date.getDate() + 1))
                      );
                    }
                  }
                }}
                className={`appearance-none flex items-center w-full h-full outline-none text-base text-slate-800 bg-white rounded-lg py-2 px-4 focus:outline-none`}
              />

              <label
                className="absolute top-0 left-0 appearance-none flex items-center justify-center w-full h-full outline-none font-bold text-slate-800 bg-white rounded-lg py-2 px-4 focus:outline-none"
                htmlFor="departure-input"
              >
                {moment(departureDate).format("D MMM")}
              </label>
            </div>
          </div>
          <div className="grid">
            <label className="flex flex-row justify-center items-center uppercase text-slate-400 text-sm">
              Return
            </label>
            <div className="relative border border-slate-200 rounded-lg">
              <DatePicker
                id="return-input"
                selected={returnDate}
                disabled={selectedFlightType === 1}
                minDate={
                  departureDate
                    ? new Date(
                        new Date(departureDate).setDate(
                          departureDate.getDate() + 1
                        )
                      )
                    : new Date()
                }
                onChange={(date) => {
                  setReturnDate(date);
                }}
                className={`appearance-none flex items-center justify-center w-full h-full outline-none text-base text-slate-800 bg-white rounded-lg py-2 px-4 focus:outline-none`}
              />
              <label
                className="absolute top-0 left-0 appearance-none flex items-center justify-center w-full h-full outline-none font-bold text-slate-800 bg-white rounded-lg py-2 px-4 focus:outline-none"
                htmlFor="return-input"
              >
                {returnDate ? (
                  moment(returnDate).format("D MMM")
                ) : selectedFlightType === 1 ? (
                  <FiMinusCircle size={20} className="text-slate-300" />
                ) : (
                  <IoAddOutline size={20} />
                )}
              </label>
            </div>
          </div>
        </div>

        <div className="w-full sm:col-span-2">
          <label className="flex flex-row justify-between items-center uppercase text-slate-400 text-sm">
            Passengers & Class
          </label>
          <div className="border border-slate-200 rounded-lg">
            <Select
              defaultValue={selectedFlightClass}
              onChange={handleFlightClassChange}
              options={flightClasses}
              placeholder="Flight Class"
              unstyled
              instanceId={useId()}
              components={{ DropdownIndicator: CustomDropdownIndicator }}
              className="w-full"
              classNames={{
                control: () =>
                  "appearance-none flex items-center w-full h-full outline-none text-base text-slate-800 bg-white rounded-lg py-2 px-4 focus:outline-none",
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
        </div>
      </div>
      <div className="bg-slate-100 rounded-b-lg flex flex-col sm:flex-row justify-between">
        <div className="px-4 py-2 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
          <div className="flex flex-row gap-2 items-center py-2 sm:pe-8 sm:border-r sm:border-slate-300">
            <div>
              <input
                id="flight-hotel"
                type="checkbox"
                name="flight-hotel"
                className="checkbox rounded border-slate-800"
              />
            </div>
            <label htmlFor="flight-hotel" className="cursor-pointer">
              Flight + Hotel
            </label>
          </div>
          <div className="flex flex-row gap-2 justify-start sm:items-center py-2 px-4 sm:pe-8 sm:border-r sm:border-slate-300">
            <div>
              <input
                id="airport-transfer"
                type="checkbox"
                name="airport-transfer"
                className="checkbox rounded border-slate-800"
              />
            </div>
            <label htmlFor="airport-transfer" className="cursor-pointer">
              Airport Transfer
            </label>
          </div>
          <div className="flex flex-row gap-2 items-center px-4">
            <Select
              defaultValue={selectedFlightStop}
              onChange={handleFlightStopChange}
              options={flightStops}
              placeholder="Stops"
              unstyled
              instanceId={useId()}
              components={{ DropdownIndicator: CustomDropdownIndicator }}
              className="w-full"
              classNames={{
                control: () =>
                  "appearance-none flex items-center w-full h-full outline-none text-base text-slate-800 rounded py-2 px-4 focus:outline-none",
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
        </div>
        <div>
          <button className="transition-colors duration-300 w-full sm:w-auto bg-slate-900 hover:bg-slate-700 text-white px-8 py-3 h-full rounded-b-lg sm:rounded-br-lg sm:rounded-bl-none flex flex-row items-center justify-center gap-4 font-poppins text-sm">
            <span>Request Quote</span>
            <span>
              <IoChevronForwardOutline />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
