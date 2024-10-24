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
                            <Link to={`/wisata/${id}`}>
                                <button className='rounded-3xl lg:px-7 px-4 text-white bg-cust-darkblue lg:text-lg text-xs py-1 lg:py-2'>Selengkapnya</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
