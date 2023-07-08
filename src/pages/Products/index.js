import React from "react";
import { Section, SectionContent } from "./style";
import Gallery from "../../components/Gallery";

const Products = () => {
  return (
    <Section>
      <SectionContent>
        <Gallery
          productCategory={""}
          galleryTitle={"Todos os produtos"}
          wrapperStyle={{ flexWrap: "wrap" }}
          />
      </SectionContent>
    </Section>
  );
};

export default Products;
