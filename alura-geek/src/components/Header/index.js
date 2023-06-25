import React from "react";
import { Logo, WrapperHeader, WrapperSerchBarLogo } from "./style";
import SearchBar from "../SearchBar";
import logo from "../../assets/logo.png";
import ButtonOutline from "../Button/ButtonOutline";

const Header = () => {
  return (
    <WrapperHeader>
      <WrapperSerchBarLogo>
        <Logo src={logo} />
        <SearchBar />
      </WrapperSerchBarLogo>
      <ButtonOutline text={"Login"}></ButtonOutline>
    </WrapperHeader>
  );
};

export default Header;
