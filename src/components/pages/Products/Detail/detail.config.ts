import routesName from "../../../../routes/enum.routes";
import { BreadcrumbValue } from "../../../../types/common";

export const items: BreadcrumbValue[] = [
  { label: "Trang chủ", key: 1, url: routesName.ROOT },
  { label: "Tất cả sản phẩm", key: 2, url: routesName.PRODUCT },
];
