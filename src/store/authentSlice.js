import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registrUser, logoutUser, authorizatedCurrentUser, } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  errorMessage: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registrUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.errorMessage = '';
      })
      .addCase(registrUser.rejected, (state, { payload }) => {
        state.errorMessage = payload;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.errorMessage = '';
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.errorMessage = payload;
      })
      .addCase(logoutUser.fulfilled, (state, { payload }) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
        state.errorMessage = '';
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.errorMessage = payload;
      })
      .addCase(authorizatedCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.errorMessage = '';
      })
      .addCase(authorizatedCurrentUser.rejected, (state, { payload }) => {
        state.errorMessage = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
