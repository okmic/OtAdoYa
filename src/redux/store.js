import { configureStore } from '@reduxjs/toolkit'
import pastry from './pastry'

export const store = configureStore({
  reducer: {
    pastry: pastry
  },
})