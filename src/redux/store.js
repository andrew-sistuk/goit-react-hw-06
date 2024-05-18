import { configureStore } from '@reduxjs/toolkit';

import { contactsSliceReducer } from './contactsSlice';
import { filtersSliceReducer } from './filtersSlice';

export const appState = configureStore({
  reducer: {
    contacts: contactsSliceReducer,
    filters: filtersSliceReducer,
  },
});
