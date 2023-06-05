import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../utils/baseUrl.js";

const initialState = {
  message: [],
  status: "idle",
  statusReceiveNotification: "idle",
  statusDeleteNotification: "idle",
  error: null,
  errorReceiveNotification: null,
  errorDeleteNotification: null,
  receiptId: null,
  result: null,
};

export const postMessage = createAsyncThunk(
  "user/postMessage",
  async ({ idInstance, apiTokenInstance, chatId, message }, thunkAPI) => {
    try {
      const res = await axios.post(
        baseUrl + `${idInstance}` + 
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

export const receiveNotification = createAsyncThunk(
  "user/receiveNotification",
  async ({ idInstance, apiTokenInstance }, thunkAPI) => {
    try {
      const res = await axios.get(
        baseUrl +
          `${idInstance}` +
          "/receiveNotification/" +
          `${apiTokenInstance}`
      );
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue({ error: err.message });
    }
  }
);

export const deleteNotification = createAsyncThunk(
  "user/deleteNotification",
  async ({ idInstance, apiTokenInstance, receiptId }, thunkAPI) => {
    try {
      const res = await axios.delete(
        baseUrl +
          `${idInstance}` +
          "/deleteNotification/" +
          `${apiTokenInstance}` +
          "/" +
          `${receiptId}`
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
        const newMessage = { chatId, message: [[message, "sent"]] };
        const elementSearch = state.message.some(
          (el) => el.chatId === newMessage.chatId
        );

        if (!elementSearch) {
          state.message.push(newMessage);
        } else {
          const res = state.message.find(
            (el) => el.chatId === newMessage.chatId
          );
          res.message.push(...newMessage.message);
        }
      })
      .addCase(postMessage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      //receiveNotification
      .addCase(receiveNotification.pending, (state, action) => {
        state.statusReceiveNotification = "loading";
      })
      .addCase(receiveNotification.fulfilled, (state, action) => {
        state.statusReceiveNotification = "successful";
        const receiptId = action.payload?.receiptId || null;
        state.receiptId = receiptId;

        if (receiptId) {
          const bodyRes = action.payload.body;
          const typeWebhook = bodyRes.typeWebhook;

          if (typeWebhook === "incomingMessageReceived") {
            const { chatId } = bodyRes.senderData;
            const { textMessage } = bodyRes.messageData.textMessageData;
            const newMessage = {
              chatId,
              message: [[textMessage, "received"]],
            };
            const elementSearch = state.message.some(
              (el) => el.chatId === newMessage.chatId
            );

            if (!elementSearch) {
              state.message.push(newMessage);
            } else {
              const res = state.message.find(
                (el) => el.chatId === newMessage.chatId
              );
              res.message.push(...newMessage.message);
            }
          }
        }
      })
      .addCase(receiveNotification.rejected, (state, action) => {
        state.statusReceiveNotification = "failed";
        state.errorReceiveNotification = action.error.message;
      })

      //deleteNotification
      .addCase(deleteNotification.pending, (state, action) => {
        state.statusDeleteNotification = "loading";
      })
      .addCase(deleteNotification.fulfilled, (state, action) => {
        state.statusDeleteNotification = "successful";
        state.result = action.payload.result;
        state.receiptId = null;
      })
      .addCase(deleteNotification.rejected, (state, action) => {
        state.statusDeleteNotification = "failed";
        state.errorDeleteNotification = action.error.message;
      });
  },
});

export default messageSlice.reducer;
