import React from "react";
import { BrowserRouter as Router , Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/Home";
import { ProductList } from "../Pages/Product";
import  Login  from "../Pages/Login.jsx";
import  PageNotFound  from "../Pages/PageNotFound";

export const AllRoutes =  ()=>{

    return(
        <>
             <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="products" element={<ProductList />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="Admin" element={<Navigate to="/"/> } />
        </Routes>
      </Router>
        </>
    )
}