import styled from "styled-components";

export const WrapperFooter = styled.footer`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  background-color: ${(props) => props.theme["light-blue"]};
`;

export const WrapperCompanyInfo = styled.div`
  display: flex;
  width: 176px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  background-color: ${(props) => props.theme["light-blue"]};
`;

export const LeftDiv = styled.div`
  display: flex;
  width: 254px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  background-color: ${(props) => props.theme["light-blue"]};
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
  background-color: ${(props) => props.theme["light-blue"]};
`;

export const ContactTitle = styled.h1`
  color: ${(props) => props.theme["black-3"]};
  font-size: 16px;
  font-weight: 700;
  background-color: ${(props) => props.theme["light-blue"]};
`;

export const WrapperInput = styled.label`
  position: relative;
  gap: 7px;
  width: 100%;
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 8px;
  left: 12px;
  background-color: ${(props) => props.theme["white"]};
  padding: 0 5px;
  font-size: 12px;
  color: #999;
`;

export const ContactInputName = styled.input`
  padding: 20px 12px 7px 16px;
  width: 100%;
  height: 55px;
  border-width: 0px;
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`;

export const ContactInputMessage = styled.textarea`
  padding: 25px 12px 7px 16px;
  width: 100%;
  height: 81px;
  border-width: 0px;
  border-radius: 4px;

  resize: none;

  &:focus {
    outline: none;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  width: 1136px;
  align-items: flex-start;
  gap: 112px;
  background: ${(props) => props.theme["light-blue"]};
`;

export const CompanyInfoLink = styled.a`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  color: ${(props) => props.theme["black-3"]};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${(props) => props.theme["light-blue"]};
`;

export const FooterInfo = styled.div`
  display: flex;
  padding: 64px;
  justify-content: center;
  align-items: center;
  gap: 115px;
  align-self: stretch;
  background: ${(props) => props.theme["light-blue"]};
`;

export const CompanyInfo = styled.div`
  display: flex;
  width: 254px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const Contact = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
`;

export const FooterAuthor = styled.div`
  display: flex;
  padding: 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  text-align: center;
  font-weight: 500;
`;
