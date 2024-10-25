import React, { useState, useEffect } from 'react';
import { WisataLainnya } from "../../../../components/UserComp/Wisata/WisataLainnya";
import { getWisata } from '../../../../api/userApi/Wisata';

const Lainnya = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const places = await getWisata();
                setData(places); 
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (error) return <div>Error: {error}</div>;


    return (
        <section className="bg-cust-blue bg-cover bg-[url('/images/Landing/WisataUMKMSection/bgPattern.png')] font-poppins py-24">
            <div>
                <div className='flex justify-center lg:mb-16 mb-9 md:lg-12'>
                    <img src="https://res.cloudinary.com/ddlo3v9hx/image/upload/v1728371038/wisata_lain_oayyb0.png" alt="" className='lg:w-[473px] lg:h-[97px] w-[234px] h-[48px]' />
                </div>
                <div className='lg:px-32 px-10'>
                    {loading ? (<><div className='min-h-screen'>Loading...</div></>) : (
                        data.map((place) => (
                            <WisataLainnya
                                key={place.id}
                                id={place.id}
                                rating={place.rating}
                                image={place.images[0]}
                                title={place.name}
                                desc={place.description}
                            />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Lainnya;