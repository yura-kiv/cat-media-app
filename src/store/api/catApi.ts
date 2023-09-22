import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY, API_URL } from "../../services/api";

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
