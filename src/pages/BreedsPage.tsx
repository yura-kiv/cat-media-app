import React from "react";
import styles from "./styles/Pages.module.css";
import PageHeader from "../components/PageHeader/PageHeader";
import CustomSelect from "../components/CustomSelect/CustomSelect";
import { useGetBreedsQuery } from "../store/api/endpointsQuery";
import BreedsFilters from "../components/BreedsFilters/BreedsFilters";
import BreedsGrid from "../components/ImagesGrid/BreedsGrid";

const BreedsPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <PageHeader pageName="BREEDS">
        <BreedsFilters />
      </PageHeader>
      <BreedsGrid />
    </div>
  );
};

export default BreedsPage;
