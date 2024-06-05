import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const DemandeApi = createApi({
  reducerPath: "DemandeApi",
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
    getDemandes: builder.query({
      query: () => "/demandes",
      providesTags: ["demandes"],
    }),
    // Ajoutez d'autres endpoints si nécessaire
  }),
});

export const { useGetDemandesQuery } = DemandeApi; // Correction de l'exportation

