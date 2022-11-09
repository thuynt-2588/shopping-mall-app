import clsx from "clsx";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import routesName from "../../../../../routes/enum.routes";
import { ChevronDownIcon, ChevronUpIcon } from "../../../../atoms/Icons";
import { HomeContext } from "../../../../pages/Home/context/HomeContext";
import "./index.scss";

type Props = {
  item?: any;
  className: string;
};

const SidebarItem: React.FC<Props> = ({ item, className }) => {
  const [isShowSidebarItem, setIsShowSidebarItem] = useState(false);
  const { isOpenChild, onToggleChild } = useContext(HomeContext);

  if (item.routes) {
    return (
      <li className={clsx(item.routes ? "sidebar__item-child" : "")}>
        <Link to={item.path} className="sidebar__item-title">
          {item.title}
          <button
            onClick={() => setIsShowSidebarItem(!isShowSidebarItem)}
            className="sidebar__item-btn"
          >
            {isShowSidebarItem ? <ChevronDownIcon /> : <ChevronUpIcon />}
          </button>
        </Link>

        <ul className={clsx(item.routes ? "sidebar__item-child-ul" : "")}>
          {item.routes.map((child: any, index: any) => (
            <SidebarItem
              key={index}
              item={child}
              className="sidebar__item-child-li"
            />
          ))}
        </ul>
      </li>
    );
  } else {
    return (
      <li
        className={clsx(
          className,
          item.path === routesName.ROOT ? "active" : ""
        )}
      >
        <Link to={item.path}>{item.title}</Link>
      </li>
    );
  }
};

export default SidebarItem;
