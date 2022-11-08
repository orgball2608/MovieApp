import { configureStore } from '@reduxjs/toolkit'
import currentTabReducer from '../features/currentTab/currentTab.slice'

import { setupListeners } from '@reduxjs/toolkit/query'
import { homeApi } from '../services/Home/home.service'

export const store = configureStore({
  reducer: {
    [homeApi.reducerPath]: homeApi.reducer,
    currentTab: currentTabReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(homeApi.middleware)
})

setupListeners(store.dispatch)
