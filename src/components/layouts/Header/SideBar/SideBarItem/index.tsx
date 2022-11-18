import clsx from "clsx";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import routesName from "../../../../../routes/enum.routes";
import Button from "../../../../atoms/Button";
import { ChevronDownIcon, ChevronUpIcon } from "../../../../atoms/Icons";
import "./index.scss";

type Props = {
  item?: any;
  className: string;
};

const SidebarItem: React.FC<Props> = ({ item, className }) => {
  const [isShowSidebarItem, setIsShowSidebarItem] = useState(false);

  const handleToggleChild = (e: any) => {
    e.preventDefault();
    setIsShowSidebarItem(!isShowSidebarItem);
  };

  if (item.routes) {
    return (
      <li className={clsx(item.routes ? "sidebar__item-child" : "")}>
        <Link to={item.path} className="sidebar__item-title">
          {item.title}
          <Button className="sidebar__item-btn" onClick={handleToggleChild}>
            {isShowSidebarItem ? <ChevronDownIcon /> : <ChevronUpIcon />}
          </Button>
        </Link>

        <ul
          className={clsx(
            item.routes ? "sidebar__item-child-ul" : "",
            isShowSidebarItem
              ? "sidebar__item-child-ul--show"
              : "sidebar__item-child-ul--hide"
          )}
        >
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
