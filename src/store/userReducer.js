import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../utils/baseUrl.js";

const initialState = {
  user: [],
  status: "idle",
  error: null,
  idInstance: null,
  apiTokenInstance: null,
};

export const getUser = createAsyncThunk(
  "user/getUser",
  async ({ idInstance, apiTokenInstance }, thunkAPI) => {
    try {
      const res = await axios.get(
        baseUrl + `${idInstance}` +
         "/getSettings/" +
          `${apiTokenInstance}`
      );
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue({ error: err.message });
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "successful";
        state.user = state.user.concat(action.payload);
        const { idInstance, apiTokenInstance } = action.meta.arg;
        state.idInstance = idInstance;
        state.apiTokenInstance = apiTokenInstance;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
