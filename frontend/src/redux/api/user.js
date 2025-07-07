import { USERS_URL } from "../constants.js";
import { apiSlice } from "./apiSlice.js";

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    logoutCurrentUser: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    getUserProfile: builder.query({
      query: () => `${USERS_URL}/profile`,
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile/update`,
        method: "PUT",
        body: data,
      }),
    }),
    getAllUser: builder.query({
      query: () => `${USERS_URL}/users-list`,
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `${USERS_URL}/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useLogoutCurrentUserMutation,
  useGetUserProfileQuery,
  useUpdateProfileMutation,
  useGetAllUserQuery,
  useDeleteUserMutation,
} = userApiSlice;
