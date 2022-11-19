import React from "react";
import Header from "../Header";
import SideBar from "../Header/SideBar";

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="shopping-app">
      <Header />
      <SideBar />
      {children}
    </div>
  );
};

export default MainLayout;
