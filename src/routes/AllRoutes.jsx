import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { HomePage } from "../Pages/Home/HomePage.jsx";
import { ProductListFilters } from "../Pages/Product/ProductList.jsx";
import { Checkout } from "../Pages/Checkouts/Checkout.jsx";
import Login from "../Pages/Login/Login.jsx";
import Cart from "../Pages/Cart/Cart.jsx";
import Wishlist from "../Pages/Wishlist/Wishlist.jsx";
import ContactUs from "../Pages/Contact us/Contact-us.jsx";
import Admin from "../Pages/Admin/Admin.jsx";
import PageNotFound from "../Pages/PageNotFound";
import Signup from "../Pages/Signup/Signup.jsx";

export const AllRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
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
