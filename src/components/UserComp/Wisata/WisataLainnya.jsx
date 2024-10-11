import React, { useState, useEffect } from 'react'


export const WisataLainnya = ({ image, title, desc,}) => {
    return (
        <div className='flex flex-row bg-white rounded-3xl my-12'>
                    <div className='basis-1/4 rounded-lg px-8 py-10'>
                        <img 
                        src={image}
                        alt="" 
                        className='rounded-lg' />
                    </div>
                    <div className='basis-3/4 px-8 py-8 flex flex-col'>
                        <div className='text-[36px] font-bold'>
                            {title}
                        </div>
                        <div className='text-[26px] text-cust-gray text-justify mt-2'>
                        {desc}
                        </div>
                        <div className='flex flex-row mt-4'>
                            <div className='text-[26px] mt-2'>
                                ⭐⭐⭐⭐⭐
                            </div>
                            <div className='text-[20px] ml-auto text-white bg-cust-blue rounded-full px-[30px] py-2'>
                                <button>Selengkapnya</button>
                            </div>
                        </div>
                    </div>
                </div>
    )
}
