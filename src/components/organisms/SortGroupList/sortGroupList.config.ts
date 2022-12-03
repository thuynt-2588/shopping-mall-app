import { OrderByDirection } from "firebase/firestore";

export type SortGroupData = {
  name: string;
  sortGroupList: {
    label: string;
    value: number | string | OrderByDirection;
    field: string;
  }[];
};

export const SORT_GROUP_LIST: SortGroupData[] = [
  {
    name: "Sắp xếp theo",
    sortGroupList: [
      { label: "Tên A-Z", value: "asc", field: "name" },
      { label: "Tên Z-A", value: "desc", field: "name" },
      { label: "Giá tăng dần", value: "asc", field: "price" },
      { label: "Giá giảm dần", value: "desc", field: "price" },
    ],
  },
];
