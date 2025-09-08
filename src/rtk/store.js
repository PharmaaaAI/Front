import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from '../rtk/slices/items-slice'

export const store = configureStore({
  reducer:{
    items: itemsSlice
  },
})