import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { HomePage } from "../Pages/Home/HomePage.jsx";
import ProductList from "../components/ProductList.jsx";
import { Checkout } from "../Pages/Checkouts/Checkout.jsx";
import Login from "../Pages/Login.jsx";
import Cart from "../Pages/Cart/Cart.jsx";
import Wishlist from "../Pages/Wishlist/Wishlist.jsx";
import ContactUs from "../Pages/Contact us/Contact-us.jsx";
import PageNotFound from "../Pages/PageNotFound";
import ProductDetails from "../components/ProductDetails.jsx";

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
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="Admin" element={<Navigate to="/" />} />
          <Route path="test" element={<ProductList />} />
          <Route path="test/:productId" element={<ProductDetails/>} />
        </Routes>
      </Router>
    </>
  );
};
