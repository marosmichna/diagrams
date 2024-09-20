import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse, GetProductsResponse, GetTransactionsResponse } from "./types";

const VITE_BASE_URL = "http://diagrams-api.vercel.app";

export const api = createApi({
    // baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    baseQuery: fetchBaseQuery({ baseUrl: VITE_BASE_URL }),
    reducerPath: "main",
    tagTypes: ["Kpis", "Products", "Transactions"],
    endpoints: (build) => ({
        getKpis: build.query<Array<GetKpisResponse>, void>({
            query: () => "kpi/kpis/",
            providesTags: ["Kpis"]
        }),
        getProducts: build.query<Array<GetProductsResponse>, void>({
            query: () => "product/products/",
            providesTags: ["Products"]
        }),
        getTransactions: build.query<Array<GetTransactionsResponse>, void>({
            query: () => "transaction/transactions/",
            providesTags: ["Transactions"]
        }),
    }),
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api;