import React, { useEffect, useState } from "react";
import { Section, SectionContent } from "./style";
import Gallery from "../../components/Gallery";
import ButtonFill from "../../components/Button/ButtonFill";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/products${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <Section>
      <SectionContent>
        <>{product.id}</>
        <Gallery
          productCategory={""}
          galleryTitle={"Produtos similares"}
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

export default ProductDetails;
