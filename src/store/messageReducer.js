import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  message: [],
  status: "idle",
  error: null,
};

export const postMessage = createAsyncThunk(
  "user/postMessage",
  async ({ idInstance, apiTokenInstance, chatId, message }, thunkAPI) => {
    try {
      const res = await axios.post(
        "https://api.green-api.com/waInstance" +
          `${idInstance}` +
          "/sendMessage/" +
          `${apiTokenInstance}`,
        { chatId, message }
      );
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue({ error: err.message });
    }
  }
);

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postMessage.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(postMessage.fulfilled, (state, action) => {
        state.status = "successful";
        const { chatId, message } = action.meta.arg;
        const newMessage = { chatId, message: [message] };
        const elementSearch = state.message.some((el) => el.chatId === newMessage.chatId);
  
        if(!elementSearch) {
          state.message.push(newMessage)
        } else {
          const res = state.message.find((el) => el.chatId === newMessage.chatId);
          res.message.push(...newMessage.message);
      }
      })
      .addCase(postMessage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default messageSlice.reducer;
