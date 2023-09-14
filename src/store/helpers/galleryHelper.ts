export type getCatImagesParams = {
  order: string;
  type: string;
  breed: string;
  limit: string;
  page: number;
};

export const getCatImagesUrl = ({
  limit,
  type,
  breed,
  order,
  page,
}: getCatImagesParams): string => {
  const typeValue = type === "All" ? "" : type === "Static" ? "jpg,png" : "gif";
  return `images/search?limit=${limit}&mime_types=${typeValue}&order=${order}&size=&page=${page}&breed_ids=${breed}`;
};
