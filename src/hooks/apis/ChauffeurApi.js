import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const ChauffeurApi = createApi({
  reducerPath: "ChauffeurApi",
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
    getChauffeurs: builder.query({
      query: () => "/chauffeurs",
      providesTags: ["Chauffeurs"],
    }),
   
    updateChauffeur: builder.mutation({
      query: ({ id, body }) => ({
        url: `/updateChauffeur/${id}`,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["Chauffeurs"],
    }),
    deleteChauffeur: builder.mutation({
      query: ({ id }) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Chauffeurs"],
    }),
  }),
});

export const {
  useGetChauffeursQuery,
  useUpdateChauffeurMutation,
  useDeleteChauffeurMutation,
} =ChauffeurApi ;

