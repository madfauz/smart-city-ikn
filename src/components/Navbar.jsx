import React, { useEffect, useState } from "react";
import logo from "../assets/logo_ikn_smartcity.svg";
import DarkModeIcon from "../assets/icon_dark_mode.svg";
import LightModeIcon from "../assets/icon_light_mode.svg";
import HamburgerIcon from "../assets/icon_hamburger.svg";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const { t, i18n } = useTranslation();
  const language = ["en", "id"];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div
        className={`absolute top-0 left-0 w-full h-auto ${
          darkMode ? "bg-dark" : "bg-secondary"
        }`}
      >
        {/* Desktop Navbar */}
        <section className="hidden md:flex text-start justify-between items-center p-8">
          <aside className="w-[20%]">
            <img src={logo} alt="IKN SmartCity" className="w-[140px] h-auto" />
          </aside>
          <aside className="w-[30%] flex gap-10 justify-center">
            <a
              href="#jelajahi"
              className="font-poppins cursor-pointer font-semibold text-[20px] font-poppins text-dark hover:text-primary dark:text-secondary dark:hover:text-primary"
            >
              {t("jelajahi")}
            </a>
            <a
              href="#proyek"
              className="font-poppins cursor-pointer font-semibold text-[20px] font-poppins text-dark hover:text-primary dark:text-secondary dark:hover:text-primary"
            >
              {t("proyek")}
            </a>
            <a
              href="#berita"
              className="font-poppins cursor-pointer font-semibold text-[20px] font-poppins text-dark hover:text-primary dark:text-secondary dark:hover:text-primary"
            >
              {t("berita")}
            </a>
          </aside>
          <aside className="w-[20%] flex justify-end gap-4">
            <select
              name="language"
              id="language"
              className={`${
                darkMode ? "bg-dark text-secondary" : "bg-secondary text-dark"
              } px-4`}
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language}
            >
              {language.map((lng, index) => (
                <option key={index} value={lng} className="font-poppins">
                  {lng.toUpperCase()}
                </option>
              ))}
            </select>

            <button
              className={`p-2 rounded-full ${
                darkMode ? "bg-dark" : "bg-secondary"
              }`}
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <img
                  src={LightModeIcon}
                  style={{ filter: "invert(1) grayscale(1)" }}
                  alt="Light Mode"
                />
              ) : (
                <img src={DarkModeIcon} alt="Dark Mode" />
              )}
            </button>
          </aside>
        </section>

        {/* Mobile Navbar */}
        <section className="flex z-0 md:hidden text-start flex-row justify-between items-center p-6">
          <aside className="w-[30%]">
            <img src={logo} alt="IKN SmartCity" className="w-[140px] h-auto" />
          </aside>
          <aside>
            <button
              className={`${darkMode ? "bg-dark" : "bg-secondary"}`}
              onClick={toggleSidebar}
            >
              <img
                src={HamburgerIcon}
                alt="Hamburger Icon"
                style={{
                  filter: `${darkMode ? "invert(1)" : ""}`,
                }}
                className={`w-5 h-5`}
              />
            </button>
          </aside>
        </section>
      </div>
      {/*Overflow overlay */}
      <div
        onClick={toggleSidebar}
        className={`absolute md:hidden top-0 left-0 w-full h-full z-20 bg-dark ${
          sidebar ? "block opacity-20" : "hidden opacity-0"
        } transition-opacity duration-500 ease-in`}
      ></div>
      {/*Overflow sidebar*/}
      <section
        className={`absolute top-0 ${
          sidebar ? "left-0" : "left-[-100%]"
        } transition-left duration-300 ease-in z-20 flex flex-col md:hidden w-3/4 sm:w-2/3 h-full justify-start items-center gap-20 pt-10 ${
          darkMode ? "bg-dark" : "bg-secondary"
        }`}
      >
        <aside className="w-4/5">
          <img src={logo} alt="IKN SmartCity" className="w-[120px] h-auto" />
        </aside>
        <aside className="w-[30%] flex flex-col gap-10 justify-center">
          <a
            onClick={toggleSidebar}
            href="#jelajahi"
            className="font-poppins cursor-pointer font-semibold text-[20px] font-poppins text-dark hover:text-primary dark:text-secondary dark:hover:text-primary text-[16px]"
          >
            {t("jelajahi")}
          </a>
          <a
            onClick={toggleSidebar}
            href="#proyek"
            className="font-poppins cursor-pointer font-semibold text-[20px] font-poppins text-dark hover:text-primary dark:text-secondary dark:hover:text-primary text-[16px]"
          >
            {t("proyek")}
          </a>
          <a
            onClick={toggleSidebar}
            href="#berita"
            className="font-poppins cursor-pointer font-semibold text-[20px] font-poppins text-dark hover:text-primary dark:text-secondary dark:hover:text-primary text-[16px]"
          >
            {t("berita")}
          </a>
        </aside>
        <aside className="w-auto flex flex-row justify-center gap-4">
          <select
            name="language"
            id="language"
            className={`${
              darkMode ? "bg-dark text-secondary" : "bg-secondary text-dark"
            } px-4`}
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
          >
            {language.map((lng, index) => (
              <option key={index} value={lng}>
                {lng.toUpperCase()}
              </option>
            ))}
          </select>

          <button
            className={`w-auto h-auto rounded-full ${
              darkMode ? "bg-dark" : "bg-secondary"
            }`}
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <img
                src={LightModeIcon}
                style={{ filter: "invert(1) grayscale(1)" }}
                alt="Light Mode"
              />
            ) : (
              <img src={DarkModeIcon} alt="Dark Mode" />
            )}
          </button>
        </aside>
      </section>
    </>
  );
};

export default Navbar;
