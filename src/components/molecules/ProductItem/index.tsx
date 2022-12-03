import { useState } from "react";
import { Link } from "react-router-dom";
import { IProductItem } from "../../../types/products";
import Button from "../../atoms/Button";
import { HeartFilledIcon, HeartIcon } from "../../atoms/Icons";
import "./index.scss";

type Props = {
  dataItem: IProductItem;
};

const ProductItem: React.FC<Props> = ({ dataItem }) => {
  const listColor = dataItem.images.map((img) => {
    return img.color;
  });
  const listColorButton = Array.from(new Set(listColor));

  const [activeColor, setActiveColor] = useState("white");

  return (
    <div className="l-2-4 m-4 c-6 product-box">
      <Link className="product-item" to={`/product/${dataItem.id}`}>
        <div className="product-item__header">
          <img
            className="product-item__header-img"
            src={dataItem.images.find((img) => img.color === activeColor)?.url}
            alt=""
          />
          <div className="product-item__header-sale-off">
            <span className="product-item__header-sale-off-percent">
              {dataItem.sale_off_percent}%
            </span>
          </div>
          <div className="product-item__header-action">
            <span className="product-item__header-like product-item__header-like--liked">
              {dataItem.favorite ? (
                <HeartIcon className="product-item__header-like-icon" />
              ) : (
                <HeartFilledIcon className="product-item__header-like-icon" />
              )}
            </span>
          </div>
        </div>
        <div className="product-item__content">
          <div className="product-item__content-price">
            <span className="product-item__content-price-current">
              {dataItem.price}₫
            </span>
            <span className="product-item__content-price-old">
              {(dataItem.price * dataItem.sale_off_percent) / 100}₫
            </span>
          </div>
          <h4 className="product-item__content-name">{dataItem.name}</h4>
        </div>
      </Link>

      <div className="product-color">
        {listColorButton.map((color, index) => {
          return (
            <Button
              key={index}
              className={`btn--color bg-${color} ${
                color === activeColor ? "border-active" : ""
              }`}
              onClick={() => setActiveColor(color)}
            ></Button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductItem;
