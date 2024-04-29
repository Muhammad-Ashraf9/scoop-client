import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage.jsx";
import ProductList from "../components/ProductList.jsx";
import { Checkout } from "../pages/Checkouts/Checkout.jsx";
import Login from "../pages/Login.jsx";
import Cart from "../pages/Cart/Cart.jsx";
import Wishlist from "../pages/Wishlist/Wishlist.jsx";
import ContactUs from "../pages/Contact us/Contact-us.jsx";
import PageNotFound from "../pages/PageNotFound";
import ProductDetails from "../components/ProductDetails.jsx";
import ProductForm from "../pages/Admin/ProductForm/ProductForm.jsx";
import AdminDashboard from "../pages/Admin/AdminDashboard/AdminDashboard.jsx";

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
          <Route path="test" element={<ProductList />} />
          <Route path="test/:productId" element={<ProductDetails />} />
          <Route path="admin" element={<AdminDashboard />}>
            <Route path="add-product" element={<ProductForm />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};
