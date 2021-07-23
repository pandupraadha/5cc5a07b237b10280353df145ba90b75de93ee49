import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  item: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    resetCart: () => initialState,
    addItem: (state, action) => {
      state.item.push(action.payload)
    },
    removeItem: (state, action) => {}
  }
})

export const {resetCart, addItem} = cartSlice.actions
export default cartSlice.reducer