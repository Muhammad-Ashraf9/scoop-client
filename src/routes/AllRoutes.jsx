import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { HomePage } from "../pages/Home";
import { ProductList } from "../pages/Product";
import { Checkout } from "../pages/Checkouts/Checkout.jsx";
import Login from "../pages/Login.jsx";
import Cart from "../pages/Cart/Cart.jsx";
import PageNotFound from "../pages/PageNotFound";

export const AllRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="products" element={<ProductList />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="Admin" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
};
