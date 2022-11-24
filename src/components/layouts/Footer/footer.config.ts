import { pageTitle } from "../../../const/pageTitle";
import routesName from "../../../routes/enum.routes";

export interface FooterContent {
  path: string;
  titleHeading: string;
  titleChild: string;
}

export interface Footer {
  title: string;
  child: FooterContent[];
}

export const FooterData: Footer[] = [
  {
    title: "Về Evo Milana",
    child: [
      {
        path: routesName.ROOT,
        titleHeading: "",
        titleChild: pageTitle.HOME,
      },
      {
        path: routesName.INTRODUCE,
        titleHeading: "",
        titleChild: pageTitle.INTRODUCE,
      },
      {
        path: routesName.PRODUCT,
        titleHeading: "",
        titleChild: pageTitle.PRODUCT,
      },
    ],
  },
  {
    title: "Hỗ trợ khách hàng",
    child: [
      {
        path: routesName.ROOT,
        titleHeading: "",
        titleChild: pageTitle.HOME,
      },
      {
        path: routesName.INTRODUCE,
        titleHeading: "",
        titleChild: pageTitle.INTRODUCE,
      },
      {
        path: routesName.PRODUCT,
        titleHeading: "",
        titleChild: pageTitle.PRODUCT,
      },
    ],
  },
  {
    title: "Liên hệ với chúng tôi",
    child: [
      {
        path: "",
        titleHeading: "Địa chỉ:",
        titleChild: "70 Lu Gia, Ward 15, District 11, Ho Chi Minh City",
      },
      {
        path: "",
        titleHeading: "Email:",
        titleChild: "support@sapo.vn",
      },
      {
        path: "",
        titleHeading: "Điện thoại:",
        titleChild: "1900 6750",
      },
      {
        path: "",
        titleHeading: "Zalo:",
        titleChild: "",
      },
    ],
  },
];
