import React, { useEffect, useState, useRef } from 'react';
import { getDetail } from '../../../../api/userApi/JumlahPenduduk/index.js';

const JumlahPenduduk = () => {
    const [populationData, setPopulationData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [counts, setCounts] = useState([]);
    const countSectionRef = useRef(null);
    const intervalRefs = useRef([]);

    useEffect(() => {
        const fetchPopulationData = async () => {
            try {
                const data = await getDetail();
                setPopulationData(data);
                setCounts(data.map(() => 0));
            } catch (err) {
                setError("Error fetching population data");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPopulationData();
    }, []);

    const startCounting = () => {
        intervalRefs.current.forEach(interval => clearInterval(interval));
        intervalRefs.current = [];

        const newIntervals = populationData.map((item, index) => {
            const increment = Math.ceil(item.value / 100);
            return setInterval(() => {
                setCounts(prevCounts => {
                    const newCounts = [...prevCounts];
                    if (newCounts[index] < item.value) {
                        newCounts[index] = Math.min(newCounts[index] + increment, item.value);
                    }
                    return newCounts;
                });
            }, 20);
        });

        intervalRefs.current = newIntervals;
    };

    const resetCounts = () => {
        setCounts(populationData.map(() => 0));
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                resetCounts();
                startCounting();
            }
        }, { threshold: 0.1 });

        if (countSectionRef.current) {
            observer.observe(countSectionRef.current);
        }

        return () => {
            if (countSectionRef.current) {
                observer.unobserve(countSectionRef.current);
            }
            intervalRefs.current.forEach(interval => clearInterval(interval));
        };
    }, [populationData]);

    return (
        <section className='font-poppins' ref={countSectionRef}>
            <div className="bg-cust-softblue pt-24 lg:px-32 px-10 pb-36">
                <div className='flex justify-center mb-16'>
                    <img src="/images/Profile/JumlahPendudukSection/pendudukTitle.webp" alt="title" className='lg:w-[575px] lg:h-[97px] w-[280px] h-[48px]' />
                </div>

                <div>
                    {loading && <div>LOADING...</div>}
                    {error && <div>{error}</div>}
                    {!loading && !error && (
                        <div className='flex justify-center lg:gap-16 gap-7'>
                            <div className='gap-7 px-7 py-4 xl:px-16 xl:py-9 flex flex-col items-center bg-gradient-to-t from-[#F2F8FF] via-[#E2EDF9] to-[#E2EDF9] border-cust-blue border border-opacity-30 rounded-2xl'>
                                <img src="/images/Profile/JumlahPendudukSection/laki-laki.webp" alt="people" />
                                <div className='flex flex-col items-center'>
                                    <div className="text-cust-blue font-bold lg:text-3xl text-sm">{counts[0]}</div>
                                    <div className="text-cust-gray lg:text-lg text-[7px] text-center">Jiwa Laki-laki</div>
                                </div>
                            </div>

                            <div className='gap-7 px-7 py-4 xl:px-16 xl:py-9 flex flex-col items-center bg-gradient-to-t from-[#F2F8FF] via-[#E2EDF9] to-[#E2EDF9] border-cust-blue border border-opacity-30 rounded-2xl'>
                                <img src="/images/Profile/JumlahPendudukSection/total.webp" alt="people" />
                                <div className='flex flex-col items-center'>
                                    <div className="text-cust-blue font-bold lg:text-3xl text-sm">{counts[1]}</div>
                                    <div className="text-cust-gray lg:text-lg text-[7px] text-center">Jiwa Total Penduduk</div>
                                </div>
                            </div>

                            <div className='gap-7 px-7 py-4 xl:px-16 xl:py-9 flex flex-col items-center bg-gradient-to-t from-[#F2F8FF] via-[#E2EDF9] to-[#E2EDF9] border-cust-blue border border-opacity-30 rounded-2xl'>
                                <img src="/images/Profile/JumlahPendudukSection/perempuan.webp" alt="people" />
                                <div className='flex flex-col items-center'>
                                    <div className="text-cust-blue font-bold lg:text-3xl text-sm">{counts[2]}</div>
                                    <div className="text-cust-gray lg:text-lg text-[7px] text-center">Jiwa Perempuan</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default JumlahPenduduk;
