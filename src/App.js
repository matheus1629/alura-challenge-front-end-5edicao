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

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/allproducts/:category?/:page?"
          element={<AllProducts />}
        />

        <Route
          path="/addproduct"
          element={
            <RequireAuth loginPath="/login">
              <AddProduct />
            </RequireAuth>
          }
        />
        <Route path="/productdetails/:id?" element={<ProductDetails />} />
        <Route path="*" element={<ErrorPageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
