import React from "react";
import ReactPaginate from "react-paginate";
import Button from "../Buttons/Button";
import { ReactComponent as NextIcon } from "../../assets/icons/back-20.svg";
import styles from "./Pagination.module.css";

interface PaginationProps {
  limit: number;
  dataCount: number;
  activePage: number;
  setPage: (value: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ limit, dataCount, activePage, setPage }) => {
  const pageCount = Math.ceil(dataCount / limit);

  return (
    <ReactPaginate
      onPageChange={({ selected }) => {
        setPage(selected);
      }}
      forcePage={+activePage}
      marginPagesDisplayed={1}
      pageRangeDisplayed={4}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      className={styles.pagination}
      pageClassName={styles.page}
      pageLinkClassName={styles.link}
      activeClassName={styles.active}
      disabledClassName={styles.disable}
      breakLabel={<span className="text-gray-700 dark:text-gray-100">—</span>}
      nextLabel={
        <Button
          color="red"
          size="small"
          innerContent={
            <>
              next
              <NextIcon className="rotate-180 scale-50" />
            </>
          }
        />
      }
      previousLabel={
        <Button
          color="red"
          size="small"
          innerContent={
            <>
              <NextIcon className="scale-50" />
              previous
            </>
          }
        />
      }
    />
  );
};

export default Pagination;
