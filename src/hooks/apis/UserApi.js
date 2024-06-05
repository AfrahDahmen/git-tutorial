import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const UserApi = createApi({
  reducerPath: "UserApi",
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
    getUsers: builder.query({
      query: () => "/user",
      providesTags: ["users"],
    }),
    
    

    addUser: builder.mutation({
      query: (user) => ({
        url: "/createUser",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["users"],
    }),
  
   
  }),
});

export const {
  useGetUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useGetClientsQuery,
  useGetChauffeursQuery,
} =UserApi ;

