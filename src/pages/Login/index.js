import React from "react";
import { useForm } from "react-hook-form";
import {
  Section,
  InputField,
  TitleLogin,
  InputLabel,
  WrapperInput,
  LoginForm,
} from "./style";
import ButtonFill from "../../components/Button/ButtonFill/index";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Section>
      <LoginForm
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <TitleLogin>Iniciar Sessão</TitleLogin>
        <WrapperInput>
          <InputLabel htmlFor="email">Escreva seu email:</InputLabel>
          <InputField
            placeholder="email"
            id="email"
            type="email"
            {...register("email", { required: true })}
          ></InputField>
        </WrapperInput>

        <WrapperInput>
          <InputLabel htmlFor="password">Escreva sua senha:</InputLabel>
          <InputField
            placeholder="senha"
            id="password"
            type="password"
            {...register("password", { required: true })}
          ></InputField>
        </WrapperInput>

        <ButtonFill
          text={"Entrar"}
          width={"var(--button-width, 423px)"}
          height={"var(--button-height, 62px)"}
          to='/products'
        />
      </LoginForm>
    </Section>
  );
};

export default Login;
