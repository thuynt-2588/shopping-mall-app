import React, { useState } from "react";
import { OrderByDirection } from "firebase/firestore";
import { SortGroupData } from "./sortGroupList.config";
import "./index.scss";
import { ChevronDownIcon, ChevronUpIcon, SortIcon } from "../../atoms/Icons";
import RadioGroup from "../../molecules/RadioGroup";

type Props = {
  sortData: SortGroupData;
  onSortChange: (
    field: string,
    value: string | number | OrderByDirection
  ) => void;
};

const SortGroupList: React.FC<Props> = ({ sortData, onSortChange }) => {
  const [isShowRadioList, setIsShowRadioList] = useState(false);

  const handleRadioList = (e: any) => {
    e.preventDefault();
    setIsShowRadioList(!isShowRadioList);
  };

  return (
    <div className="col c-2-4 sort-group__wrap" onClick={handleRadioList}>
      <div className="sort-group__box">
        <div className="sort-group__box-left">
          <SortIcon />
          <span className="sort-group__label">{sortData.name}</span>
        </div>
        {isShowRadioList ? (
          <ChevronUpIcon height={16} width={16} fill="#141414" />
        ) : (
          <ChevronDownIcon height={16} width={16} fill="#141414" />
        )}
      </div>
      <RadioGroup
        className={isShowRadioList ? "active" : ""}
        radioListLabel={sortData.sortGroupList || []}
        onSortChange={onSortChange}
      />
    </div>
  );
};

export default SortGroupList;
