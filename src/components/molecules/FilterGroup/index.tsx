import React, { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  FilterIcon,
  SortIcon,
} from "../../atoms/Icons";
import CheckboxList from "../CheckboxList";
import { FilterGroupData } from "../../organisms/FilterGroupList/filterGroupList.config";
import "./index.scss";

type Props = {
  filterData: FilterGroupData;
};

const FilterGroup: React.FC<Props> = ({ filterData }) => {
  const [isShowCheckboxList, setIsShowCheckboxList] = useState(false);

  const handleToggleList = (e: any) => {
    e.preventDefault();
    setIsShowCheckboxList(!isShowCheckboxList);
  };

  return (
    <div className="col c-2-4 filter-group__wrap" onClick={handleToggleList}>
      <div className="filter-group__box">
        <div className="filter-group__box-left">
          {filterData.iconType === "sort" ? (
            <SortIcon height={18} width={18} />
          ) : (
            <FilterIcon />
          )}
          <span className="filter-group__label">{filterData.name}</span>
        </div>
        {isShowCheckboxList ? (
          <ChevronUpIcon height={16} width={16} fill="#141414" />
        ) : (
          <ChevronDownIcon height={16} width={16} fill="#141414" />
        )}
      </div>

      <CheckboxList
        className={isShowCheckboxList ? "active" : ""}
        checkboxListLabel={filterData.filterGroupList || []}
      />
    </div>
  );
};

export default FilterGroup;
