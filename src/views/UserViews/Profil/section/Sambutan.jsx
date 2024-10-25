import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import profileDesa from "../../../../../public/images/Profile/SambutanSection/profile.webp"
import titleSambutan from "../../../../../public/images/Profile/SambutanSection/titleSambutan.webp"

const Sambutan = () => {
    return (
        <section id='sambutan' className='font-poppins'>
            <div className="bg-cust-blue bg-[url('images/Profile/SambutanSection/bgPattern.webp')] w-full lg:px-32 px-10 pb-44">
                <div className='flex lg:flex-row flex-col justify-between lg:gap-20 lg:items-end items-center'>
                    <img src={titleSambutan} alt="title" className='w-[243px] lg:hidden' />
                    <div className='flex pt-10'>
                        <img src={profileDesa} alt="profile" className='lg:w-auto w-[357px]' />
                    </div>
                    <ul className='lg:gap-12 gap-8 flex flex-col items-center'>
                        <li>
                            <img src={titleSambutan} alt="title" className='w-[430px] hidden lg:flex' />
                        </li>
                        <li className='xl:text-lg text-xs border-cust-softblue border bg-cust-softblue px-8 py-8 rounded-2xl space-y-4 '>
                            <p> Assalamu’alaikum Wr. Wb.</p>
                            <p> Puji syukur alhamdulillah kami panjatkan ke hadirat Allah SWT atas limpahan rahmat, bimbingan serta karunia-Nya sehingga Website Desa Lalang Sembawa dapat hadir dihadapan masyarakat luas, khususnya warga Desa x Kecamatan x Kabupaten x.</p>
                            <p> Ucapan terima kasih tak lupa kami sampaikan kepada semua pihak yang telah berusaha membangun dan mengembangkan Website Desa Lalang Sembawa ini, semoga jerih payahnya tidak sia-sia demi membangun dan memajukan Desa... <span className='text-cust-darkblue'> Lihat Selengkapnya</span> </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Sambutan
