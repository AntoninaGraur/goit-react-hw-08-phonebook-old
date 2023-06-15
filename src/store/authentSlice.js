import { createSlice } from '@reduxjs/toolkit';
import {
  loginUser,
  registrUser,
  logoutUser,
  authorizatedCurrentUser,
} from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  errorMessage: '',
  isLoading: false,
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
        state.isLoading = false;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.errorMessage = '';
        state.isLoading = false;
      })
      .addCase(logoutUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.errorMessage = '';
        state.isLoading = false;
      })
      .addCase(authorizatedCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.errorMessage = '';
        state.isLoading = false;
      })
      .addMatcher(
        action => {
          return action.type.endsWith('/pending');
        },
        state => {
          return { ...state, isLoading: true };
        }
      )
      .addMatcher(
        action => {
          return action.type.endsWith('/rejected');
        },
        (state, { payload }) => {
          state.errorMessage = payload;
          state.isLoading = false;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
