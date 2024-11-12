import React from "react";
import berita1 from "../assets/berita-1.jpeg";
import berita2 from "../assets/berita-2.jpeg";
import berita3 from "../assets/berita-3.jpeg";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8mx-auto dark:bg-dark">
      {/* Title Section */}
      <div className="flex flex-col items-center justify-center text-center ">
        <p className="pt-8 mb-2 text-4xl sm:text-4xl md:text-5xl font-bold tracking-tight text-dark dark:text-white">
          {t("bagian_berita.header_berita")}
        </p>

        <p className="dark:text-white text-base mb-4 sm:mb-6 md:mb-md text-gray-700">
          {t("bagian_berita.deskripsi_berita")}
        </p>
      </div>

      {/* Filter Section*/}
      <div className="flex justify-start gap-4 flex-wrap ml-4 md:ml-8 lg:ml-16 mt-4 md:mt-8 lg:mt-10 hidden md:flex">
        <span className="bg-primary rounded-lg flex items-center justify-center font-semibold text-base lg:text-lg text-white py-2 px-4 md:py-3 md:px-6">
          {t("kategori-konten.kategori-1")}
        </span>
        <span className="dark:border-white dark:text-white dark:bg-dark dark:hover:text-primary dark:hover:border-primary hover:text-primary hover:cursor-pointer hover:border-primary leading-[1.5] border border-gray bg-white rounded-lg flex items-center justify-center font-regular text-base lg:text-lg text-gray py-2 px-4 md:py-3 md:px-6">
          {t("kategori-konten.kategori-2")}
        </span>
        <span className="dark:border-white dark:text-white dark:bg-dark dark:hover:text-primary dark:hover:border-primary hover:text-primary hover:cursor-pointer hover:border-primary leading-[1.5] border border-gray bg-white rounded-lg flex items-center justify-center font-regular text-base lg:text-lg text-gray py-2 px-4 md:py-3 md:px-6">
          {t("kategori-konten.kategori-3")}
        </span>
        <span className="dark:border-white dark:text-white dark:bg-dark dark:hover:text-primary dark:hover:border-primary hover:text-primary hover:cursor-pointer hover:border-primary leading-[1.5] border border-gray bg-white rounded-lg flex items-center justify-center font-regular text-base lg:text-lg text-gray py-2 px-4 md:py-3 md:px-6">
          {t("kategori-konten.kategori-4")}
        </span>
        <span className="dark:border-white dark:text-white dark:bg-dark dark:hover:text-primary dark:hover:border-primary hover:text-primary hover:cursor-pointer hover:border-primary leading-[1.5] border border-gray bg-white rounded-lg flex items-center justify-center font-regular text-base lg:text-lg text-gray py-2 px-4 md:py-3 md:px-6">
          {t("kategori-konten.kategori-5")}
        </span>
      </div>

      {/* News Section */}
      <div className="overflow-x-auto">
        <div className="inline-flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10 md:px-20 ">
          {/* Card 1 */}
          <div className="hover:shadow-none hover:border hover:border-gray hover:border-opacity-40 bg-white dark:hover:border-primary dark:bg-dark dark:border-2 dark:border-opacity-20 dark:border-white rounded-xl shadow-lg dark:shadow-none hover:cursor-pointer overflow-hidden w-72 sm:w-auto">
            <div className="relative">
              <div className="p-4">
                <div className="bg-primary m-4 absolute top-0 left-0 bg-indigo-500 text-white font-semibold px-2 py-1 rounded-lg">
                  {t("card-berita.tag_berita.berita-1")}
                </div>
                <img
                  className=" rounded-lg w-full h-48 object-cover"
                  src={berita1}
                  alt="foto berita ke-1"
                />
              </div>
            </div>
            <div className="px-4 pb-8 pt-1">
              <p className="text-gray text-left text-sm sm:text-base mb-1">
                {t("card-berita.tanggal_berita.berita-1")}
              </p>
              <div className="hover:underline dark:hover:underline dark:text-white text-lg font-bold text-dark mb-2 line-clamp-2">
                {t("card-berita.judul_berita.berita-1")}
              </div>
              <p className="text-gray font-regular text-sm line-clamp-5">
                {t("card-berita.isi_berita.berita-1")}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="hover:shadow-none hover:border hover:border-gray hover:border-opacity-40 bg-white dark:hover:border-primary dark:bg-dark dark:border-2 dark:border-opacity-20 dark:border-white hover:cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden w-72 sm:w-auto">
            <div className="relative">
              <div className="p-4">
                <div className="bg-primary m-4 absolute top-0 left-0 bg-indigo-500 text-white font-semibold px-2 py-1 rounded-lg">
                  {t("card-berita.tag_berita.berita-2")}
                </div>
                <img
                  className=" rounded-lg w-full h-48 object-cover"
                  src={berita2}
                  alt="foto berita ke-2"
                />
              </div>
            </div>
            <div className="px-4 pb-8 pt-1">
              <p className="text-gray text-left text-sm sm:text-base mb-1">
                {t("card-berita.tanggal_berita.berita-2")}
              </p>
              <div className="hover:underline dark:hover:underline dark:text-white text-lg font-bold text-dark mb-2 line-clamp-2">
                {t("card-berita.judul_berita.berita-2")}
              </div>
              <p className="text-gray font-regular text-sm line-clamp-5">
                {t("card-berita.isi_berita.berita-2")}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="hover:shadow-none hover:border hover:border-gray hover:border-opacity-40 hover:border-primary  bg-white dark:hover:border-primary dark:bg-dark dark:border-2 dark:border-opacity-20 dark:border-white hover:cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden w-72 sm:w-auto">
            <div className="relative">
              <div className="p-4">
                <div className="bg-primary m-4 absolute top-0 left-0 bg-indigo-500 text-white font-semibold px-2 py-1 rounded-lg">
                  {t("card-berita.tag_berita.berita-3")}
                </div>
                <img
                  className=" rounded-lg w-full h-48 object-cover"
                  src={berita3}
                  alt="foto berita ke-3"
                />
              </div>
            </div>
            <div className="px-4 pb-8 pt-1">
              <p className="text-gray text-left text-sm sm:text-base mb-1">
                {t("card-berita.tanggal_berita.berita-3")}
              </p>
              <div className="hover:underline dark:hover:underline dark:text-white text-lg font-bold text-dark mb-2 line-clamp-2">
                {t("card-berita.judul_berita.berita-3")}
              </div>
              <p className="text-gray font-regular text-sm line-clamp-5">
                {t("card-berita.isi_berita.berita-3")}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End Section */}
    </div>
  );
};

export default News;
