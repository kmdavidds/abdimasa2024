import React, { useState } from 'react';
import TestiCard from '../../../../components/UserComp/Home/TestiCard';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const KataMereka = () => {
    const cards = [
        {
            image: 'https://via.placeholder.com/150',
            quote: 'Website ini sangat membantu saya dalam merencanakan liburan, terutama ke daerah Desa Toyomarto. Infonya lengkap sehingga saya bisa mempersiapkan rute dan budget untuk liburan saya dan keluarga, good jobb👍🏼👍🏼',
            name: 'Sandy Kristian W.',
            occupation: 'Wisatawan',
        },
        {
            image: 'https://via.placeholder.com/150',
            quote: 'Untuk saya sebagai penikmat seni, sangat takjub dengan budaya lokal yang masih terjaga kental di desa ini. Di website ini juga ada info mengenai kalender kegiatan desa. Dengan begitu saya dapat merencanakan perjalanan saya.',
            name: 'Firza Aurellia',
            occupation: 'Wisatawan',
        },
        {
            image: 'https://via.placeholder.com/150',
            quote: 'Website Desa Wisata Toyomarto memudahkan saya menemukan informasi tentang wisata yang ada disana. Mulai dari rekomendasi wisata populer, alamat, jam buka, jam tutup dan review pengunjung.👍🏼👍🏼',
            name: 'Maxwell Salvador',
            occupation: 'Wisatawan',
        },
        {
            image: 'https://via.placeholder.com/150',
            quote: 'Website ini sangat membantu saya dalam merencanakan liburan, terutama ke daerah Desa Toyomarto. Infonya lengkap sehingga saya bisa mempersiapkan rute dan budget untuk liburan saya dan keluarga, good jobb👍🏼👍🏼',
            name: 'Sandy Kristian W.',
            occupation: 'Wisatawan',
        },
        {
            image: 'https://via.placeholder.com/150',
            quote: 'Untuk saya sebagai penikmat seni, sangat takjub dengan budaya lokal yang masih terjaga kental di desa ini. Di website ini juga ada info mengenai kalender kegiatan desa. Dengan begitu saya dapat merencanakan perjalanan saya.',
            name: 'Firza Aurellia',
            occupation: 'Wisatawan',
        },
        {
            image: 'https://via.placeholder.com/150',
            quote: 'Website Desa Wisata Toyomarto memudahkan saya menemukan informasi tentang wisata yang ada disana. Mulai dari rekomendasi wisata populer, alamat, jam buka, jam tutup dan review pengunjung.👍🏼👍🏼',
            name: 'Maxwell Salvador',
            occupation: 'Wisatawan',
        },
        {
            image: 'https://via.placeholder.com/150',
            quote: 'Website ini sangat membantu saya dalam merencanakan liburan, terutama ke daerah Desa Toyomarto. Infonya lengkap sehingga saya bisa mempersiapkan rute dan budget untuk liburan saya dan keluarga, good jobb👍🏼👍🏼',
            name: 'Sandy Kristian W.',
            occupation: 'Wisatawan',
        },
        {
            image: 'https://via.placeholder.com/150',
            quote: 'Untuk saya sebagai penikmat seni, sangat takjub dengan budaya lokal yang masih terjaga kental di desa ini. Di website ini juga ada info mengenai kalender kegiatan desa. Dengan begitu saya dapat merencanakan perjalanan saya.',
            name: 'Firza Aurellia',
            occupation: 'Wisatawan',
        },
        {
            image: 'https://via.placeholder.com/150',
            quote: 'Website Desa Wisata Toyomarto memudahkan saya menemukan informasi tentang wisata yang ada disana. Mulai dari rekomendasi wisata populer, alamat, jam buka, jam tutup dan review pengunjung.👍🏼👍🏼',
            name: 'Maxwell Salvador',
            occupation: 'Wisatawan',
        },
    ];

    const cardsPerSlide = 3;
    const totalSlides = Math.ceil(cards.length / cardsPerSlide);
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index) => {
        if (index < 0 || index >= totalSlides) return;
        setCurrentIndex(index);
    };

    const goToNextSlide = () => {
        if (currentIndex === totalSlides - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const goToPrevSlide = () => {
        if (currentIndex === 0) return;
        setCurrentIndex(currentIndex - 1);
    };

    return (
        <div className="bg-cust-softblue w-full flex items-center font-poppins justify-center py-32">
            <div className="flex flex-col items-center gap-16 container w-full min-h-screen">
                {/* title */}
                <div className="font-bold text-cust-blue">
                    <img src="/images/Landing/KataMerekaSection/title.svg" alt="title" className="select-none" />
                </div>
                {/* carousel */}
                <div className="w-full flex flex-col gap-16 mx-auto relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                            <div
                                key={slideIndex}
                                className="w-full flex justify-center space-x-16"
                                style={{ minWidth: '100%' }}
                            >
                                {cards
                                    .slice(slideIndex * cardsPerSlide, slideIndex * cardsPerSlide + cardsPerSlide)
                                    .map((card, index) => (
                                        <TestiCard
                                            key={index}
                                            image={card.image}
                                            quote={card.quote}
                                            name={card.name}
                                            occupation={card.occupation}
                                        />
                                    ))}
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center items-center mt-4 space-x-10">
                        <button
                            onClick={goToPrevSlide}
                            className={`h-16 w-16 text-white flex justify-center items-center rounded-full text-3xl bg-cust-blue ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={currentIndex === 0}
                        >
                            <FaChevronLeft />
                        </button>
                        <div className='flex justify-center space-x-5'>
                            {Array.from({ length: totalSlides }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`h-4 w-4 rounded-full bg-cust-blue ${index === currentIndex ? 'opacity-100' : 'opacity-30'}`}
                                ></button>
                            ))}
                        </div>
                        <button
                            onClick={goToNextSlide}
                            className="h-16 w-16 text-white flex justify-center items-center rounded-full text-3xl bg-cust-blue"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KataMereka;
