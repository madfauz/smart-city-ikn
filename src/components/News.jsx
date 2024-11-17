import React, { useState } from "react";
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
      id="berita"
      className="w-full mt-[-2px] px-4 sm:px-6 lg:px-8mx-auto dark:bg-dark"
    >
      <div className="flex flex-col items-center justify-center text-center ">
        <h2 className="text-dark font-poppins pt-8 mb-2 text-vm-title sm:text-sm-title md:text-md-title lg:text-lg-title xl:text-xl-title font-bold tracking-tight title-color dark:text-white">
          {t("bagian_berita.header_berita")}
        </h2>

        <p className="text-semidark font-poppins dark:text-semilight text-vm-desc sm:text-sm-desc md:text-md-desc lg:text-lg-desc xl:text-xl-desc mb-4 sm:mb-6 md:mb-md text-dark">
          {t("bagian_berita.deskripsi_berita")}
        </p>
      </div>

      {/*Category*/}
      <div className="flex justify-start gap-4 flex-wrap hidden md:flex">
        <span
          data-aos="fade-right"
          onClick={() => handleCategoryClick("kategori-1")}
          className={`${
            selectedCategory === "kategori-1"
              ? "font-poppins bg-primary text-white hover:text-white dark:hover:text-white dark:border-none border-none"
              : "font-poppins bg-white dark:bg-dark dark:text-semilight text-gray dark:border-opacity-20 border-2"
          } border border-dark border-opacity-20 vm-card-tag sm-card-tag md-card-tag lg-card-tag xl-card-tag font-poppins dark:border-white dark:text-white dark:hover:text-primary dark:hover:border-primary hover:text-primary hover:cursor-pointer hover:border-primary leading-[1.5] py-2 px-4 md:py-3 md:px-6 rounded-lg flex items-center justify-center font-regular `}
        >
          {t("kategori-konten.kategori-1")}
        </span>

        <span
          data-aos="fade-right"
          onClick={() => handleCategoryClick("kategori-2")}
          className={`${
            selectedCategory === "kategori-2"
              ? "font-poppins bg-primary text-white hover:text-white dark:hover:text-white dark:border-none border-none"
              : "font-poppins bg-white dark:bg-dark dark:text-semilight text-gray dark:border-opacity-20 border-2"
          } border border-dark border-opacity-20 vm-card-tag sm-card-tag md-card-tag lg-card-tag xl-card-tag font-poppins dark:border-white dark:text-white dark:hover:text-primary dark:hover:border-primary hover:text-primary hover:cursor-pointer hover:border-primary leading-[1.5]  py-2 px-4 md:py-3 md:px-6 rounded-lg flex items-center justify-center font-regular `}
        >
          {t("kategori-konten.kategori-2")}
        </span>

        <span
          data-aos="fade-right"
          onClick={() => handleCategoryClick("kategori-3")}
          className={`${
            selectedCategory === "kategori-3"
              ? "font-poppins bg-primary text-white hover:text-white dark:hover:text-white dark:border-none border-none"
              : "font-poppins bg-white dark:bg-dark dark:text-semilight text-gray  dark:border-opacity-20 border-2"
          } border border-dark border-opacity-20 vm-card-tag sm-card-tag md-card-tag lg-card-tag xl-card-tag font-poppins dark:border-white dark:text-white dark:hover:text-primary dark:hover:border-primary hover:text-primary hover:cursor-pointer hover:border-primary leading-[1.5] py-2 px-4 md:py-3 md:px-6 rounded-lg flex items-center justify-center font-regular`}
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
        <div className="inline-flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:pt-4 pb-10 overflow-auto scrollbar-hide">
          {/*Card 1*/}
          {(selectedCategory === "kategori-1" ||
            selectedCategory === "kategori-2") && (
            <div
              data-aos="fade-down"
              onClick={() => openModal("berita-1")}
              className="hover:shadow-none hover:border hover:border-gray hover:border-opacity-40 bg-white dark:hover:border-primary dark:bg-dark dark:border-2 dark:border-opacity-20 dark:border-white rounded-xl shadow-lg dark:shadow-none hover:cursor-pointer overflow-hidden w-72 sm:w-auto"
            >
              <div className="relative">
                <div className="p-4">
                  <div className="vm-card-tag sm-card-tag md-card-tag lg-card-tag xl-card-tag font-poppins bg-primary m-4 absolute top-0 left-0 text-white font-semibold px-2 py-1 rounded-lg">
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
                <p className="font-poppins dark:text-semilight text-gray text-left vm-card-date sm-card-date md-card-date lg-card-date xl-card-date mb-1">
                  {t("card-berita.tanggal_berita.berita-1")}
                </p>
                <div className="text-dark vm-card-title sm-card-title md-card-title lg-card-title xl-card-title font-poppins hover:underline dark:hover:underline dark:text-white font-bold title-color mb-2 line-clamp-2">
                  {t("card-berita.judul_berita.berita-1")}
                </div>
                <p className="font-poppins dark:text-semilight text-semidark font-regular vm-card-desc sm-card-desc md-card-desc lg-card-desc xl-card-desc line-clamp-5">
                  {t("card-berita.preview_berita.preview-1")}
                </p>
              </div>
            </div>
          )}

          {/*Card 2*/}
          {(selectedCategory === "kategori-1" ||
            selectedCategory === "kategori-3") && (
            <div
              data-aos="fade-down"
              onClick={() => openModal("berita-2")}
              className="hover:shadow-none hover:border hover:border-gray hover:border-opacity-40 bg-white dark:hover:border-primary dark:bg-dark dark:border-2 dark:border-opacity-20 dark:border-white rounded-xl shadow-lg dark:shadow-none hover:cursor-pointer overflow-hidden w-72 sm:w-auto"
            >
              <div className="relative">
                <div className="p-4">
                  <div className="vm-card-tag sm-card-tag md-card-tag lg-card-tag xl-card-tag font-poppins bg-primary m-4 absolute top-0 left-0 text-white font-semibold px-2 py-1 rounded-lg">
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
                <p className="font-poppins dark:text-semilight text-gray text-left vm-card-date sm-card-date md-card-date lg-card-date xl-card-date mb-1">
                  {t("card-berita.tanggal_berita.berita-2")}
                </p>
                <div className="text-dark vm-card-title sm-card-title md-card-title lg-card-title xl-card-title font-poppins hover:underline dark:hover:underline dark:text-white font-bold title-color mb-2 line-clamp-2">
                  {t("card-berita.judul_berita.berita-2")}
                </div>
                <p className="font-poppins dark:text-semilight text-semidark font-regular vm-card-desc sm-card-desc md-card-desc lg-card-desc xl-card-desc line-clamp-5">
                  {t("card-berita.preview_berita.preview-2")}
                </p>
              </div>
            </div>
          )}
          {/*Card 3*/}
          {(selectedCategory === "kategori-1" ||
            selectedCategory === "kategori-2") && (
            <div
              data-aos="fade-down"
              onClick={() => openModal("berita-3")}
              className="hover:shadow-none hover:border hover:border-gray hover:border-opacity-40 bg-white dark:hover:border-primary dark:bg-dark dark:border-2 dark:border-opacity-20 dark:border-white rounded-xl shadow-lg dark:shadow-none hover:cursor-pointer overflow-hidden w-72 sm:w-auto"
            >
              <div className="relative">
                <div className="p-4">
                  <div className="vm-card-tag sm-card-tag md-card-tag lg-card-tag xl-card-tag font-poppins bg-primary m-4 absolute top-0 left-0 text-white font-semibold px-2 py-1 rounded-lg">
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
                <p className="font-poppins dark:text-semilight text-gray text-left vm-card-date sm-card-date md-card-date lg-card-date xl-card-date mb-1">
                  {t("card-berita.tanggal_berita.berita-3")}
                </p>
                <div className="text-dark vm-card-title sm-card-title md-card-title lg-card-title xl-card-title font-poppins dark:text-white hover:underline dark:hover:underline  font-bold title-color mb-2 line-clamp-2">
                  {t("card-berita.judul_berita.berita-3")}
                </div>
                <p className="font-poppins dark:text-semilight text-semidark font-regular vm-card-desc sm-card-desc md-card-desc lg-card-desc xl-card-desc line-clamp-5">
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
