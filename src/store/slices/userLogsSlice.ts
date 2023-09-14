import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UserLogCategory = "like" | "dislike" | "favourite";

type UserLog = {
  imageId: string;
  time: string;
  category: UserLogCategory;
  status: boolean;
};

interface InitialState {
  logs: UserLog[];
}

const initialState: InitialState = {
  logs: [],
};

export const userLogsSlice = createSlice({
  name: "breedsFilters",
  initialState,
  reducers: {
    setVoteLog: (state, action: PayloadAction<{ id: string; status: boolean }>) => {
      const { id, status } = action.payload;
      const dislikeLog: UserLog = {
        imageId: id,
        category: status ? "like" : "dislike",
        time: new Date().toISOString(),
        status,
      };
      state.logs.push(dislikeLog);
    },
    setFavouriteLog: (state, action: PayloadAction<{ id: string; status: boolean }>) => {
      const { id, status } = action.payload;
      const favouriteLog: UserLog = {
        imageId: id,
        category: "favourite",
        time: new Date().toISOString(),
        status,
      };
      state.logs.push(favouriteLog);
    },
  },
});

export const { setFavouriteLog, setVoteLog } = userLogsSlice.actions;

export default userLogsSlice.reducer;
