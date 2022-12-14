import { useContext } from "react";
import logo from "../../../assets/images/logo.png";
import Button from "../../atoms/Button";
import { BagShoppingIcon, BarsIcon, SearchIcon } from "../../atoms/Icons";
import { HomeContext } from "../../pages/Home/context/HomeContext";
import "./index.scss";

const Header = () => {
  const { onToggleSidebar } = useContext(HomeContext);

  return (
    <header className="header">
      <div className="container grid wide">
        <div className="header__navbar">
          <div className="header__menu">
            <Button className="header__menu-button" onClick={onToggleSidebar}>
              <BarsIcon className="header__menu-icon" />
            </Button>
          </div>
          <div className="header__logo">
            <a href="/" className="header__logo-link">
              <img
                src={logo}
                alt="Logo Evo Milana"
                className="header__logo-image"
              />
            </a>
          </div>
          <div className="header__with-search-cart">
            <div className="header__search">
              <SearchIcon className="header__search-icon" />
            </div>
            <div className="header__cart">
              <div className="header__cart-wrap">
                <BagShoppingIcon className="header__cart-icon" />
                <span className="header__cart-notice">3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
