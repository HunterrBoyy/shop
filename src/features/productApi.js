import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './constant';




export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['product'],
  endpoints: (builder) => ({

    getAllProducts: builder.query({
      query: (query) => ({
        url: '/api/products',
      }),
      providesTags: ['product']
    }),

    getProductById: builder.query({
      query: (query) => ({
        url: `/api/product/${query}`,
      }),
      providesTags: ['product']
    }),


    addProduct: builder.mutation({
      query: (query) => ({
        url: '/api/add-product',
        body: query.body,
        headers: {
          Authorization: query.token
        },
        method: 'POST'
      }),
      invalidatesTags: ['product']
    }),

    updateProduct: builder.mutation({
      query: (query) => {
        // console.log(query);
        return {
          url: `/api/product/${query.id}`,
          method: 'PATCH',
          body: query.body,
          headers: {
            Authorization: query.token
          }
        }
      },
      invalidatesTags: ['product']
    }),




  }),


});


export const { useGetAllProductsQuery, useAddProductMutation, useUpdateProductMutation, useGetProductByIdQuery } = productApi;