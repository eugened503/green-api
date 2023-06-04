import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "./userReducer";
import contactsReducer from "./contactsReducer";

const reducer = combineReducers({
  user: userReducer,
  contacts: contactsReducer,
});

export const store = configureStore({ reducer });
