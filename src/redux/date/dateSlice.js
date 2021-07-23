import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

const initialState = {
  value: moment().toDate()
}

export const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    setDate: (state, action) => {
      state.value = action.payload
    }
  }
})

export const {setDate} = dateSlice.actions
export default dateSlice.reducer