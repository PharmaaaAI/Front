import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { API_BASE_URL } from "../../utils/api-url";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

export const fetchItems = createAsyncThunk(
  "itemsSlice/fetchCart",
  async ({ userId, token }) => {
    if (userId && token) {
      const res = await fetch(`${API_BASE_URL}/users/${userId}/cart`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 401) {
        return [];
      }

      const data = await res.json();
      return data.data;
    } else {
      return JSON.parse(localStorage.getItem("cart")) || [];
    }
  }
);

const itemsSlice = createSlice({
  initialState: [],
  name: "itemsSlice",
  reducers: {
    addToCart: (state, action) => {
      state.push({
        productID: action.payload.id,
        quantity: action.payload.quantity || 1
      })
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const newState = state.filter(
        (prod) => prod.productID !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    },
    increaseItemInCart: (state, action) => {
      const newState = state.map((prod) =>
        prod.productID === action.payload
          ? { productID: prod.productID, quantity: prod.quantity + 1 }
          : prod
      );
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    },
    decreaseItemInCart: (state, action) => {
      const newState = state.map((prod) =>
        prod.productID === action.payload
          ? {
              productID: prod.productID,
              quantity: Math.max(prod.quantity - 1, 1),
            }
          : prod
      );
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    },
    clearCart: (state, action) => {
      localStorage.removeItem("cart");
      return [];
    },

  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      localStorage.setItem("cart", JSON.stringify(action.payload));
      return action.payload;
    })
  }
})

export const {addToCart, removeFromCart, increaseItemInCart, decreaseItemInCart, clearCart} = itemsSlice.actions; 
export default itemsSlice.reducer;
