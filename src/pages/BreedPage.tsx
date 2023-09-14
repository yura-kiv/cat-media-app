import React from "react";
import styles from "./styles/Pages.module.css";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader/PageHeader";
import { useGetBreedImagesQuery, useGetBreedsQuery } from "../store/api/breedsQuery";
import Loader from "../components/Loader/Loader";
import MessageBlock from "../components/MessageBlock/MessageBlock";
import { ReactComponent as Error } from "../assets/icons/error-20.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./styles/customPagination.css";

const BreedsSlider: React.FC<{ id: string }> = ({ id }) => {
  const images = useGetBreedImagesQuery(id!);
  return (
    <>
      {images.isLoading ? (
        <Loader size="large" />
      ) : images.data ? (
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            type: "bullets",
            modifierClass: "my-custom-pagination-",
          }}
          className="w-full h-96 rounded-2xl"
          grabCursor
        >
          {images.data.map((image) => {
            return (
              <SwiperSlide key={image.id}>
                <img
                  src={image.url}
                  alt={`Image of breed id: ${id}, image id:${image.id}}`}
                  className="raletive w-full h-full object-cover"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <MessageBlock
          color="gray"
          icon={<Error />}
          innerContent={"Problem uploading images..."}
        />
      )}
    </>
  );
};

const BreedPage = () => {
  const { id } = useParams();
  const { breed, isLoading } = useGetBreedsQuery(undefined, {
    selectFromResult: ({ data, isLoading }) => ({
      breed: data?.find((breed) => breed.id === id),
      isLoading,
    }),
  });

  return (
    <div className={styles.pageWrapper}>
      <PageHeader pageName="BREED">
        <span className="py-2 px-6 uppercase bg-red-400 text-white rounded-2xl text-xl font-medium tracking-widest ml-3">
          {id ? (id.length! > 10 ? id.slice(0, 10) + "..." : id) : "BreedID"}
        </span>
      </PageHeader>
      {isLoading ? (
        <Loader size="large" />
      ) : breed ? (
        <>
          <BreedsSlider id={breed.id} />
          <div className="relative w-full h-fit border-2 border-red-200 rounded-2xl px-16 pb-6 mt-10">
            <div className="absolute -top-8 left-0 w-full h-fit flex justify-center">
              <span className="realtive block w-fit py-2.5 px-6 h-fit bg-white rounded-xl font-medium text-3xl text-gray-800">
                {breed.name}
              </span>
            </div>
            <p className="block h-fit w-full text-center font-medium text-gray-600 text-lg mt-10 mb-6 px-8">
              {breed.description}
            </p>
            <div className="w-fit grid grid-cols-2 grid-rows-3 gap-x-16">
              <div className="row-span-3">
                <span className="block text-lg font-medium">Temperament:</span>
                <p className="block text-gray-700">{breed.temperament}</p>
              </div>
              <p className="block">
                <span className="text-lg font-medium">Origin:</span> {breed.origin}
              </p>
              <p className="block">
                <span className="text-lg font-medium">Weight:</span> {breed.weight.imperial} kgs
              </p>
              <p className="block">
                <span className="text-lg font-medium">Life span:</span> {breed.life_span} years
              </p>
            </div>
          </div>
        </>
      ) : (
        <MessageBlock
          icon={<Error />}
          color="gray"
          innerContent={`Breed Id: ${id} is not found. Try another breed...`}
        />
      )}
    </div>
  );
};

export default BreedPage;
