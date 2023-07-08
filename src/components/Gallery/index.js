import React, { useEffect, useState } from "react";

import arrow from "../../assets/Icons/arrow-back.svg";

import {
  GalleryTitle,
  WrapperProducts,
  GalleryHeader,
  LinkAllProducts,
  TextAllProducts,
  ArrowIcon,
  WrapperGallery,
} from "./style";
import ProductCard from "../ProductCard";
import { useLocation } from "react-router-dom";

const Gallery = ({
  productCategory,
  galleryTitle,
  wrapperStyle,
  numberOfCards,
  linkComponent,
}) => {
  const [products, setProducts] = useState([]);
  const location = useLocation()

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
  }, []);

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
      <WrapperProducts style={wrapperStyle}>
        {renderCards(numberOfCards)}
      </WrapperProducts>
    </WrapperGallery>
  );
};

export default Gallery;
