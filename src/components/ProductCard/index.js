import React from "react";
import StyledLink from "../../components/Link/style";

import {
  ImageProduct,
  WrapperProduct,
  ProductTitle,
  ProductPrice,
  ProductLink,
} from "./style";

const ProductCard = ({
  galleryTitle,
  productId,
  productName,
  productPrice,
  productImg,
}) => {
  const priceBRL = productPrice.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <StyledLink to={`/productdetails/${productId}`}>
      <WrapperProduct galleryTitle={galleryTitle}>
        <ImageProduct src={productImg} />
        <ProductTitle>{productName}</ProductTitle>
        <ProductPrice>{priceBRL}</ProductPrice>
        <ProductLink>Ver Produto</ProductLink>
      </WrapperProduct>
    </StyledLink>
  );
};

export default ProductCard;
