import React from "react";
import { Banner, BannerContent } from "./style";
import banner from "../../assets/banner.jpg";
import ButtonFill from '../../components/Button/ButtonFill/index'

const Home = () => {
  return (
    <>
      <Banner icon={banner}>
        <BannerContent>
          <h1>Dezembro Promocional</h1>
          <p>Produtos selecionados com 33% de desconto</p>
         <ButtonFill/>
        </BannerContent>
      </Banner>
    </>
  );
};

export default Home;
