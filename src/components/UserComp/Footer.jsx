import React from 'react';
import igIcon from "../../../public/images/Footer/InstagramIcon.svg"
import ytIcon from "../../../public/images/Footer/YoutubeIcon.svg"
import fbIcon from "../../../public/images/Footer/FacebookIcon.svg"
import callIcon from "../../../public/images/Footer/IconCall.svg"
import LogoDewiAmerta from "../../../public/images/Footer/LogoDewiAmerta.svg"

const Footer = () => {
    return (
        <section className='bg-cust-blue lg:px-32 px-10 pb-10 pt-20'>
            <div className='font-poppins text-white flex flex-col gap-10'>
                <div className='flex md:justify-between md:text-start text-center justify-center'>
                    <ul>
                        <li className='font-bold text-3xl mb-4'>Desa Wisata Toyomarto</li>
                        <li className='text-xl mb-7'>Jl. Bodean Krajan RT. 07 RW. 01 Desa <br/> Toyomarto Kecamatan Singosari <br/> Kabupaten Malang, Jawa Timur</li>
                        <ul className='flex gap-6 justify-center md:justify-start'>
                            <li><img src={igIcon} alt="Icon" /></li>
                            <li><img src={ytIcon} alt="Icon" /></li>
                            <li><img src={fbIcon} alt="Icon" /></li>
                            <li><img src={callIcon} alt="Icon" /></li>
                        </ul>
                    </ul>
                    <div className='md:flex hidden w-auto'>
                        <img src={LogoDewiAmerta} alt="Logo" />
                    </div>
                </div>
                <hr className='border-t-2 border-white' />
                <p className='justify-center md:flex hidden'>Copyright © 2024 | By DevTeam FILKOM ABDIMASA</p>
            </div>
        </section>
    );
};

export default Footer;