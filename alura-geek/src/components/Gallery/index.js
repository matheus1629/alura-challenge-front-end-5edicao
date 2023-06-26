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

const Gallery = ({ productCategory ,galleryTitle }) => {
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
        setProducts(data.slice(0, 6));
      })
      .catch((err) => console.log(err));
  }, []);

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
        {products.length > 0 &&
          products.map((product) => (
            <ProductCard
            productName={product.name}
              productPrice={product.price}
              productImg={product.img}
            />
          ))}
      </WrapperProducts>
    </WrapperGallery>
  );
};

export default Gallery;
