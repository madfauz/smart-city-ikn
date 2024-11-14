import projectCharging from "../assets/project-charging.jpeg";
import projectKereta from "../assets/project-kereta.jpeg";
import projectMall from "../assets/project-mall.jpg";
import projectPlaza from "../assets/project-plaza.jpg";
import projectTaxi from "../assets/project-taxi.jpeg";
import { useTranslation } from "react-i18next";

const Project = () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      className={`relative z-20 flex mt-[-2px] py-8 md:py-12 flex-col gap-4 md:gap-8 px-vm sm:px-sm md:px-md lg:px-lg xl:px-xl dark:bg-dark bg-white`}
      id="proyek"
    >
      <section className="flex flex-col gap-2 ">
        <h2 className="font-poppins font-bold text-[24px] md:text-[28px] text-center text-dark dark:text-secondary">
          {t("konten-proyek.judul")}
        </h2>
        <p className="font-poppins font-normal text-[14px] sm:text-[16px] md:text-[20px] text-center text-gray dark:text-secondary">
          {t("konten-proyek.deskripsi")}
        </p>
      </section>

      <section className="flex flex-wrap xl:flex-nowrap flex-row gap-6 w-full">
        <aside className="flex flex-col sm:flex-row xl:flex-col gap-6 basis-full xl:basis-4/12">
          <div className="relative rounded-[10px] w-full h-[240px] sm:h-auto sm:w-1/2 xl:w-auto xl:h-2/3">
            <div className="bg-gradient-to-t from-black to-white opacity-40 absolute top-0 left-0 w-full h-full z-10 rounded-[10px]"></div>
            <img
              src={projectPlaza}
              className="relative rounded-[10px] w-full h-full object-cover"
              alt="project-plaza"
            />
            <span className="font-poppins font-semibold absolute z-20 top-0 left-0 px-4 py-2 text-[14px] sm:text-[16px] md:text-[20px] text-white bg-primary rounded-tl-[10px] rounded-br-[10px]">
              {t("konten-proyek.tipe-proyek.proyek-1")}
            </span>

            <div className="absolute z-20 bottom-4 left-4 text-white">
              <span className="font-poppins font-semibold text-[18px] sm:text-[20px]">
                {t("konten-proyek.judul-proyek.proyek-1")}
              </span>
              <p className="font-poppins font-light italic text-[14px] sm:text-[16px] line-clamp-2">
                {t("konten-proyek.deskripsi-proyek.proyek-1")}
              </p>
            </div>
          </div>
          <div className="relative rounded-[10px] w-full h-[240px] sm:h-auto sm:w-1/2 xl:w-auto xl:h-1/3">
            <div className="bg-gradient-to-t from-black to-white opacity-40 absolute top-0 left-0 w-full h-full z-10 rounded-[10px] box-border"></div>
            <img
              src={projectTaxi}
              className="relative rounded-[10px] w-full h-full object-cover"
              alt="project-taxi"
            />
            <span className="font-poppins font-semibold absolute z-20 top-0 left-0 px-4 py-2 text-[14px] sm:text-[16px] md:text-[20px] text-white bg-primary rounded-tl-[10px] rounded-br-[10px]">
              {t("konten-proyek.tipe-proyek.proyek-2")}
            </span>

            <div className="absolute z-20 bottom-4 left-4 text-white">
              <span className="font-poppins font-semibold text-[18px] sm:text-[20px]">
                {t("konten-proyek.judul-proyek.proyek-2")}
              </span>
              <p className="font-poppins font-light italic text-[14px] sm:text-[16px] line-clamp-2">
                {t("konten-proyek.deskripsi-proyek.proyek-2")}
              </p>
            </div>
          </div>
        </aside>
        <aside className="flex flex-col gap-6 basis-full h-2/3 xl:h-auto xl:basis-3/12">
          <div className="relative rounded-[10px] h-[240px] sm:h-[280px] lg:h-[320px] xl:h-full">
            <div className="bg-gradient-to-t from-black to-white opacity-40 absolute top-0 left-0 w-full h-full z-10 rounded-[10px]"></div>
            <img
              src={projectMall}
              className="relative rounded-[10px] w-full h-full object-cover"
              alt="project-mall"
            />
            <span className="font-poppins font-semibold absolute z-20 top-0 left-0 px-4 py-2 text-[14px] sm:text-[16px] md:text-[20px] text-white bg-primary rounded-tl-[10px] rounded-br-[10px]">
              {t("konten-proyek.tipe-proyek.proyek-3")}
            </span>

            <div className="absolute z-20 bottom-4 left-4 text-white">
              <span className="font-poppins font-semibold text-[18px] sm:text-[20px]">
                {t("konten-proyek.judul-proyek.proyek-3")}
              </span>
              <p className="font-poppins font-light italic text-[14px] sm:text-[16px] line-clamp-2">
                {t("konten-proyek.deskripsi-proyek.proyek-3")}
              </p>
            </div>
          </div>
        </aside>
        <aside className="flex flex-col sm:flex-row xl:flex-col gap-6 basis-full xl:basis-5/12">
          <div className="relative rounded-[10px] w-full sm:w-1/2 xl:w-auto h-[240px] sm:h-full xl:h-1/2">
            <div className="bg-gradient-to-t from-black to-white opacity-40 absolute top-0 left-0 w-full h-full z-10 rounded-[10px]"></div>
            <img
              src={projectCharging}
              className="relative rounded-[10px] w-full h-full object-cover"
              alt="project-charging"
            />
            <span className="font-poppins font-semibold absolute z-20 top-0 left-0 px-4 py-2 text-[14px] sm:text-[16px] md:text-[20px] text-white bg-primary rounded-tl-[10px] rounded-br-[10px]">
              {t("konten-proyek.tipe-proyek.proyek-4")}
            </span>

            <div className="absolute z-20 bottom-4 left-4 text-white">
              <span className="font-poppins font-semibold text-[18px] sm:text-[20px]">
                {t("konten-proyek.judul-proyek.proyek-4")}
              </span>
              <p className="font-poppins font-light italic text-[14px] sm:text-[16px] line-clamp-2">
                {t("konten-proyek.deskripsi-proyek.proyek-4")}
              </p>
            </div>
          </div>
          <div className="relative rounded-[10px] w-full sm:w-1/2 xl:w-auto h-[240px] sm:h-full xl:h-1/2">
            <div className="bg-gradient-to-t from-black to-white opacity-40 absolute top-0 left-0 w-full h-full z-10 rounded-[10px]"></div>
            <img
              src={projectKereta}
              className="relative rounded-[10px] w-full h-full object-cover"
              alt="project-kereta"
            />
            <span className="font-poppins font-semibold absolute z-20 top-0 left-0 px-4 py-2 text-[14px] sm:text-[16px] md:text-[20px] text-white bg-primary rounded-tl-[10px] rounded-br-[10px]">
              {t("konten-proyek.tipe-proyek.proyek-5")}
            </span>

            <div className="absolute z-20 bottom-4 left-4 text-white">
              <span className="font-poppins font-semibold text-[18px] sm:text-[20px]">
                {t("konten-proyek.judul-proyek.proyek-5")}
              </span>
              <p className="font-poppins font-light italic text-[14px] sm:text-[16px] line-clamp-2">
                {t("konten-proyek.deskripsi-proyek.proyek-5")}
              </p>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default Project;
