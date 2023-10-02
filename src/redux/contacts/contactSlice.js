import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactOperations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(addContact.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items.push(payload);
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(deleteContact.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = state.items.filter(item => item.id !== payload);
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const contactReducer = contactSlice.reducer;
