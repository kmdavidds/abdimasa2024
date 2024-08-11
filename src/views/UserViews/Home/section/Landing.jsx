import React from 'react'
import { FaAnglesDown } from "react-icons/fa6";

const Landing = () => {
    return (
        <div className='bg-cust-blue bg-cover bg-[url("images/Landing/LandingSection/bgPattern.png")] min-h-screen w-full overflow-x-hidden flex flex-col items-center pt-28'>
            <div className='container flex items-center text-white'>
                <div className='w-1/2 flex flex-col gap-10 relative mb-5'>
                    <h1 className='text-[80px] font-bold'>Desa Toyomarto</h1>
                    <h3 className='text-2xl w-max opacity-70 mb-5'>Jl. Bodean Krajan, Toyomarto, Kec. Singosari, Malang, Jawa Timur</h3>
                    <button className='px-8 py-3 font-semibold text-2xl rounded-full border-white border-2 w-max hover:bg-white flex items-center gap-2 hover:text-cust-blue duration-500'>Yuk Jelajahi <span><FaAnglesDown/></span></button>
                    
                </div>
                <div className='w-1/2'>
                    <img src="/public/images/Landing/LandingSection/landingImg.png" alt="foto landing" className='w-full' />
                </div>
            </div>
            <img src="/public/images/Landing/LandingSection/awan.png" alt="awan transisi" className=''/>
        </div>
    )
}

export default Landing
