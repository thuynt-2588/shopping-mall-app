import clsx from "clsx";
import Button from "../../../atoms/Button";
import { CloseIcon } from "../../../atoms/Icons";
import "./index.scss";
import { SidebarData } from "./sidebar.config";
import SidebarItem from "./SideBarItem";

type Props = {
  isOpenSideBar: boolean;
  onToggleSidebar: () => void;
};

const SideBar: React.FC<Props> = ({ isOpenSideBar, onToggleSidebar }) => {
  return (
    <>
      <div
        className={clsx("sidebar__menu-wrap", isOpenSideBar ? "active" : "")}
      >
        <div className="sidebar__menu-header">
          <Button className="sidebar__menu-close" onClick={onToggleSidebar}>
            <CloseIcon className="sidebar__menu-close-icon" />
          </Button>
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
