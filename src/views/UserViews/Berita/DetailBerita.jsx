import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { fetchNewsById } from '../../../api/userApi/Berita';

const DetailBerita = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const beritaDetail = await fetchNewsById(id);
                setData(beritaDetail);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        getData();
    }, [id]);

    if (error) return <div>Error: {error}</div>;

    return (
        <div className="bg-cust-softblue bg-cover bg-[url('/images/Landing/WisataUMKMSection/bgPattern.png')] w-full flex-col items-center justify-center py-28">
            <div className="text-cust-blue font-bold flex items-center text-xl mt-10 ml-10 cursor-pointer"
                onClick={() => window.history.back()}
            >
                <svg
                    className="w-6 h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Semua Berita
            </div>

            {loading ? (
                <div className='w-full flex items-center justify-center'>Loading...</div>
            ) : (
                <div>
                    <div className="relative w-full flex justify-center mt-10">
                        <img
                            src={data.image1}
                            alt={data.title}
                            className="rounded-lg w-4/5 xl:h-[60vh] md:h-[40vh] h-[30vh]"
                        />
                        <div className="absolute bottom-0 p-3 md:p-4 flex flex-col justify-end h-full bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent w-4/5 text-white rounded-lg">
                            <div className="text-[36px] font-bold w-full text-justify items-center">
                                {data.title}
                            </div>
                        </div>
                    </div>

                    <div className="text-cust-blue font-bold text-md mt-4 mx-auto w-3/4 text-justify items-center">
                        Diunggah pada {new Date(data.createdAt).toLocaleDateString('id-ID', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </div>

                    <div className="text-black font-regular text-md mt-4 mx-auto w-3/4 text-justify items-center">
                        {data.description}
                    </div>
                </div>
            )}


        </div>
    );
};

export default DetailBerita;
