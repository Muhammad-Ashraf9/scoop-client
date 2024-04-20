import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage.jsx";
import { ProductListFilters } from "../pages/Product/ProductList.jsx";
import { Checkout } from "../pages/checkouts/Checkout.jsx";
import Login from "../pages/Login.jsx";
import Cart from "../pages/Cart/Cart.jsx";
import Wishlist from "../pages/Wishlist/Wishlist.jsx";
import ContactUs from "../pages/Contact us/Contact-us.jsx";
import Admin from "../pages/Admin/Admin.jsx"
import PageNotFound from "../pages/PageNotFound";

export const AllRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="products" element={<ProductListFilters />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="Admin" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
};
