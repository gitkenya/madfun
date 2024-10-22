"use client";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  Libraries,
} from "@react-google-maps/api";
import { useRef, useState } from "react";

export default function AutoComplete(props: any) {
  const libraries: Libraries = ["places"];

  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  const inputRef = useRef(null);

  const mapContainerStyle = {
    width: "100%",
    height: "200px",
  };
  const center = {
    lat: -1.286389, // Default location (Latitude of Nairobi, Kenya)
    lng: 36.817223, // Default location (Longitude of Nairobi, Kenya)
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string, // Add your API key here
    libraries,
  });

  const handlePlaceSelect = () => {
    const autocomplete = new window.google.maps.places.Autocomplete(
      inputRef.current
    );
    autocomplete.setFields(["geometry", "name"]);
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        setSelectedLocation({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });
      }
    });
  };
  if (loadError) return <div>Error loading maps</div>;

  // Don't render until the Google Maps API is loaded
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className="flex flex-col gap-2">
      <input
        ref={inputRef}
        type="text"
        onFocus={handlePlaceSelect}
        placeholder="Search for a place"
        className="appearance-none flex items-center w-full h-full outline-none border border-slate-200 rounded sm:rounded-lg text-base text-slate-800 bg-white py-3 px-4 focus:outline-none"
      />
      <div className="event_map rounded border border-slate-300 w-full min-h-[200px]">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={14}
          center={selectedLocation || center}
        >
          {selectedLocation && <Marker position={selectedLocation} />}
        </GoogleMap>
      </div>
    </div>
  );
}
