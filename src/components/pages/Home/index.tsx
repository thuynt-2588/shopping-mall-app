import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { HomeContextProvider } from "./context/HomeContext";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSidebar = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <HomeContextProvider
      value={{
        isOpenSideBar: isOpen,
        onToggleSidebar: handleToggleSidebar,
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
