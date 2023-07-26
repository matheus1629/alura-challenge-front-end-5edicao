import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import logo from "../../assets/logo.png";
import ButtonFill from "../Button/ButtonFill";
import contactValidation from "./contactValidation";
import MessageCard from "../MessageCard";

import {
  FooterAuthor,
  FooterInfo,
  WrapperFooter,
  Logo,
  CompanyInfoLink,
  WrapperCompanyInfo,
  LeftDiv,
  ContactTitle,
  FooterContent,
  InputLabel,
  WrapperInput,
  ContactForm,
  InputError,
  TextField,
  TextAreaField,
} from "./style";

const Footer = () => {
  const location = useLocation();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ resolver: joiResolver(contactValidation) });

  const onSubmit = async (data) => {
    try {
      await fetch("http://localhost:5000/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error(error);
    }

    reset();
  };

  useEffect(() => {
    reset();
  }, [location, reset]);

  return (
    <WrapperFooter>
      <FooterInfo>
        <FooterContent>
          <LeftDiv>
            <Logo src={logo} />
            <WrapperCompanyInfo>
              <CompanyInfoLink>Quem somos nós</CompanyInfoLink>
              <CompanyInfoLink>Política de privacidade</CompanyInfoLink>
              <CompanyInfoLink>Programa fidelidade</CompanyInfoLink>
              <CompanyInfoLink>Nossas lojas</CompanyInfoLink>
              <CompanyInfoLink>Quero ser franqueado</CompanyInfoLink>
              <CompanyInfoLink>Anuncie aqui</CompanyInfoLink>
            </WrapperCompanyInfo>
          </LeftDiv>
          <ContactForm>
            <ContactTitle>Fale Conosco</ContactTitle>

            {!isSubmitSuccessful ? (
              <>
                <WrapperInput>
                  <InputLabel color={errors?.name ? "red" : ""} htmlFor="name">
                    Nome
                  </InputLabel>
                  <TextField
                    bordercolor={errors?.name ? "1px solid red" : ""}
                    id="name"
                    type="text"
                    {...register("name")}
                  ></TextField>
                </WrapperInput>

                <WrapperInput>
                  <InputLabel
                    color={errors?.message ? "red" : ""}
                    htmlFor="message"
                  >
                    Escreva sua mensagem
                  </InputLabel>
                  <TextAreaField
                    bordercolor={errors?.message ? "1px solid red" : ""}
                    id="message"
                    {...register("message")}
                  ></TextAreaField>
                </WrapperInput>
                {errors?.name || errors?.message ? (
                  <InputError>Por favor, preencha todos os campos.</InputError>
                ) : (
                  ""
                )}
                <ButtonFill
                  text={"Enviar Mensagem"}
                  width={"185px"}
                  height={"51px"}
                  onClick={handleSubmit(onSubmit)}
                />
              </>
            ) : (
              <MessageCard
                text="Mensagem enviada!"
                width={"250px"}
                height={"51px"}
                fontSize={"1rem)"}
                fontSizeIcon={"35px"}
              />
            )}
          </ContactForm>
        </FooterContent>
      </FooterInfo>
      <FooterAuthor>
        Desenvolvido por Matheus Palermo <br />
        2023
      </FooterAuthor>
    </WrapperFooter>
  );
};

export default Footer;
