import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/contactSlice';
import { filtersReducer } from './filters/filtersSlice';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filtersReducer,
  },
});

export default store;
