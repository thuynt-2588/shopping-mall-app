import Breadcrumb from "../../atoms/Breadcrumb";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import MainLayout from "../../layouts/MainLayout";
import { items, tabs } from "./login.config";
import Link from "../../atoms/Link";
import "./index.scss";
import Tabs from "../../atoms/Tabs";

function LoginPage() {
  return (
    <MainLayout>
      <Breadcrumb items={items} />

      <div className="container grid">
        <div className="grid__row justify-center">
          <div className="grid__column-8">
            <div className="form-login">
              <div className="grid__column-6">
                <div className="banner-login">
                  <div className="banner-login__title">
                    QUYỀN LỢI THÀNH VIÊN
                  </div>
                  <div className="banner-login__content">
                    <p>Mua hàng khắp thế giới cực dễ dàng, nhanh chóng</p>
                    <p>
                      Theo dõi chi tiết đơn hàng, địa chỉ thanh toán dễ dàng
                    </p>
                    <p>Nhận nhiều chương trình ưu đãi hấp dẫn từ chúng tôi</p>
                  </div>
                </div>
              </div>
              <div className="grid__column-6">
                <div className="form-login">
                  <Tabs tabs={tabs} />
                  <div className="form-login__wrap">
                    <form className="form-login__box">
                      <Input
                        type="text"
                        label="Email"
                        required
                        name="email"
                        placeholder="Nhập Địa chỉ Email"
                        onChange={() => console.log("first")}
                      />
                      <Input
                        type="password"
                        label="Mật khẩu"
                        required
                        name="password"
                        placeholder="Nhập Mật khẩu"
                        onChange={() => console.log("first")}
                      />
                      <div className="txt-forget">
                        <Link href="#" onClick={() => console.log("first")}>
                          Quên mật khẩu?
                        </Link>
                      </div>
                      <Button
                        className="btn btn-primary btn-login"
                        onClick={() => console.log("first")}
                      >
                        Đăng nhập
                      </Button>
                      <p className="txt-notes">
                        Evo Milana cam kết bảo mật và sẽ không bao giờ đăng{" "}
                        <br /> hay chia sẻ thông tin mà chưa có được sự đồng ý
                        của bạn.
                      </p>
                    </form>
                    <div className="form-login__break-line">
                      <span>hoặc đăng nhập qua</span>
                    </div>

                    <ul className="form-login__social-list">
                      <li className="form-login__social-item">
                        <a href="https://www.facebook.com/" rel="noopener">
                          <img
                            src={
                              require("../../../assets/icons/fb-icon.svg")
                                .default
                            }
                            alt=""
                          />
                        </a>
                      </li>

                      <li className="form-login__social-item">
                        <a href="https://accounts.google.com/" rel="noopener">
                          <img
                            src={
                              require("../../../assets/icons/gg-icon.svg")
                                .default
                            }
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default LoginPage;
