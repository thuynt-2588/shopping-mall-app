import React, { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import SideBar from "../Header/SideBar";

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSidebar = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <div className="shopping-app">
      <Header onToggleSidebar={handleToggleSidebar} />
      <SideBar isOpenSideBar={isOpen} onToggleSidebar={handleToggleSidebar} />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
