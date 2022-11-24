import clsx from "clsx";
import React, { useState } from "react";
import { TabValue } from "../../../types/common";
import "./index.scss";

type Props = {
  tabs?: TabValue[];
};

const Tabs: React.FC<Props> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState<string | number>(1);
    
  return (
    <ul className="tab__ul">
      {tabs?.map(({ id, title, url }) => (
        <li
          key={id}
          className={clsx("tab__li", activeTab === id ? "active" : "")}
          onClick={() => setActiveTab(id)}
        >
          <a href={url}>{title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
