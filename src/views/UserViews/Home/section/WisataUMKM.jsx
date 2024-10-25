import React, { useState, useEffect } from 'react'
import WisataUMKMCard from '../../../../components/UserComp/Home/WisataUMKM/WisataUMKMCard'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import iconAir from '/public/images/Landing/WisataUMKMSection/iconAir.svg';
import seahorse from '/public/images/Landing/WisataUMKMSection/seahorse.svg';
import { getWisata } from '../../../../api/userApi/Wisata';
import { getUmkm } from '../../../../api/userApi/Umkm';

const WisataUMKM = () => {
    const [activeTab, setActiveTab] = useState('wisata');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [currentIndex, setCurrentIndex] = useState(0)
    const [wisataData, setWisataData] = useState([]);
    const [umkmData, setUmkmData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setCurrentIndex(0);
    }, [activeTab]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            if (activeTab === 'wisata') {
                const data = await getWisata();
                setWisataData(data);
            } else if (activeTab === 'umkm') {
                const data = await getUmkm();
                setUmkmData(data);
            }
            setIsLoading(false);
        };

        fetchData();
    }, [activeTab]);

    const cardsPerSlide = isMobile ? 4 : 3;
    const data = activeTab === 'wisata' ? wisataData : umkmData;
    const totalSlides = Math.ceil(data.length / cardsPerSlide);

    const goToSlide = (index) => {
        if (index < 0 || index >= totalSlides) return;
        setCurrentIndex(index);
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const goToPrevSlide = () => {
        if (currentIndex === 0) return;
        setCurrentIndex(currentIndex - 1);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        //  images/Landing/LandingSection/bgPattern.png
        <div className="bg-cust-blue bg-cover bg-[url('/images/Profile/SambutanSection/bgPattern.webp')] w-full flex items-center font-poppins justify-center py-16 md:py-28">
            <div className='container flex flex-col items-center w-full min-h-full space-y-9 md:space-y-20 relative max-w-[85%]'>
                <div className='w-full flex justify-end'>
                    {/* Tabs */}
                    <div className="select-none flex w-max h-max rounded-e-full bg-cust-softblue rounded-full bg-opacity-25">
                        <button
                            onClick={() => setActiveTab('wisata')}
                            className={`px-8 py-3 text-sm md:text-2xl rounded-full ${activeTab === 'wisata'
                                ? 'bg-cust-softblue text-cust-darkblue font-bold'
                                : 'text-white'
                                }`}
                        >
                            Wisata
                        </button>
                        <button
                            onClick={() => setActiveTab('umkm')}
                            className={`px-8 py-3 text-sm md:text-2xl rounded-full ${activeTab === 'umkm'
                                ? 'bg-cust-softblue text-cust-darkblue font-bold'
                                : 'text-white'
                                }`}
                        >
                            UMKM
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div div className='w-full h-full flex flex-col gap-16 mx-auto relative overflow-hidden'>
                    {/* carousel */}
                    {isLoading ? (
                        <div className='h-[415px] w-full'>
                            <div className='flex h-full flex-col items-center justify-center'>
                                <h3 className='text-3xl'>Loading...</h3>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div
                                className="flex transition-transform duration-500"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                    <div
                                        key={slideIndex}
                                        className={`w-full ${isMobile ? 'grid grid-cols-2 gap-4 place-items-center' : 'flex justify-between space-x-16'}`}
                                        style={{ minWidth: '100%' }}
                                    >
                                        {data
                                            .slice(slideIndex * cardsPerSlide, slideIndex * cardsPerSlide + cardsPerSlide)
                                            .map((card, index) => (
                                                    <WisataUMKMCard
                                                        key={index}
                                                        id={card.id}
                                                        type={activeTab}
                                                        image={card.images[0]}
                                                        title={card.name}
                                                        location={card.location}
                                                        name={card.name}
                                                        priceRange={card.priceRange}
                                                        waLink={card.contact}
                                                        className="sm:h-[416px] h-[175px]"
                                                    />
                                            ))}
                                    </div>
                                ))}
                            </div>

                        </>
                    )}

                    <div className="flex justify-center mt-4 items-center sm:mt-4 space-x-4 sm:space-x-10">
                        <button
                            onClick={goToPrevSlide}
                            className={`h-8 sm:h-16 w-8 sm:w-16 text-cust-blue flex justify-center items-center rounded-full text-sm sm:text-3xl bg-cust-softblue ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={currentIndex === 0}
                        >
                            <FaChevronLeft />
                        </button>
                        <div className='flex justify-center space-x-5'>
                            {Array.from({ length: totalSlides }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`h-2 sm:h-4 w-2 sm:w-4 rounded-full bg-cust-softblue ${index === currentIndex ? 'opacity-100' : 'opacity-20'}`}
                                ></button>
                            ))}
                        </div>
                        <button
                            onClick={goToNextSlide}
                            className="h-8 sm:h-16 w-8 sm:w-16 text-cust-blue flex justify-center items-center rounded-full text-sm sm:text-3xl bg-cust-softblue"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
                <img src={iconAir} alt="" className='absolute top-10 -left-10 hidden md:block' />
                <img src={seahorse} alt="" className='absolute bottom-40 -right-10 hidden md:block' />


            </div>
        </div >
    )
}

export default WisataUMKM