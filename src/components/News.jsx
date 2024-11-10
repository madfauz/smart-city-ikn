import React from "react";
import berita1 from "../assets/berita-1.jpeg";
import berita2 from "../assets/berita-2.jpeg";
import berita3 from "../assets/berita-3.jpeg";

const News = () => {
  return (
    <div>
      <div className="p-10">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 max-w-sm w-[384px] h-[206px]">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={berita1}
                alt=""
              />
            </div>
            <div className="px-6 py-4">
              <p className="text-gray-700 text-left text-base mb-1 line-clamp-5">
                25 April 2023
              </p>
              <div className="font-bold text-xl mb-2 text-left line-clamp-2">
                Menuju Masa Depan Berkelanjutan dengan Teknologi Smart Lighting
                di Ibu Kota Baru
              </div>
              <p className="text-gray-700 text-left text-base mb-5 line-clamp-5">
                Sebagai bagian dari perencanaaan jangka panjang dalam
                mengembangkan ibu kota baru Indonesia, Otorita Ibu Kota
                Nusantara (OIKN) secara serius mempertimbangkan penggunaan
                teknologi pencahayaan pintar atau smart lightinguntuk
                menciptakan kota yang cerdas dan ramah lingkungan. Menurut
                Sekretaris OIKN Achmad Jaka Santos Adiwijaya, smart
                lightingdapat memberikan banyak manfaat seperti penghematan
                biaya yang signifikan, pengurangan emisi karbon, dan polusi
                cahaya. Berkaitan dengan misi pameran investasi global di
                Hannover Messe 2023, OIKN mengirimkan delegasi untuk mengunjungi
                salah satu perusahaan smart lightingterkemuka di Eropa, LUG, di
                Zielona Gora, Polandia. Delegasi OIKN yang dipimpin oleh
                Sekretaris OIKN Achmad Jaka Santos Adiwijaya, Chief Urban
                Mobility OIKN Resdiansyah, dan Kepala Biro Keuangan, Barang
                Milik Negara, dan Aset Dalam Penguasaan, Muji Budda'wah,
                berkesempatan mempelajari pengalaman LUG selama 30 tahun dalam
                menyediakan solusi pencahayaan profesional dan potensi mereka
                untuk bisa berinvestasi di Nusantara.
              </p>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 max-w-sm w-[384px] h-[206px]">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={berita2}
                alt=""
              />
            </div>
            <div className="px-6 py-4">
              <p className="text-gray-700 text-left text-base mb-1 line-clamp-5">
                27 Februari 2023
              </p>
              <div className="font-bold text-xl mb-2 text-left line-clamp-2">
                Desa di Sekitar Nusantara Jadi Pusat Studi Desa Digital
              </div>
              <p className="text-gray-700 text-left text-base mb-5 line-clamp-5">
                Desa Bukit Raya, Desa Digital (Smart Village) pertama di Penajam
                Paser Utara, Kalimantan Timur atau di wilayah Ibu Kota Nusantara
                kini menjadi desa percontohan sekaligus pusat studi bagi desa
                lain. Sejak diresmikan sebagai Desa Digital pada Agustus 2022,
                sudah ada empat desa yang datang untuk studi ke Bukit Raya, tiga
                desa dari wilayah Kalimantan Timur, yakni Desa Sidorejo, Gunung
                Intan Babulu dan Sesulu sedangkan satu desa dari Kalimantan
                Tengah. “Rombongan dari Desa Muara Plantau, Kalimantan Tengah
                datang lewat jalan darat menempuh perjalanan 13 jam khusus ke
                sini,” kata Sekretaris Desa Bukit Raya, Adi Suriyadi. Menurut
                Adi, mereka datang dengan tiga mobil, yang terdiri hampir dari
                seluruh perangkat desa dari Kepala Desa, hingga Ketua RT.
                “Mereka ingin belajar dari kami bagaimana menjadi desa digital,”
                ujar Adi.
              </p>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 max-w-sm w-[384px] h-[206px] ">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={berita3}
                alt=""
              />
            </div>
            <div className="px-6 py-4">
              <p className="text-gray-700 text-left text-base mb-1 line-clamp-5">
                21 Juni 2023
              </p>
              <div className="font-bold text-xl mb-2 text-left line-clamp-2">
                Rumah Sakit Hermina Akan Bangun Rumah Sakit Bertaraf
                Internasional di IKN
              </div>
              <p className="text-gray-700 text-left text-base mb-5 line-clamp-5">
                Hermina akan bangun rumah sakit bertaraf internasional di
                kawasan Ibu Kota Nusantara (IKN). Rumah sakit ini ditargetkan
                dapat beroperasi pada Agustus 2024. “Di saat banyak investor
                bersikap menunggu untuk berinvestasi di IKN, kami Hermina tengah
                siap membangun suatu rumah sakit yang pasti diperlukan oleh
                masyarakat yang saat ini sedang membangun Ibu Kota Negara di
                IKN,” ujar Direktur Utama PT Medikaloka Hermina Tbk Hasmoro
                dalam acara Penandatanganan Kesepakatan Kerja Sama Pembangunan
                Rumah Sakit Bertaraf Internasional, di Hermina Tower, Jakarta
                Pusat, Selasa (20/06/2023). Pembangunan rumah sakit ini
                merupakan hasil kerja sama antara PT Medikaloka Hermina Tbk
                dengan PT Bina Karya (Persero) yangoleh Pemerintah telah
                ditetapkan sebagai Badan Usaha Otorita (BUO). Sehingga saat ini
                PT Bina Karya dapat berperan sebagai master developerdan
                menjalankan fungsi serta tugasnya dalam hal aspek komersial dan
                B2B dengan investor yang berminat untuk investasi di IKN.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center gap-2 flex-wrap p-4">
        <span class="bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 text">
          #photography
        </span>
        <span class="bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
          #travel
        </span>
        <span class="bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
          #winter
        </span>
        <span class="bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
          #chill
        </span>
      </div>
    </div>
  );
};

export default News;
