import React from "react";

import Gallery from "../../components/Gallery";
import ButtonFill from "../../components/Button/ButtonFill";

import { Section, SectionContent } from "./style";
const Products = () => {
  return (
    <Section>
      <SectionContent>
        <Gallery
          productCategory={""}
          galleryTitle={"Todos os produtos"}
          wrapperStyle={{ flexWrap: "wrap" }}
          linkComponent={
            <ButtonFill
              text={"Adicionar produtos"}
              width={"175px"}
              height={"var(--button-height, 51px)"}
              to={"/addproduct"}
            />
          }
        />
      </SectionContent>
    </Section>
  );
};

export default Products;
