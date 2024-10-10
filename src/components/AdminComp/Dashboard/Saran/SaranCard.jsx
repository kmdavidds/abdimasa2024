import React, { useState } from 'react'
import { FaXmark } from "react-icons/fa6";

const SaranCard = ({ name, pengaduan, lampiran }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);
    return (
        <div className='bg-white rounded-3xl w-full text-lg h-max border-cust-blue px-7 py-4'>
            <div className='flex gap-3'>
                <div className='font-bold'>
                    Nama :
                </div>
                <div>
                    {name}
                </div>
            </div>
            <div className='flex gap-3'>
                <div className='font-bold'>
                    Pengaduan :
                </div>
                <div>
                    {pengaduan}
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='font-bold'>
                    Lampiran :
                </div>
                <div className='w-24 h-20 bg-slate-400 cursor-pointer rounded-xl' onClick={openPopup}>
                    <img src={lampiran} alt="Lampiran" className='w-full h-full object-cover rounded-xl' />
                </div>
            </div>
            {isPopupOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
                    <div className='relative bg-white p-4 rounded-lg'>
                        <button
                            onClick={closePopup}
                            className='absolute top-2 right-2 text-black text-lg font-bold'
                        >
                            <FaXmark className='rounded-full bg-black text-white w-8 h-8 p-2' />
                        </button>
                        <img src={lampiran} alt="Lampiran Full" className='w-full h-full max-h-[80vh] object-contain rounded-lg' />
                    </div>
                </div>
            )}
        </div>
    )
}

export default SaranCard
