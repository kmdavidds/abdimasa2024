import React from 'react'
import { FaAnglesDown } from "react-icons/fa6";

const Maskot = () => {
    return (
        <div  className='bg-cust-softblue w-full flex items-center font-poppins py-28'> 
        <div className='flex flex-row ml-44'>
            <div className='basis-1/3 flex justify-end'>
                <img src="https://res.cloudinary.com/dkncrhkfo/image/upload/v1724253142/image-removebg-preview_1_lzhtb4.png" alt="maskot" className='w-full'/>
            </div>
            <div className='basis-2/3 items-center'>
                <img src="https://res.cloudinary.com/dkncrhkfo/image/upload/v1724253139/Group_238003_fbxogh.png" alt="bubble-chat" className='w-3/4' />
            </div>
        </div>
       </div>
    );
};

export default Maskot;
