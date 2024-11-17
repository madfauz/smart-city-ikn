import React from "react";
import image1 from "../assets/carousel_image_1.jpg";
import logo from "../assets/logooo.png";
import { useTranslation } from "react-i18next";

const Carousel = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="relative w-full bg-white dark:bg-dark pt-[120px] pb-[100px] md:pt-[120px] md:pb-[80px]">
      <aside className="relative font-poppins text-title-color dark:text-white text-[36px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold flex flex-col gap-2 justify-center items-center z-20">
        <h1>{t("konten-carousel.judul")}</h1>
        <h2>{t("konten-carousel.deskripsi")}</h2>
      </aside>
      <aside className="relative z-20">
        <div className="relative mx-auto my-[50px] w-[70%] sm:w-2/3 md:w-1/2 lg:w-[50%]">
          <div className="shadow-custom-dark bg-white w-auto h-auto p-3 md:p-4 rounded-lg absolute top-[-10%] left-[-15%] animate-move-up-down">
            <div className="flex items-center gap-1">
              <div className="bg-primary w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="white"
                  class="bi bi-globe-americas lg:w-[25px] lg:h-[25px]"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
                </svg>
              </div>
              <span className="font-poppins font-bold text-[16px] sm:text-[24px] text-primary">
                {t("konten-carousel.bubble.judul-1")}
              </span>
            </div>
            <span className="font-poppins font-medium text-[8px] sm:text-[12px]">
              {t("konten-carousel.bubble.deskripsi-1")}
            </span>
          </div>
          <div className="shadow-custom-dark bg-gradient-to-t from-start-primary to-end-primary w-auto h-auto p-3 md:p-4 rounded-lg absolute top-[-10%] right-[-15%] flex flex-col items-center justify-center animate-move-down-up">
            <div>
              <span className="font-poppins text-secondary font-bold text-[16px] sm:text-[24px]">
                {t("konten-carousel.bubble.judul-2")}
              </span>
            </div>
            <span className="font-poppins text-secondary font-medium text-[8px] sm:text-[12px]">
              {t("konten-carousel.bubble.deskripsi-2")}
            </span>
          </div>
          <div className="shadow-custom-dark bg-white w-[160px] sm:w-[220px] h-auto p-3 md:p-4 rounded-lg absolute bottom-[5%] right-[-15%] animate-move-up-down">
            <div className="flex items-center gap-1">
              <div className="bg-primary w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="white"
                  class="bi bi-trophy lg:w-[25px] lg:h-[25px]"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935M3.504 1q.01.775.056 1.469c.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.5.5 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667q.045-.694.056-1.469z" />
                </svg>
              </div>
              <span className="font-poppins font-bold text-[16px] sm:text-[24px] text-primary">
                {t("konten-carousel.bubble.judul-3")}
              </span>
            </div>
            <div className="flex flex-col pt-2 gap-1">
              <span className="font-poppins font-medium text-[8px] sm:text-[12px]">
                {t("konten-carousel.bubble.deskripsi-3-1")}
              </span>
              <span className="font-poppins font-medium text-[8px] sm:text-[12px]">
                {t("konten-carousel.bubble.deskripsi-3-2")}
              </span>
            </div>
          </div>
          <div className="shadow-custom-dark bg-gradient-to-t from-start-primary to-end-primary w-auto h-auto p-3 md:p-4 rounded-lg absolute bottom-[10%] left-[-15%] flex flex-col items-center justify-center animate-move-down-up">
            <div>
              <span className="font-poppins text-secondary font-bold text-[16px] sm:text-[24px]">
                {t("konten-carousel.bubble.judul-4")}
              </span>
            </div>
            <span className="font-poppins text-secondary font-medium text-[8px] sm:text-[12px]">
              {t("konten-carousel.bubble.deskripsi-4")}
            </span>
          </div>
          <img
            src={image1}
            alt="smartcity"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </aside>
      <aside className="relative w-3/4  sm:w-2/3 md:w-2/3 lg:w-[60%] mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-4 lg:gap-0 z-20">
        <div className="font-poppins font-normal text-[16px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-decs-color dark:text-white text-end md:w-1/2">
          {t("konten-carousel.text-bawah")}
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <a
            href="#jelajahi"
            className="rounded-full bg-dark dark:bg-white flex items-center gap-2 py-4 px-6 sm:py-4 sm:px-6 md:py-3 lg:py-4 px-4 md:px-6 lg:px-8 cursor-pointer hover:bg-primary dark:hover:bg-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 32 32"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                className="text-white dark:text-dark"
                d="m6 22l10 8l10-8m-10 8V2"
              ></path>
            </svg>
            <span className="font-poppins font-semibold text-[16px] sm:text-[24px] text-white dark:text-dark">
              {t("konten-carousel.text-tombol")}
            </span>
          </a>
        </div>
      </aside>
      <img
        src={logo}
        alt="backgorund_logo"
        className="absolute bottom-[-1%] right-[1%] w-1/3 sm:w-[38%] md:w-[30%] lg:w-[24%] z-10 opacity-30"
      />
    </section>
  );
};

export default Carousel;
