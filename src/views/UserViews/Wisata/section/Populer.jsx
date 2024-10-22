import React from 'react';
import WisataUMKMCard from '../../../../components/UserComp/Home/WisataUMKM/WisataUMKMCard';

const wisataData = [
    {
        type: 'wisata',
        image: 'https://res.cloudinary.com/ddlo3v9hx/image/upload/v1728703695/image_1944_hl6ncj.png',
        title: 'Bukit Kuneer',
        location: 'Kebun Teh Wonosari, Toyomarto',
    },
    {
        type: 'wisata',
        image: 'https://res.cloudinary.com/ddlo3v9hx/image/upload/v1728703695/image_1945_xwblq8.png',
        title: 'Stupa Sumberawan',
        location: 'Dusun Sumberawan, Toyomarto',
    },
    {
        type: 'wisata',
        image: 'https://res.cloudinary.com/ddlo3v9hx/image/upload/v1728703695/IMG_2073_1_1_vmji9r.png',
        title: 'Pentungansari',
        location: 'Bodean Krajan, Toyomarto',
    },
    {
        type: 'wisata',
        image: 'https://res.cloudinary.com/ddlo3v9hx/image/upload/v1728703695/image_1945_xwblq8.png',
        title: 'Stupa Sumberawan',
        location: 'Dusun Sumberawan, Toyomarto',
    },
    {
        type: 'wisata',
        image: 'https://res.cloudinary.com/ddlo3v9hx/image/upload/v1728703695/IMG_2073_1_1_vmji9r.png',
        title: 'Pentungansari',
        location: 'Bodean Krajan, Toyomarto',
    },
    {
        type: 'wisata',
        image: 'https://res.cloudinary.com/ddlo3v9hx/image/upload/v1728703695/image_1944_hl6ncj.png',
        title: 'Bukit Kuneer',
        location: 'Kebun Teh Wonosari, Toyomarto',
    }
];

const Populer = () => {
    return (
        <section className="font-poppins bg-cust-softblue bg-cover bg-[url('images/Landing/WisataUMKMSection/bgPattern.png')]">
            <div className='flex flex-col lg:pt-52 pt-32 md:pb-36 pb-9 px-5 lg:px-0'>
                <div className='flex justify-center lg:mb-16 mb-9 md:lg-12'>
                    <img src="https://res.cloudinary.com/ddlo3v9hx/image/upload/v1728371039/Group_238040_lihsi5.png" alt="" className='lg:w-[473px] lg:h-[97px] w-[234px] h-[48px]' />
                </div>
                <div className='w-full flex justify-center relative items'>
                    <div className='lg:w-full lg:h-full rounded-lg overflow-hidden'>
                        <div className="w-full flex flex-wrap items-center justify-center md:gap-12 gap-4">
                            {wisataData.slice(0, 6).map((card, index) => (

                                <WisataUMKMCard
                                    type={card.type}
                                    image={card.image}
                                    title={card.title}
                                    location={card.location}
                                />

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Populer;
