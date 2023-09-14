import React from "react";
import styles from "./styles/Pages.module.css";
import PageHeader from "../components/PageHeader/PageHeader";
import BreedsFilters from "../components/BreedsFilters/BreedsFilters";
import BreedsGrid from "../components/ImagesGrid/BreedsGrid";
import BreedsPagination from "../components/Pagination/BreedsPagination";

const BreedsPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <PageHeader pageName="BREEDS">
        <BreedsFilters />
      </PageHeader>
      <BreedsGrid />
      <BreedsPagination />
    </div>
  );
};

export default BreedsPage;
