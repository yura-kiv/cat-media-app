import axios from "axios";

export const API_URL = process.env.REACT_APP_CAT_API_URL;
export const API_KEY = process.env.REACT_APP_CAT_API_KEY;

export const catApiThunk = axios.create({
  baseURL: API_URL,
  headers: {
    "x-api-key": API_KEY,
  },
});
