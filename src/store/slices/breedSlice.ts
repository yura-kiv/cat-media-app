import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BreedFilters } from "../../components/BreedsFilters/breedFiltersTypes";

interface InitialState {
  filters: BreedFilters;
  pagination: {
    showPagination: boolean;
  };
}

const initialState: InitialState = {
  filters: {
    breed: "",
    limit: "5",
    order: null,
    page: 0,
  },
  pagination: {
    showPagination: true,
  },
};

export const breedsSlice = createSlice({
  name: "breedsFilters",
  initialState,
  reducers: {
    setBreed: (state, action: PayloadAction<{ breed: string }>) => {
      action.payload.breed !== ""
        ? (state.pagination.showPagination = false)
        : (state.pagination.showPagination = true);
      state.filters.breed = action.payload.breed;
      state.filters.page = 0;
    },
    setLimit: (state, action: PayloadAction<{ limit: string }>) => {
      state.filters.limit = action.payload.limit;
      state.filters.page = 0;
    },
    setPage: (state, action: PayloadAction<{ page: number }>) => {
      state.filters.page = action.payload.page;
    },
    setOrder: (state, action: PayloadAction<{ order: boolean | null }>) => {
      state.filters.order = action.payload.order;
      state.filters.page = 0;
    },
    setFiltersToinitialState: (state) => {
      state.filters = initialState.filters;
    },
  },
});

export const { setBreed, setLimit, setOrder, setPage, setFiltersToinitialState } =
  breedsSlice.actions;

export default breedsSlice.reducer;
