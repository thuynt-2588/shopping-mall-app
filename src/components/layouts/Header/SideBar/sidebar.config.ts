import routesName from "../../../../routes/enum.routes";

export interface Routes {
  path: string;
  title: string;
  routes?: Routes[];
}

export const SidebarData: Routes[] = [
  {
    path: routesName.ROOT,
    title: "Trang chủ",
  },
  {
    path: routesName.INTRODUCE,
    title: "Giới thiệu",
    routes: [
      {
        path: routesName.INTRODUCE_EVO_MILANA,
        title: "Giới thiệu Evo Milana",
      },
      {
        path: routesName.INTRODUCE_SHOP_SYSTEM,
        title: "Hệ thống cửa hàng",
      },
    ],
  },
  {
    path: routesName.PRODUCT,
    title: "Sản phẩm",
    routes: [
      {
        path: routesName.PRODUCT_SKIN,
        title: "Trang phục",
        routes: [
          {
            path: routesName.PRODUCT_SKIN_SHIRT,
            title: "Áo",
          },
          {
            path: routesName.PRODUCT_SKIN_DRESS,
            title: "Đầm",
          },
          {
            path: routesName.PRODUCT_SKIN_SKIRT,
            title: "Váy",
          },
        ],
      },
      {
        path: routesName.PRODUCT_FOOTWEAR,
        title: "Giày dép",
      },
    ],
  },
  {
    path: routesName.LOGIN,
    title: "Đăng nhập",
  },
  {
    path: routesName.REGISTER,
    title: "Đăng ký",
  },
];
