import clsx from "clsx";
import { useContext } from "react";
import { CloseIcon } from "../../../atoms/Icons";
import { HomeContext } from "../../../pages/Home/context/HomeContext";
import "./index.scss";
import { SidebarData } from "./sidebar.config";
import SidebarItem from "./SideBarItem";

const SideBar: React.FC = () => {
  const { isOpenSideBar, onToggleSidebar } = useContext(HomeContext);

  return (
    <>
      <div
        className={clsx("sidebar__menu-wrap", isOpenSideBar ? "active" : "")}
      >
        <div className="sidebar__menu-header">
          <button
            type="button"
            className="sidebar__menu-close"
            onClick={onToggleSidebar}
          >
            <CloseIcon className="sidebar__menu-close-icon" />
          </button>
        </div>
        <ul
          className={clsx("sidebar__menu-list", isOpenSideBar ? "active" : "")}
        >
          {SidebarData.map((item, index) => {
            return (
              <SidebarItem
                key={index}
                item={item}
                className="sidebar__menu-item"
              />
            );
          })}
        </ul>
      </div>

      <div
        className={clsx(
          "sidebar__menu-overlay",
          isOpenSideBar === true ? "active" : ""
        )}
        onClick={onToggleSidebar}
      ></div>
    </>
  );
};

export default SideBar;
