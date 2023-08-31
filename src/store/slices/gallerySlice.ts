import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  GalleryBreed,
  GalleryLimit,
  GalleryFilters,
  GalleryOrder,
  GalleryType,
} from "../../models/filters";
import {
  breedsDefaultOptions,
  limitPerPageOptions,
  orderOptions,
  typeOptions,
} from "../../components/GalleryFilters/selectsAsset";
import { catApiQuery, catApiThunk } from "../api/catApi";
import { getBreedId, getCatImagesParams, getCatImagesUrl } from "../helpers/galleryHelper";
import { BreedRes } from "../../models/catApi";

const initialState: GalleryFilters = {
  filters: {
    order: orderOptions[0],
    breed: { name: breedsDefaultOptions[0], id: "" },
    limit: limitPerPageOptions[0],
    type: typeOptions[0],
    page: 1,
  },
  catImages: {
    data: [],
    loadingStatus: "idle",
  },
};

export const fetchCatImages = createAsyncThunk(
  "gallery/catIamges",
  async (params: getCatImagesParams, { getState }) => {
    const response = await catApiThunk.get(getCatImagesUrl(params));
    return response.data;
  }
);

export const gallerySlice = createSlice({
  name: "galleryFilters",
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<GalleryOrder>) => {
      state.filters.order = action.payload;
    },
    setBreed: (state, action: PayloadAction<{ searchBreed: string; breeds: BreedRes[] | [] }>) => {
      const breedId = getBreedId(action.payload.searchBreed, action.payload.breeds);
      state.filters.breed.name = action.payload.searchBreed;
      state.filters.breed.id = breedId;
    },
    setLimit: (state, action: PayloadAction<GalleryLimit>) => {
      state.filters.limit = action.payload;
    },
    setType: (state, action: PayloadAction<GalleryType>) => {
      state.filters.type = action.payload;
    },
    seFiltersToInitialState: (state) => {
      state.filters.order = orderOptions[0];
      state.filters.breed.name = breedsDefaultOptions[0];
      state.filters.breed.id = "";
      state.filters.limit = limitPerPageOptions[0];
      state.filters.type = typeOptions[0];
      state.filters.page = 1;
      state.catImages.loadingStatus = "idle";
      state.catImages.data = [];
    },
  },
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

export const { setBreed, setLimit, setOrder, setType, seFiltersToInitialState } =
  gallerySlice.actions;

export default gallerySlice.reducer;
