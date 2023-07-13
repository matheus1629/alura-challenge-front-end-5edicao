import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useNavigate, Navigate } from "react-router-dom";
import { useSignIn, useIsAuthenticated } from "react-auth-kit";
import {
  Section,
  InputField,
  TitleLogin,
  InputLabel,
  WrapperInput,
  LoginForm,
} from "./style";
import ButtonFill from "../../components/Button/ButtonFill/index";
import loginValidation from "./loginValidation";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const signIn = useSignIn();
  const isAuthenticated = useIsAuthenticated();
  console.log(isAuthenticated());



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: joiResolver(loginValidation) });

  if (isAuthenticated()) {
    return <Navigate to="/products" replace />;
  }
  
  const fetchUser = async (email) => {
    try {
      const response = await fetch(
        `http://localhost:5000/users?email=${email}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("error");
      return [];
    }
  };

  const onSubmit = async (data) => {
    console.log(data);
    const { email, password } = data;
    const users = await fetchUser(email);

    console.log(users);
    console.log(users.length);

    if (users.length === 0) {
      return setLoginError("Email ou senha inválido");
    }

    if (users[0].email === email && users[0].password === password) {
      const token = users[0].token;
      signIn({
        token: token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { email: users[0].email },
      });
      navigate("/products");
    } else {
      setLoginError("Email ou senha inválido");
    }
  };

  console.log(errors);

  return (
    <Section>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <TitleLogin>Iniciar Sessão</TitleLogin>
        {loginError && <p style={{ color: "red" }}>{loginError}</p>}
        <WrapperInput>
          <InputLabel htmlFor="email">Escreva seu email:</InputLabel>
          <InputField
            {...register("email")}
            name="email"
            placeholder="email"
            id="email"
            type="email"
          ></InputField>
          {errors?.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </WrapperInput>

        <WrapperInput>
          <InputLabel htmlFor="password">Escreva sua senha:</InputLabel>
          <InputField
            {...register("password")}
            name="password"
            placeholder="senha"
            id="password"
            type="password"
          ></InputField>
          {errors?.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
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
