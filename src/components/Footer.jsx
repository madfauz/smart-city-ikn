import React from "react";
import logo2 from "../assets/logo_ikn_smartcity_dark.svg";

const Footer = () => {
  return (
    <footer className="bg-dark w-full">
      <div className="container px-12 pt-12 pb-4 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <img
              src={logo2}
              alt="IKN Smart City logo"
              className="w-28 h-auto sm:w-32 md:w-40 lg:w-48"
            />
            <h1 className="mt-4 max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl sm:text-3xl md:text-4xl text-white">
              Smart Sustainable Forest City
            </h1>
          </div>

          <div>
            <p className="font-semibold text-white">IKN Smart City</p>

            <div className="flex flex-col items-start mt-2 space-y-2">
              <p className=" text-gray transition-colors  duration-300 dark:text-primary dark:hover:text-primary hover:underline hover:cursor-pointer hover:text-primary">
                Kunjungi IKN Smart City
              </p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Informasi</p>

            <div className="flex flex-col items-start mt-2 space-y-2">
              <p className=" text-gray transition-colors  duration-300 dark:text-primary dark:hover:text-primary hover:underline hover:cursor-pointer hover:text-primary">
                Berita
              </p>
              <p className=" text-gray transition-colors  duration-300 dark:text-primary dark:hover:text-primary hover:underline hover:cursor-pointer hover:text-primary">
                Proyek Terkini
              </p>
            </div>

            <p className="font-semibold  mt-8 text-white">Media Sosial</p>

            <div className="flex flex-col items-start mt-2 space-y-2">
              <p className=" text-gray transition-colors  duration-300 dark:text-primary dark:hover:text-primary hover:underline hover:cursor-pointer hover:text-primary">
                Instagram
              </p>
              <p className=" text-gray transition-colors  duration-300 dark:text-primary dark:hover:text-primary hover:underline hover:cursor-pointer hover:text-primary">
                Facebook
              </p>
              <p className=" text-gray transition-colors  duration-300 dark:text-primary dark:hover:text-primary hover:underline hover:cursor-pointer hover:text-primary">
                Twitter
              </p>
              <p className=" text-gray transition-colors  duration-300 dark:text-primary dark:hover:text-primary hover:underline hover:cursor-pointer hover:text-primary">
                Youtube
              </p>
            </div>
          </div>
        </div>

        <hr className="mt-12 border-gray-200 md:mt-12 dark:border-gray-700 h-2" />
        <p className="font-semibold p-2 text-white md:text-center md:text-lg md:p-4">
          © 2024 Copyright IKN Smart City
        </p>
      </div>
    </footer>
  );
};

export default Footer;
