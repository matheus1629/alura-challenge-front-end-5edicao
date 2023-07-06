import styled from "styled-components";

export const WrapperFooter = styled.footer`
  display: flex;
  flex-direction: column;
`;

export const FooterInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 115px;
  background: ${(props) => props.theme["light-blue"]};
`;

export const FooterContent = styled.div`
  display: flex;
  margin: 64px 0px;
  max-width: 1136px;
  width: 80%;
  align-items: flex-start;
  gap: 112px;
  background: ${(props) => props.theme["light-blue"]};

  @media (max-width: 1280px) {
    width: 100%;
    padding: 0rem 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;

export const Logo = styled.img`
  background-color: ${(props) => props.theme["light-blue"]};
`;

export const LeftDiv = styled.div`
  display: flex;

  flex-direction: row;
  align-items: flex-start;
  gap: 112px;
  background-color: ${(props) => props.theme["light-blue"]};

  @media (max-width: 1280px) {
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
`;

export const WrapperCompanyInfo = styled.div`
  display: flex;
  width: 254px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  background-color: ${(props) => props.theme["light-blue"]};
`;

export const CompanyInfoLink = styled.a`
  color: ${(props) => props.theme["black-3"]};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${(props) => props.theme["light-blue"]};

  @media(max-width:768px){
    margin: auto;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
  background-color: ${(props) => props.theme["light-blue"]};

  @media (max-width: 768px) {
    width: 80%;
  }
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
  font-size: 12px;
  color: #999;
`;

export const ContactInputName = styled.input`
  padding: 20px 12px 7px 16px;
  width: 100%;
  height: 55px;
  border-width: 0px;
  border-radius: 4px;
  background-color: ${(props) => props.theme["white"]};

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
  background-color: ${(props) => props.theme["white"]};

  &:focus {
    outline: none;
  }
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
