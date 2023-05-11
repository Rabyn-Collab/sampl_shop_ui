import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../../constants/constants';


export const crudApi = createApi({
  reducerPath: 'crudApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({

    getAllProducts: builder.query({
      query: (q) => ({
        url: '/'
      })
    }),

    productAdd: builder.mutation({
      query: (q) => ({
        url: '/api/product_create',
        method: 'POST',
        body: q.body,
        headers: {
          'Authorization': q.token
        }
      })
    })






  })




})


export const { useGetAllProductsQuery, useProductAddMutation } = crudApi;

