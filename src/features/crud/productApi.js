import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../constant';



export const productApi = createApi({
  reducerPath: 'product',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({

    getProducts: builder.query({
      query: (query) => ({
        url: '/',
      }),
      providesTags: ['Product']
    }),

    getProductById: builder.query({
      query: (id) => ({
        url: `/api/product/${id}`,
      }),
      providesTags: ['Product']
    }),

    addProduct: builder.mutation({
      query: (val) => ({
        url: '/api/product_create',
        method: 'POST',
        body: val.body,
        headers: {
          'Authorization': val.token
        }
      }),
      invalidatesTags: ['Product']
    }),

    updateProduct: builder.mutation({
      query: (val) => ({
        url: `/api/product_update/${val.id}`,
        method: 'PATCH',
        body: val.body,
        params: {
          imagePath: val.query ?? ''
        },
        headers: {
          'Authorization': val.token
        }
      }),
      invalidatesTags: ['Product']
    }),

    productReview: builder.mutation({
      query: (val) => ({
        url: `/api/add_product_review/${val.id}`,
        method: 'PATCH',
        body: val.body,
        headers: {
          'Authorization': val.token
        }
      }),
      invalidatesTags: ['Product']
    }),




  })
});


export const { useGetProductsQuery, useAddProductMutation, useUpdateProductMutation, useProductReviewMutation, useGetProductByIdQuery } = productApi;