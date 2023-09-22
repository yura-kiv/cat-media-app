import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { useGetBreedsQuery } from "../../store/api/queries/breedsQuery";
import { setPage } from "../../store/slices/breedSlice";
import Pagination from "./Pagination";

const BreedsPagination = () => {
  const dispatch = useAppDispatch();
  const breeds = useGetBreedsQuery();
  const params = useAppSelector((state) => state.breedSlice);

  return breeds.data && breeds.data.length !== 0 && params.pagination.showPagination ? (
    <Pagination
      activePage={params.filters.page}
      dataCount={breeds.data.length}
      limit={+params.filters.limit}
      setPage={(value) => {
        dispatch(setPage({ page: value }));
      }}
    />
  ) : (
    <></>
  );
};

export default BreedsPagination;
