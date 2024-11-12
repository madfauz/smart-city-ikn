import React, { useEffect, useState } from "react";
import logo from "../assets/logo_ikn_smartcity.svg";
import DarkModeIcon from "../assets/icon_dark_mode.svg";
import LightModeIcon from "../assets/icon_light_mode.svg";
import HamburgerIcon from "../assets/icon_hamburger.svg";
import { useTranslation } from "react-i18next";
import JelajahiIcon from "../assets/icon_jelajahi.svg";
import ProyekIcon from "../assets/icon_proyek.svg";
import BeritaIcon from "../assets/icon_news.svg";
import TranslateIcon from "../assets/icon_translate.svg";

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

  // Atur muncul navbar ketika scroll

  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = window.pageYOffset;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      if (lastScrollY < currentScrollY) {
        // Scroll ke bawah, sembunyikan navbar
        setShowNavbar(false);
      } else {
        // Scroll ke atas, tampilkan navbar
        setShowNavbar(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-auto ${
          darkMode ? "bg-dark" : "bg-secondary"
        } transition-transform duration-300 ${
          showNavbar
            ? "transform translate-y-0 z-30"
            : "transform -translate-y-full z-30"
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
              className="font-poppins cursor-pointer font-semibold text-[20px] text-dark hover:text-primary dark:text-secondary dark:hover:text-primary"
            >
              {t("jelajahi")}
            </a>
            <a
              href="#proyek"
              className="font-poppins cursor-pointer font-semibold text-[20px] text-dark hover:text-primary dark:text-secondary dark:hover:text-primary"
            >
              {t("proyek")}
            </a>
            <a
              href="#berita"
              className="font-poppins cursor-pointer font-semibold text-[20px] text-dark hover:text-primary dark:text-secondary dark:hover:text-primary"
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
        <section className="flex z-30 md:hidden text-start flex-row justify-between items-center p-6">
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
        className={`fixed md:hidden top-0 left-0 w-full h-full z-40 bg-dark ${
          sidebar ? "block opacity-20" : "hidden opacity-0"
        } transition-opacity duration-500 ease-in`}
      ></div>
      {/*Overflow sidebar*/}
      <section
        className={`fixed top-0 ${
          sidebar ? "left-0" : "left-[-100%]"
        } transition-left duration-300 ease-in z-50 flex flex-col md:hidden w-3/4 sm:w-2/3 h-full justify-start items-center pt-10 ${
          darkMode ? "bg-dark" : "bg-secondary"
        }`}
      >
        <aside className="w-4/5">
          <img
            src={logo}
            alt="IKN SmartCity"
            className="w-[120px] h-auto pb-20"
          />
        </aside>
        <aside className="w-4/5 flex flex-col justify-center items-start">
          <a
            onClick={toggleSidebar}
            href="#jelajahi"
            className="flex gap-3 items-center font-poppins cursor-pointer font-normal text-[20px] font-poppins text-dark hover:text-primary dark:text-secondary dark:hover:text-primary text-[16px] w-full py-4 "
          >
            <img
              src={JelajahiIcon}
              alt="jelajahi"
              className={`w-6 h-full ${darkMode ? "bg-secondary" : ""}`}
              style={{ filter: `${darkMode ? "invert(1)" : "grayscale(1)"}` }}
            />
            {t("jelajahi")}
          </a>
          <a
            onClick={toggleSidebar}
            href="#proyek"
            className="flex gap-3 items-center font-poppins cursor-pointer font-normal text-[20px] font-poppins text-dark hover:text-primary dark:text-secondary dark:hover:text-primary text-[16px] w-full py-4 "
          >
            <img
              src={ProyekIcon}
              alt="proyek"
              className={`w-6 h-full ${darkMode ? "bg-secondary" : ""}`}
              style={{ filter: `${darkMode ? "invert(1)" : "grayscale(1)"}` }}
            />
            {t("proyek")}
          </a>
          <a
            onClick={toggleSidebar}
            href="#berita"
            className="flex gap-3 items-center font-poppins cursor-pointer font-normal text-[20px] font-poppins text-dark hover:text-primary dark:text-secondary dark:hover:text-primary text-[16px] w-full py-4 "
          >
            <img
              src={BeritaIcon}
              alt="berita"
              className={`w-6 h-full ${darkMode ? "bg-secondary" : ""}`}
              style={{ filter: `${darkMode ? "invert(1)" : "grayscale(1)"}` }}
            />
            {t("berita")}
          </a>

          <aside
            className={`flex gap-3 items-center cursor-pointer w-full my-2 py-2 h-auto ${
              darkMode ? "bg-dark" : "bg-secondary"
            }`}
            onClick={toggleDarkMode}
          >
            <button className="w-6 h-6 rounded-full flex justify-center items-center bg-dark dark:bg-secondary">
              {!darkMode ? (
                <img
                  src={DarkModeIcon}
                  style={{ filter: "invert(1) grayscale(1)" }}
                  alt="Light Mode"
                />
              ) : (
                <img src={LightModeIcon} alt="Dark Mode" />
              )}
            </button>
            <span className="font-normal text-[20px] font-poppins text-dark hover:text-primary dark:text-secondary dark:hover:text-primary text-[16px]">
              {!darkMode ? "Dark Mode" : "Light Mode"}
            </span>
          </aside>

          <select
            name="language"
            id="language"
            className={`${
              darkMode ? "bg-dark text-secondary" : "bg-secondary text-dark"
            } w-full my-2 py-2 font-normal text-[20px] font-poppins text-dark hover:text-primary dark:text-secondary dark:hover:text-primary text-[16px]`}
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
          >
            {language.map((lng, index) => (
              <option
                key={index}
                value={lng}
                className="font-normal text-[20px] font-poppins text-dark hover:text-primary dark:text-secondary dark:hover:text-primary text-[16px]"
              >
                <img
                  src={BeritaIcon}
                  alt="icon"
                  className={`w-6 h-6 ${darkMode ? "bg-secondary" : ""}`}
                  style={{
                    filter: `${darkMode ? "invert(1)" : "grayscale(1)"}`,
                  }}
                />
                {lng.toUpperCase() == "ID" ? "Indonesia" : "English"}
              </option>
            ))}
          </select>
        </aside>
      </section>
    </>
  );
};

export default Navbar;
