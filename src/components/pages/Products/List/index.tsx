import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
  OrderByDirection,
  WhereFilterOp,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../../firebase";
import routesName from "../../../../routes/enum.routes";
import { IProductItem } from "../../../../types/products";
import Breadcrumb from "../../../atoms/Breadcrumb";
import MainLayout from "../../../layouts/MainLayout";
import ProductListOrganisms from "../../../organisms/ProductList";
import banner_product from "./../../../../assets/images/banner_product.jpg";
import { items } from "./product.config";
import "./index.scss";
import Pagination from "../../../atoms/Pagination";
import FilterGroupList from "../../../organisms/FilterGroupList";
import { FILTER_GROUP_LIST } from "../../../organisms/FilterGroupList/filterGroupList.config";
import SortGroupList from "../../../organisms/SortGroupList";
import { SORT_GROUP_LIST } from "../../../organisms/SortGroupList/sortGroupList.config";

const ProductListPage = () => {
  const [productList, setProductList] = useState<any | IProductItem[]>([]);
  const [arrayQuery, setArrayQuery] = useState([]);

  const handleSortChange = (
    field: string,
    value: string | number | OrderByDirection
  ) => {
    getSortProducts(field, value).then((res) => {
      setProductList(res || []);
    });
  };

  const handleFilterChange = (
    field: string,
    operator: WhereFilterOp,
    value: (number | string)[] | number
  ) => {
    getFilterProducts(field, operator, value).then((res) => {
      setProductList(res);
    });
  };

  const productsCollection = collection(db, "products");

  const getProducts = async () => {
    const data = await getDocs(productsCollection);
    const listData = data.docs?.map((item) => {
      return item.data();
    });
    return listData;
  };

  const getSortProducts = async (
    field: string,
    value: any | OrderByDirection
  ) => {
    const data = await getDocs(
      query(productsCollection, orderBy(field, value))
    );
    const sortProducts = data.docs.map((item) => ({
      ...item.data(),
      id: item.id,
    }));

    return sortProducts;
  };

  const getFilterProducts = async (
    field: string,
    operator: WhereFilterOp,
    value: (number | string)[] | number
  ) => {
    let filterProducts;

    switch (field) {
      case "brand":
        const dataBrand = await getDocs(
          query(productsCollection, where("brand", operator, value))
        );

        filterProducts = dataBrand.docs.map((item) => ({
          ...item.data(),
          id: item.id,
        }));

        break;

      case "gender":
        const dataGender = await getDocs(
          query(productsCollection, where("gender", operator, value))
        );

        filterProducts = dataGender.docs.map((item) => ({
          ...item.data(),
          id: item.id,
        }));
        break;

      case "category":
        const dataCategory = await getDocs(
          query(productsCollection, where("category", operator, value))
        );

        filterProducts = dataCategory.docs.map((item) => ({
          ...item.data(),
          id: item.id,
        }));
        break;

      case "price":
        const dataPrice = await getDocs(
          query(productsCollection, where("price", operator, value))
        );

        filterProducts = dataPrice.docs.map((item) => ({
          ...item.data(),
          id: item.id,
        }));
        break;

      default:
        const data = await getDocs(
          query(productsCollection, where(field, operator, value))
        );

        filterProducts = data.docs.map((item) => ({
          ...item.data(),
          id: item.id,
        }));
        break;
    }

    return filterProducts;
  };

  useEffect(() => {
    getProducts().then((res) => {
      setProductList(res || []);
    });
  }, []);

  return (
    <MainLayout>
      <Breadcrumb items={items} />
      <div className="banner_product">
        <Link to={routesName.ROOT}>
          <img src={banner_product} alt="" />
        </Link>
      </div>

      <div className="container grid wide">
        <div className="grid__row justify-center">
          <div className="product-header">
            <div className="product-header__heading"> Tất cả sản phẩm </div>
            <p className="product-header__description">
              Cập nhật những xu hướng quốc tế nhanh nhất cho phái đẹp, thay đổi
              diện mạo của bạn một cách toàn diện.Một tủ quần áo từ Ted Baker,
              Oasis, Warehouse, Puma,... mà các cô nàng ao ước sẽ khiến bạn trở
              nên hoàn hảo.
            </p>
          </div>
          <div className="c-12 product__sort-filter">
            <div className="sort-group__list">
              {SORT_GROUP_LIST.map((sortData, index) => (
                <SortGroupList
                  key={index}
                  sortData={sortData}
                  onSortChange={handleSortChange}
                />
              ))}
            </div>

            <div className="filter-group__list">
              {FILTER_GROUP_LIST.map((filterData, index) => (
                <FilterGroupList
                  key={index}
                  filterData={filterData}
                  onFilterChange={handleFilterChange}
                />
              ))}
            </div>
          </div>
          <div className="c-12">
            <ProductListOrganisms dataList={productList || []} />
          </div>
        </div>
      </div>

      <Pagination />
    </MainLayout>
  );
};

export default ProductListPage;
