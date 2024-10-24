import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const UMKMCard = ({ id, image, title, desc, priceRange, nomorWA }) => {
    const navigate = useNavigate();

    const waClick = () => {
        const nomorHP = nomorWA;
        window.open(`https://wa.me/${nomorHP}`, '_blank', 'noopener,noreferrer');
    };


    const handleSelengkapnyaClick = () => {
        navigate(`/UMKM/${id}`);
    };

    return (
        <section className='font-poppins '>
            <div className='border rounded-2xl bg-cust-softblue mb-11'>
                <div className='flex flex-col lg:flex-row gap-8 gap lg:p-7 p-4 items-center'>
                    <div className='flex justify-center items-center lg:w-1/5 w-3/5 md:w-2/5'>
                        <img src={image} alt="images" className='rounded-lg' />
                    </div>
                    <div className='flex flex-col gap-2 lg:w-4/5 md:px-7 px-2'>
                        <h1 className='font-bold lg:text-3xl text-sm'>{title}</h1>
                        <p className='text-cust-gray lg:text-xl text-sm text-justify'>{desc}</p>
                        <p className='text-cust-darkblue text-sm lg:text-xl font-bold py-1 lg:py-4'>{priceRange}</p>
                        <div className='flex justify-between items-center'>
                            <p className='text-sm lg:text-2xl'>⭐⭐⭐⭐⭐</p>
                            <div className='flex gap-1 lg:gap-3 items-center'>
                                <a onClick={waClick} target='_blank'
                                    rel="noopener noreferrer"
                                    className="text-green-500 rounded-full lg:text-4xl text-2xl">
                                    <IoLogoWhatsapp />

                                </a>
                                <button onClick={handleSelengkapnyaClick} className='rounded-3xl lg:px-7 px-4 text-white bg-cust-darkblue lg:text-lg text-xs py-1 lg:py-2'>Selengkapnya</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UMKMCard;
