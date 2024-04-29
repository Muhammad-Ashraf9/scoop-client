// const API_BASE_URL = "https://fakestoreapi.com";
const API_BASE_URL = "http://localhost:8080/api";

const ENDPOINTS = {
    products: "/v1/products",
//   products: "/products",
  product: "/v1/products/{id}",
  categories: "/v1/categories",
};

export { API_BASE_URL, ENDPOINTS };
