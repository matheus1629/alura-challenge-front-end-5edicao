import React, { useEffect, useState } from "react";

import { useIsAuthenticated } from "react-auth-kit";
import { useNavigate, useParams } from "react-router-dom";

import Gallery from "../../components/Gallery";

import {
  CheckIcon,
  DeleteProductWrapper,
  ProductAddedMessage,
  ProductDescription,
  ProductImg,
  ProductInfo,
  ProductPrice,
  ProductTitle,
  ProductWrapper,
  Section,
  SectionContent,
  TrahsIcon,
} from "./style";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [productDeleted, setProductDeleted] = useState(false);
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (Object.keys(data).length === 0) {
          navigate("/products");
        } else {
          setProduct(data);
          setProductDeleted(false);
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  const priceBRL = product?.price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  const RemoveProduct = async () => {
    try {
      await fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      }).then(setProductDeleted(true));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Section>
      <SectionContent>
        {!productDeleted ? (
          <ProductWrapper>
            <ProductImg src={product?.img} />
            <ProductInfo>
              <ProductTitle>{product?.name}</ProductTitle>
              <ProductPrice>{priceBRL}</ProductPrice>
              <ProductDescription>{product?.description}</ProductDescription>
              {isAuthenticated() ? (
                <DeleteProductWrapper onClick={RemoveProduct}>
                  <p>Excluir produto</p>
                  <TrahsIcon />
                </DeleteProductWrapper>
              ) : (
                ""
              )}
            </ProductInfo>
          </ProductWrapper>
        ) : (
          <ProductAddedMessage>
            <p>Produto deletado com sucesso!</p>
            <CheckIcon />
          </ProductAddedMessage>
        )}

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
