import clsx from "clsx";
import { WhereFilterOp } from "firebase/firestore";
import React, { useState } from "react";
import "./index.scss";

type Props = {
  item: {
    label: string;
    value: number | string;
    field: string;
    operator: WhereFilterOp;
  };
  onCheck: (value: string | number, operator: WhereFilterOp) => void;
};

const Checkbox: React.FC<Props> = ({ item, onCheck }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (value: string | number, operator: WhereFilterOp) => {
    onCheck(value, operator);
    setChecked(!checked);
  };

  return (
    <label
      className="checkbox-label"
      onClick={() => handleChange(item.value, item.operator)}
    >
      <input
        className={clsx("checkbox-input", checked ? "active" : "")}
        type="checkbox"
        checked={checked}
        value={item.value}
        onChange={() => handleChange(item.value, item.operator)}
      />
      {item.label}
    </label>
  );
};

export default Checkbox;
