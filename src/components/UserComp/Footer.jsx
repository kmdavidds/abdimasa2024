import React from 'react';
import igIcon from "../../../public/images/Footer/InstagramIcon.svg"
import ytIcon from "../../../public/images/Footer/YoutubeIcon.svg"
import fbIcon from "../../../public/images/Footer/FacebookIcon.svg"
import callIcon from "../../../public/images/Footer/IconCall.svg"
import LogoDewiAmerta from "../../../public/images/Footer/LogoDewiAmerta.svg"
import topAsset from "../../../public/images/Footer/TopAsset.svg"
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
    return (
        <section className='bg-cust-blue'>
            <img className='flex w-full' src={topAsset} alt="asset" />
            <div className='font-poppins text-white flex flex-col gap-10 lg:px-32 px-10 pb-10 pt-20'>
                <div className='flex md:justify-between md:text-start text-center justify-center'>
                    <ul >
                        <li className='font-bold text-xl lg:text-3xl mb-4'>Desa Wisata Toyomarto</li>
                        <li className='text-sm lg:text-xl mb-7'>Jl. Bodean Krajan RT. 07 RW. 01 Desa <br /> Toyomarto Kecamatan Singosari <br /> Kabupaten Malang, Jawa Timur</li>
                        <ul className='flex gap-6 justify-center md:justify-start'>
                            <a href='https://www.instagram.com/dewi.amerta_toyomarto' target='_blank'><img src={igIcon} alt="Icon" /></a>
                            <a href='https://www.youtube.com/@desawisatatoyomarto9745' target='_blank'><img src={ytIcon} alt="Icon" /></a>
                            <a href='https://www.facebook.com/DWToyomarto?locale=id_ID' target='_blank'><img src={fbIcon} alt="Icon" /></a>
                            <a href='https://wa.me/6281232555513' target='_blank'><img src={callIcon} alt="Icon" /></a>
                            <a href="https://vt.tiktok.com/ZSj8Kbd92/" target='_blank'className='border rounded-full p-[10px] bg-cust-softblue border-cust-softblue'><FaTiktok color='#348AC9' size={23}/></a>
                        </ul>
                    </ul>
                    <div className='md:flex hidden xl:w-auto w-2/4'>
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