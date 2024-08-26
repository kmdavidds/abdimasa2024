import React, { useState, useEffect } from 'react'
import WisataUMKMCard from '../../../../components/UserComp/Home/WisataUMKMCard'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import iconAir from '/public/images/Landing/WisataUMKMSection/iconAir.svg';
import seahorse from '/public/images/Landing/WisataUMKMSection/seahorse.svg';

const WisataUMKM = () => {
    const [activeTab, setActiveTab] = useState('wisata');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setCurrentIndex(0);
    }, [activeTab]);

    const wisataData = [
        {
            type: 'wisata',
            image: 'https://picsum.photos/360/415',
            title: 'Bukit Kuneer',
            location: 'Kebun Teh Wonosari, Toyomarto',
        },
        {
            type: 'wisata',
            image: 'https://picsum.photos/360/415',
            title: 'Stupa Sumberawan',
            location: 'Dusun Sumberawan, Toyomarto',
        },
        {
            type: 'wisata',
            image: 'https://picsum.photos/360/415',
            title: 'Pentungansari',
            location: 'Bodean Krajan, Toyomarto',
        },
        {
            type: 'wisata',
            image: 'https://via.placeholder.com/360x415',
            title: 'Bukit Kuneer',
            location: 'Kebun Teh Wonosari, Toyomarto',
        },
        {
            type: 'wisata',
            image: 'https://via.placeholder.com/360x415',
            title: 'Stupa Sumberawan',
            location: 'Dusun Sumberawan, Toyomarto',
        },
        {
            type: 'wisata',
            image: 'https://via.placeholder.com/360x415',
            title: 'Pentungansari',
            location: 'Bodean Krajan, Toyomarto',
        },
        {
            type: 'wisata',
            image: 'https://via.placeholder.com/360x415',
            title: 'Bukit Kuneer',
            location: 'Kebun Teh Wonosari, Toyomarto',
        },
        {
            type: 'wisata',
            image: 'https://via.placeholder.com/360x415',
            title: 'Stupa Sumberawan',
            location: 'Dusun Sumberawan, Toyomarto',
        },
        {
            type: 'wisata',
            image: 'https://via.placeholder.com/360x415',
            title: 'Pentungansari',
            location: 'Bodean Krajan, Toyomarto',
        },
    ];

    const umkmData = [
        {
            type: 'umkm',
            image: 'https://picsum.photos/360/415',
            name: 'UMKM Product 1',
            priceRange: 'Rp 50.000 - Rp 150.000',
            waLink: 'https://wa.me/1234567890',
        },
        {
            type: 'umkm',
            image: 'https://picsum.photos/360/415',
            name: 'UMKM Product 2',
            priceRange: 'Rp 100.000 - Rp 200.000',
            waLink: 'https://wa.me/1234567890',
        },
        {
            type: 'umkm',
            image: 'https://picsum.photos/360/415',
            name: 'UMKM Product 3',
            priceRange: 'Rp 75.000 - Rp 175.000',
            waLink: 'https://wa.me/1234567890',
        },
        {
            type: 'umkm',
            image: 'https://via.placeholder.com/360x415',
            name: 'UMKM Product 1',
            priceRange: 'Rp 50.000 - Rp 150.000',
            waLink: 'https://wa.me/1234567890',
        },
        {
            type: 'umkm',
            image: 'https://via.placeholder.com/360x415',
            name: 'UMKM Product 2',
            priceRange: 'Rp 100.000 - Rp 200.000',
            waLink: 'https://wa.me/1234567890',
        },
        {
            type: 'umkm',
            image: 'https://via.placeholder.com/360x415',
            name: 'UMKM Product 3',
            priceRange: 'Rp 75.000 - Rp 175.000',
            waLink: 'https://wa.me/1234567890',
        },
        {
            type: 'umkm',
            image: 'https://via.placeholder.com/360x415',
            name: 'UMKM Product 1',
            priceRange: 'Rp 50.000 - Rp 150.000',
            waLink: 'https://wa.me/1234567890',
        },
        {
            type: 'umkm',
            image: 'https://via.placeholder.com/360x415',
            name: 'UMKM Product 2',
            priceRange: 'Rp 100.000 - Rp 200.000',
            waLink: 'https://wa.me/1234567890',
        },
        {
            type: 'umkm',
            image: 'https://via.placeholder.com/360x415',
            name: 'UMKM Product 3',
            priceRange: 'Rp 75.000 - Rp 175.000',
            waLink: 'https://wa.me/1234567890',
        },
    ];

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
        <div className="bg-cust-blue bg-cover bg-[url('images/Landing/WisataUMKMSection/bgPattern.png')] w-full flex items-center font-poppins justify-center py-16 md:py-28">
            <div className='container w-full min-h-full space-y-9 md:space-y-20 relative px-6 md:px-0'>
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
                <div className="w-full h-full rounded-lg overflow-hidden py-10">
                    <div className='w-full h-full flex flex-col gap-16 mx-auto'>
                        {/* carousel */}
                        <div
                            className="flex transition-transform duration-500 relative"
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
                                                type={card.type}
                                                image={card.image}
                                                title={card.title}
                                                location={card.location}
                                                name={card.name}
                                                priceRange={card.priceRange}
                                                waLink={card.waLink}
                                            />
                                        ))}
                                </div>
                            ))}
                        </div>


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
                </div>
                <img src={iconAir} alt="" className='absolute top-10 -left-10 hidden md:block' />
                <img src={seahorse} alt="" className='absolute bottom-40 -right-10 hidden md:block' />


            </div>
        </div>
    )
}

export default WisataUMKM
