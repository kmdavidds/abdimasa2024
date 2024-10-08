import { Link } from "react-router-dom";
import React from 'react';

const berita = () => {
    return (
        <div className="bg-cust-softblue bg-cover bg-[url('images/Landing/WisataUMKMSection/bgPattern.png')] w-full flex-col items-center justify-center py-28">
            <div className='flex justify-center items-center w-full mb-10'>
                <img src="https://res.cloudinary.com/ddlo3v9hx/image/upload/v1728422598/Berita_Desa_znxkqy.png" alt="" className='w-1/4' />
            </div>

      
            <div className="flex justify-center gap-10">
        
                <div className="bg-gradient-to-b from-cust-blue via-cust-softblue to-gray rounded-lg overflow-hidden font-poppins w-full max-w-[350px] shadow-lg">
                    <img
                        src="https://res.cloudinary.com/ddlo3v9hx/image/upload/v1727534722/cld-sample-3.jpg"
                        alt=""
                        className="w-full h-[200px] object-cover"
                    />
                    <div className="p-4 rounded-t-lg">
                        <h3 className="text-lg font-bold mb-2 text-justify">
                            KUNJUNGAN KE DESA SENGA SELATAN, PIMPINAN KOMISI I DPRD WAJO
                        </h3>
                        <p className="text-gray-700 text-sm mb-4 text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
                        </p>
                        <div className="flex items-center justify-end text-cust-blue font-semibold text-sm">
                           29 Jun 2024
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default berita;
