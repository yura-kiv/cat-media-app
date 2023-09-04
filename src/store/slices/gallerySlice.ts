import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GalleryCatImages } from "../../models/filters";
import { catApiThunk } from "../api/catApi";
import { getCatImagesParams, getCatImagesUrl } from "../helpers/galleryHelper";

const initialState: GalleryCatImages = {
  catImages: {
    data: [],
    loadingStatus: "idle",
  },
};

export const fetchCatImages = createAsyncThunk(
  "gallery/catIamges",
  async (params: getCatImagesParams) => {
    const response = await catApiThunk.get(getCatImagesUrl(params));
    return response.data;
  }
);

export const gallerySlice = createSlice({
  name: "galleryFilters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatImages.pending, (state, action) => {
        state.catImages.loadingStatus = "pending";
      })
      .addCase(fetchCatImages.fulfilled, (state, action) => {
        state.catImages.loadingStatus = "succeeded";
        state.catImages.data = action.payload;
      });
  },
});

export const {} = gallerySlice.actions;

export default gallerySlice.reducer;
