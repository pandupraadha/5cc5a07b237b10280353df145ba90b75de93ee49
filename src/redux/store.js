import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './location/locationSlice'
import cartReducer from './cart/cartSlice'
import dateReducer from './date/dateSlice'

export const store = configureStore({
  reducer: {
    location: locationReducer,
    cart: cartReducer,
    date: dateReducer
  },
})