import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';




const BeritaCard = ({ id, image, title, desc, date}) => {
    return (
        <Link to={`/berita/${id}`}>
            
        <div className="bg-gradient-to-b from-cust-blue via-cust-softblue to-gray rounded-lg overflow-hidden font-poppins w-full xl:max-w-[350px] shadow-lg">
        <img
            src={image}
            alt=""
            className="w-full h-[190px] object-cover"
        />
        <div className="p-4 rounded-t-lg">
            <h3 className="text-base font-bold mb-2 text-justify line-clamp-1">
                {title}
            </h3>
            <p className="text-gray-700 text-xs mb-4 text-justify line-clamp-1">
                {desc}
            </p>
            <div className="flex items-center justify-end text-cust-blue font-semibold text-sm">
                {date}
            </div>
        </div>
    </div>
            </Link>
    )
}

export default BeritaCard;
