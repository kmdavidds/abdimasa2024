import React from 'react';
import WisataUMKMCard from '../../../../components/UserComp/Home/WisataUMKM/WisataUMKMCard';
import { Link } from 'react-router-dom';

const wisataData = [
    {
        type: 'wisata',
        image: 'https://res.cloudinary.com/ddlo3v9hx/image/upload/v1728703695/image_1944_hl6ncj.png',
        title: 'Bukit Kuneer',
        location: 'Kebun Teh Wonosari, Toyomarto',
        link: '/wisata/01919a59-df65-7d28-8189-588f467a77f8',
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
            <div className='flex flex-col lg:pt-48 pt-32 md:pb-36 pb-9 px-5 lg:px-0'>
                <div className='flex justify-center lg:mb-16 mb-9 md:lg-12'>
                    <img src="https://res.cloudinary.com/ddlo3v9hx/image/upload/v1728371039/Group_238040_lihsi5.png" alt="" className='lg:w-[473px] lg:h-[97px] w-[234px] h-[48px]' />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-12 w-full lg:px-28 justify-items-center">
                    {wisataData.slice(0, 6).map((card, index) => (
                        <Link to={card.link} key={index}>
                            <WisataUMKMCard
                                type={card.type}
                                image={card.image}
                                title={card.title}
                                location={card.location}
                                className="w-full"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Populer;
