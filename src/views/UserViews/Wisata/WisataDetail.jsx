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
            <div id="ulasan" className='lg:px-32 px-10 bg-cust-blue pt-16 bg-[url("images/Landing/LandingSection/bgPattern.png")]'>
                <div>
                    <h1>Ulasan</h1>
                    
                </div>
            </div>
            <div id="map">
                
            </div>
                    </>
                )}
            </div >
        </section>
    );
};
export default WisataDetail;