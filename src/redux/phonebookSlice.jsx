import { createSlice } from '@reduxjs/toolkit';

const initialState = { contacts: [], filter: '' };

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addContact(state, action) {
      return { ...state, contacts: [...state.contacts, action.payload] };
    },
    deleteContact(state, action) {
      const findedIndex = state.contacts.findIndex(
        item => item.id === action.payload
      );
      state.contacts.splice(findedIndex, 1);
    },
    changeFilter(state, action) {
      return { ...state, filter: action.payload };
    },
  },
});

export const phonebookReducer = phonebookSlice.reducer;
export const { addContact, deleteContact, changeFilter } =
  phonebookSlice.actions;
