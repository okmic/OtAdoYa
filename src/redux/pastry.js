import { createSlice } from '@reduxjs/toolkit'
import { data } from './data'

const initialState = {
  products: data,
  basket: []
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.basket.push(action.payload)
    },
    remove: (state, action) => {
      state.basket = state.basket.filter((item, index) => {
        if(index !== action.payload) {
          return item
        }
      })
    }
  },
})

export const { add, remove } = counterSlice.actions

export default counterSlice.reducer