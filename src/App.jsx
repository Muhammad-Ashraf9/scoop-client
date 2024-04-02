import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Login from "./Pages/Login";
import PageNotFound from "./Pages/PageNotFound";
import { HomePage } from "./Pages/Home/";
import { ProductList } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="products" element={<ProductList />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
