import { useTranslation } from "react-i18next";
const Desc = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="mt-[-1px] flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-16 py-8 md:py-12 lg:py-16 px-vm sm:px-sm md:px-md lg:px-lg xl:px-xl bg-gradient-to-r from-[#FFF7DB] to-[#FFFDF6] dark:bg-gradient-to-r dark:from-dark dark:to-dark">
      <h2 className="w-3/4 md:w-1/2 lg:w-1/3 leading-8 md:leading-10 font-poppins font-bold text-center text-dark dark:text-secondary md:text-right text-[24px] lg:text-[28px]">
        {t("konten-desc.judul")}
      </h2>
      <h4 className="w-3/4 md:w-1/2 lg:w-2/3 leading-8 md:leading-10 font-poppins font-normal text-center text-gray dark:text-secondary md:text-left text-[14px] sm:text-[16px] lg:text-[20px]">
        {t("konten-proyek.deskripsi")}
      </h4>
    </div>
  );
};

export default Desc;
