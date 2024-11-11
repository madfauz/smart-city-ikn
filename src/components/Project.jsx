import projectCharging from "../assets/project-charging.jpeg";
import projectKereta from "../assets/project-kereta.jpeg";
import projectMall from "../assets/project-mall.jpg";
import projectPlaza from "../assets/project-plaza.jpg";
import projectTaxi from "../assets/project-taxi.jpeg";

const Project = () => {
  return (
    <div className="relative mt-[100px] flex flex-col gap-4 px-sm sm:px-sm md:px-md lg:px-lg xl:px-xl">
      <section className="flex flex-col gap-2">
        <h2 className="font-poppins font-semibold text-[28px] text-center">
          Proyek Terkini
        </h2>
        <p className="font-poppins font-normal text-[15px] text-center">
          IKN Smart City menggabungkan teknologi canggih untuk menciptakan kota
          yang efisien, ramah lingkungan, dan berkelanjutan, dengan fokus pada
          peningkatan kualitas hidup semua orang.
        </p>
      </section>

      <section
        id="proyek"
        className=" flex flex-wrap xl:flex-nowrap flex-row gap-6 w-full h-[700px]"
      >
        <aside className="flex flex-col sm:flex-row xl:flex-col gap-6 basis-full xl:basis-4/12">
          <div className="relative rounded-[10px] w-full sm:w-1/2 xl:w-auto xl:h-2/3">
            <div className="bg-black opacity-30 absolute top-0 left-0 w-full h-full z-10 rounded-[10px]"></div>
            <img
              src={projectPlaza}
              className="relative rounded-[10px] w-full h-full object-cover"
              alt="project-plaza"
            />
            <span className="font-poppins font-semibold absolute z-20 top-0 left-0 px-4 py-2 text-[20px] text-white bg-primary rounded-tl-[10px] rounded-br-[10px]">
              Kawasan Terbuka
            </span>

            <div className="absolute z-20 bottom-4 left-4 text-white">
              <span className="font-poppins font-semibold text-[20px]">
                Plaza Bhineka
              </span>
              <p className="font-poppins font-light italic text-[15px] line-clamp-2">
                Bagian dari Sumbu Kebangsaan Nusantara.
              </p>
            </div>
          </div>
          <div className="relative rounded-[10px] w-full sm:w-1/2 xl:w-auto xl:h-1/3">
            <div className="bg-black opacity-30 absolute top-0 left-0 w-full h-full z-10 rounded-[10px] box-border"></div>
            <img
              src={projectTaxi}
              className="relative rounded-[10px] w-full h-full object-cover"
              alt="project-taxi"
            />
            <span className="font-poppins font-semibold absolute z-20 top-0 left-0 px-4 py-2 text-[20px] text-white bg-primary rounded-tl-[10px] rounded-br-[10px]">
              Transportasi
            </span>

            <div className="absolute z-20 bottom-4 left-4 text-white">
              <span className="font-poppins font-semibold text-[20px]">
                Sky Taxi IKN
              </span>
              <p className="font-poppins font-light italic text-[15px] line-clamp-2">
                Taksi tanpa awak dan tanpa penumpang, yang memiliki kapasitas
                lima penumpang.
              </p>
            </div>
          </div>
        </aside>
        <aside className="flex flex-col gap-6 basis-full h-2/4 xl:h-auto  xl:basis-3/12">
          <div className="relative rounded-[10px] h-full">
            <div className="bg-black opacity-30 absolute top-0 left-0 w-full h-full z-10 rounded-[10px]"></div>
            <img
              src={projectMall}
              className="relative rounded-[10px] w-full h-full object-cover"
              alt="project-mall"
            />
            <span className="font-poppins font-semibold absolute z-20 top-0 left-0 px-4 py-2 text-[20px] text-white bg-primary rounded-tl-[10px] rounded-br-[10px]">
              Infrastruktur
            </span>

            <div className="absolute z-20 bottom-4 left-4 text-white">
              <span className="font-poppins font-semibold text-[20px]">
                CBD Mall
              </span>
              <p className="font-poppins font-light italic text-[15px] line-clamp-2">
                Pusat ekonomi, bisnis, dan hiburan.
              </p>
            </div>
          </div>
        </aside>
        <aside className="flex flex-col sm:flex-row xl:flex-col gap-6 basis-full xl:basis-5/12">
          <div className="relative rounded-[10px] w-full sm:w-1/2 xl:w-auto h-full xl:h-1/2">
            <div className="bg-black opacity-30 absolute top-0 left-0 w-full h-full z-10 rounded-[10px]"></div>
            <img
              src={projectCharging}
              className="relative rounded-[10px] w-full h-full object-cover"
              alt="project-charging"
            />
            <span className="font-poppins font-semibold absolute z-20 top-0 left-0 px-4 py-2 text-[20px] text-white bg-primary rounded-tl-[10px] rounded-br-[10px]">
              Transportasi
            </span>

            <div className="absolute z-20 bottom-4 left-4 text-white">
              <span className="font-poppins font-semibold text-[20px]">
                Charging Lane
              </span>
              <p className="font-poppins font-light italic text-[15px] line-clamp-2">
                Jalan yang dapat mengisi ulang daya mobil listrik di tol.
              </p>
            </div>
          </div>
          <div className="relative rounded-[10px] w-full sm:w-1/2 xl:w-auto h-full xl:h-1/2">
            <div className="bg-black opacity-30 absolute top-0 left-0 w-full h-full z-10 rounded-[10px]"></div>
            <img
              src={projectKereta}
              className="relative rounded-[10px] w-full h-full object-cover"
              alt="project-kereta"
            />
            <span className="font-poppins font-semibold absolute z-20 top-0 left-0 px-4 py-2 text-[20px] text-white bg-primary rounded-tl-[10px] rounded-br-[10px]">
              Transportasi
            </span>

            <div className="absolute z-20 bottom-4 left-4 text-white">
              <span className="font-poppins font-semibold text-[20px]">
                Kereta Otonom
              </span>
              <p className="font-poppins font-light italic text-[15px] line-clamp-2">
                Transportasi massal berupa kereta berbasis elektrik yang tidak
                memerlukan rel konvensional.
              </p>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default Project;
