import React from "react";
import { Logo, WrapperHeader, WrapperSerchBarLogo } from "./style";
import SearchBar from "../SearchBar";
import logo from "../../assets/logo.png";
import ButtonOutline from "../Button/ButtonOutline";
import { Link, useLocation } from "react-router-dom";
import ButtonFill from "../Button/ButtonFill";

const Header = () => {
  const location = useLocation();

  return (
    <WrapperHeader>
      <WrapperSerchBarLogo>
        <Link to={"/"}>
          <Logo src={logo} />
        </Link>
        <SearchBar
          width={"var(--search-bar-width, 393px)"}
          height={"var(--search-bar-height, 50px)"}
        />
      </WrapperSerchBarLogo>

      {location.pathname === "/" ? (
        <ButtonOutline
          text={"Login"}
          width={"var(--button-width, 182px)"}
          height={"var(--button-height, 51px)"}
          to="/login"
        />
      ) : location.pathname === "/addproduct" ? (
        <ButtonOutline
          text={"Menu administrador"}
          width={"var(--button-width, 185px)"}
          height={"var(--button-height, 51px)"}
          to="/products"
        />
      ) : null}
    </WrapperHeader>
  );
};

export default Header;
