import React, { useEffect, useState } from "react";

import { TailSpin } from "react-loader-spinner";

import ProductCard from "../ProductCard";

import {
  Title,
  WrapperProducts,
  Header,
  WrapperContent,
  Pagination,
  BackPageIcon,
  ForwardPageIcon,
  NumberPage,
} from "./style";
import { useNavigate } from "react-router-dom";

const Paginate = ({ productCategory, title, linkComponent, ...props }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [previousPage, setPreviousPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(2);
  const [totalPages, setTotalPages] = useState();
  const itensPerPage = 4;

  useEffect(() => {
    fetch(
      `http://localhost:5000/products${productCategory}?_page=${currentPage}&_limit=${itensPerPage}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => {
        const totalCount = resp.headers.get("x-total-count");
        const totalPages = Math.ceil(totalCount / itensPerPage);
        setTotalPages(totalPages);
        return resp.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

  const renderCards = () => {
    return (
      products.length > 0 &&
      products.map((product) => (
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

  const movePage = (number) => {
    switch (number) {
      case 1:
        setPreviousPage((prev) => prev + 1);
        setCurrentPage((prev) => prev + 1);
        setNextPage((prev) => prev + 1);
     //   navigate(`/products/${productCategory}?_page=${currentPage + 1}&_limit=${itensPerPage}`);
        break;
      case -1:
        setPreviousPage((prev) => prev - 1);
        setCurrentPage((prev) => prev - 1);
        setNextPage((prev) => prev - 1);
        break;

      default:
        break;
    }
  };

  return (
    <>
      {products.length > 0 ? (
        <WrapperContent>
          <Header>
            <Title>{title}</Title>
            {linkComponent}
          </Header>
          <WrapperProducts style={props.wrapperStyle}>
            {renderCards()}
          </WrapperProducts>
          <Pagination>
            <BackPageIcon
              firstpage={currentPage === 1 ? true : false}
              onClick={currentPage === 1 ? null : () => movePage(-1)}
            />
            {currentPage !== 1 && (
              <NumberPage onClick={() => movePage(-1)}>
                {previousPage}
              </NumberPage>
            )}

            <NumberPage currentPage={true}>{currentPage}</NumberPage>

            {currentPage !== totalPages && (
              <NumberPage onClick={() => movePage(1)}>{nextPage}</NumberPage>
            )}

            <ForwardPageIcon
              lastpage={currentPage === totalPages ? true : false}
              onClick={currentPage === totalPages ? null : () => movePage(1)}
            />
          </Pagination>
        </WrapperContent>
      ) : (
        <TailSpin height="100" width="100" color="#a2a2a2" radius="1" />
      )}
    </>
  );
};

export default Paginate;
