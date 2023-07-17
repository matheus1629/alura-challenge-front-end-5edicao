import React from "react";
import { Logo, WrapperHeader, WrapperSerchBarLogo } from "./style";
import SearchBar from "../SearchBar";
import logo from "../../assets/logo.png";
import ButtonOutline from "../Button/ButtonOutline";
import { Link, useLocation } from "react-router-dom";
import { useIsAuthenticated, useSignOut } from "react-auth-kit";

const Header = () => {
  const location = useLocation();
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();

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

      {(location.pathname === "/" ||
        location.pathname.startsWith("/productdetails/")) &&
      !isAuthenticated() ? (
        <ButtonOutline
          text={"Login"}
          width={"var(--button-width, 182px)"}
          height={"var(--button-height, 51px)"}
          to="/login"
        />
      ) : (location.pathname === "/" ||
          location.pathname.startsWith("/productdetails/")) &&
        isAuthenticated() ? (
        <ButtonOutline
          text={"Menu administrador"}
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
      ) : location.pathname === "/products" ? (
        <ButtonOutline
          text={"Logout"}
          width={"var(--button-width, 185px)"}
          height={"var(--button-height, 51px)"}
          onClick={() => signOut()}
          to="/"
        />
      ) : null}
    </WrapperHeader>
  );
};

export default Header;
