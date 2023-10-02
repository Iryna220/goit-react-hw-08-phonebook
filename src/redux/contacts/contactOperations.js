import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  addContacts,
  removeContact,
} from 'serviceAPI/contactsAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const result = await addContacts(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await removeContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
