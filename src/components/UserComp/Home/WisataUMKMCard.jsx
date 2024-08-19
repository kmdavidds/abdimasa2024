import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";

const WisataUMKMCard = ({ type, image, title, location, name, priceRange, waLink }) => {
    if (type === 'wisata') {
        return (
            <div className="bg-white relative font-poppins  rounded-lg overflow-hidden w-1/3 max-w-[360px] max-h-[416px]">
                <img
                    src={image}
                    alt={title}
                    className="w-full object-cover"
                />
                <div className="p-4 absolute bottom-0 flex flex-col justify-end h-full bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent w-full text-white">
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <p className="text-opacity-70">{location}</p>
                </div>
            </div>
        )
    }

    if (type === 'umkm') {
        return (
            <div className="bg-white relative font-poppins rounded-lg overflow-hidden w-1/3 max-w-[360px] max-h-[416px]">
                <img
                    src={image}
                    alt={name}
                    className="w-full object-cover"
                />
                <div className="p-4 absolute bottom-0 text-white flex justify-between items-end w-full h-full bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent">
                    <div>
                        <h3 className="text-2xl font-bold">{name}</h3>
                        <p className="text-opacity-70">{priceRange}</p>
                    </div>
                    <a href={waLink} target="_blank" rel="noopener noreferrer" className="text-green-500 bg-white p-2 rounded-full">
                        <IoLogoWhatsapp size={36} />
                    </a>
                </div>
            </div>
        )
    }
}

export default WisataUMKMCard
