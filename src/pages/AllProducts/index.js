import React, { useEffect, useState } from "react";
import { Section, SectionContent } from "./style";
import Gallery from "../../components/Gallery";
import { useLocation } from "react-router-dom";

const AllProducts = () => {
  const location = useLocation();
  const [galleryTitle, setGalleryTitle] = useState();
  const [productCategory, setProductCategory] = useState();

  useEffect(() => {
    switch (location.pathname) {
      case "/allproducts/star-wars":
        setGalleryTitle("Star Wars");
        setProductCategory("?category=star-wars");
        break;
      case "/allproducts/console":
        setGalleryTitle("Consoles");
        setProductCategory("?category=console");
        break;
      case "/allproducts/others":
        setGalleryTitle("Outros");
        setProductCategory("?category=others");
        break;
      default:
        break;
    }
    return galleryTitle;
  }, []);

  return (
    <Section>
      <SectionContent>
        <Gallery
          productCategory={productCategory}
          galleryTitle={galleryTitle}
          wrapperStyle={{ flexWrap: "wrap" }}
        />
      </SectionContent>
    </Section>
  );
};

export default AllProducts;
