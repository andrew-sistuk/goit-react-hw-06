import { configureStore } from '@reduxjs/toolkit';

import { contactsSliceReducer } from './contactsSlice';

export const appState = configureStore({
  reducer: {
    contacts: contactsSliceReducer
  },
});

// export const appState = console.log('Ok path');

//  appState;

// contacts: {
//   items: [],
// },
// filters: {
//   name: '',
// },