import { LikeImageRes } from "../../models/catApi";
import { API_SUB_ID, catApiQuery } from "./catApi";

type VoteRes = {
  message: string;
  id: number;
  image_id: string;
  sub_id: string;
  value: boolean;
  country_code: string;
};

const extendedApi = catApiQuery.injectEndpoints({
  endpoints: (builder) => ({
    getVoteImages: builder.query<LikeImageRes[], void>({
      query: () => ({ url: `votes` }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Votes", id } as const)),
              { type: "Votes", id: "VOTES_LIST" },
            ]
          : [{ type: "Votes", id: "VOTES_LIST" }],
    }),
    addVoteImage: builder.mutation<VoteRes, { id: string; vote: boolean }>({
      query: ({ id, vote }) => ({
        url: `votes`,
        method: "POST",
        body: {
          image_id: id,
          value: vote ? 1 : -1,
          sub_id: API_SUB_ID,
        },
      }),
      invalidatesTags: [{ type: "Votes", id: "VOTES_LIST" }],
    }),
  }),

  overrideExisting: false,
});

export const { useAddVoteImageMutation, useGetVoteImagesQuery } = extendedApi;
