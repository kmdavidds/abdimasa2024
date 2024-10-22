import React from 'react';

export const WisataLainnya = ({ image, title, desc }) => {
    return (
        <section className='font-poppins '>
            <div className='border rounded-2xl bg-cust-softblue mb-11'>
                <div className='flex flex-col lg:flex-row gap-8 gap lg:p-7 p-4 items-center'>
                    <div className='flex justify-center items-center lg:w-1/5 w-3/5 md:w-2/5'>
                        <img src={image} alt="" />
                    </div>
                    <div className='flex flex-col gap-2 lg:w-4/5 md:px-7 px-2'>
                        <h1 className='font-bold lg:text-3xl text-sm'>{title}</h1>
                        <p className='text-cust-gray lg:text-xl text-sm text-justify'>{desc}</p>
                        <div className='flex justify-between mt-2'>
                            <p className='text-sm lg:text-2xl'>⭐⭐⭐⭐⭐</p>
                            <button className='rounded-3xl lg:px-7 px-4 text-white bg-cust-darkblue lg:text-lg text-xs py-1 lg:py-2'>Selengkapnya</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
