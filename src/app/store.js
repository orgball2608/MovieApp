import { configureStore } from '@reduxjs/toolkit'
import currentTabReducer from '../features/currentTab/currentTab.slice'

import { setupListeners } from '@reduxjs/toolkit/query'
import { homeApi } from '../services/Home/home.service'
import { trendingApi } from '../services/Home/home.service'
import { detailApi } from '../services/Home/home.service'
import { genresApi } from '../services/Home/home.service'

export const store = configureStore({
  reducer: {
    [homeApi.reducerPath]: homeApi.reducer,
    [trendingApi.reducerPath]: trendingApi.reducer,
    [detailApi.reducerPath]: detailApi.reducer,
    [genresApi.reducerPath]: genresApi.reducer,
    currentTab: currentTabReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      homeApi.middleware,
      trendingApi.middleware,
      detailApi.middleware,
      genresApi.middleware
    )
})

setupListeners(store.dispatch)
