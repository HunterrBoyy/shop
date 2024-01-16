// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { baseUrl } from './constant';




// export const orderApi = createApi({
//   reducerPath: 'orderApi',
//   baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
//   tagTypes: ['order','product'],
//   endpoints: (builder) => ({

//     getAllOrders: builder.query({
//       query: (query) => ({
//         url: '/api/orders',
//         headers: {
//           Authorization: query
//         }
//       }),
//       providesTags: ['order']
//     }),

//     getOrderById: builder.query({
//       query: (query) => ({
//         url: `/api/order/${query.id}`,
//         headers: {
//           Authorization: query.token
//         }
//       }),
//       providesTags: ['order']
//     }),


//     getOrderByUser: builder.query({
//       query: (query) => ({
//         url: `/api/product/${query}`,
//         headers: {
//           Authorization: query
//         }
//       }),
//       providesTags: ['order']
//     }),


//     addOrder: builder.mutation({
//       query: (query) => ({
//         url: '/api/create-order',
//         body: query.body,
//         headers: {
//           Authorization: query.token
//         },
//         method: 'POST'
//       }),
//       invalidatesTags: ['product','order']
//     }),

    




//   }),


// });


// export const { useAddOrderMutation, useGetAllOrdersQuery, useGetOrderByIdQuery, useGetOrderByUserQuery } = orderApi;