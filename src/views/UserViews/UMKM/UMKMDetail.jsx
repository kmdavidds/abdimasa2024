import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { UmkmDetail } from "../../../api/userApi/Umkm";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const UMKMDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);



    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2.5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1.3,
        },
    };

    useEffect(() => {
        const getData = async () => {
            console.log("ID yang dikirim ke API:", id);
            try {
                const response = await UmkmDetail(id);
                console.log("Response dari API:", response);
                setData(response.business);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        getData();
    }, [id]);

    const validatedRating = Math.min(5, Math.max(1, Math.round((data?.rating || 0) / 10)));
    const filledStars = validatedRating;
    const emptyStars = 5 - filledStars;

    if (error) return <p>{error}</p>;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        arrows: false,
        customPaging: (i) => (
            <div
                style={i === currentSlide ? activeDotStyle : dotStyle}
                className="mt-9 hidden lg:block"
            ></div>
        ),
        dotsClass: "slick-dots custom-dots",
        beforeChange: (current, next) => setCurrentSlide(next),
    };

    const dotStyle = {
        width: '14px',
        height: '14px',
        borderRadius: '100%',
        backgroundColor: '#3E9ADD',
        opacity: '30%',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
    };

    const activeDotStyle = {
        ...dotStyle,
        backgroundColor: '#3E9ADD',
        opacity: '100%',
    };

    return (
        <section className="font-poppins">
            <div>
                {loading ? (
                    <>
                        <div className="min-h-screen pt-28 flex justify-center items-center bg-cust-softblue bg-[url('/images/Landing/LandingSection/bgPattern.png')]">
                            Loading...
                        </div>
                    </>) : (
                    <>
                        <div id="description" className='lg:px-32 px-10 bg-cust-softblue pt-28 bg-[url("/images/Landing/LandingSection/bgPattern.png")]'>
                            <div className="relative">
                                <Slider ref={sliderRef} {...settings} className="rounded-xl">
                                    <div>
                                        <img src={data.imageURL1} alt={data.name} className="w-full h-44 md:h-60 lg:h-80 object-cover rounded-xl" />
                                    </div>
                                    <div>
                                        <img src={data.imageURL2} alt={data.name} className="w-full h-44 md:h-60 lg:h-80 object-cover rounded-xl" />
                                    </div>
                                    <div>
                                        <img src={data.imageURL3} alt={data.name} className="w-full h-44 md:h-60 lg:h-80 object-cover rounded-xl" />
                                    </div>
                                </Slider>
                                <div id="title" className="absolute bottom-4 lg:bottom-9 left-4 lg:left-10 text-white">
                                    <h1 className="lg:text-4xl text-base font-bold">{data.name}</h1>
                                    <p className="lg:text-xl text-xs font-light">{data.location}</p>
                                </div>

                                <div className="absolute bottom-4 lg:bottom-9 right-4 z-10 flex gap-2">
                                    <button
                                        className="bg-[#ECF5FF] bg-opacity-40 rounded-full text-white px-2 lg:px-4 lg:py-2 text-lg lg:text-3xl"
                                        onClick={() => sliderRef.current.slickPrev()}
                                    >
                                        &lt;
                                    </button>
                                    <button
                                        className="bg-[#ECF5FF] bg-opacity-40 rounded-full text-white px-2 lg:px-4 lg:py-2 text-lg lg:text-3xl"
                                        onClick={() => sliderRef.current.slickNext()}
                                    >
                                        &gt;
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col gap-8 pb-10 lg:pt-20 pt-7">
                                <div className="gap-4 flex flex-col">
                                    <h1 className="font-bold lg:text-2xl text-sm">Deskripsi</h1>
                                    <p className="text-justify text-cust-gray text-xs lg:text-xl">{data.description}</p>
                                </div>
                                <div className="gap-4 flex flex-col">
                                    <h1 className="font-bold lg:text-2xl text-sm">Alamat</h1>
                                    <p className="text-cust-gray text-xs lg:text-xl">{data.address}</p>
                                </div>
                                <div className="flex gap-36">
                                    <div className="gap-4 flex flex-col">
                                        <h1 className="font-bold lg:text-2xl text-sm">Harga</h1>
                                        <p className="text-cust-gray text-xs lg:text-xl">{data.priceRange}</p>
                                    </div>
                                </div>
                                <div className="gap-4 flex flex-col">
                                    <h1 className="font-bold lg:text-2xl text-sm">Contact Person</h1>
                                    <p className="text-cust-gray text-xs lg:text-xl">{data.contact}</p>
                                </div>
                            </div>
                        </div>

                        {data.reviews.length > 0 && (
                            <div
                                id="ulasan"
                                className='bg-cust-blue pt-16 bg-[url("/images/Landing/LandingSection/bgPattern.png")]'
                            >
                                <div className="text-white">
                                    <h1 className="font-bold text-base lg:text-3xl lg:px-32 px-10">Ulasan</h1>
                                    <h2 className="text-sm lg:text-2xl mt-4 lg:mt-8 lg:px-32 px-10">Terbaru :</h2>


                                    <div className="lg:px-32 px-10">
                                        <div className="border mt-5 gap-3 lg:gap-6 flex flex-col lg:mt-9 bg-cust-softblue py-3 pl-4 lg:py-7 pr-9 lg:pl-8 lg:pr-16 rounded-xl lg:rounded-2xl">
                                            <div className="flex gap-3 items-center">
                                                <img
                                                    id="profile"
                                                    src="/images/Wisata/ProfileUlasan.webp"
                                                    alt="image"
                                                    className="w-9 h-9 lg:w-16 lg:h-16"
                                                />
                                                <ul className="flex flex-col">
                                                    <li
                                                        id="name"
                                                        className="font-bold lg:text-xl text-xs text-black"
                                                    >
                                                        <div className="text-white">
                                                            <h1 className="font-bold text-base lg:text-3xl lg:px-32 px-10">Ulasan</h1>
                                                            <h2 className="text-sm lg:text-2xl mt-4 lg:mt-8 lg:px-32 px-10">Terbaru :</h2>


                                                            <div className="lg:px-32 px-10 flex items-center gap-20 justify-center">
                                                                <div className="border mt-5 gap-3 lg:gap-6 flex flex-col lg:mt-9 bg-cust-softblue py-3 pl-4 lg:py-7 pr-9 lg:pl-8 lg:pr-16 rounded-xl lg:rounded-2xl">
                                                                    <div className="flex gap-3 items-center">
                                                                        <img
                                                                            id="profile"
                                                                            src="/images/Wisata/ProfileUlasan.webp"
                                                                            alt="image"
                                                                            className="w-9 h-9 lg:w-16 lg:h-16"
                                                                        />
                                                                        <ul className="flex flex-col">
                                                                            <li
                                                                                id="name"
                                                                                className="font-bold lg:text-xl text-xs text-black"
                                                                            >
                                                                                {data.reviews[0].name}
                                                                            </li>
                                                                            <li
                                                                                id="date"
                                                                                className="text-[8px] lg:text-base text-cust-gray"
                                                                            >
                                                                                {data.reviews[0].date}
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="flex flex-col gap-1">
                                                                        <h1
                                                                            id="title"
                                                                            className="font-bold text-cust-darkblue text-[10px] lg:text-xl"
                                                                        >
                                                                            {data.reviews[0].title}
                                                                        </h1>
                                                                        <p
                                                                            id="description"
                                                                            className="text-cust-gray text-[10px] lg:text-xl"
                                                                        >
                                                                            {data.reviews[0].description}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div id="rating" className="hidden lg:flex flex-col gap-7">
                                                                    <div className="text-4xl font-bold flex items-center justify-between">
                                                                        <div>{data.rating / 10}</div>
                                                                        <div className="flex text-yellow-400 text-lg">
                                                                            {Array(filledStars)
                                                                                .fill(0)
                                                                                .map((_, index) => (
                                                                                    <span key={index}>⭐</span>
                                                                                ))}
                                                                            {Array(emptyStars)
                                                                                .fill(0)
                                                                                .map((_, index) => (
                                                                                    <span key={index + filledStars}>☆</span>
                                                                                ))}
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <img src="/images/Wisata/RatingBar.webp" alt="images" />
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            {data.reviews.length > 1 && (
                                                                <>
                                                                    <h2 className="text-sm lg:text-2xl mt-10 lg:px-32 px-10">Lainnya :</h2>
                                                                    <div className="mt-6 pb-14 lg:pb-32 lg:pl-32 pl-10">
                                                                        <Carousel
                                                                            responsive={responsive}
                                                                            infinite={true}
                                                                            rtl={false}
                                                                            partialVisible={true}
                                                                            itemClass="px-2"
                                                                            arrows={false}
                                                                            autoPlay={true}
                                                                            autoPlaySpeed={2000}
                                                                        >
                                                                            {data.reviews.slice(1, 6).map((review, index) => (
                                                                                <div
                                                                                    key={index}
                                                                                    className="border bg-cust-softblue lg:rounded-2xl rounded-xl flex flex-col w-60 lg:w-full md:w-full p-3 lg:p-6 lg:h-64 h-36"
                                                                                >
                                                                                    <div className="flex gap-3 items-center">
                                                                                        <img
                                                                                            id="profile"
                                                                                            src="/images/Wisata/ProfileUlasan.webp"
                                                                                            alt="image"
                                                                                            className="w-7 h-7 lg:w-14 lg:h-14"
                                                                                        />
                                                                                        <ul className="flex flex-col gap-1">
                                                                                            <li
                                                                                                id="name"
                                                                                                className="font-bold lg:text-xl text-xs text-black ml-1"
                                                                                            >
                                                                                                {review.name}
                                                                                            </li>
                                                                                            <li className="flex justify-between">
                                                                                                <div className="flex text-yellow-400 text-[8px] lg:text-base">
                                                                                                    {Array(Math.min(5, Math.max(1, Math.round(review.score / 10))))
                                                                                                        .fill(0)
                                                                                                        .map((_, index) => (
                                                                                                            <span key={index}>⭐</span>
                                                                                                        ))}
                                                                                                    {Array(5 - Math.min(5, Math.max(1, Math.round(review.score / 10))))
                                                                                                        .fill(0)
                                                                                                        .map((_, index) => (
                                                                                                            <span key={index}>☆</span>
                                                                                                        ))}
                                                                                                </div>
                                                                                                <p
                                                                                                    id="date"
                                                                                                    className="text-[8px] lg:text-base text-cust-gray"
                                                                                                >
                                                                                                    {review.date}
                                                                                                </p>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>

                                                                                    <p
                                                                                        id="description"
                                                                                        className="text-cust-gray text-[10px] lg:text-xl mt-3 lg:mt-6"
                                                                                    >
                                                                                        {review.description}
                                                                                    </p>
                                                                                </div>
                                                                            ))}
                                                                        </Carousel>
                                                                    </div>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                        )}


                                                    <div
                                                        id="maskot"
                                                        className="lg:px-32 md:px-24 lg:pb-24 pb-14 px-10 bg-cust-softblue lg:pt-40 pt-20"
                                                    >
                                                        <img
                                                            src="/images/UMKM/HeroDetailUmkm.webp"
                                                            alt="Hero"
                                                            className="hidden md:block"
                                                        />
                                                        <img
                                                            src="/images/UMKM/HeroDetailUmkmHP.webp"
                                                            alt="Hero"
                                                            className="md:hidden"
                                                        />
                                                    </div>
                                                </>
                )}
                                            </div>
                                        </section >
                                        )
}

                                        export default UMKMDetail