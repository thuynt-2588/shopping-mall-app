import React from "react";
import FilterGroup from "../../molecules/FilterGroup";
import { FilterGroupData } from "./filterGroupList.config";
import "./index.scss";

type Props = {
  filterGroupList: FilterGroupData[];
};

const FilterGroupList: React.FC<Props> = ({ filterGroupList }) => {
  return (
    <div className="c-12 filter-group__list">
      {filterGroupList.map((filterData, index) => (
        <FilterGroup key={index} filterData={filterData} />
      ))}
    </div>
  );
};

export default FilterGroupList;
