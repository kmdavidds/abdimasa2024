import React from 'react'
import { FaAnglesDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HeroProfile = () => {

    const scrollToAboutDesa = () => {
        const element = document.getElementById('sambutan');
        if (element) {
            const offset = 150;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className='bg-cust-softblue bg-cover font-poppins bg-[url("images/Profile/SambutanSection/bgPattern.webp")] z-20 xl:min-h-screen w-full overflow-hidden flex flex-col items-center pt-28 pb-56 sm:pb-0 relative h-full'>
            <div className='container flex sm:flex-row flex-col items-center justify-center text-cust-darkblue max-w-[80%]'>
                <div className='sm:w-1/2 w-full flex flex-col gap-5 lg:gap-10 relative mb-5 sm:items-start items-center'>
                    <h1 className='text-[1.875rem] sm:text-[2rem] md:text-[3rem] lg:text-7xl xl:text-6xl font-bold text-center sm:text-start duration-500'>Profil <br/> Desa Toyomarto</h1>
                    <button onClick={scrollToAboutDesa} className='px-6 md:px-8 py-2 md:py-3 font-semibold text-xs md:text-base lg:text-xl rounded-full border-cust-darkblue border-2 w-max hover:bg-cust-darkblue sm:block hover:text-cust-softblue duration-500 hidden select-none'><Link className='flex items-center gap-2' to="#about-desa">Yuk Jelajahi <FaAnglesDown className='animate-bounce' /></Link></button>
                </div>
                <div className='sm:w-1/2 w-full'>
                    <img src="/images/Landing/LandingSection/landingImg.png" alt="foto landing" className='w-full duration-500' />
                </div>
            </div>
            <img src="/images/Profile/HeroSection/awanProfile.svg" alt="awan transisi" className='sm:block hidden relative -bottom-10 lg:-bottom-20 xl:-bottom-40 w-full' />
            <img src="/images/Profile/HeroSection/awanProfileHP.svg" alt="" className='block sm:hidden absolute bottom-0 w-full' />
        </div>
    )
}

export default HeroProfile
