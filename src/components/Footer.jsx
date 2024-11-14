import React from "react";
import logo2 from "../assets/logo_ikn_smartcity_dark.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer className="bg-dark w-full">
      <div className="container px-6 pt-12 pb-4 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <img
              src={logo2}
              alt="IKN Smart City logo"
              className="w-28 h-auto sm:w-32 md:w-40 lg:w-48"
            />
            <h1 className="font-poppins mt-4 max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl sm:text-3xl md:text-4xl text-white">
              Smart Sustainable Forest City
            </h1>
          </div>

          <div>
            <p className="font-poppins font-semibold text-white">
              {" "}
              {t("footer.baris-pertama.judul")}
            </p>

            <div className="flex flex-col items-start mt-2 space-y-2">
              <a
                link
                target="_blank"
                href="https://maps.app.goo.gl/MKb7hnrbHT1y3Sa77"
                className="font-poppins dark:text-gray text-gray transition-colors  duration-300  dark:hover:text-primary hover:underline hover:cursor-pointer hover:text-primary"
              >
                {t("footer.baris-pertama.list-1")}
              </a>
            </div>
          </div>

          <div>
            <p className="font-poppins font-semibold text-white">
              {" "}
              {t("footer.baris-kedua.judul")}
            </p>

            <div className="flex flex-col items-start mt-2 space-y-2">
              <a
                href="#sectionberita"
                className="font-poppins text-gray transition-colors  duration-300 dark:text-gray dark:hover:text-primary hover:underline hover:cursor-pointer hover:text-primary"
              >
                {t("footer.baris-kedua.list-1")}
              </a>
              <a
                href="#sectionproyek"
                className="font-poppins text-gray transition-colors  duration-300 dark:text-gray dark:hover:text-primary hover:underline hover:cursor-pointer hover:text-primary"
              >
                {t("footer.baris-kedua.list-2")}
              </a>
            </div>

            <p className="font-poppins font-semibold  mt-8 text-white">
              {t("footer.baris-ketiga.judul")}
            </p>

            <div className="flex flex-col items-start mt-2 space-y-2">
              <a
                link
                href="https://www.instagram.com/ikn_id"
                target="_blank"
                className="font-poppins text-gray transition-colors  duration-300 dark:text-gray dark:hover:text-primary hover:underline hover:cursor-pointer hover:text-primary"
              >
                {t("footer.baris-ketiga.list-1")}
              </a>
              <a
                link
                href="https://www.facebook.com/iknindonesia1"
                target="_blank"
                className="font-poppins text-gray transition-colors  duration-300 dark:text-gray dark:hover:text-primary hover:underline hover:cursor-pointer hover:text-primary"
              >
                {t("footer.baris-ketiga.list-2")}
              </a>
              <a
                link
                href="https://x.com/ikn_id"
                target="_blank"
                className="font-poppins text-gray transition-colors  duration-300 dark:text-gray dark:hover:text-primary hover:underline hover:cursor-pointer hover:text-primary"
              >
                {t("footer.baris-ketiga.list-3")}
              </a>
              <a
                link
                href="https://www.youtube.com/@iknindonesia4397"
                target="_blank"
                className="font-poppins text-gray transition-colors  duration-300 dark:text-gray dark:hover:text-primary hover:underline hover:cursor-pointer hover:text-primary"
              >
                {t("footer.baris-ketiga.list-4")}
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-12 border-gray md:mt-12 dark:border-gray-700 h-2" />
        <p className="font-poppins font-semibold p-2 text-white md:text-center md:text-lg md:p-4">
          © 2024 Copyright IKN Smart City
        </p>
      </div>
    </footer>
  );
};

export default Footer;
