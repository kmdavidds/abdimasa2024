import React from 'react'
import { FaAnglesDown } from "react-icons/fa6";

const Maskot = () => {
    return (
        <div  className='bg-cust-softblue w-full flex items-center font-poppins py-28'> 
        <div className='flex flex-row ml-44'>
            <div className='basis-1/3 flex justify-end'>
                <img src="https://res.cloudinary.com/ddlo3v9hx/image/upload/v1728371044/image-removebg-preview_1_komlav.png" alt="maskot" className='w-full'/>
            </div>
            <div className='basis-2/3 items-center'>
                <img src="https://res.cloudinary.com/ddlo3v9hx/image/upload/v1728371038/Group_238003_jb1wlb.png" alt="bubble-chat" className='w-3/4' />
            </div>
        </div>
       </div>
    );
};

export default Maskot;
