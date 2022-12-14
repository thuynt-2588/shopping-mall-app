import clsx from "clsx";
import React, { useState } from "react";
import "./index.scss";

type Props = {
  label: string;
};

const Checkbox: React.FC<Props> = ({ label }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <label className="checkbox-label" onClick={handleChange}>
      <input
        className={clsx("checkbox-input", checked ? "active" : "")}
        type="checkbox"
        defaultChecked={checked}
      />
      {label}
    </label>
  );
};

export default Checkbox;
