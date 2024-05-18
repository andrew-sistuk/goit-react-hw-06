import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    addContact(state, action) {
      console.log(action);
      state.items.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });

      console.log(state.items);
      console.log(action.payload.name);
    },

    deleteContact(state, action) {
      state.items.splice(
        state.items.findIndex(item => item.id === action.payload),
        1
      );
    },

    prepere(id, name, number) {
      return {
        payload: {
          id,
          name,
          number,
        },
      };
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsSliceReducer = contactsSlice.reducer;
