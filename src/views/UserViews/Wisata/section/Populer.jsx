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
        <div className="bg-cust-softblue bg-cover bg-[url('images/Landing/WisataUMKMSection/bgPattern.png')] w-full flex-row items-center font-poppins justify-center lg:py-28 pt-36">
            <div className='lg:space-y-20 relative container w-full container mx-auto'>
            <div className='flex justify-center items-center w-full'>
                <img src="https://res.cloudinary.com/ddlo3v9hx/image/upload/v1728371039/Group_238040_lihsi5.png" alt="" className='lg:w-1/3 w-3/4'/>
            </div>
            <div className=' w-full min-h-screen flex justify-center relative items-center'>
                <div className="lg:w-full lg:h-full rounded-lg py-10 overflow-hidden">
                <div className="w-full h-full flex flex-wrap items-center justify-center gap-12">
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
        </div>
    );
};

export default Populer;
