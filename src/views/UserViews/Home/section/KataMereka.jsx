import React, { useState, useEffect } from 'react';
import TestiCard from '../../../../components/UserComp/Home/Testimoni/TestiCard';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { getRemarks } from '../../../../api/userApi/Ulasan';

const KataMereka = () => {
    const [cards, setCards] = useState([]);
    const [cardsPerSlide, setCardsPerSlide] = useState(3);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchRemarks = async () => {
            const remarksData = await getRemarks();
            setCards(remarksData);
        };

        fetchRemarks();
    }, []);

    const updateCardsPerSlide = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 1280) {
            setCardsPerSlide(2);
        } else {
            setCardsPerSlide(3);
        }
    };

    useEffect(() => {
        updateCardsPerSlide();
        window.addEventListener('resize', updateCardsPerSlide);
        return () => window.removeEventListener('resize', updateCardsPerSlide);
    }, []);

    const totalSlides = Math.ceil(cards.length / cardsPerSlide);

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
        <div className="bg-cust-softblue w-full flex items-center font-poppins justify-center py-20 sm:py-32">
            <div className="flex flex-col items-center gap-16 container w-full min-h-full sm:px-0 px-8 sm:max-w-[80%] max-w-[95%]">
                {/* title */}
                <div className="font-bold text-cust-blue">
                    <img src="/images/Landing/KataMerekaSection/title.svg" alt="title" className="select-none" />
                </div>
                {/* carousel */}
                <div className="w-full flex flex-col gap-8 xl:gap-16 mx-auto relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                            <div
                                key={slideIndex}
                                className="w-full flex justify-center sm:justify-around xl:justify-between  space-x-5 sm:space-x-8 xl:space-x-16"
                                style={{ minWidth: '100%' }}
                            >
                                {cards
                                    .slice(slideIndex * cardsPerSlide, slideIndex * cardsPerSlide + cardsPerSlide)
                                    .map((card, index) => (
                                        <TestiCard
                                            key={index}
                                            image={card.image}
                                            quote={card.description}
                                            name={card.name}
                                            occupation={card.occupation}
                                        />
                                    ))}
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center items-center sm:mt-4 space-x-4 sm:space-x-10">
                        <button
                            onClick={goToPrevSlide}
                            className={`h-8 sm:h-16 w-8 sm:w-16 text-white flex justify-center items-center rounded-full text-sm sm:text-3xl bg-cust-blue ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={currentIndex === 0}
                        >
                            <FaChevronLeft />
                        </button>
                        <div className='flex justify-center space-x-2 sm:space-x-5'>
                            {Array.from({ length: totalSlides }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`h-2 sm:h-4 w-2 sm:w-4 rounded-full bg-cust-blue ${index === currentIndex ? 'opacity-100' : 'opacity-30'}`}
                                ></button>
                            ))}
                        </div>
                        <button
                            onClick={goToNextSlide}
                            className="h-8 sm:h-16 w-8 sm:w-16 text-white flex justify-center items-center rounded-full text-sm sm:text-3xl bg-cust-blue"
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
