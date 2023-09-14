import { BreedRes, CatImageRes } from "../../models/catApi";
import { catApiQuery } from "./catApi";

const extendedApi = catApiQuery.injectEndpoints({
  endpoints: (builder) => ({
    getBreeds: builder.query<BreedRes[], void>({
      query: () => `breeds`,
      providesTags: (result, error, arg) =>
        result ? [...result.map(({ id }) => ({ type: "Breed" as const, id })), "Breed"] : ["Breed"],
    }),
    getBreedImages: builder.query<CatImageRes[], string>({
      query: (id) => ({ url: `images/search?breed_ids=${id}&limit=8` }),
    }),
  }),

  overrideExisting: false,
});

export const { useGetBreedsQuery, useGetBreedImagesQuery } = extendedApi;
