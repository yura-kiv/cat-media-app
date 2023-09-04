import { BreedRes, CatImagesRes } from "../../models/catApi";
import { catApiQuery } from "./catApi";

const extendedApi = catApiQuery.injectEndpoints({
  endpoints: (builder) => ({
    getBreeds: builder.query<BreedRes[], void>({
      query: () => `breeds`,
      providesTags: (result, error, arg) =>
        result ? [...result.map(({ id }) => ({ type: "Breed" as const, id })), "Breed"] : ["Breed"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetBreedsQuery } = extendedApi;
