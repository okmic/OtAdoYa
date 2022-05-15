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
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { add, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer