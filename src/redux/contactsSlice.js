import { nanoid } from "nanoid";
import { createSlice } from "@reduxjs/toolkit";

const oldContacts = [
  { name: "Rosie Simpson", number: "459-12-56" },
  { name: "Hermione Kline", number: "443-89-12" },
  { name: "Eden Clements", number: "645-17-79" },
  { name: "Annie Copeland", number: "227-91-26" },
];

const items = oldContacts.map((contact) => {
  contact.id = nanoid();
  return contact;
});

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items,
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
