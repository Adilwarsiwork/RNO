import { getNews } from "@/sanity/sanity-client";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { NewsData } from "@/types/sanity-client-type";

export const getAllNews = createAsyncThunk(
  "newsdata",
  async (data, thunkApi) => {
    try {
      const response = await getNews();
      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

interface NewsState {
  loading: boolean;
  news: null | NewsData[] | any;
  error: null | string | any;
}

const initialState = {
  loading: false,
  news: null,
  error: null,
} as NewsState;

export const newsData = createSlice({
  name: "newsdata",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllNews.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(getAllNews.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload;
        state.error = null;
      }),
      builder.addCase(getAllNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default newsData.reducer;
