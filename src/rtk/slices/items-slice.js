import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { API_BASE_URL, USER_ID, token } from "../../utils/api-url";

export const fetchItems = createAsyncThunk("itemsSlice/fetchCart", async () => {

  const res = await fetch(`${API_BASE_URL}/users/${USER_ID}/cart`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });


  if (res.status === 401) {
    return [];
  }

  const data = await res.json();
  return data.data;
})

const itemsSlice = createSlice({
  initialState: [],
  name: "itemsSlice",
  reducers: {
    addToCart: (state, action) => {
      state.push({
        productID: action.payload.id,
        quantity: action.payload.quantity || 1
      })
    },
    removeFromCart: (state, action) => {
      return state.filter(prod => prod.productID !== action.payload)
    },
    increaseItemInCart: (state, action) => {
      return state.map(prod => prod.productID === action.payload? {productID: prod.productID, quantity: prod.quantity + 1} : prod)
    },
    decreaseItemInCart: (state, action) => {
      return state.map(prod => prod.productID === action.payload? {productID: prod.productID, quantity: Math.max(prod.quantity - 1, 1)} : prod)
    },
    clearCart: (state, action) => {
      return [];
    },

  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      return action.payload;
    })
  }
})

export const {addToCart, removeFromCart, increaseItemInCart, decreaseItemInCart, clearCart} = itemsSlice.actions; 
export default itemsSlice.reducer;