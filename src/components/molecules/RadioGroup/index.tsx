import clsx from "clsx";
import { OrderByDirection } from "firebase/firestore";
import React, { useState } from "react";
import Radio from "../../atoms/Radio";
import "./index.scss";

type Props = {
  className?: string;
  radioListLabel: {
    label: string;
    value: string | number | OrderByDirection;
    field: string;
  }[];
  onSortChange: (
    field: string,
    value: string | number | OrderByDirection
  ) => void;
};

const RadioGroup: React.FC<Props> = ({
  className,
  radioListLabel,
  onSortChange,
}) => {
  const [selected, setSelected] = useState("");

  const handleRadioChange = (value: string) => {
    setSelected(value);
  };

  return (
    <ul className={clsx("radio__list", className)}>
      {radioListLabel?.map((item, index) => (
        <li key={index} className="radio__item">
          <Radio
            selected={selected}
            onRadioChange={handleRadioChange}
            item={item}
            onSortChange={onSortChange}
          />
        </li>
      ))}
    </ul>
  );
};

export default RadioGroup;
