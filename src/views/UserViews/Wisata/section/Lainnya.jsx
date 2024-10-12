import React, { useState, useEffect } from 'react';
import {WisataLainnya} from "../../../../components/UserComp/Wisata/WisataLainnya";
import { getWisata } from '../../../../api/userApi/Wisata';

const Lainnya = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const places = await getWisata();
                setData(places); // Simpan data dari API ke state `data`
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;


    return (
        <div  className="bg-cust-blue bg-cover bg-[url('images/Landing/WisataUMKMSection/bgPattern.png')] w-full flex items-center font-poppins justify-center py-4">
            <div className='relative container w-full container mx-auto'>
                <div className='flex justify-center items-center w-full my-8'>
                  <img src="https://res.cloudinary.com/ddlo3v9hx/image/upload/v1728371038/wisata_lain_oayyb0.png" alt="" className='lg:w-1/3 w-3/4'/>
                </div>
                {data.map((place) => (
                    <WisataLainnya
                        key={place.id} 
                        image={place.images[0]}
                        title={place.name}
                        desc={place.description}
                    />
                ))}
                
            </div>
        </div>
    );
};

export default Lainnya;
