import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories, createCategory } from "./categoryActions";

const initialState = {
  loading: false,
  categoryInfo: null,
  error: null,
  success: false,
};

const setError = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

const setLoading = (state) => {
  state.loading = true;
  state.error = null;
};

const setData = (state, { payload }) => {
  state.loading = false;
  state.categoryInfo = payload;
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllCategories.fulfilled]: setData,
    [getAllCategories.pending]: setLoading,
    [getAllCategories.rejected]: setError,
    [createCategory.fulfilled]: setData,
    [createCategory.pending]: setLoading,
    [createCategory.rejected]: setError,
  },
});

export default categorySlice.reducer;
