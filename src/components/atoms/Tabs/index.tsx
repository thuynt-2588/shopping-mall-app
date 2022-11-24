import clsx from "clsx";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSelectedTab } from "../../../slices/tabs/tabSlice";
import { TabValue } from "../../../types/common";
import "./index.scss";

type Props = {
  tabs?: TabValue[];
};

const Tabs: React.FC<Props> = ({ tabs }) => {
  const dispatch = useDispatch();
  const selectedTab = useSelector((state: any) => state.tab.currentTab);
  const changeTab = (tabId: string | number) => {
    dispatch(changeSelectedTab(tabId));
  };

  return (
    <ul className="tab__ul">
      {tabs?.map(({ id, title, url }) => (
        <li
          key={id}
          className={clsx("tab__li", selectedTab === id ? "active" : "")}
          onClick={(e) => {
            e.preventDefault();
            changeTab(id);
          }}
        >
          <a href={url}>{title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
