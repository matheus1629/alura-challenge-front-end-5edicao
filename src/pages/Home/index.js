import React from "react";
import {
  ArrowIcon,
  Banner,
  BannerContent,
  Section,
  SectionContent,
  Text,
  LinkWrapper,
} from "./style";
import banner from "../../assets/banner.jpg";
import ButtonFill from "../../components/Button/ButtonFill/index";
import Gallery from "../../components/Gallery";
import { useMediaQuery } from "react-responsive";
import arrow from "../../assets/Icons/arrow-back.svg";

const Home = () => {
  const sixCards = useMediaQuery({ query: "(min-width: 1280px)" });
  const fiveCards = useMediaQuery({
    query: "(min-width: 1015px) and (max-width: 1279px)",
  });
  const fourCards = useMediaQuery({
    query: "(min-width: 672px) and (max-width: 1014px)",
  });
  const sixCardsMobile = useMediaQuery({
    query: "(min-width: 361px) and (max-width: 671px)",
  });
  const twoCards = useMediaQuery({ query: "(max-width: 360px)" });

  const numberOfCards = () => {
    return sixCards
      ? 6
      : fiveCards
      ? 5
      : fourCards
      ? 4
      : sixCardsMobile
      ? 6
      : twoCards
      ? 2
      : null;
  };

  const LinkAllProductsComponent = (
    <LinkWrapper>
      <Text>Ver Tudo</Text>
      <ArrowIcon icon={arrow} />
    </LinkWrapper>
  );

  return (
    <>
      <Banner img={banner}>
        <BannerContent>
          <h1>Dezembro Promocional</h1>
          <p>Produtos selecionados com 33% de desconto</p>
          <ButtonFill text={"Ver Consoles"} width={"130px"} height={"51px"} /* to={"/productdetails/"} *//>
        </BannerContent>
      </Banner>
      <Section>
        <SectionContent>
          <Gallery
            productCategory={"?category=star-wars&_limit=6"}
            galleryTitle={"Star Wars"}
            numberOfCards={numberOfCards()}
            linkComponent={LinkAllProductsComponent}
          />
          <Gallery
            productCategory={"?category=console&_limit=6"}
            galleryTitle={"Consoles"}
            numberOfCards={numberOfCards()}
            linkComponent={LinkAllProductsComponent}
          />
          <Gallery
            productCategory={"?category=others&_limit=6"}
            galleryTitle={"Diversos"}
            numberOfCards={numberOfCards()}
            linkComponent={LinkAllProductsComponent}
          />
        </SectionContent>
      </Section>
    </>
  );
};

export default Home;
