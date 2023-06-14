import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  LoginUserApi,
  registrUserApi,
  LogoutUserApi,
  GetAllContacts,
  AddUserContact,
  DeleteUserContact,
  getAuthorizatedUserApi,
} from '../services/api-users';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com'; 


export const getContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await GetAllContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await AddUserContact(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const data = await DeleteUserContact(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const registrUser = createAsyncThunk(
  'auth/registrUser',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await registrUserApi(userData);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await LoginUserApi(userData);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const logoutUser = createAsyncThunk(
  'auth/logOutUser',
  async (_, { rejectWithValue }) => {
    try {
      const data = await LogoutUserApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const authorizatedCurrentUser = createAsyncThunk(
  'auth/reconnectCurrenUser',
  async (_, { rejectWithValue, getState }) => {
    const token = getState().auth.token;

    if (!token) {
      return rejectWithValue('');
    }

    try {
      const data = await getAuthorizatedUserApi(token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);