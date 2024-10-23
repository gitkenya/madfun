"use client";
import { createContext, useContext, useState } from "react";

const AccountContext = createContext<any>(undefined);

export default function AccountProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userData, setUserData] = useState<any>(null);
  const [openEventDrawer, setOpenEventDrawer] = useState(false);
  const [openTicketsDrawer, setOpenTicketsDrawer] = useState(false);
  const [newEventData, setNewEventData] = useState<any>({
    event_poster: "",
    event_title: "",
    event_description: "",
    event_guests: "",
    event_category: "",
    event_age: "",
    event_visibility: "",
    event_type: "",
    event_date: "",
    event_start_time: "",
    event_end_time: "",
    event_timezone: "",
    event_location_name: "",
    event_location_coords: "",
    event_virtual_link: "",
  });
  const [loadingUser, setLoadingUser] = useState(true);

  return (
    <AccountContext.Provider
      value={{
        userData,
        setUserData,
        loadingUser,
        setLoadingUser,
        newEventData,
        setNewEventData,
        openEventDrawer,
        setOpenEventDrawer,
        openTicketsDrawer,
        setOpenTicketsDrawer,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

export const useAccount = () => {
  const context = useContext(AccountContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an Auth Provider");
  }
  return context;
};
