"use client";
import { createContext, useContext, useState } from "react";

const AccountContext = createContext<any>(undefined);

export default function AccountProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userData, setUserData] = useState<any>(null);
  const [loadingUser, setLoadingUser] = useState(true);

  return (
    <AccountContext.Provider
      value={{ userData, setUserData, loadingUser, setLoadingUser }}
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
