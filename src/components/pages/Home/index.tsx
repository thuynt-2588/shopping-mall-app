import { useState } from "react";
import SideBar from "../../layouts/Header/SideBar";
import MainLayout from "../../layouts/MainLayout";
import { HomeContextProvider } from "./context/HomeContext";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenChild, setIsOpenChild] = useState(false);

  const handleToggleSidebar = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
  };

  const handleToggleChild = () => {
    isOpenChild === true ? setIsOpenChild(false) : setIsOpenChild(true);
  }

  return (
    <HomeContextProvider
      value={{
        isOpenSideBar: isOpen,
        isOpenChild,
        onToggleSidebar: handleToggleSidebar,
        onToggleChild: handleToggleChild,
      }}
    >
      <MainLayout>
        <div className="home__video">
          <video
            className="video"
            autoPlay
            muted
            loop
            width="100%"
            height="100%"
          >
            <source
              src={require("../../../assets/videos/video-evo.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
        <div className="feature"></div>
      </MainLayout>
    </HomeContextProvider>
  );
}

export default HomePage;
