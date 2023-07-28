import React from "react";

import { useMediaQuery } from "react-responsive";

import ButtonFill from "../../components/Button/ButtonFill/index";
import Gallery from "../../components/Gallery";
import banner from "../../assets/banner.jpg";
import StyledLink from "../../components/Link/style";

import {
  ArrowIcon,
  Banner,
  BannerContent,
  Section,
  SectionContent,
  Text,
} from "./style";

const Home = () => {
  const sixCards = useMediaQuery({ query: "(min-width: ${TABLET_BREAKPOINT})" });
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

  const LinkAllProductsComponent = ({ to }) => (
    <StyledLink to={to}>
      <Text>Ver Tudo</Text>
      <ArrowIcon />
    </StyledLink>
  );

  return (
    <>
      <Banner img={banner}>
        <BannerContent>
          <h1>Dezembro Promocional</h1>
          <p>Produtos selecionados com 33% de desconto</p>
          <ButtonFill
            text={"Ver Consoles"}
            width={"130px"}
            height={"51px"}
            to={"/allproducts/console/1"}
          />
        </BannerContent>
      </Banner>
      <Section>
        <SectionContent>
          <Gallery
            productCategory={"?category=star-wars&_limit=6"}
            galleryTitle={"Star Wars"}
            numberOfCards={numberOfCards()}
            linkComponent={
              <LinkAllProductsComponent
                to={"/allproducts/star-wars/1"}
              />
            }
          />
          <Gallery
            productCategory={"?category=console&_limit=6"}
            galleryTitle={"Consoles"}
            numberOfCards={numberOfCards()}
            linkComponent={
              <LinkAllProductsComponent to={"/allproducts/console/1"} />
            }
          />
          <Gallery
            productCategory={"?category=others&_limit=6"}
            galleryTitle={"Diversos"}
            numberOfCards={numberOfCards()}
            linkComponent={
              <LinkAllProductsComponent to={"/allproducts/others/1"} />
            }
          />
        </SectionContent>
      </Section>
    </>
  );
};
export default Home;
