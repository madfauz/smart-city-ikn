import { useTranslation } from "react-i18next";

const Feature = () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="px-vm sm:px-sm lg:px-lg xl:px-xl h-auto pt-[20px] pb-[80px] mt-[-1px] font-poppins  dark:bg-dark"
      id="jelajahi"
    >
      <div className="text-center dark:text-white mb-6">
        <h2 className="text-vm-title sm:text-sm-title md:text-md-title lg:text-lg-title xl:text-xl-title font-bold pt-8 mb-2 w-10/12 lg:w-2/3 mx-auto">
          {t("konten-fitur.judul")}
        </h2>

        <p className="text-vm-desc sm:text-sm-desc md:text-md-desc lg:text-lg-desc xl:text-xl-desc font-normal mb-4 sm:mb-6 md:mb-md w-10/12 lg:w-2/3 mx-auto text-semidark dark:text-semilight">
          {t("konten-fitur.Deskripsi1")} {t("konten-fitur.Deskripsi2")}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-3">
        <div data-aos="fade-right" className="shadow-custom-dark w-full h-auto bg-white p-4 rounded-[20px] dark:border-gray dark:border-2 dark:bg-dark">
          <div className="w-[80px] h-[80px] bg-primary rounded-xl flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="white"
              class="bi bi-buildings"
              viewBox="0 0 16 16"
            >
              <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z" />
              <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z" />
            </svg>
          </div>

          <h2 className="text-vm-card-title sm:text-sm-card-title md:text-md-card-title lg:text-lg-card-title xl:text-xl-card-title font-bold mt-vm sm:mt-sm md:mt-md lg:mt-lg xl:mt-xl dark:text-white">
            {t("konten-fitur.Judul-Layanan-Public1")}{" "}
            {t("konten-fitur.Judul-Layanan-Public2")}
          </h2>

          <p className=" text-vm-card-desc sm:text-sm-card-desc md:text-md-card-desc lg:text-lg-card-desc xl:text-xl-card-desc mt-vm sm:mt-sm md:mt-md lg:mt-lg xl:mt-xl font-normal text-semidark dark:text-semilight">
            {t("konten-fitur.Deskripsi-Layanan-Public")}
          </p>
        </div>

        <div data-aos="fade-up" className="shadow-custom-dark  w-full h-auto bg-white p-4 rounded-[20px]  dark:border-gray dark:border-2 dark:bg-dark">
          <div className="w-[80px] h-[80px] bg-primary rounded-xl flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              class="bi bi-motherboard"
              viewBox="0 0 16 16"
            >
              <path d="M11.5 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-10 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM5 3a1 1 0 0 0-1 1h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0zm0 1h3v3H5zm6.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
              <path d="M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2zm1 11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z" />
            </svg>
          </div>

          <h2 className="text-vm-card-title sm:text-sm-card-title md:text-md-card-title lg:text-lg-card-title xl:text-xl-card-title font-bold mt-vm sm:mt-sm md:mt-md lg:mt-lg xl:mt-xl dark:text-white">
            {t("konten-fitur.Judul-Kota-Iot1")}{" "}
            {t("konten-fitur.Judul-Kota-Iot2")}
          </h2>

          <p className="text-vm-card-desc sm:text-sm-card-desc md:text-md-card-desc lg:text-lg-card-desc xl:text-xl-card-desc mt-vm sm:mt-sm md:mt-md lg:mt-lg xl:mt-xl  font-normal  text-semidark dark:text-semilight">
            {t("konten-fitur.Deskripsi-Kota-Iot")}
          </p>
        </div>

        <div  data-aos="fade-down" className="shadow-custom-dark  w-full h-auto bg-white p-4 rounded-[20px]  dark:border-gray dark:border-2 dark:bg-dark">
          <div className="w-[80px] h-[80px] bg-primary rounded-xl flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="white"
              class="bi bi-diagram-2"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5zM3 11.5A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"
              />
            </svg>
          </div>

          <h2 className="text-vm-card-title sm:text-sm-card-title md:text-md-card-title lg:text-lg-card-title xl:text-xl-card-title font-bold mt-vm sm:mt-sm md:mt-md lg:mt-lg xl:mt-xl dark:text-white">
            {t("konten-fitur.Judul-Menerapkan-Smart1")}{" "}
            {t("konten-fitur.Judul-Menerapkan-Smart2")}
          </h2>

          <p className=" text-vm-card-desc sm:text-sm-card-desc md:text-md-card-desc lg:text-lg-card-desc xl:text-xl-card-desc mt-vm sm:mt-sm md:mt-md lg:mt-lg xl:mt-xl  font-normal  text-semidark dark:text-semilight">
            {t("konten-fitur.Deskirpsi-Menerapkan-Smart")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
