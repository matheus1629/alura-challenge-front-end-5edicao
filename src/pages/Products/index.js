import React from "react";

import ButtonFill from "../../components/Button/ButtonFill";

import { Section, SectionContent } from "./style";
import Paginate from "../../components/Paginate";

const Products = () => {
  return (
    <Section>
      <SectionContent>
        <Paginate
          productCategory={""}
          title={"Todos os produtos"}
          wrapperStyle={{ flexWrap: "wrap" }}
          linkComponent={
            <ButtonFill
              text={"Adicionar produtos"}
              width={"175px"}
              height={"var(--button-height, 51px)"}
              to={"/add-product"}
            />
          }
        />
      </SectionContent>
    </Section>
  );
};

export default Products;
