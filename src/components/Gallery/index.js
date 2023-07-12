import React, { useEffect, useState } from "react";

import {
  GalleryTitle,
  WrapperProducts,
  GalleryHeader,
  WrapperGallery,
} from "./style";
import ProductCard from "../ProductCard";

const Gallery = ({
  productCategory,
  galleryTitle,
  numberOfCards,
  linkComponent,
  ...props
}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products${productCategory}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, [productCategory]);

  const renderCards = (number) => {
    return (
      products.length > 0 &&
      products
        .slice(0, number)
        .map((product) => (
          <ProductCard
            productName={product.name}
            productPrice={product.price}
            productImg={product.img}
            productId={product.id}
            key={product.id}
          />
        ))
    );
  };

  return (
    <WrapperGallery>
      <GalleryHeader>
        <GalleryTitle>{galleryTitle}</GalleryTitle>
        {linkComponent}
      </GalleryHeader>
      <WrapperProducts style={props.wrapperStyle}>
        {renderCards(numberOfCards)}
      </WrapperProducts>
    </WrapperGallery>
  );
};

export default Gallery;
