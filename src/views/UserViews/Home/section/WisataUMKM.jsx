import React, { useState, useEffect } from 'react'
import WisataUMKMCard from '../../../../components/UserComp/Home/WisataUMKMCard'


const WisataUMKM = () => {
    const [activeTab, setActiveTab] = useState('wisata');

    const wisataData = [
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

    const cardsPerSlide = 3;
    const data = activeTab === 'wisata' ? wisataData : umkmData;
    const totalSlides = Math.ceil(data.length / cardsPerSlide);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setCurrentIndex(0);
    }, [activeTab]);

    const goToSlide = (index) => {
        if (index < 0 || index >= totalSlides) return;
        setCurrentIndex(index);
    };

    return (
        <div className="bg-cust-blue bg-cover bg-[url('images/Landing/WisataUMKMSection/bgPattern.png')] w-full flex items-center font-poppins justify-center py-28">
            <div className='container w-full min-h-screen space-y-20 relative'>
                <div className='w-full flex justify-end'>
                    {/* Tabs */}
                    <div className="select-none flex w-max h-max rounded-e-full bg-cust-softblue rounded-full bg-opacity-25">
                        <button
                            onClick={() => setActiveTab('wisata')}
                            className={`px-8 py-3 text-2xl rounded-full ${activeTab === 'wisata'
                                ? 'bg-cust-softblue text-cust-darkblue font-bold'
                                : 'text-white'
                                }`}
                        >
                            Wisata
                        </button>
                        <button
                            onClick={() => setActiveTab('umkm')}
                            className={`px-8 py-3 text-2xl rounded-full ${activeTab === 'umkm'
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
                        <div
                            className="flex transition-transform duration-500 relative"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                <div
                                    key={slideIndex}
                                    className="w-full flex justify-between space-x-16"
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


                        <div className="flex justify-center mt-4 space-x-2">
                            {Array.from({ length: totalSlides }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`h-4 w-4 rounded-full bg-cust-softblue ${index === currentIndex ? 'opacity-100' : 'opacity-20'}`}
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>
                <img src="/public/images/Landing/WisataUMKMSection/iconAir.svg" alt="" className='absolute top-10 -left-10' />
                <img src="/public/images/Landing/WisataUMKMSection/seahorse.svg" alt="" className='absolute bottom-24 -right-10' />

            </div>
        </div>
    )
}

export default WisataUMKM
