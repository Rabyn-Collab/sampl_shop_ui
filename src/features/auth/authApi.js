import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../constant';


export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (query) => ({
        url: '/api/users',
        headers: {
          'Authorization': query
        }
      })
    }),
    getUserById: builder.query({
      query: (query) => ({
        url: '/api/getUser',
        headers: {
          'Authorization': query
        }
      })
    }),

    userLogin: builder.mutation({
      query: (query) => ({
        url: '/api/userLogin',
        body: query,
        method: 'POST'
      })
    }),

    userSignUp: builder.mutation({
      query: (query) => ({
        url: '/api/userSignUp',
        body: query,
        method: 'POST'
      })
    }),
    userUpdate: builder.mutation({
      query: (query) => ({
        url: '/api/updateUser',
        body: {
          shippingAddress: query.body
        },
        headers: {
          'Authorization': query.token
        },
        method: 'PATCH'
      })
    })
  })

});


export const { useUserLoginMutation, useUserSignUpMutation, useGetUsersQuery, useGetUserByIdQuery, useUserUpdateMutation } = authApi;