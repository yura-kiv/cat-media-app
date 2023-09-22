import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getCatImagesParams, getCatImagesUrl } from "../helpers/galleryHelper";
import { CatImageRes } from "../../models/catApi";
import { GalleryFilters } from "../../components/GalleryFilters/galleryFiltersTypes";
import {
  galleryBreedDafaultOptions,
  galleryLimitOptions,
  galleryOrderOptions,
  galleryTypeOptions,
} from "../../components/GalleryFilters/galleryFiltersOptions";
import { catApiThunk } from "../../services/api";

export interface GalleryCatImages {
  filters: GalleryFilters;
  pagination: {
    count: number;
    limit: number;
    page: number;
    showPagination: boolean;
    filters: GalleryFilters;
  };
  catImages: {
    loadingStatus: "idle" | "pending" | "succeeded" | "failed";
    data: CatImageRes[] | [];
  };
}

const initialFilters: GalleryFilters = {
  order: galleryOrderOptions[0].value,
  breed: galleryBreedDafaultOptions[0].value,
  limit: galleryLimitOptions[0].value,
  type: galleryTypeOptions[0].value,
};

const initialState: GalleryCatImages = {
  filters: initialFilters,
  pagination: {
    page: 0,
    limit: 0,
    count: 0,
    filters: initialFilters,
    showPagination: false,
  },
  catImages: {
    data: [],
    loadingStatus: "idle",
  },
};

export const fetchCatImages = createAsyncThunk(
  "gallery/catIamges",
  async (params: getCatImagesParams) => {
    const response = await catApiThunk.get(getCatImagesUrl(params));
    return {
      data: response.data,
      count: response.headers["pagination-count"] || 0,
      limit: response.headers["pagination-limit"] || 0,
      page: response.headers["pagination-page"] || 0,
    };
  }
);

export const gallerySlice = createSlice({
  name: "galleryFilters",
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<{ order: string }>) => {
      state.filters.order = action.payload.order;
    },
    setBreed: (state, action: PayloadAction<{ breed: string }>) => {
      state.filters.breed = action.payload.breed;
    },
    setLimit: (state, action: PayloadAction<{ limit: string }>) => {
      state.filters.limit = action.payload.limit;
    },
    setType: (state, action: PayloadAction<{ type: string }>) => {
      state.filters.type = action.payload.type;
    },
    setPaginationFilters: (state, action: PayloadAction<{ filters: GalleryFilters }>) => {
      state.pagination.filters = action.payload.filters;
      if (action.payload.filters.order === "RAND") state.pagination.showPagination = false;
      else state.pagination.showPagination = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatImages.pending, (state, action) => {
        state.catImages.loadingStatus = "pending";
      })
      .addCase(fetchCatImages.fulfilled, (state, action) => {
        state.catImages.loadingStatus = "succeeded";
        state.catImages.data = action.payload.data;
        state.pagination.count = action.payload.count;
        state.pagination.limit = action.payload.limit;
        state.pagination.page = action.payload.page;
      });
  },
});

export const { setBreed, setLimit, setOrder, setType, setPaginationFilters } = gallerySlice.actions;

export default gallerySlice.reducer;
