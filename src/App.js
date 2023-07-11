import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
