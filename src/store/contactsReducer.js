import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  currentNum: null,
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
    addCurrentNum: (state, action) => {
      state.currentNum = action.payload;
    },
  },
});

export const { addContact, addCurrentNum } = contactsSlice.actions;

export default contactsSlice.reducer;
