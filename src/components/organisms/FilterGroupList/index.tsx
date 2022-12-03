import React, { useState } from "react";
import { FilterGroupData } from "./filterGroupList.config";
import "./index.scss";
import { ChevronDownIcon, ChevronUpIcon, FilterIcon } from "../../atoms/Icons";
import CheckboxList from "../../molecules/CheckboxList";
import { WhereFilterOp } from "firebase/firestore";

type Props = {
  filterData: FilterGroupData;
  onFilterChange: (
    field: string,
    operator: WhereFilterOp,
    value: (number | string)[] | number
  ) => void;
};

const FilterGroupList: React.FC<Props> = ({ filterData, onFilterChange }) => {
  const [isShowCheckboxList, setIsShowCheckboxList] = useState(false);

  const handleFilterList = (e: any) => {
    e.preventDefault();
    setIsShowCheckboxList(!isShowCheckboxList);
  };

  return (
    <div className="col c-2-4 filter-group__wrap" onClick={handleFilterList}>
      <div className="filter-group__box">
        <div className="filter-group__box-left">
          <FilterIcon />
          <span className="filter-group__label">{filterData.name}</span>
        </div>
        {isShowCheckboxList ? (
          <ChevronUpIcon height={16} width={16} fill="#141414" />
        ) : (
          <ChevronDownIcon height={16} width={16} fill="#141414" />
        )}
      </div>
      <CheckboxList
        typeSearch={filterData.typeSearch}
        className={isShowCheckboxList ? "active" : ""}
        checkboxListLabel={filterData.filterGroupList || []}
        onFilterChange={onFilterChange}
      />
    </div>
  );
};

export default FilterGroupList;
