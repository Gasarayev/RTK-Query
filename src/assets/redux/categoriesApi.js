import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://northwind.vercel.app/api/' }),
  endpoints: (builder) => ({
    getCategoriesApi: builder.query({
      query: () => 'categories/', 
    }),
    deleteItem: builder.mutation({
      query: (id) => ({
        url: `categories/${id}`, 
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetCategoriesApiQuery, useDeleteItemMutation } = categoriesApi;
