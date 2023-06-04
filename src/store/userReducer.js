import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: [],
  status: "idle",
  error: null,
};

export const getUser = createAsyncThunk(
  "user/getUser",
  async ({ idInstance, apiTokenInstance }, thunkAPI) => {
    try {
      const res = await axios.get(
        "https://api.green-api.com/waInstance" +
          `${idInstance}` +
          "/getSettings/" +
          `${apiTokenInstance}`
      );
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue({ error: err.message });
    }
  }
);

// export const addPost = createAsyncThunk(
//   "posts/addPost",
//   async (initialPost, thunkAPI) => {
//     try {
//       const res = await axios.post(url, initialPost);
//       return res.data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue({ error: err.message });
//     }
//   }
// );

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
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // .addCase(addPost.fulfilled, (state, action) => {
      //   state.user.push(action.payload);
      // });
  },
});

export default userSlice.reducer;
