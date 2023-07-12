import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import ProductDetails from "./pages/ProductDetails";
import { RequireAuth } from "react-auth-kit";


function App() {
  return (
<>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <PrivateRoute
          path="/products"
          component={Products}
          loginPath="/login" // rota para redirecionar se o usuário não estiver autenticado
        /> */}
          <Route
            path="/products"
            element={
              <RequireAuth loginPath="/login">
                <Products />
              </RequireAuth>
            }
          />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
</>
  );
}

export default App;
