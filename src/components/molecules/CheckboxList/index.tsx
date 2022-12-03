import clsx from "clsx";
import { WhereFilterOp } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Checkbox from "../../atoms/Checkbox";
import "./index.scss";

type Props = {
  className?: string;
  typeSearch?: string;
  checkboxListLabel: {
    label: string;
    value: number | string;
    field: string;
    operator: WhereFilterOp;
  }[];
  onFilterChange: (
    field: string,
    operator: WhereFilterOp,
    value: (number | string)[] | number
  ) => void;
};

const CheckboxList: React.FC<Props> = ({
  className,
  checkboxListLabel,
  onFilterChange,
  typeSearch,
}) => {
  const [listCheckboxValue, setListCheckboxValue] = useState<
    (string | number)[]
  >([]);

  const [listPriceValue, setListPriceValue] = useState<number>(0);

  const [operatorStr, setOperatorStr] = useState<WhereFilterOp>("in");

  useEffect(() => {
    if (listCheckboxValue && listCheckboxValue.length) {
      typeSearch && onFilterChange(typeSearch, operatorStr, listCheckboxValue);
    } else {
      typeSearch && onFilterChange(typeSearch, operatorStr, listPriceValue);
    }
  }, [listCheckboxValue, listPriceValue]);

  const handelCheck = (value: string | number, operator: WhereFilterOp) => {
    setOperatorStr(operator);
    if (operator === "in") {
      if (listCheckboxValue.includes(value))
        setListCheckboxValue(
          listCheckboxValue.filter((item) => item !== value)
        );
      else setListCheckboxValue(listCheckboxValue.concat(value));
    } else {
      setListPriceValue(value as number);
    }
  };

  return (
    <ul className={clsx("checkbox__list", className)}>
      {checkboxListLabel?.map((item, index) => (
        <li key={index} className="checkbox__item">
          <Checkbox item={item} onCheck={handelCheck} />
        </li>
      ))}
    </ul>
  );
};

export default CheckboxList;
