import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './location/locationSlice'

export const store = configureStore({
  reducer: {
    location: locationReducer
  },
})