import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const ClientApi = createApi({
  reducerPath: "ClientApi",
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
    getClients: builder.query({
      query: () => "/clients",
      providesTags: ["clients"],
    }),
    addClient: builder.mutation({
      query: (client) => ({
        url: "/createClient",
        method: "POST",
        body: client,
      }),
      invalidatesTags: ["clients"],
    }),
    updateClient: builder.mutation({
      query: ({ id, body }) => ({
        url: `/updateClient/${id}`,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["clients"],
    }),
    deleteClient: builder.mutation({
      query: ({ id }) => ({
        url: `/deleteClient/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["clients"],
    }),
  }),
});

export const {
  useGetClientsQuery,
  useAddClientMutation,
  useUpdateClientMutation,
  useDeleteClientMutation,
} =ClientApi ;

