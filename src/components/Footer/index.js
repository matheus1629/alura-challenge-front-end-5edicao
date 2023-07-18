import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import {
  FooterAuthor,
  FooterInfo,
  WrapperFooter,
  Logo,
  CompanyInfoLink,
  WrapperCompanyInfo,
  LeftDiv,
  ContactTitle,
  ContactInputName,
  FooterContent,
  InputLabel,
  ContactInputMessage,
  WrapperInput,
  ContactForm,
  InputError,
} from "./style";
import logo from "../../assets/logo.png";
import ButtonFill from "../Button/ButtonFill";
import contactValidation from "./contactValidation";

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
                  <InputLabel htmlFor="name">Nome</InputLabel>
                  <ContactInputName
                    id="name"
                    name="name"
                    type="text"
                    {...register("name")}
                  ></ContactInputName>
                </WrapperInput>

                <WrapperInput>
                  <InputLabel htmlFor="message">
                    Escreva sua mensagem
                  </InputLabel>
                  <ContactInputMessage
                    id="message"
                    name="message"
                    type="textarea"
                    {...register("message")}
                  ></ContactInputMessage>
                </WrapperInput>
                {errors?.name || errors?.message ? (
                  <InputError>Por favor, preencha todos os campos</InputError>
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
              <ButtonFill
                text={"Mensagem enviada!"}
                width={"185px"}
                height={"51px"}
                style={{ backgroundColor: "#34b334", cursor: "auto" }}
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
