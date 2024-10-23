import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { wisataDetail } from '../../../api/userApi/Wisata'; 

export const WisataLainnya = ({ image, title, desc, id }) => {  
    const [data, setData] = useState(null); 
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(null);  

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await wisataDetail(id);  
                setData(response);  
                setLoading(false);  
            } catch (err) {
                setError(err.message); 
                setLoading(false);
            }
        };
        
        getData(); 
    }, [id]);

    if (loading) return <p>Loading...</p>;  
    if (error) return <p>{error}</p>;    
    return (
       
        <div className='flex flex-col lg:flex-row bg-white rounded-3xl my-12 w-3/4 lg:w-full mx-auto shadow-lg'>
            <div className='basis-full lg:basis-1/4 flex justify-center items-center p-4 lg:p-10'>
                <img 
                    src={image} 
                    alt="" 
                    className='rounded-lg w-1/2 lg:w-full object-cover' 
                />
            </div>
            <div className='basis-full lg:basis-3/4 p-4 lg:p-8 flex flex-col'>
                <div className='text-[24px] lg:text-[36px] font-bold text-center lg:text-left'>
                    {title}
                </div>
                <div className='text-[18px] lg:text-[26px] text-cust-gray text-justify mt-2'>
                    {desc}
                </div>
                <div className='flex flex-col lg:flex-row mt-4 items-center lg:items-start'>
                    <div className='text-[20px] lg:text-[26px] mt-2'>
                        ⭐⭐⭐⭐⭐
                    </div>
                    <div className='ml-auto lg:ml-0 lg:mt-0 mt-4 text-white bg-cust-blue rounded-full px-[20px] md:mx-auto lg:mx-0 mx-auto lg:px-[30px] py-2'>
                    <Link to={`/wisata/${id}`}>
                        <button>Selengkapnya</button>
                        </Link> 
                    </div>
                </div>
            </div>
        </div>
        
    );
};
