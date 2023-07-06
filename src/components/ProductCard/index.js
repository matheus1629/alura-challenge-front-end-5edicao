import React from "react";
import {
  ImageProduct,
  WrapperProduct,
  ProductTitle,
  ProductPrice,
  ProductLink,
} from "./style";

const ProductCard = ({
  galleryTitle,
  productName,
  productPrice,
  productImg,
}) => {
  const priceBRL = productPrice.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <>
      <WrapperProduct galleryTitle={galleryTitle}>
        <ImageProduct src={productImg} />
        <ProductTitle>{productName}</ProductTitle>
        <ProductPrice>{priceBRL}</ProductPrice>
        <ProductLink>Ver Produto</ProductLink>
      </WrapperProduct>
    </>
  );
};

export default ProductCard;
