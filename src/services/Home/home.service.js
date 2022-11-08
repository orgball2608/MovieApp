import { createApi } from '@reduxjs/toolkit/query/react'
import axiosBaseQuery from '../../shared/AxiosBaseQuery'
import { API_URL } from '../../shared/constants'

export const homeApi = createApi({
  reducerPath: 'homeApi',
  baseQuery: axiosBaseQuery({
    baseUrl: API_URL
  }),
  endpoints: (builder) => ({
    getHomeApi: builder.query({
      query: (endpoint) => ({
        url: endpoint,
        method: 'GET',
        params: { api_key: 'd2e68036fdaa17368b7194f3b45252c8' }
      })
    })
  })
})

export const trendingApi = createApi({
  reducerPath: 'trendingApi',
  baseQuery: axiosBaseQuery({
    baseUrl: API_URL
  }),
  endpoints: (builder) => ({
    getTrendingApi: builder.query({
      query: () => ({
        url: '/trending/all/day?page=2',
        method: 'GET',
        params: { api_key: 'd2e68036fdaa17368b7194f3b45252c8' }
      })
    })
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetHomeApiQuery } = homeApi
export const { useGetTrendingApiQuery } = trendingApi
