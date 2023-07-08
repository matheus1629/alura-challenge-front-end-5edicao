import React from "react";
import { Logo, WrapperHeader, WrapperSerchBarLogo } from "./style";
import SearchBar from "../SearchBar";
import logo from "../../assets/logo.png";
import ButtonOutline from "../Button/ButtonOutline";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <WrapperHeader>
      <WrapperSerchBarLogo>
        <Logo src={logo} />
        <SearchBar
          width={"var(--search-bar-width, 393px)"}
          height={"var(--search-bar-height, 50px)"}
        />
      </WrapperSerchBarLogo>

      {location.pathname === "/" && (
        <ButtonOutline
          text={"Login"}
          width={"var(--button-width, 182px)"}
          height={"var(--button-height, 51px)"}
          to="/login"
        />
      )}
    </WrapperHeader>
  );
};

export default Header;
