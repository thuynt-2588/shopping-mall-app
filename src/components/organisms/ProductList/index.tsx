import React from "react";
import { IProductItem } from "../../../types/products";
import ProductItem from "../../molecules/ProductItem";
import "./index.scss";

type Props = {
  dataList: IProductItem[];
};

const ProductListOrganisms: React.FC<Props> = ({ dataList }) => {
  return (
    <div className="product-list">
      {dataList.map((item) => (
        <ProductItem key={item.id} dataItem={item} />
      ))}
    </div>
  );
};

export default ProductListOrganisms;
