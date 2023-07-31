import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { joiResolver } from "@hookform/resolvers/joi";
import { useNavigate, Navigate } from "react-router-dom";
import { useSignIn, useIsAuthenticated } from "react-auth-kit";

import ButtonFill from "../../components/Button/ButtonFill/index";
import loginValidation from "./loginValidation";

import {
  Section,
  TextField,
  TitleLogin,
  InputLabel,
  WrapperInput,
  LoginForm,
  InvalidDataError,
} from "./style";
import { ALL_PRODUCTS } from "../../routes/consts";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const signIn = useSignIn();
  const isAuthenticated = useIsAuthenticated();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: joiResolver(loginValidation) });

  if (isAuthenticated()) {
    return <Navigate to={`${ALL_PRODUCTS}/all/1`} replace />;
  }

  const fetchUser = async (email) => {
    try {
      const response = await fetch(
        `http://localhost:5000/users?email=${email}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const onSubmit = async (data) => {
    const { email, password } = data;
    const users = await fetchUser(email);

    if (users.length === 0) {
      return setLoginError("Email ou senha inválido!");
    }

    if (users[0].email === email && users[0].password === password) {
      const token = users[0].token;
      signIn({
        token: token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { email: users[0].email },
      });
      navigate(`${ALL_PRODUCTS}/all/1`);
    } else {
      setLoginError("Email ou senha inválido!");
    }
  };

  return (
    <Section>
      <LoginForm>
        <TitleLogin>Iniciar Sessão</TitleLogin>

        {loginError && <InvalidDataError>{loginError}</InvalidDataError>}

        <WrapperInput>
          <InputLabel color={errors?.email ? "red" : ""} htmlFor="email">
            Escreva seu email:
          </InputLabel>
          <TextField
            border={errors?.email ? "1px solid red" : ""}
            {...register("email")}
            placeholder="email"
            id="email"
            type="email"
          ></TextField>
        </WrapperInput>

        <WrapperInput>
          <InputLabel color={errors?.password ? "red" : ""} htmlFor="password">
            Escreva sua senha:
          </InputLabel>
          <TextField
            border={errors?.password ? "1px solid red" : ""}
            {...register("password")}
            placeholder="senha"
            id="password"
            type="password"
          ></TextField>
        </WrapperInput>

        <ButtonFill
          text={"Entrar"}
          width={"var(--button-width, 423px)"}
          height={"var(--button-height, 62px)"}
          onClick={handleSubmit(onSubmit)}
        />
      </LoginForm>
    </Section>
  );
};

export default Login;
