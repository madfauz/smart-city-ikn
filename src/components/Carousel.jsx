import React from "react";
import image1 from "../assets/carousel_image_1.jpg"
import logo from "../assets/logooo.png"
import CobaLogo from "../assets/cobalogo.png"



const Carousel = () => {
  return (



    <div className="conatiner mt-4 ml-4 mr-4">

        <div className="logo">
          <img src={logo} alt="" className="absolute z-[-1] h-[80%] right-0 opacity-[30%] lg:h-[140%] "/>
        </div>




    <div className="kontens">

    
      <div className="kontenSatu">
                <div className="textJudul">
                    <h2 className="text-center text-[30px] font-bold lg:text-[80px] lg:font-bold">Nusantara <br></br> City of the Future</h2>
                  </div>





                   <div className="absolute z-[90] mt-4  ">
                      <div className="flex justify-center gap-[90px] lg:gap-[500px]">
                        <div className="w-[150px] h-[60px] bg-white shadow-custom-dark rounded-xl lg:w-[300px] lg:h-[120px] lg:rounded-[20px]">
                          <div className="konten flex gap-2 mt-2 ml-2 items-center">
                              <div className=" w-[24px] h-[24px] bg-primary flex justify-center items-center rounded-[4px] lg:w-[50px] lg:h-[50px] lg:rounded-[10px]">
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="white" class="bi bi-globe-americas lg:w-[25px] lg:h-[25px]" viewBox="0 0 16 16">
                              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
                              </svg>


                                </div>

                            <p className="font-bold text-primary lg:text-3xl">+10 Negara</p>

                          </div>

                          <p className="text-[8px] mt-1 ml-2 font-semibold lg:text-lg">Berminat untuk investasi ke IKN</p>

                        </div>

                         <div className=" mt-2 w-[100px] h-[60px] bg-gradient-to-t from-start-primary to-end-primary shadow-custom-dark rounded-xl lg:w-[200px] lg:h-[100px] lg:rounded-[20px] lg:mt-4">
                            <div className="konten flex gap-2 mt-2 ml-2 ">
                                
                              <p className="font-bold text-white lg:text-3xl">+1.5 Juta</p>

                            </div>
                              <p className="text-[8px] mt-1 ml-2 font-semibold text-white lg:text-xl">Jumlah Penduduk</p>


                        </div> 
                      </div>

                    </div>





                    <div className="absolute z-[92] mt-[100px] ml-2 lg:mt-[20%] ">
                      <div className="flex justify-center gap-[100px] lg:gap-[500px]">
                        <div className=" mt-4 w-[100px] h-[60px] bg-gradient-to-t from-start-primary to-end-primary shadow-custom-dark rounded-xl lg:w-[200px] lg:h-[100px] lg:rounded-[20px] lg:mt-4">
                          <div className="konten flex gap-2 mt-2 ml-2">
                              

                            <p className="font-bold text-white lg:text-3xl">+56 Triliun</p>

                          </div>

                          <p className="text-[8px] text-white  mt-1 ml-2 font-semibold  lg:text-xl">Dana Investasi</p>

                        </div>

                        <div className="w-[130px] h-[70px] bg-white shadow-custom-dark rounded-xl lg:w-[300px] lg:h-[130px] lg:rounded-[20px]">
                          <div className="konten flex gap-2 mt-2 ml-2 items-center">
                              <div className=" w-[24px] h-[24px] bg-primary flex justify-center items-center rounded-[4px] lg:w-[50px] lg:h-[50px] lg:rounded-[10px]">
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="white" class="bi bi-trophy  lg:w-[25px] lg:h-[25px]" viewBox="0 0 16 16">
                            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935M3.504 1q.01.775.056 1.469c.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.5.5 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667q.045-.694.056-1.469z"/>
                          </svg>

                                </div>

                            <p className="font-bold text-primary lg:text-3xl">100% </p>

                          </div>

                          <p className="text-[8px] mt-1 ml-2 font-semibold lg:text-xl">Target tingkat penggunaan <br></br>energi hijau</p>

                        </div>
                      </div>

                    </div> 


                <div className="conatinergambar mt-4 ml-4 mr-4">
                  <div className="gambarCrausel flex justify-center items-center">
                  <img src={image1} alt="" className="rounded-[20px]  w-[300px] h-[200px]   lg:w-[825px] lg:h-[400px] lg:rounded-[40px] lg:mt-6"/>
                  </div>
                </div>


                <div class="flex justify-center items-center space-x-4 mt-4 lg:mt-16">
            
            <p class="text-lg font-medium text-gray-800 text-right lg:text-4xl">Ingin melihat <br></br>kota ini lebih jauh?</p>
            
           
            <button class="flex items-center space-x-2 px-8 py-2 bg-black text-white rounded-full shadow-custom-dark lg:px-14 lg:py-4">
            <span class="text-lg lg:text-xl">↓</span> 
            <span class="text-sm font-semibold lg:text-xl">Explore</span>
            </button>
          </div>

        
        </div>



        <div className="kontendua">
        <div className="keunggulan mt-8 lg:mt-20">

            <h2 className="text-2xl font-semibold text-center lg:text-4xl lg:font-bold">Apa saja keunggulan <br></br> IKN Smart City</h2>
            <p className="text-center text-[12px] mt-2 lg:text-2xl">Ada banyak keunggulan dari IKN Smart City yang dapat<br></br> memberikan manfaat bagi semua orang</p>


            <div className="container_keunggulan flex justify-center items-center">
            <div className =" px-vm sm:px-sm md:px-md  lg:px-lg xl:px-xl gap-3 grid grid-cols-1 grid-rows-3 mt-4 lg:mt-10 lg:grid-cols-3 lg:gap-7">
              <div className="  w-full h-auto bg-white shadow-custom-dark rounded-[20px] lg:w-[350px] lg-h-[700px]">
                  <div className="h-[70px] w-[70px] bg-primary ml-4 mt-4 rounded-[10px] flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-buildings" viewBox="0 0 16 16">
    <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"/>
    <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"/>
  </svg>
                  </div>

                  <h2 className=" text-xl font-bold ml-4 mt-4 mr-4 lg:text-2xl">Layanan Public yang <br></br>terintegrasi</h2>

                  <p className="ml-4 mt-2 mr-4 text-left lg:text-lg">
                    menyediakan layanan public yang terintegrasi melalu teknologi digital seperti sistem pelaporan masalah melalui aplikasi selular
                  </p>
              </div>

              <div className="  w-[240px] h-[340px] bg-white shadow-custom-dark rounded-[20px] lg:w-[350px] lg-h-[700px]">
                  <div className="h-[70px] w-[70px] bg-primary ml-4 mt-4 rounded-[10px] flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-motherboard" viewBox="0 0 16 16">
                  <path d="M11.5 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-10 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM5 3a1 1 0 0 0-1 1h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0zm0 1h3v3H5zm6.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
                  <path d="M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2zm1 11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z"/>
                </svg>
                  </div>

                  <h2 className=" text-xl font-bold ml-4 mt-4 mr-4   lg:text-2xl">Kota yang berbasis  <br></br>Internet of Things (IoT)</h2>

                  <p className="ml-4 mt-2 mr-4 text-left lg:text-lg">
                    Mengadopsi Internet of Things yang memungkinkan berbagai perangkat terhubung dari lampu jalan hingga sarana transportasi
                  </p>
              </div>

              <div className="  w-[240px] h-[340px] bg-white shadow-custom-dark rounded-[20px] lg:w-[350px] lg-h-[700px]">
                  <div className="h-[70px] w-[70px] bg-primary ml-4 mt-4 rounded-[10px] flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-diagram-2" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5zM3 11.5A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
  </svg>
                  </div>

                  <h2 className=" text-xl font-bold ml-4 mt-4 mr-4 lg:text-2xl">Menerapkan <br></br>Smart Goverment</h2>

                  <p className="ml-4 mt-2 mr-4 text-left lg:text-lg">
                    Menggunakan pemanfaatan teknologi informasi dan komunikasi untuk membuat tata kelola pemerintahan yang transparan, mudah diakses dan melibatkan partisipasi public
                  </p>
              </div>
              
            </div>
            </div>
            


            </div>
        </div>
    </div>


      




        


        



    </div>
  );
};

export default Carousel;
