import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, updateUser } from "./authActions";

const initialState = {
  loading: false,
  userInfo: null,
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
  state.userInfo = payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    update: (state, action) => {
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.userInfo = null;
      state.success = false;
    },
  },
  extraReducers: {
    [updateUser.fulfilled]: setData,
    [updateUser.pending]: setLoading,
    [updateUser.rejected]: setError,
    [registerUser.pending]: setLoading,
    [registerUser.fulfilled]: setData,
    [registerUser.rejected]: setError,
    [loginUser.pending]: setLoading,
    [loginUser.fulfilled]: setData,
    [loginUser.rejected]: setError,
  },
});

export const { update, logout } = authSlice.actions;

export default authSlice.reducer;
