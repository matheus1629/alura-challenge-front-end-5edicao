import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useNavigate } from "react-router-dom";
import { useSignIn, useAuthHeader, PrivateRoute } from "react-auth-kit";
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
  const signIn = useSignIn(); // usar o hook useSignIn
  const authHeader = useAuthHeader(); // usar o hook useAuthHeader

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: joiResolver(loginValidation) });

  const fetchUser = async (email, password) => {
    try {
      const response = await fetch(
        `http://localhost:5000/users?email=${email}&password=${password}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  

  const onSubmit = async (data) => {
    console.log(data);
    const { email, password } = data;
    const user = await fetchUser(email, password);
    if (user.length > 0) {
      // login bem sucedido
      const token = user[0].token; // obter o token do usuário
      signIn({
        token: token,
        expiresIn: 3600, // tempo em segundos que o token é válido
        tokenType: "Bearer", // tipo do token
        authState: { email: user[0].email }, // dados adicionais do usuário
      }); // usar o hook useSignIn para fazer o login
      navigate("/products"); // ir para a rota /products

    } else {
      // login falhou
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
            <p style={{ color: "red" }}>{errors.email.message}</p>
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
