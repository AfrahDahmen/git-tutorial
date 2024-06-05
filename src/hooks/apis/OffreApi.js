import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const OffreApi = createApi({
  reducerPath: "OffreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8081",
    prepareHeaders: (headers) => {
      let token = localStorage.getItem("token")
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getOffres: builder.query({
      query: () => "/offres",
      providesTags: ["offres"],
    }),
    // Ajoutez d'autres endpoints si nécessaire
  }),
});

export const { useGetOffresQuery } = OffreApi; // Correction de l'exportation

