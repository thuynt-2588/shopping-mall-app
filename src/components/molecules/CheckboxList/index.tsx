import clsx from "clsx";
import React from "react";
import Checkbox from "../../atoms/Checkbox";
import "./index.scss";

type Props = {
  className?: string;
  checkboxListLabel: string[];
};

const CheckboxList: React.FC<Props> = ({ className, checkboxListLabel }) => {
  return (
    <ul className={clsx("checkbox__list", className)}>
      {checkboxListLabel?.map((item, index) => (
        <li key={index} className="checkbox__item">
          <Checkbox label={item} />
        </li>
      ))}
    </ul>
  );
};

export default CheckboxList;
