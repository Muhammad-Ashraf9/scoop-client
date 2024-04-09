import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { HomePage } from "../pages/Home";
import Login from "../pages/Login.jsx";
import PageNotFound from "../pages/PageNotFound";
import { ProductListFilters } from "../pages/Product/ProductList.jsx";

export const AllRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          ProductListFilters
          <Route path="products" element={<ProductListFilters />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="Admin" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
};
