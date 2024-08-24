import React from 'react'
import { FaAnglesDown } from "react-icons/fa6";

const Landing = () => {
    return (
        <div className='bg-cust-blue bg-cover font-poppins bg-[url("images/Landing/LandingSection/bgPattern.png")] xl:min-h-screen w-full overflow-hidden flex flex-col items-center pt-28 pb-56 sm:pb-0 relative h-full'>
            <div className='container flex sm:flex-row flex-col items-center justify-center text-white sm:px-0 px-10 '>
                <div className='sm:w-1/2 w-full flex flex-col gap-5 lg:gap-10 relative mb-5 sm:items-start items-center'>
                    <h1 className='text-[1.875rem] sm:text-[2rem] md:text-[3rem] lg:text-7xl font-bold text-center sm:text-start duration-500'>Desa Toyomarto</h1>
                    <h3 className='text-[10px] sm:text-[1rem] md:text-xl xl:w-max text-center sm:text-start opacity-70 mb-5 duration-500'>Jl. Bodean Krajan, Toyomarto, Kec. Singosari, Malang, Jawa Timur</h3>
                    <button className='px-6 md:px-8 py-2 md:py-3 font-semibold text-xs md:text-base lg:text-xl rounded-full border-white border-2 w-max hover:bg-white sm:flex items-center gap-2 hover:text-cust-blue duration-500 hidden select-none'>Yuk Jelajahi <FaAnglesDown /></button>
                </div>
                <div className='sm:w-1/2 w-full'>
                    <img src="/images/Landing/LandingSection/landingImg.png" alt="foto landing" className='w-full duration-500' />
                </div>
            </div>
            <img src="/images/Landing/LandingSection/awan.png" alt="awan transisi" className='sm:block hidden relative -bottom-1 h-fit select-none' />
            <img src="/images/Landing/LandingSection/awanHP.png" alt="" className='block sm:hidden absolute bottom-0 select-none' />
        </div>
    )
}

export default Landing
