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
import MediaQuery from "react-responsive";

const Gallery = ({ productCategory, galleryTitle }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/${productCategory}`, {
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
        <LinkAllProducts>
          <TextAllProducts>Ver Tudo</TextAllProducts>
          <ArrowIcon icon={arrow} />
        </LinkAllProducts>
      </GalleryHeader>
      <WrapperProducts>
        <MediaQuery minWidth={1280}>{renderCards(6)}</MediaQuery>
        <MediaQuery minWidth={1015} maxWidth={1279}>
          {renderCards(5)}
        </MediaQuery>
        <MediaQuery minWidth={672} maxWidth={1014}>
          {renderCards(4)}
        </MediaQuery>
        <MediaQuery minWidth={361} maxWidth={671}>
          {renderCards(6)}
        </MediaQuery>
        <MediaQuery maxWidth={360}>{renderCards(2)}</MediaQuery>
      </WrapperProducts>
    </WrapperGallery>
  );
};

export default Gallery;
