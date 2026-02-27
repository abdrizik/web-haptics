import { createContext, useContext, useState } from "react";

type AppContextValue = {
  debug: boolean;
  setDebug: (debug: boolean) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return ctx;
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [debug, setDebug] = useState(import.meta.env.DEV);

  return (
    <AppContext.Provider value={{ debug, setDebug }}>
      {children}
    </AppContext.Provider>
  );
};
