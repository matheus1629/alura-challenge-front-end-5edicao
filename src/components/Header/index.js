import React from "react";

import { Link } from "react-router-dom";
import { useIsAuthenticated, useSignOut } from "react-auth-kit";

import SearchBar from "../SearchBar";
import logo from "../../assets/logo.png";
import ButtonOutline from "../Button/ButtonOutline";
import { ADD_PRODUCT, HOME, LOGIN } from "../../routes/consts";

import {
  Logo,
  WrapperButtons,
  WrapperHeader,
  WrapperSerchBarLogo,
} from "./style";

const Header = () => {
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();

  return (
    <WrapperHeader>
      <WrapperSerchBarLogo>
        <Link to={HOME}>
          <Logo alt="Logo Alura Geek" src={logo} />
        </Link>
        <SearchBar
          width={"var(--search-bar-width, 393px)"}
          height={"var(--search-bar-height, 50px)"}
        />
      </WrapperSerchBarLogo>

      {!isAuthenticated() ? (
        <ButtonOutline
          text={"Login"}
          width={"var(--button-width, 170px)"}
          height={"var(--button-height, 51px)"}
          to={LOGIN}
        />
      ) : (
        <WrapperButtons>
          <ButtonOutline
            text={"Adicionar produto"}
            width={"var(--button-width, 170px)"}
            height={"var(--button-height, 51px)"}
            to={ADD_PRODUCT}
          />
          <ButtonOutline
            text={"Logout"}
            width={"var(--button-width, 170px)"}
            height={"var(--button-height, 51px)"}
            onClick={() => signOut()}
            to={HOME}
          />
        </WrapperButtons>
      )}
    </WrapperHeader>
  );
};

export default Header;
