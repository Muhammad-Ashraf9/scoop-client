import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_BASE_URL } from "../../../common/config";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: () => "/products",
    }),
    fetchProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/products",
        method: "POST",
        body: newProduct,
      }),
    }),
  }),
});

export const {
  useFetchProductsQuery,
  useFetchProductByIdQuery,
  useAddProductMutation,
} = apiSlice;
