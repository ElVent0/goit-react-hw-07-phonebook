import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.phonebook.contacts.items;
export const selectFilter = state => state.phonebook.filter;
export const selectIsLoading = state => state.phonebook.contacts.isLoading;
export const selectError = state => state.phonebook.contacts.error;

export const selectActiveContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (filter === '') {
      return contacts;
    } else if (filter !== '') {
      return contacts.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  }
);
