import { WhereFilterOp } from "firebase/firestore";

export type FilterGroupData = {
  name: string;
  typeSearch?: string;
  filterGroupList: {
    label: string;
    value: number | string;
    field: string;
    operator: WhereFilterOp;
  }[];
};

export const FILTER_GROUP_LIST: FilterGroupData[] = [
  {
    name: "Thương hiệu",
    typeSearch: "brand",
    filterGroupList: [
      {
        label: "CHARLES & KEITH",
        value: "CHARLES & KEITH",
        field: "brand",
        operator: "in",
      },
      {
        label: "Evo Milana",
        value: "Evo Milana",
        field: "brand",
        operator: "in",
      },
    ],
  },
  {
    name: "Giá sản phẩm",
    typeSearch: "price",
    filterGroupList: [
      {
        label: "Giá dưới 400.000đ",
        value: 400000,
        field: "price",
        operator: "<",
      },
      {
        label: "Giá trên 1.000.000đ",
        value: 1000000,
        field: "price",
        operator: ">",
      },
    ],
  },
  {
    name: "Giới tính",
    typeSearch: "gender",
    filterGroupList: [
      { label: "Nam", value: "Nam", field: "gender", operator: "in" },
      { label: "Nữ", value: "Nữ", field: "gender", operator: "in" },
    ],
  },
];
