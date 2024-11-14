import React from "react";
import berita1 from "../assets/berita-1.jpeg";
import berita2 from "../assets/berita-2.jpeg";
import berita3 from "../assets/berita-3.jpeg";

import { useTranslation } from "react-i18next";

function Modal({ isOpen, onClose, contentType }) {
  const { t, i18n } = useTranslation();
  if (!isOpen) return null;

  let modalContent;
  const currentDate = new Date().toLocaleDateString();

  switch (contentType) {
    case "berita-1":
      modalContent = (
        <>
          <img
            src={berita1}
            alt="gambar berita-1"
            className="w-full h-40 sm:h-56 md:h-80 lg:h-80  object-cover rounded-lg mt-4 "
          />
          <p className="font-poppins dark:text-white py-4 text-sm text-gray">
            {t("card-berita.tanggal_berita.berita-1")}
          </p>
          <h2 className="font-poppins dark:text-white text-xl pb-4 font-bold">
            {t("card-berita.judul_berita.berita-1")}
          </h2>
          <p className="font-poppins text-semidark dark:text-white">
            <div>
              {t("card-berita.isi_berita.berita-1", {
                returnObjects: true,
              }).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </p>
        </>
      );
      break;
    case "berita-2":
      modalContent = (
        <>
          <img
            src={berita2}
            alt="gambar berita-2"
            className="w-full h-auto rounded-lg mt-4"
          />
          <p className="font-poppins dark:text-white py-4 text-sm text-gray">
            {t("card-berita.tanggal_berita.berita-2")}
          </p>
          <h2 className="font-poppins dark:text-white text-xl font-bold pb-4">
            {t("card-berita.judul_berita.berita-2")}
          </h2>
          <p className="font-poppins text-semidark dark:text-white">
            <div>
              {t("card-berita.isi_berita.berita-2", {
                returnObjects: true,
              }).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </p>
        </>
      );
      break;
    case "berita-3":
      modalContent = (
        <>
          <img
            src={berita3}
            alt="gambar berita-3"
            className="w-full h-auto rounded-lg mt-4"
          />
          <p className="font-poppins dark:text-white py-4 text-sm text-gray">
            {t("card-berita.tanggal_berita.berita-3")}
          </p>

          <h2 className="font-poppins dark:text-white text-xl font-bold pb-4">
            {t("card-berita.judul_berita.berita-3")}
          </h2>
          <p className="font-poppins text-semidark dark:text-white">
            <div>
              {t("card-berita.isi_berita.berita-3", {
                returnObjects: true,
              }).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </p>
        </>
      );
      break;
    default:
      modalContent = <p>Default content</p>;
      break;
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed mx-4  inset-0 z-50 flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      {/*Overlay*/}
      <div
        className="fixed inset-0 bg-dark opacity-50 dark:bg-black dark:opacity-80 z-40"
        onClick={onClose}
      ></div>
      {/*Container*/}
      <div
        className="dark:bg-dark pb-6 mx-4 rounded-tl-lg rounded-tr-lg relative bg-white dark:bg-gray-800 w-full max-w-4xl mx-auto rounded shadow-lg z-50 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="scrollbar-hide rounded-tl-lg rounded-tr-lg dark:bg-dark modal-content py-4 text-left px-6 max-h-[80vh] overflow-y-auto">
          <div className="flex justify-between items-center pb-3">
            <div
              className="modal-close cursor-pointer z-50"
              onClick={onClose}
            ></div>
          </div>

          <div>{modalContent}</div>
        </div>
        <div className="flex justify-center dark:bg-dark">
          <button
            onClick={onClose}
            className="font-poppins modal-close px-4 bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-black dark:text-primary text-primary hover:bg-gray-200"
          >
            {t("card-berita.penutup-berita.tombol-penutup")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
