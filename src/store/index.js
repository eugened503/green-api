import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "./userReducer";
import contactsReducer from "./contactsReducer";
import messageReducer from "./messageReducer";

const reducer = combineReducers({
  user: userReducer,
  contacts: contactsReducer,
  message: messageReducer,
});

export const store = configureStore({ reducer });
