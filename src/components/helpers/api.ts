import axios from "axios";

const API_KEY = "live_equqggvz67izTr4PhzOS2j8sm2yoVOPYEUzjmNjVdoDpTw38WdblkVbvsYd7iAdb"; //thecatapi key

const axiosInstance = axios.create({
  baseURL: "https://api.thecatapi.com/v1", // default url
  headers: {
    "Content-Type": "application/json",
    "x-api-key": `Bearer ${API_KEY}`,
  },
});

export default axiosInstance;
