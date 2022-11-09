import React from "react";
import Footer from "../Footer";
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
      <Footer />
    </div>
  );
};
 
export default MainLayout;