import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { wisataDetail } from "../../../api/userApi/Wisata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WisataDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        const getData = async () => {
            console.log("ID yang dikirim ke API:", id);
            try {
                const response = await wisataDetail(id);
                console.log("Response dari API:", response);
                setData(response.place || response);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                console.log(err);
                setLoading(false);
            }
        };

        getData();
    }, [id]);

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
                        <div className="min-h-screen pt-28 flex justify-center items-center bg-cust-softblue bg-[url('images/Landing/LandingSection/bgPattern.png')]">
                            Loading...
                        </div>
                    </>
                ) : (
                    <>
                        <div id="description" className='lg:px-32 px-10 bg-cust-softblue pt-28 bg-[url("images/Landing/LandingSection/bgPattern.png")]'>
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
                            <h1 className="font-bold lg:text-2xl text-sm">Jam Buka</h1>
                            <p className="text-cust-gray text-xs lg:text-xl">{data.openingHours}</p>
                        </div>
                        <div className="gap-4 flex flex-col">
                            <h1 className="font-bold lg:text-2xl text-sm">Jam Tutup</h1>
                            <p className="text-cust-gray text-xs lg:text-xl">{data.closingHours}</p>
                        </div>
                    </div>
                    <div className="gap-4 flex flex-col">
                        <h1 className="font-bold lg:text-2xl text-sm">Tiket Masuk</h1>
                        <p className="text-cust-gray text-xs lg:text-xl">{data.entryPrice}</p>
                    </div>
                </div>
            </div>

            <div id="ulasan" className=' bg-cust-blue pt-16 bg-[url("images/Landing/LandingSection/bgPattern.png")]'>
                <div className="text-white">
                    <h1 className="font-bold text-base lg:text-3xl lg:px-32 px-10">Ulasan</h1>
                    <h2 className="text-sm lg:text-2xl mt-4 lg:mt-8 lg:px-32 px-10">Terbaru :</h2>

                    <div className="lg:px-32 px-10">
                        <div className="border mt-5 gap-3 lg:gap-6 flex flex-col lg:mt-9 bg-cust-softblue py-3 pl-4 lg:py-7 pr-9 lg:pl-8 lg:pr-16 rounded-xl lg:rounded-2xl">
                            <div className="flex gap-3 items-center">
                                <img id="profile" src="/images/Wisata/ProfileUlasan.webp" alt="image" className="w-9 h-9 lg:w-16 lg:h-16" />
                                <ul className="flex flex-col">
                                    <li id="name" className="font-bold lg:text-xl text-xs text-black">{data.reviews[0].name}</li>
                                    <li id="date" className="text-[8px] lg:text-base text-cust-gray">{data.reviews[0].date}</li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h1 id="title" className="font-bold text-cust-darkblue text-[10px] lg:text-xl">{data.reviews[0].title}</h1>
                                <p id="description" className="text-cust-gray text-[10px] lg:text-xl">{data.reviews[0].description}</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-sm lg:text-2xl mt-10 lg:px-32 px-10">Lainnya :</h2>
                    <div className="mt-6 pb-14 lg:pb-32 lg:pl-32 pl-10">
                        {/* <div>
                            {data.reviews.slice(1, 6).map((review, index) => (
                                <div className="">
                                    <div key={index} className="border bg-cust-softblue lg:rounded-2xl rounded-xl flex flex-col p-3 lg:p-6 lg:h-64 h-32 ">
                                        <div className="flex gap-3 items-center">
                                            <img id="profile" src="/images/Wisata/ProfileUlasan.webp" alt="image" className="w-7 h-7 lg:w-14 lg:h-14" />
                                            <ul className="flex flex-col gap-1">
                                                <li id="name" className="font-bold lg:text-xl text-xs text-black ml-1">{review.name}</li>
                                                <li className="flex justify-between">
                                                    <p className="text-[8px] lg:text-base">⭐⭐⭐⭐⭐</p>
                                                    <p id="date" className="text-[8px] lg:text-base text-cust-gray">{review.date}</p>
                                                </li>
                                            </ul>
                                        </div>

                                        <p id="description" className="text-cust-gray text-[10px] lg:text-xl mt-3 lg:mt-6">{review.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div> */}
                    </div>
                </div>
            </div>

            <div id="map" className="lg:px-32 px-10 bg-cust-softblue pt-10 lg:pt-29 pb-10 flex flex-col ">
                <div className='flex justify-center lg:justify-start'>
                    <img src="/images/Wisata/MapTitle.webp" alt="image" className="lg:w-[413px] lg:h-[97px] w-[234px] h-[55px] " />
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-end justify-center pt-8 lg:pt-14">
                    <iframe src={data.mapURL} frameborder="0" className="lg:rounded-2xl rounded-xl xl:w-[640px] lg:w-[500px] w-[332px] h-[250px] lg:h-[400px] xl:h-[492px]"></iframe>
                    <img src="/images/Wisata/MapHero.webp" alt="image" className="hidden lg:block w-[400px] xl:w-[520px]" />
                    <img src="/images/Wisata/MapHeroHP.webp" alt="image" className="lg:hidden w-72 pt-16" />
                </div>
            </div>
                    </>
                )}
            </div >
        </section>
    );
};
export default WisataDetail;