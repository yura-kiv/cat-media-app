import { useQuery } from "react-query";
import axiosInstance from "../components/helpers/api";

function useApi(queryKey: string, endpoint: string) {
  return useQuery(
    queryKey,
    async () => {
      const response = await axiosInstance.get(endpoint);
      return response.data;
    },
    { staleTime: 0 }
  );
}

export default useApi;
