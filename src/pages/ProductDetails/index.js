import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Gallery from "../../components/Gallery";

import {
  ProductDescription,
  ProductImg,
  ProductInfo,
  ProductPrice,
  ProductTitle,
  ProductWrapper,
  Section,
  SectionContent,
} from "./style";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`, {
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
  }, [id]);

  const priceBRL = product?.price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Section>
      <SectionContent>
        <ProductWrapper>
          <ProductImg src={product?.img} />
          <ProductInfo>
            <ProductTitle>{product?.name}</ProductTitle>
            <ProductPrice>{priceBRL}</ProductPrice>
            <ProductDescription>{product?.description}</ProductDescription>
          </ProductInfo>
        </ProductWrapper>
        {product && (
          <Gallery
            productCategory={`?category=${product.category}&id_ne=${id}&_limit=6`}
            galleryTitle={"Produtos similares"}
            wrapperStyle={{ flexWrap: "wrap" }}
          />
        )}
      </SectionContent>
    </Section>
  );
};

export default ProductDetails;
