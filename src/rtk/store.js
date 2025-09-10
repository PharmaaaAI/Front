import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from '../rtk/slices/items-slice'
import categorisSlice from "../rtk/slices/categories-slice"

export const store = configureStore({
  reducer:{
    items: itemsSlice,
    categories: categorisSlice
  },
})