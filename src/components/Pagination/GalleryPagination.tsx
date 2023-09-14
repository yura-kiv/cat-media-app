import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import Pagination from "./Pagination";
import { fetchCatImages } from "../../store/slices/gallerySlice";

const GalleryPagination = () => {
  const dispatch = useAppDispatch();
  const pagination = useAppSelector((state) => state.gallerySlice.pagination);
  return (
    <>
      {pagination.count !== 0 && pagination.showPagination ? (
        <Pagination
          activePage={pagination.page}
          dataCount={pagination.count}
          limit={+pagination.limit}
          setPage={(value) => {
            dispatch(fetchCatImages({ ...pagination.filters, page: value }));
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default GalleryPagination;
