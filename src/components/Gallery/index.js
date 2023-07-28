import React, { useEffect, useState } from "react";

import { TailSpin } from "react-loader-spinner";

import ProductCard from "../ProductCard";
import ErrorMessageAPI from "../ErrorMessageAPI";

import {
  GalleryTitle,
  WrapperProducts,
  GalleryHeader,
  WrapperGallery,
} from "./style";

const Gallery = ({
  productCategory,
  galleryTitle,
  numberOfCards,
  linkComponent,
  ...props
}) => {
  const [products, setProducts] = useState([]);
  const [fetchError, setFetchError] = useState(null);

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
      .catch((error) => setFetchError(error));
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
    <>
      {fetchError ? (
        <ErrorMessageAPI errorMessage={fetchError.message} />
      ) : products.length > 0 ? (
        <WrapperGallery>
          <GalleryHeader>
            <GalleryTitle>{galleryTitle}</GalleryTitle>
            {linkComponent}
          </GalleryHeader>
          <WrapperProducts style={props.wrapperStyle}>
            {renderCards(numberOfCards)}
          </WrapperProducts>
        </WrapperGallery>
      ) : (
        <TailSpin height="100" width="100" color="#a2a2a2" radius="1" />
      )}
    </>
  );
};

export default Gallery;
