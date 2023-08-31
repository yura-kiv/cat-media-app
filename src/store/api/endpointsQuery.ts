import { BreedRes, CatImagesRes } from "../../models/catApi";
import { catApiQuery } from "./catApi";

const extendedApi = catApiQuery.injectEndpoints({
  endpoints: (builder) => ({
    getBreeds: builder.query<BreedRes[], void>({
      query: () => `breeds`,
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: "Breeds" as const, id })), "Breeds"]
          : ["Breeds"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetBreedsQuery } = extendedApi;
