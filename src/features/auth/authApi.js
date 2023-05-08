import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../../constants/constants'


export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({

    userLogin: builder.mutation({
      query: (q) => ({
        url: '/api/userLogin',
        method: 'POST',
        body: q
      })
    })






  })




})


export const { useUserLoginMutation } = authApi;

