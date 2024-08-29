import React, { useState, useEffect } from 'react'
import { IoLogoWhatsapp } from "react-icons/io";

const WisataUMKMCard = ({ type, image, title, location, name, priceRange, waLink }) => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (type === 'wisata') {
        return (
            <div className="bg-white relative font-poppins  rounded-lg overflow-hidden w-full md:w-1/3 md:max-w-[360px] max-w-[150px] max-h-[175px] md:max-h-[416px]">
                <img
                    src={image}
                    alt={title}
                    className="w-full object-cover"
                />
                <div className="p-3 md:p-4 absolute bottom-0 flex flex-col justify-end h-full bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent w-full text-white">
                    <h3 className="text-xs md:text-2xl font-bold">{title}</h3>
                    <p className="md:text-base text-[8px] text-opacity-70">{location}</p>
                </div>
            </div>
        )
    }

    if (type === 'umkm') {
        return (
            <div className="bg-white relative font-poppins rounded-lg overflow-hidden w-full md:w-1/3 md:max-w-[360px] max-w-[150px] max-h-[175px] md:max-h-[416px]">
                <img
                    src={image}
                    alt={name}
                    className="w-full object-cover"
                />
                <div className="p-3 md:p-4 absolute bottom-0 text-white flex justify-between gap-1.5 sm:gap-0 items-end w-full h-full bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent">
                    <div>
                        <h3 className="text-xs md:text-2xl font-bold">{name}</h3>
                        <p className="md:text-base text-[8px] text-opacity-70">{priceRange}</p>
                    </div>
                    <a href={waLink} target="_blank" rel="noopener noreferrer" className="text-green-500 bg-white p-2 rounded-full">
                        <IoLogoWhatsapp size={isMobile ? 16 : 36} />
                    </a>
                </div>
            </div>
        )
    }
}

export default WisataUMKMCard
