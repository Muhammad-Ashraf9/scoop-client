import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_BASE_URL } from "../../../common/config";


export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: () => "/products",
    }),
  }),
});

export const { useFetchProductsQuery } = apiSlice;
