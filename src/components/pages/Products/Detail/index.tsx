import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../../firebase";
import { IProductItem } from "../../../../types/products";
import { formatPrice } from "../../../../utilities/validator";
import Breadcrumb from "../../../atoms/Breadcrumb";
import Button from "../../../atoms/Button";
import { HeartIcon, SearchIcon } from "../../../atoms/Icons";
import MainLayout from "../../../layouts/MainLayout";
import ImageViewerModal from "../../../molecules/ImageViewerModal";
import CarouselSlide from "../../../organisms/CarouselSlides";
import { items } from "./detail.config";
import "./index.scss";

const ProductDetail = () => {
  const { id } = useParams();

  const [openModal, setOpenModal] = useState(false);
  const [amount, setAmount] = useState(1);
  const [productDetail, setProductDetail] = useState<IProductItem>();

  const handleShowModal = (e: any) => {
    e.preventDefault();
    setOpenModal(true);
  };

  const handleAmountDecrease = () => {
    setAmount(amount - 1);
  };

  const handleAmountIncrease = () => {
    setAmount(amount + 1);
  };

  const productsCollectionRef = doc(db, "products/" + id);

  const getProductDetail = async () => {
    const detail = await getDoc(productsCollectionRef);
    const productDetail = detail.data();
    return productDetail;
  };

  useEffect(() => {
    getProductDetail().then((res) => {
      setProductDetail(res as IProductItem);
    });
  }, [id]);

  const listColor = productDetail?.images.map((img) => {
    return img.color;
  });
  const listColorButton = Array.from(new Set(listColor));

  const listImg = productDetail?.images.map((img) => {
    return img.url;
  });
  const listImgs = Array.from(new Set(listImg));

  const [activeColor, setActiveColor] = useState("white");

  return (
    <MainLayout>
      <Breadcrumb items={items} />
      <div className="container grid wide">
        <div className="grid__row justify-center">
          <div className="c-12 product-detail">
            <div className="col c-6 grid__row product-detail-left">
              <div className="col c-2 product-detail-slider">
                <CarouselSlide listImgs={listImgs} />
              </div>
              <div className="col c-10 product-detail-img">
                <a
                  href="/"
                  title="Click để xem"
                  className=""
                  onClick={handleShowModal}
                >
                  <img
                    src={
                      productDetail?.images.find(
                        (img) => img.color === activeColor
                      )?.url
                    }
                    alt=""
                  />
                </a>
                <div className="product-detail-img-txt">
                  <SearchIcon />
                  <span>Click chuột lên hình để phóng to</span>
                </div>
              </div>
            </div>

            <div className="col c-6 product-detail-right">
              <div className="product-detail-wrap">
                <h3 className="product-detail-wrap__brand">
                  {productDetail?.brand}
                </h3>
                <div className="product-detail-wrap__heading">
                  <div className="product-detail-wrap__heading-name">
                    {productDetail?.name}
                  </div>
                  <div className="product-detail-wrap__heading-favorite">
                    <span className="product-detail-wrap__heading--like product-detail-wrap__heading--like--liked">
                      <HeartIcon className="product-detail-wrap__heading--like-icon" />
                    </span>
                  </div>
                </div>
                <div className="product-detail-wrap__product-id">
                  {productDetail?.id}
                </div>
                <div className="product-detail-wrap__content">
                  <div className="product-detail-wrap__content-price">
                    <span className="product-detail-wrap__content-price-current">
                      {formatPrice(productDetail?.price ?? 0)}₫
                    </span>
                    <span className="product-detail-wrap__content-price-old">
                      {formatPrice(
                        ((productDetail?.price as number) *
                          (productDetail?.sale_off_percent as number)) /
                          100
                      )}
                      ₫
                    </span>

                    <span className="product-detail-wrap__content-sale-off">
                      {productDetail?.sale_off_percent}%
                    </span>
                  </div>
                </div>
                <div className="product-detail-wrap__color">
                  <div className="product-detail-wrap__title">Màu sắc</div>
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
                <div className="product-detail-wrap__size">
                  <div className="product-detail-wrap__title">Size</div>
                  <ul className="product-detail-wrap__size-ul">
                    <li className="product-detail-wrap__size-li">
                      <Button className="btn--size active" onClick={() => {}}>
                        S
                      </Button>
                    </li>
                    <li className="product-detail-wrap__size-li">
                      <Button className="btn--size" onClick={() => {}}>
                        M
                      </Button>
                    </li>
                    <li className="product-detail-wrap__size-li">
                      <Button className="btn--size" onClick={() => {}}>
                        L
                      </Button>
                    </li>
                  </ul>
                </div>
                <div className="product-detail-wrap__cart">
                  <div className="product-detail-wrap__cart-amount">
                    <Button
                      className="product-detail-wrap__cart-decrease"
                      onClick={handleAmountDecrease}
                    >
                      -
                    </Button>
                    <input
                      type="number"
                      className="product-detail-wrap__cart-input"
                      value={amount}
                    ></input>
                    <Button
                      className="product-detail-wrap__cart-increase"
                      onClick={handleAmountIncrease}
                    >
                      +
                    </Button>
                  </div>
                  <Button
                    className="product-detail-wrap__cart-add-btn"
                    onClick={() => {}}
                  >
                    Thêm vào giỏ
                  </Button>
                </div>
                <div className="clearfix product-detail-wrap__description">
                  <div className="product-detail-wrap__description-heading">
                    Thông tin sản phẩm
                  </div>
                  <div className="product-detail-wrap__description-detail"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {openModal && <ImageViewerModal closeModal={() => setOpenModal(false)} />}
    </MainLayout>
  );
};

export default ProductDetail;
