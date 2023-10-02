import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setStatusFilter: (_, { payload }) => payload,
  },
});
export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
