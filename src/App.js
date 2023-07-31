import { Routes, Route } from "react-router-dom";

import { RequireAuth } from "react-auth-kit";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddProduct from "./pages/AddProduct";
import ProductDetails from "./pages/ProductDetails";
import AllProducts from "./pages/AllProducts";
import ErrorPageNotFound from "./pages/ErrorPageNotFound";
import { ADD_PRODUCT, ALL_PRODUCTS, ERROR, HOME, LOGIN, PRODUCT_DETAILS } from "./routes/consts";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={LOGIN} element={<Login />} />
        <Route
          path={`${ALL_PRODUCTS}/:category?/:page?`}
          element={<AllProducts />}
        />

        <Route
          path={ADD_PRODUCT}
          element={
            <RequireAuth loginPath={LOGIN}>
              <AddProduct />
            </RequireAuth>
          }
        />
        <Route path={`${PRODUCT_DETAILS}/:id?`} element={<ProductDetails />} />
        <Route path={ERROR} element={<ErrorPageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
