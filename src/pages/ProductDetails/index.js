import React, { useEffect, useState } from "react";

import { TailSpin } from "react-loader-spinner";
import { useIsAuthenticated } from "react-auth-kit";
import { useNavigate, useParams } from "react-router-dom";

import StyledLink from "../../components/Link/style";
import Gallery from "../../components/Gallery";

import {
  ArrowIcon,
  DeleteProductWrapper,
  ProductDescription,
  ProductImg,
  ProductInfo,
  ProductPrice,
  ProductTitle,
  ProductWrapper,
  Section,
  SectionContent,
  Text,
  TrahsIcon,
} from "./style";
import MessageCard from "../../components/MessageCard";

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
        {product ? (
          <>
            {!productDeleted ? (
              <ProductWrapper>
                <ProductImg src={product?.img} />

                <ProductInfo>
                  <ProductTitle>{product?.name}</ProductTitle>
                  <ProductPrice>{priceBRL}</ProductPrice>
                  <ProductDescription>
                    {product?.description}
                  </ProductDescription>

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
              <MessageCard
                text="Produto deletado com sucesso!!"
                width={"var(--message-card-width, 550px)"}
                height={"70px"}
                fontSize={"var(--message-font-size, 1.5rem)"}
                fontSizeIcon={"35px"}
                margin={"20px auto "}
              />
            )}

            {product && (
              <Gallery
                productCategory={`?category=${product.category}&id_ne=${id}&_limit=6`}
                galleryTitle={"Produtos similares"}
                wrapperStyle={{ flexWrap: "wrap" }}
                linkComponent={
                  <StyledLink to={`/all-products/${product.category}/1`}>
                    <Text>Ver Tudo</Text>
                    <ArrowIcon />
                  </StyledLink>
                }
              />
            )}
          </>
        ) : (
          <TailSpin height="100" width="100" color="#a2a2a2" radius="1" />
        )}
      </SectionContent>
    </Section>
  );
};
{
}
export default ProductDetails;
