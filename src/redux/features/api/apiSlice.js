import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_BASE_URL, ENDPOINTS } from "../../../common/config";

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: () => ENDPOINTS.products,
      providesTags: ["Products"],
    }),
    fetchProductById: builder.query({
      query: (id) => ENDPOINTS.product.replace("{id}", id),
    }),
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: ENDPOINTS.products,
        method: "POST",
        body: newProduct,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjBlMWE3ZTQxM2Q4MmI3NjlkODhhYjEiLCJpYXQiOjE3MTQzODM2MDMsImV4cCI6MTcxNDk4ODQwM30.fO_dSlkvb9VPU3EAg9lL3f5VM97EQQqQedEIqpTUssA`,
        },
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useFetchProductsQuery,
  useFetchProductByIdQuery,
  useAddProductMutation,
} = apiSlice;
