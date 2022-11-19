import React from "react";

interface HomeContextProps {
  isOpenSideBar: boolean;
  onToggleSidebar: () => void;
}

export const HomeContext = React.createContext<HomeContextProps>({} as any);
export const HomeContextProvider = HomeContext.Provider;
