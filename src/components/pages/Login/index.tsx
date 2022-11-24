import Breadcrumb from "../../atoms/Breadcrumb";
import MainLayout from "../../layouts/MainLayout";
import { items, tabs } from "./login.config";
import Tabs from "../../atoms/Tabs";
import LoginForm from "../../organisms/LoginForm";
import "./index.scss";

function LoginPage() {
  return (
    <MainLayout>
      <Breadcrumb items={items} />

      <div className="container grid">
        <div className="grid__row justify-center">
          <div className="grid__column-8">
            <div className="form-login__wrap">
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
                <div className="form-login__input">
                  <Tabs tabs={tabs} />
                  <LoginForm />
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
