import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

import { setupListeners } from '@reduxjs/toolkit/query'
import { homeApi } from '../services/Home/home.service'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [homeApi.reducerPath]: homeApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(homeApi.middleware)
})

setupListeners(store.dispatch)
