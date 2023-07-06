import React from "react";
import { useForm } from "react-hook-form";

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
} from "./style";
import logo from "../../assets/logo.png";
import ButtonFill from "../Button/ButtonFill";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
          <ContactForm
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <ContactTitle>Fale Conosco</ContactTitle>
            <WrapperInput>
              <InputLabel htmlFor="nome">Nome</InputLabel>
              <ContactInputName
                id="nome"
                type="text"
                maxLength="60"
                {...register("name", { required: true })}
              ></ContactInputName>
            </WrapperInput>

            <WrapperInput>
              <InputLabel htmlFor="message">Escreva sua mensagem</InputLabel>
              <ContactInputMessage
                id="message"
                type="textarea"
              ></ContactInputMessage>
            </WrapperInput>

            <ButtonFill
              text={"Enviar Mensagem"}
              width={"165px"}
              height={"51px"}
            />
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
