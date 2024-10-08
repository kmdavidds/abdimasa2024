import { Link } from "react-router-dom";
import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io";

const umkm = () => {
    return (
        <div className="bg-cust-softblue bg-cover bg-[url('images/Landing/WisataUMKMSection/bgPattern.png')] w-full flex-row items-center font-poppins justify-center py-28">
            <div className='flex justify-center items-center w-full'>
                <img src="https://res.cloudinary.com/ddlo3v9hx/image/upload/v1728373204/judul_umkm_uxrqpj.png" alt="" className='w-1/4' />
            </div>
            <div className="items-center w-4/5 flex justify-center mt-14 mx-auto">
                <div className="bg-gradient-to-b from-cust-blue via-cust-softblue to-gray flex rounded-xl border-2 border-cust-sofblue w-full">
                    <div className="w-1/5 my-6 mx-6">
                        <img src="https://res.cloudinary.com/ddlo3v9hx/image/upload/v1727534722/samples/woman-on-a-football-field.jpg" alt="" className="rounded-2xl" />
                    </div>
                    <div className="grid w-full pr-6">
                        <div className='text-[30px] font-bold mt-6'>
                            Kerajinan Batik
                        </div>
                        <div className='text-[20px] text-cust-gray text-justify mt-2'>
                            Kerajinan batik dari Desa Wisata Toyomarto merupakan produk handmade ibu-ibu pengrajin lokal yang menggunakan teknik batik tulis. Dengan pewarna alami dan motif khas yang terinspirasi oleh alam, batik ini dapat...
                        </div>
                        <div className='text-[20px] font-bold text-cust-blue text-justify mt-2'>
                            Rp. 47.000 - Rp. 259.000
                        </div>
                        <div className="flex items-center mt-4">
                            <div className="flex text-yellow-400 text-[26px]">
                                ⭐⭐⭐⭐⭐
                            </div>
                            <div className="ml-auto flex items-center space-x-4 my-4">
                                <a target="_blank" rel="noopener noreferrer" className="text-green-500 rounded-full text-3xl">
                                    <IoLogoWhatsapp />
                                </a>
                                <button className='text-[16px] text-white bg-cust-blue rounded-full px-[30px] py-2'>
                                    Selengkapnya
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default umkm;
