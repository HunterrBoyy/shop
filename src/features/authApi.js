import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './constant';






export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['user'],
  endpoints: (builder) => ({

    userLogin: builder.mutation({
      query: (query) => ({
        url: '/api/userLogin',
        body: query,
        method: 'POST'
      })
    }),

    userRegister: builder.mutation({
      query: (query) => ({
        url: '/api/userSignUp',
        body: query,
        method: 'POST'
      })
    }),

    userUpdate: builder.mutation({
      query: (query) => ({
        url: '/api/userUpdate',
        body: query.body,
        method: 'PATCH',
        headers: {
          Authorization: query.token
        }
      })
    })





  }),


});


export const { useUserLoginMutation, useUserRegisterMutation, useUserUpdateMutation } = authApi;