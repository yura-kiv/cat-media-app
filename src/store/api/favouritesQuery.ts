import { FavouriteImageRes } from "../../models/catApi";
import { API_SUB_ID, catApiQuery } from "./catApi";

const extendedApi = catApiQuery.injectEndpoints({
  endpoints: (builder) => ({
    getFavouriteImages: builder.query<FavouriteImageRes[], void>({
      query: () => ({ url: `favourites?&sub_id=${API_SUB_ID}` }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Favourites", id } as const)),
              { type: "Favourites", id: "FAV_LIST" },
            ]
          : [{ type: "Favourites", id: "FAV_LIST" }],
    }),
    addFavouriteImage: builder.mutation<{ message: string; id: number | string }, string>({
      query: (id) => ({
        url: `favourites`,
        method: "POST",
        body: {
          image_id: id,
          sub_id: API_SUB_ID,
        },
      }),
      invalidatesTags: [{ type: "Favourites", id: "FAV_LIST" }],
    }),
    deleteFavouriteImage: builder.mutation<{ message: string }, number>({
      query: (id) => ({
        url: `favourites/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Favourites", id: "FAV_LIST" }],
    }),
  }),

  overrideExisting: false,
});

export const {
  useGetFavouriteImagesQuery,
  useAddFavouriteImageMutation,
  useDeleteFavouriteImageMutation,
} = extendedApi;
