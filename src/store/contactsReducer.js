import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.contacts.push(action.payload);
      },
      prepare: (number) => {
        const id = nanoid();
        return { payload: { id, number } };
      },
    },
  },
});

export const { addContact } = contactsSlice.actions;

export default contactsSlice.reducer;
