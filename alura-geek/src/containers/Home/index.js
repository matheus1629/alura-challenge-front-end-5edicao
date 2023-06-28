import React from "react";
import { Banner, BannerContent, Section } from "./style";
import banner from "../../assets/banner.jpg";
import ButtonFill from "../../components/Button/ButtonFill/index";
import Gallery from "../../components/Gallery";

const Home = () => {
  return (
    <>
      <Banner img={banner}>
        <BannerContent>
          <h1>Dezembro Promocional</h1>
          <p>Produtos selecionados com 33% de desconto</p>
          <ButtonFill text={"Ver Consoles"} width={'130px'} height={'51px'} />
        </BannerContent>
      </Banner>
      <Section>
        <Gallery
          productCategory={"star-wars-products"}
          galleryTitle={"Star Wars"}
        />
        <Gallery
          productCategory={"consoles-products"}
          galleryTitle={"Consoles"}
        />
        <Gallery
          productCategory={"others-products"}
          galleryTitle={"Diversos"}
        />
      </Section>
    </>
  );
};

export default Home;
