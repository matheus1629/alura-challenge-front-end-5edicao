import React, { useEffect, useState } from "react";

import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

import ErrorMessageAPI from "../ErrorMessageAPI";
import ProductCard from "../ProductCard";

import {
  WrapperProducts,
  WrapperContent,
  Pagination,
  BackPageIcon,
  ForwardPageIcon,
  NumberPage,
} from "./style";

const Paginate = ({ category, title, page, ...props }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [previousPage, setPreviousPage] = useState();
  const [nextPage, setNextPage] = useState();
  const [totalPages, setTotalPages] = useState();
  const [fetchError, setFetchError] = useState(null);

  const itensPerPage = 8;

  useEffect(() => {
    setPreviousPage(page - 1);
    setNextPage(page + 1);

    let url;
    if (category === "all") {
      url = `http://localhost:5000/products/?_page=${page}&_limit=${itensPerPage}`;
    } else {
      url = `http://localhost:5000/products/?category=${category}&_page=${page}&_limit=${itensPerPage}`;
    }

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        const totalCount = resp.headers.get("x-total-count");
        const totalPages = Math.ceil(totalCount / itensPerPage);
        setTotalPages(totalPages);
        return resp.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => setFetchError(error));
  }, [page, category]);

  const movePage = (number) => {
    navigate(`/allproducts/${category}/${page + number}`);
  };

  return (
    <>
      {fetchError ? (
        <ErrorMessageAPI errorMessage={fetchError.message} />
      ) : products.length > 0 ? (
        <WrapperContent>
          <WrapperProducts style={props.wrapperStyle}>
            {products.length > 0 &&
              products.map((product) => (
                <ProductCard
                  productName={product.name}
                  productPrice={product.price}
                  productImg={product.img}
                  productId={product.id}
                  key={product.id}
                />
              ))}
          </WrapperProducts>
          <Pagination>
            <BackPageIcon
              firstpage={page === 1 ? true : false}
              onClick={page === 1 ? null : () => movePage(-1)}
            />
            {page !== 1 && (
              <NumberPage onClick={() => movePage(-1)}>
                {previousPage}
              </NumberPage>
            )}

            <NumberPage currentpage={true}>{page}</NumberPage>

            {page !== totalPages && (
              <NumberPage onClick={() => movePage(1)}>{nextPage}</NumberPage>
            )}

            <ForwardPageIcon
              lastpage={page === totalPages ? true : false}
              onClick={page === totalPages ? null : () => movePage(1)}
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
