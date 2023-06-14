import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from './operations';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, (_, { payload }) => {
        return { items: payload, isLoading: false, error: null };
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        return {
          items: [...state.items, payload],
          isLoading: false,
          error: null,
        };
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        return {
          items: state.items.filter(user => user.id !== payload.id),
          isLoading: false,
          error: null,
        };
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
          return { ...state, isLoading: false, error: payload };
        }
      );
  },
});

export const contactsReducer = usersSlice.reducer;
