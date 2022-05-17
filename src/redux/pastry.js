import { createSlice } from '@reduxjs/toolkit'
import { data } from './data'

const initialState = {
  products: data,
  basket: [],
  reviews: [
    {id: 1, user: "Алексей", title: "Обслуживание хорошое, 5 из 5"},
    {id: 1, user: "Дмитрий", title: "Все круто!"}
  ]
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
          return true
        } else return false
      })
    },
    addReviews: (state, action) => {
      state.reviews.push({...action.payload})
    }
  },
})

export const { add, remove, addReviews } = counterSlice.actions

export default counterSlice.reducer