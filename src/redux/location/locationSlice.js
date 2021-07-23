import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  address: null,
  showModal: false
}

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setAddress: (state, action) => {
      return ({...state, address: action.payload})
    },
    openModal: state => {
      state.showModal = true
    },
    closeModal: state => {
      state.showModal = false
    },
  }
})

export const {setAddress, openModal, closeModal} = locationSlice.actions
export default locationSlice.reducer