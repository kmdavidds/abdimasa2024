import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const AboutDesa = () => {
    return (
        <div className="bg-cust-softblue w-full flex items-center font-poppins justify-center sm:pb-40 pb-20">
            <div className="flex flex-col items-center justify-center sm:flex-row container w-full px-10 sm:px-10 lg:px-0 gap-10 sm:gap-0">
                <div className="sm:w-6/12 w-[80%] justify-start items-center flex">
                    <img src="/images/Landing/AboutSection/imageAbout.png" alt="foto about desa" className="w-[80%]" />
                </div>
                <div className="sm:w-7/12 flex-col flex sm:gap-10 gap-5">
                    <h1 className="text-[#252525] font-bold text-lg lg:text-[40px]">Desa Wisata Toyomarto</h1>
                    <p className="text-[#252525] font-normal text-sm lg:text-2xl lg:leading-10 leading-6 text-justify">
                        Sebuah desa dengan pesona alam tersembunyi di Kabupaten Malang. Desa Wisata Toyomarto dikelilingi keindahan Gunung Arjuna dan pemandangan hijau yang memukau. Terkenal dengan kerajinan cobek batu, klompen batik, dan batik tulis yang luar biasa. desa ini adalah surga bagi pecinta kerajinan untuk mengagumi kearifan budaya setempat.
                    </p>
                    <button className="px-8 py-[10px] font-semibold rounded-full text-xs lg:text-xl border-cust-darkblue border-[3px] text-cust-darkblue flex items-center justify-center gap-3 hover:bg-cust-darkblue hover:text-white duration-500 w-max">
                        Selengkapnya <FaArrowRightLong />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AboutDesa
