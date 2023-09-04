import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const API_URL = "https://api.thecatapi.com/v1/";
const API_KEY = "111 live_equqggvz67izTr4PhzOS2j8sm2yoVOPYEUzjmNjVdoDpTw38WdblkVbvsYd7iAdb";

export const catApiQuery = createApi({
  reducerPath: "catApi",
  tagTypes: ["Breed"],
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
