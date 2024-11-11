import React from "react";
import berita1 from "../assets/berita-1.jpeg";
import berita2 from "../assets/berita-2.jpeg";
import berita3 from "../assets/berita-3.jpeg";

const News = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Title Section */}
      <div className="flex flex-col items-center justify-center text-center ">
        <p className="pt-8 mb-2 text-4xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          Berita
        </p>

        <p className="text-base mb-4 sm:mb-6 md:mb-md text-gray-700">
          Berita terkini mengenai inovasi dan proyek smart city yang membangun
          kota cerdas
        </p>
      </div>

      {/* Filter Section*/}
      <div className="flex justify-start gap-4 flex-wrap ml-4 md:ml-8 lg:ml-16 mt-4 md:mt-8 lg:mt-10 hidden md:flex">
        <span className="bg-primary rounded-lg flex items-center justify-center font-semibold text-base lg:text-lg text-white py-2 px-4 md:py-3 md:px-6">
          SEMUA
        </span>
        <span className="hover:text-primary hover:cursor-pointer hover:border-primary leading-[1.5] border border-gray bg-white rounded-lg flex items-center justify-center font-regular text-base lg:text-lg text-gray py-2 px-4 md:py-3 md:px-6">
          INFRASTUKTUR
        </span>
        <span className="hover:text-primary hover:cursor-pointer hover:border-primary leading-[1.5] border border-gray bg-white rounded-lg flex items-center justify-center font-regular text-base lg:text-lg text-gray py-2 px-4 md:py-3 md:px-6">
          DIGITALISASI
        </span>
        <span className="hover:text-primary hover:cursor-pointer hover:border-primary leading-[1.5] border border-gray bg-white rounded-lg flex items-center justify-center font-regular text-base lg:text-lg text-gray py-2 px-4 md:py-3 md:px-6">
          TRANSPORTASI
        </span>
        <span className="hover:text-primary hover:cursor-pointer hover:border-primary leading-[1.5] border border-gray bg-white rounded-lg flex items-center justify-center font-regular text-base lg:text-lg text-gray py-2 px-4 md:py-3 md:px-6">
          ADMINISTRASI
        </span>
      </div>

      {/* News Section */}
      <div className="overflow-x-auto">
        <div className="inline-flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10 md:px-20">
          {/* Card 1 */}
          <div className="hover:cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden w-72 sm:w-auto">
            <div className="relative">
              <div className="p-4">
                <div className="bg-primary m-4 absolute top-0 left-0 bg-indigo-500 text-white font-semibold px-2 py-1 rounded-lg">
                  #INFRASTRUKTUR
                </div>
                <img
                  className=" rounded-lg w-full h-48 object-cover"
                  src={berita1}
                  alt="foto berita ke-1"
                />
              </div>
            </div>
            <div className="px-4 pb-8 pt-1">
              <p className="text-gray text-left text-sm sm:text-base mb-1">
                25 April 2023
              </p>
              <div className="text-lg font-bold text-dark mb-2 line-clamp-2">
                Menuju Masa Depan Berkelanjutan dengan Teknologi Smart Lighting
                di Ibu Kota Baru
              </div>
              <p className="text-gray font-regular text-sm line-clamp-5">
                Sebagai bagian dari perencanaaan jangka panjang dalam
                mengembangkan ibu kota baru Indonesia, Otorita Ibu Kota
                Nusantara (OIKN) secara serius mempertimbangkan penggunaan
                teknologi pencahayaan pintar atau smart lighting untuk
                menciptakan kota yang cerdas dan ramah lingkungan...
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="hover:cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden w-72 sm:w-auto">
            <div className="relative">
              <div className="p-4">
                <div className="bg-primary m-4 absolute top-0 left-0 bg-indigo-500 text-white font-semibold px-2 py-1 rounded-lg">
                  #DIGITALISASI
                </div>
                <img
                  className=" rounded-lg w-full h-48 object-cover"
                  src={berita2}
                  alt="foto berita ke-2"
                />
              </div>
            </div>
            <div className="px-4 pb-8 pt-1">
              <p className="text-gray text-left text-sm sm:text-base mb-1">
                27 Februari 2023
              </p>
              <div className="text-lg font-bold text-dark mb-2 line-clamp-2">
                Desa di Sekitar Nusantara Jadi Pusat Studi Desa Digital
              </div>
              <p className="text-gray font-regular text-sm line-clamp-5">
                Desa Bukit Raya, Desa Digital (Smart Village) pertama di Penajam
                Paser Utara, Kalimantan Timur atau di wilayah Ibu Kota Nusantara
                kini menjadi desa percontohan sekaligus pusat studi bagi desa
                lain...
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="hover:cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden w-72 sm:w-auto">
            <div className="relative">
              <div className="p-4">
                <div className="bg-primary m-4 absolute top-0 left-0 bg-indigo-500 text-white font-semibold px-2 py-1 rounded-lg">
                  #INFRASTRUKTUR
                </div>
                <img
                  className=" rounded-lg w-full h-48 object-cover"
                  src={berita3}
                  alt="foto berita ke-3"
                />
              </div>
            </div>
            <div className="px-4 pb-8 pt-1">
              <p className="text-gray text-left text-sm sm:text-base mb-1">
                21 Juni 2023
              </p>
              <div className="text-lg font-bold text-dark mb-2 line-clamp-2">
                Rumah Sakit Hermina Akan Bangun Rumah Sakit Bertaraf
                Internasional di IKN
              </div>
              <p className="text-gray font-regular text-sm line-clamp-5">
                Hermina akan bangun rumah sakit bertaraf internasional di
                kawasan Ibu Kota Nusantara (IKN). Rumah sakit ini ditargetkan
                dapat beroperasi pada Agustus 2024...
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End Section */}
    </div>
  );
};

export default News;
