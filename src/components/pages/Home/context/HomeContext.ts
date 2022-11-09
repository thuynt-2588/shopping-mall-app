import React from "react";

interface HomeContextProps {
    isOpenSideBar: boolean;
    isOpenChild: boolean;
    onToggleSidebar: () => void;
    onToggleChild: () => void;
}

export const HomeContext = React.createContext<HomeContextProps>({} as any);
export const HomeContextProvider = HomeContext.Provider;
