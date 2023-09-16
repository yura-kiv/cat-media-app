import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const API_URL = process.env.REACT_APP_CAT_API_URL;
const API_KEY = process.env.REACT_APP_CAT_API_KEY;

export const catApiQuery = createApi({
  reducerPath: "catApi",
  tagTypes: ["Breed", "Favourites", "Votes"],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      const token = API_KEY;
      if (token) {
        headers.set("x-api-key", token);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});

export const catApiThunk = axios.create({
  baseURL: API_URL,
  headers: {
    "x-api-key": API_KEY,
  },
});
