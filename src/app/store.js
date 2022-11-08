import { configureStore } from '@reduxjs/toolkit'
import currentTabReducer from '../features/currentTab/currentTab.slice'

import { setupListeners } from '@reduxjs/toolkit/query'
import { homeApi } from '../services/Home/home.service'
import { trendingApi } from '../services/Home/home.service'

export const store = configureStore({
  reducer: {
    [homeApi.reducerPath]: homeApi.reducer,
    [trendingApi.reducerPath]: trendingApi.reducer,
    currentTab: currentTabReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(homeApi.middleware, trendingApi.middleware)
})

setupListeners(store.dispatch)
