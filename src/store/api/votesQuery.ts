import { subID } from "../..";
import { LikeImageRes, VoteRes } from "../../models/catApi";
import { catApiQuery } from "./catApi";

// e7b8a30b-0475-46a6-9adb-0f950bf608eb

const extendedApi = catApiQuery.injectEndpoints({
  endpoints: (builder) => ({
    getVoteImages: builder.query<LikeImageRes[], void>({
      query: () => ({ url: `votes?sub_id=${subID}` }),
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
          sub_id: subID,
        },
      }),
      invalidatesTags: [{ type: "Votes", id: "VOTES_LIST" }],
    }),
  }),

  overrideExisting: false,
});

export const { useAddVoteImageMutation, useGetVoteImagesQuery } = extendedApi;
