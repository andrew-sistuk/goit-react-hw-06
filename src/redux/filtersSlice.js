import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: { name: '' },
  reducers: {
    filterContacts(state, action) {
      return state;
    },
  },
});
