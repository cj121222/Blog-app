import { BLOG_URL } from "../constants.js";
import { apiSlice } from "./apiSlice";

const blogApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createBlog: builder.mutation({
      query: (data) => ({
        url: `${BLOG_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    getAllBlogPost: builder.query({
      query: () => `${BLOG_URL}`,
    }),
    getSpecificBlog: builder.query({
      query: (id) => `${BLOG_URL}/${id}`,
    }),
    updateBlogPost: builder.mutation({
      query: ({ id, updatedBlog }) => ({
        url: `${BLOG_URL}/${id}`,
        method: "PUT",
        body: updatedBlog,
      }),
    }),
    deleteBlogPost: builder.mutation({
      query: (id) => ({
        url: `${BLOG_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetAllBlogPostQuery,
  useGetSpecificBlogQuery,
  useUpdateBlogPostMutation,
  useDeleteBlogPostMutation,
} = blogApiSlice;
