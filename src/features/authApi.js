import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './constant';






export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),

  endpoints: (builder) => ({

   userLogin :builder.mutation({
    query:(query)=>({
      url:'/api/userLogin',
      body:query,
      method : 'POST'
    })
    
   }),
   userRegister :builder.mutation({
    query:(query)=>({
      url:'/api/userSignUp',
      body:query,
      method : 'POST'
    })
    
   })



  }),


});


export const {useUserLoginMutation, useUserRegisterMutation} = authApi;