export type FilterGroupData = {
  name: string;
  iconType: string;
  filterGroupList: string[];
};

export const FILTER_GROUP_LIST: FilterGroupData[] = [
  {
    name: "Sắp xếp theo",
    iconType: "sort",
    filterGroupList: [
      "Tên A-Z",
      "Tên Z-A",
      "Hàng mới về",
      "Giá tăng dần",
      "Giá giảm dần",
    ],
  },
  {
    name: "Thương hiệu",
    iconType: "filter",
    filterGroupList: ["CHARLES & KEITH", "Evo Milana"],
  },
];
