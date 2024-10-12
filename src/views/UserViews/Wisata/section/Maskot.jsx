import React from 'react'
import { FaAnglesDown } from "react-icons/fa6";

const Maskot = () => {
    return (
        <div  className='bg-cust-softblue w-full flex items-center font-poppins lg:py-28 md:py-20 py-20'> 
        <div className='flex flex-row lg:ml-44 ml-20'>
            <div className='lg:basis-1/3 basis-1/7 flex justify-end'>
                <img src="https://res.cloudinary.com/ddlo3v9hx/image/upload/v1728371044/image-removebg-preview_1_komlav.png" alt="maskot" className='w-full'/>
            </div>
            <div className='lg:basis-2/3 basis-6/7 items-center'>
                <img src="https://res.cloudinary.com/ddlo3v9hx/image/upload/v1728371038/Group_238003_jb1wlb.png" alt="bubble-chat" className='lg:w-3/4 w-full lg:mr-0 lg:pr-0 pr-10' />
            </div>
        </div>
       </div>
    );
};

export default Maskot;
