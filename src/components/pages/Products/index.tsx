import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../firebase";
import routesName from "../../../routes/enum.routes";
import { IProductItem } from "../../../types/products";
import Breadcrumb from "../../atoms/Breadcrumb";
import MainLayout from "../../layouts/MainLayout";
import ProductListOrganisms from "../../organisms/ProductList";
import banner_product from "./../../../assets/images/banner_product.jpg";
import { items } from "./product.config";
import "./index.scss";
import Pagination from "../../atoms/Pagination";
import FilterGroupList from "../../organisms/FilterGroupList";
import { FILTER_GROUP_LIST } from "../../organisms/FilterGroupList/filterGroupList.config";

const ProductPage = () => {
  const [productList, setProductList] = useState<any | IProductItem[]>([]);

  const fetchProducts = async () => {
    const data = await getDocs(collection(db, "products"));
    const listData = data.docs?.map((item) => {
      return item.data();
    });
    return listData;
  };

  useEffect(() => {
    fetchProducts().then((res) => {
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
          <FilterGroupList filterGroupList={FILTER_GROUP_LIST} />
          <div className="c-12">
            <ProductListOrganisms dataList={productList || []} />
          </div>
        </div>
      </div>

      <Pagination />
    </MainLayout>
  );
};

export default ProductPage;
