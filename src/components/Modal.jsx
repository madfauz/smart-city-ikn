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
            className="w-full h-40 sm:h-56 md:h-80 lg:h-80  object-cover rounded-lg "
          />
          <p className="vm-card-date sm-card-date md-card-date lg-card-date xl-card-date font-poppins dark:text-semilight py-4 text-gray">
            {t("card-berita.tanggal_berita.berita-1")}
          </p>
          <h2 className="vm-title sm-title md-title lg-title xl-title font-poppins dark:text-white pb-4 font-bold">
            {t("card-berita.judul_berita.berita-1")}
          </h2>
          <p className="vm-card-desc sm-card-desc md-card-desc lg-card-desc xl-card-desc font-poppins text-semidark dark:text-semilight">
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
            className="w-full h-40 sm:h-56 md:h-80 lg:h-80  object-cover rounded-lg  "
          />
          <p className="vm-card-date sm-card-date md-card-date lg-card-date xl-card-date font-poppins dark:text-semilight py-4 text-gray">
            {t("card-berita.tanggal_berita.berita-2")}
          </p>
          <h2 className="vm-title sm-title md-title lg-title xl-title font-poppins dark:text-white pb-4 font-bold">
            {t("card-berita.judul_berita.berita-2")}
          </h2>
          <p className="vm-card-desc sm-card-desc md-card-desc lg-card-desc xl-card-desc font-poppins text-semidark dark:text-semilight">
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
            className="w-full h-40 sm:h-56 md:h-80 lg:h-80  object-cover rounded-lg  "
          />
          <p className="vm-card-date sm-card-date md-card-date lg-card-date xl-card-date font-poppins dark:text-semilight py-4 text-gray">
            {t("card-berita.tanggal_berita.berita-3")}
          </p>
          <h2 className="vm-title sm-title md-title lg-title xl-title font-poppins dark:text-white pb-4 font-bold">
            {t("card-berita.judul_berita.berita-3")}
          </h2>
          <p className="vm-card-desc sm-card-desc md-card-desc lg-card-desc xl-card-desc font-poppins text-semidark dark:text-semilight">
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
        data-aos="fade-up"
        className="dark:border-semilight dark:border-2  dark:bg-dark pb-6 mx-4 rounded-tl-lg rounded-tr-lg relative bg-white w-full max-w-4xl mx-auto rounded shadow-lg z-50 overflow-y-auto"
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
            className="vm-desc sm-desc md-desc lg-desc xl-desc font-poppins modal-close px-4 bg-secondary dark:bg-semidark  p-3 rounded-lg text-dark dark:text-primary text-primary hover:bg-primary hover:text-white  dark:hover:bg-primary dark:hover:text-white "
          >
            {t("card-berita.penutup-berita.tombol-penutup")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
