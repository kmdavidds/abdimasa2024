import React, { useEffect, useState } from 'react';
import { getDetail } from '../../../../api/userApi/JumlahPenduduk/index.js'

const JumlahPenduduk = () => {
    const [populationData, setPopulationData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPopulationData = async () => {
            try {
                const data = await getDetail();
                setPopulationData(data);
            } catch (err) {
                setError("Error fetching population data");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPopulationData();
    }, []);

    return (
        <section className='font-poppins'>
            <div className="bg-cust-softblue pt-10 lg:px-32 px-10 pb-36">
                <div className='flex justify-center mb-16'>
                    <img src="/images/Profile/JumlahPendudukSection/pendudukTitle.webp" alt="title" className='lg:w-[575px] lg:h-[97px] w-[280px] h-[48px]' />
                </div>

                <div>
                    {loading && <div>Sek Yo...</div>}
                    {error && <div>{error}</div>}
                    {!loading && !error && (
                        <div className='flex justify-center'>
                            {populationData.map((item) => (
                                <div key={item.id} className='border flex flex-col items-center'>
                                    <div className="text-cust-blue font-bold text-3xl">{item.value}</div>
                                    <div className="text-cust-gray text-lg">{item.slug}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default JumlahPenduduk;