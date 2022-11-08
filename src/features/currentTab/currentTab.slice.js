import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentTab: 'movie'
}

const currentTabSlice = createSlice({
  name: 'currentTab',
  initialState,
  reducers: {
    setCurrentTab(state, action) {
      state.currentTab = action.payload
    }
  }
})

export const { setCurrentTab } = currentTabSlice.actions

export default currentTabSlice.reducer
