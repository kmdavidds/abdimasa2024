import React, { useState, useEffect } from 'react'
import { IoLogoWhatsapp } from "react-icons/io";


const UMKMCard = ({ image, title, desc, name, priceRange, nomorWA }) => {

const waClick = () => {
    const nomorHP = {nomorWA}
    window.location.href = `https://wa.me/${nomorHP}`
}
    return (
        <div className="bg-gradient-to-b from-cust-blue via-cust-softblue to-gray flex rounded-xl border-2 border-cust-sofblue lg:w-full w-1/2">
                    <div className="w-1/5 my-6 mx-6">
                        <img 
                        src={image} 
                        alt="" 
                        className="rounded-2xl" />
                    </div>
                    <div className="lg:grid grid-rows-3 w-full pr-6">
                        <div className='lg:text-[30px] text-[14px] lg:text-start lg:justify-start text-center font-bold mt-6'>
                            {title}
                        </div>
                        <div className='lg:text-[20px] text-[14px] lg:text-start lg:justify-start text-cust-gray text-justify mt-2 line-clamp-4 lg:line-clamp-7'>
                            {desc}
                        </div>
                        <div className='text-[20px] text-[14px] font-bold text-cust-blue text-justify mt-2'>
                            {priceRange}
                        </div>
                        <div className="flex items-center mt-4 lg:mt-0">
                            <div className="flex text-yellow-400 lg:text-[26px] text-[14px]">
                                ⭐⭐⭐⭐⭐
                            </div>
                            <div className="ml-auto flex items-center space-x-4 my-4">
                                <a onClick= {waClick} 
                                rel="noopener noreferrer"
                                className="text-green-500 rounded-full text-3xl">
                                    <IoLogoWhatsapp />
                                </a>
                                <button className='text-[16px] text-white bg-cust-blue rounded-full px-[30px] py-2'>
                                    Selengkapnya
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default UMKMCard;
