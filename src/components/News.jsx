import React, { useState } from "react";
import "../app.css";
import Modal from "./Modal";
import berita1 from "../assets/berita-1.jpeg";
import berita2 from "../assets/berita-2.jpeg";
import berita3 from "../assets/berita-3.jpeg";
import { useTranslation } from "react-i18next";

function News() {
  const [selectedCategory, setSelectedCategory] = useState("kategori-1");

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) return;

    setSelectedCategory(category);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contentType, setContentType] = useState("");

  const openModal = (type) => {
    setContentType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { t, i18n } = useTranslation();

  return (
    <div
      id="sectionberita"
      className="w-full px-4 sm:px-6 lg:px-8mx-auto dark:bg-dark"
    >
      <div className="flex flex-col items-center justify-center text-center ">
        <p className="font-poppins pt-8 mb-2 text-4xl sm:text-4xl md:text-5xl font-bold tracking-tight text-dark dark:text-white">
          {t("bagian_berita.header_berita")}
        </p>

        <p className="font-poppins dark:text-white text-base mb-4 sm:mb-6 md:mb-md text-gray-700">
          {t("bagian_berita.deskripsi_berita")}
        </p>
      </div>

      {/*Category*/}
      <div className="flex justify-start gap-4 flex-wrap hidden md:flex">
        <span
          onClick={() => handleCategoryClick("kategori-1")}
          className={`${
            selectedCategory === "kategori-1"
              ? "font-poppins bg-primary text-white hover:text-white dark:hover:text-white dark:border-none"
              : "font-poppins bg-white dark:bg-dark text-gray dark:border-opacity-20 border-2"
          } font-poppins dark:border-white dark:text-white dark:hover:text-primary dark:hover:border-primary hover:text-primary hover:cursor-pointer hover:border-primary leading-[1.5] border border-gray py-2 px-4 md:py-3 md:px-6 rounded-lg flex items-center justify-center font-regular text-base lg:text-lg`}
        >
          {t("kategori-konten.kategori-1")}
        </span>

        <span
          onClick={() => handleCategoryClick("kategori-2")}
          className={`${
            selectedCategory === "kategori-2"
              ? "font-poppins bg-primary text-white hover:text-white dark:hover:text-white dark:border-none"
              : "font-poppins bg-white dark:bg-dark text-gray dark:border-opacity-20 border-2"
          } font-poppins dark:border-white dark:text-white dark:hover:text-primary dark:hover:border-primary hover:text-primary hover:cursor-pointer hover:border-primary leading-[1.5] border border-gray py-2 px-4 md:py-3 md:px-6 rounded-lg flex items-center justify-center font-regular text-base lg:text-lg`}
        >
          {t("kategori-konten.kategori-2")}
        </span>

        <span
          onClick={() => handleCategoryClick("kategori-3")}
          className={`${
            selectedCategory === "kategori-3"
              ? "font-poppins bg-primary text-white hover:text-white dark:hover:text-white dark:border-none"
              : "font-poppins bg-white dark:bg-dark text-gray dark:border-opacity-20 border-2"
          } font-poppins dark:border-white dark:text-white dark:hover:text-primary dark:hover:border-primary hover:text-primary hover:cursor-pointer hover:border-primary leading-[1.5] border border-gray py-2 px-4 md:py-3 md:px-6 rounded-lg flex items-center justify-center font-regular text-base lg:text-lg`}
        >
          {t("kategori-konten.kategori-3")}
        </span>
      </div>

      {/*News*/}

      <div className="relative overflow-x-auto">
        {/*Modal*/}
        <Modal
          className="dark:bg-dark dark:text-white"
          isOpen={isModalOpen}
          onClose={closeModal}
          contentType={contentType}
        />

        {/*News Cards*/}
        <div className="inline-flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 py-10 overflow-auto scrollbar-hide">
          {/*Card 1*/}
          {(selectedCategory === "kategori-1" ||
            selectedCategory === "kategori-2") && (
            <div
              onClick={() => openModal("berita-1")}
              className="hover:shadow-none hover:border hover:border-gray hover:border-opacity-40 bg-white dark:hover:border-primary dark:bg-dark dark:border-2 dark:border-opacity-20 dark:border-white rounded-xl shadow-lg dark:shadow-none hover:cursor-pointer overflow-hidden w-72 sm:w-auto"
            >
              <div className="relative">
                <div className="p-4">
                  <div className="font-poppins bg-primary m-4 absolute top-0 left-0 bg-indigo-500 text-white font-semibold px-2 py-1 rounded-lg">
                    {t("card-berita.tag_berita.berita-1")}
                  </div>
                  <img
                    className="rounded-lg w-full h-48 object-cover"
                    src={berita1}
                    alt="foto berita ke-1"
                  />
                </div>
              </div>
              <div className="px-4 pb-8 pt-1">
                <p className="font-poppins dark:text-white text-gray text-left text-sm sm:text-base mb-1">
                  {t("card-berita.tanggal_berita.berita-1")}
                </p>
                <div className="font-poppins hover:underline dark:hover:underline dark:text-white text-lg font-bold text-dark mb-2 line-clamp-2">
                  {t("card-berita.judul_berita.berita-1")}
                </div>
                <p className="font-poppins dark:text-white text-semidark font-regular text-sm line-clamp-5">
                  {t("card-berita.preview_berita.preview-1")}
                </p>
              </div>
            </div>
          )}

          {/*Card 2*/}
          {(selectedCategory === "kategori-1" ||
            selectedCategory === "kategori-3") && (
            <div
              onClick={() => openModal("berita-2")}
              className="hover:shadow-none hover:border hover:border-gray hover:border-opacity-40 bg-white dark:hover:border-primary dark:bg-dark dark:border-2 dark:border-opacity-20 dark:border-white rounded-xl shadow-lg dark:shadow-none hover:cursor-pointer overflow-hidden w-72 sm:w-auto"
            >
              <div className="relative">
                <div className="p-4">
                  <div className="font-poppins bg-primary m-4 absolute top-0 left-0 bg-indigo-500 text-white font-semibold px-2 py-1 rounded-lg">
                    {t("card-berita.tag_berita.berita-2")}
                  </div>
                  <img
                    className="rounded-lg w-full h-48 object-cover"
                    src={berita2}
                    alt="foto berita ke-2"
                  />
                </div>
              </div>

              <div className="px-4 pb-8 pt-1">
                <p className="font-poppins dark:text-white text-gray text-left text-sm sm:text-base mb-1">
                  {t("card-berita.tanggal_berita.berita-2")}
                </p>
                <div className="font-poppins hover:underline dark:hover:underline dark:text-white text-lg font-bold text-dark mb-2 line-clamp-2">
                  {t("card-berita.judul_berita.berita-2")}
                </div>
                <p className="font-poppins dark:text-white text-semidark font-regular text-sm line-clamp-5">
                  {t("card-berita.preview_berita.preview-2")}
                </p>
              </div>
            </div>
          )}
          {/*Card 3*/}
          {(selectedCategory === "kategori-1" ||
            selectedCategory === "kategori-2") && (
            <div
              onClick={() => openModal("berita-3")}
              className="hover:shadow-none hover:border hover:border-gray hover:border-opacity-40 bg-white dark:hover:border-primary dark:bg-dark dark:border-2 dark:border-opacity-20 dark:border-white rounded-xl shadow-lg dark:shadow-none hover:cursor-pointer overflow-hidden w-72 sm:w-auto"
            >
              <div className="relative">
                <div className="p-4">
                  <div className="font-poppins bg-primary m-4 absolute top-0 left-0 bg-indigo-500 text-white font-semibold px-2 py-1 rounded-lg">
                    {t("card-berita.tag_berita.berita-3")}
                  </div>
                  <img
                    className="rounded-lg w-full h-48 object-cover"
                    src={berita3}
                    alt="foto berita ke-3"
                  />
                </div>
              </div>

              <div className="px-4 pb-8 pt-1">
                <p className="font-poppins dark:text-white text-gray text-left text-sm sm:text-base mb-1">
                  {t("card-berita.tanggal_berita.berita-3")}
                </p>
                <div className="font-poppins dark:text-white hover:underline dark:hover:underline  text-lg font-bold text-dark mb-2 line-clamp-2">
                  {t("card-berita.judul_berita.berita-3")}
                </div>
                <p className="font-poppins dark:text-white text-semidark font-regular text-sm line-clamp-5">
                  {t("card-berita.preview_berita.preview-3")}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/*End*/}
    </div>
  );
}

export default News;
