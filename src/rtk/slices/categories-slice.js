import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { API_BASE_URL } from "../../utils/api-url";


export const fetchCategories = createAsyncThunk(
  "categoriesSlice/fetchCategories",
  async () => {
    const res = await fetch(`${API_BASE_URL}/categories`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    return data.data;
  }
);

const categoriesSlice = createSlice({
  initialState: [],
  name: "categoriesSlice",
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      return action.payload;
    })
  }
})

export const {} = categoriesSlice.actions; 
export default categoriesSlice.reducer;
