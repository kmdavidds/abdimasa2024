import React, { useState, useEffect } from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const WisataUMKMCard = ({ type, image, title, location, name, priceRange, waLink, id }) => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const navigate = useNavigate();

    const waClick = () => {
        const nomorHP = waLink;
        return window.location.href = `https://api.whatsapp.com/send?phone=62${nomorHP}&text=&app_absent=0`;
    }

    const handleCardClick = () => {
        if (type === 'wisata') {
            navigate(`/wisata/${id}`);
        } else if (type === 'umkm') {
            navigate(`/umkm/${id}`);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (type === 'wisata') {
        return (
            <div onClick={handleCardClick} className="cursor-pointer bg-white relative font-poppins  rounded-lg overflow-hidden w-full md:w-1/3 md:max-w-[360px] max-w-[150px] max-h-[175px] md:max-h-[416px]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-[175px] md:h-60 xl:h-[416px] lg:h-72 object-cover"
                />
                <div className="p-3 lg:p-4 absolute bottom-0 flex flex-col justify-end h-full bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent w-full text-white">
                    <h3 className="text-xs xl:text-2xl lg:text-xl font-bold">{title}</h3>
                    <p className="lg:text-base text-[8px] text-opacity-70">{location}</p>
                </div>
            </div>
        )
    }

    if (type === 'umkm') {
        return (
            <div onClick={handleCardClick} className="cursor-pointer bg-white relative font-poppins rounded-lg overflow-hidden w-full md:w-1/3 md:max-w-[360px] max-w-[150px] max-h-[175px] md:max-h-[416px]">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-[175px] lg:h-[416px] object-cover"
                />
                <div className="p-3 lg:p-4 absolute bottom-0 text-white flex justify-between gap-1.5 sm:gap-0 items-end w-full h-full bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent">
                    <div>
                        <h3 className="text-xs lg:text-2xl font-bold">{name}</h3>
                        <p className="lg:text-base text-[8px] text-opacity-70">{priceRange}</p>
                    </div>
                    <a href={""} onClick={waClick} target="_blank" rel="noopener noreferrer" className="text-green-500 bg-white p-2 rounded-full">
                        <IoLogoWhatsapp size={isMobile ? 16 : 36} />
                    </a>
                </div>
            </div>
        )
    }
}

export default WisataUMKMCard;