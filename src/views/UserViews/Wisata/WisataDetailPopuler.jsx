// src/views/UserViews/Wisata/WisataDetailPopuler.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import wisataData from '../../../constants/dataDummy'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WisataDetailPopuler = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const selectedData = wisataData.find((item) => item.id === parseInt(id));
        if (selectedData) {
            setData(selectedData);
        }
    }, [id]);

    if (!data) return <p>Data tidak ditemukan.</p>;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
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
            <div className="text-white">
                <h1 className="font-bold text-base lg:text-3xl">Ulasan</h1>
                <h2 className="text-sm lg:text-2xl">Terbaru : </h2>
                <div>
                    <div id="ulasan card">

                    </div>
                </div>
                <h2 className="text-sm lg:text-2xl">Lainnya : </h2>
                <div>

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

export default WisataDetailPopuler;
