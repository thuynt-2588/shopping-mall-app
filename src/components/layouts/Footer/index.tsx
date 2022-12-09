import "./index.scss";
import logo from "../../../assets/images/logo.png";
import { FooterData } from "./footer.config";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../../atoms/Icons";
import clsx from "clsx";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid wide">
        <div className="grid__row">
          <div className="col l-3 m-6 c-12">
            <div className="footer__logo">
              <a href="/" title="Evo Milana">
                <img
                  src={logo}
                  alt="Logo Evo Milana"
                  className="footer__logo-image"
                />
              </a>
            </div>
            <div className="footer__content">
              <p>
                Evo Milana là một trong những công ty phân phối thời trang lớn
                nhất trong việc giới thiệu các thương hiệu thời trang cao cấp và
                sang trọng tại Việt Nam.
              </p>
            </div>
            <ul className="footer__social-list">
              <li className="footer__social-item">
                <a
                  href="https://www.facebook.com/"
                  rel="noopener"
                  className="footer__social-item--facebook"
                >
                  <FacebookIcon />
                </a>
              </li>
              <li className="footer__social-item">
                <a
                  href="https://twitter.com/"
                  rel="noopener"
                  className="footer__social-item--twitter"
                >
                  <TwitterIcon />
                </a>
              </li>
              <li className="footer__social-item">
                <a
                  href="https://www.youtube.com/"
                  rel="noopener"
                  className="footer__social-item--youtube"
                >
                  <YoutubeIcon />
                </a>
              </li>
              <li className="footer__social-item">
                <a
                  href="https://www.instagram.com/"
                  rel="noopener"
                  className="footer__social-item--instagram"
                >
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </div>

          {FooterData.map((item, index) => {
            return (
              <div className="col l-3 m-6 c-12" key={index}>
                <h4 className="footer__heading">{item.title}</h4>
                <ul className="footer-list">
                  {item?.child.map((child, index) => (
                    <li className="footer-item" key={index}>
                      <a
                        {...(child.path ? { href: child.path } : {})}
                        className={clsx(
                          child.path
                            ? "footer-item__link"
                            : "footer-item__link--not"
                        )}
                      >
                        <strong>{child.titleHeading}</strong>&nbsp;
                        {child.titleChild}
                      </a>
                    </li>
                  ))}
                </ul>

                {item.title === "Liên hệ với chúng tôi" ? (
                  <div className="footer__store">
                    <a href="/" className="footer__store-link">
                      Hệ thống 10 showroom
                    </a>
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        <div className="grid__row">
          <div className="col l-8 m-6 c-12 footer__info-wrap">
            <div className="footer__info">
              <p>
                Công ty cổ phần Evo Milana - MST: 0000000000 do sở Kế Hoạch và
                Đầu Tư Đà Nẵng cấp ngày 00/00/0000
              </p>
              <p>
                Địa chỉ: 30 Đường 2/9, Phường Bình Hiên, Quận Hải Châu, Đà Nẵng
              </p>
            </div>
          </div>
          <div className="col l-4 m-6 c-12 footer__fanpage-wrap">
            <div className="footer__fanpage">
              <h4 className="footer__fanpage-title">Fanpage</h4>
              <iframe
                height="70px"
                title="fb:page Facebook Social Plugin"
                src="https://www.facebook.com/v4.0/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfd004b6c0161c%26domain%3Devo-milana.mysapo.net%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fevo-milana.mysapo.net%252Ff2c1cda3ab3b4%26relation%3Dparent.parent&amp;container_width=360&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FU-Fit-Shop-561797710650232%2F&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;small_header=true&amp;tabs=&amp;width="
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="grid">
          <p className="footer-text">
            © Bản quyền thuộc về Evo Themes | Cung cấp bởi Sapo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
