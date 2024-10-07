import React from 'react';
import WisataUMKMCard from '../../../../components/UserComp/Home/WisataUMKM/WisataUMKMCard';

const wisataData = [
    {
        type: 'wisata',
        image: 'https://res.cloudinary.com/dkncrhkfo/image/upload/v1724408817/DSC09723_b6ny1r.jpg',
        title: 'Bukit Kuneer',
        location: 'Kebun Teh Wonosari, Toyomarto',
    },
    {
        type: 'wisata',
        image: 'https://res.cloudinary.com/dkncrhkfo/image/upload/v1724408817/DSC09723_b6ny1r.jpg',
        title: 'Stupa Sumberawan',
        location: 'Dusun Sumberawan, Toyomarto',
    },
    {
        type: 'wisata',
        image: 'https://res.cloudinary.com/dkncrhkfo/image/upload/v1724408817/DSC09723_b6ny1r.jpg',
        title: 'Pentungansari',
        location: 'Bodean Krajan, Toyomarto',
    },
    {
        type: 'wisata',
        image: 'https://res.cloudinary.com/dkncrhkfo/image/upload/v1724408817/DSC09723_b6ny1r.jpg',
        title: 'Bukit Kuneer',
        location: 'Kebun Teh Wonosari, Toyomarto',
    },
    {
        type: 'wisata',
        image: 'https://res.cloudinary.com/dkncrhkfo/image/upload/v1724408817/DSC09723_b6ny1r.jpg',
        title: 'Stupa Sumberawan',
        location: 'Dusun Sumberawan, Toyomarto',
    },
    {
        type: 'wisata',
        image: 'https://res.cloudinary.com/dkncrhkfo/image/upload/v1724408817/DSC09723_b6ny1r.jpg',
        title: 'Pentungansari',
        location: 'Bodean Krajan, Toyomarto',
    }
];

const Populer = () => {
    return (
        <div className="bg-cust-softblue bg-cover bg-[url('images/Landing/WisataUMKMSection/bgPattern.png')] w-full flex-row items-center font-poppins justify-center py-28">
            <div className='space-y-20 relative container w-full container mx-auto'>
            <div className='flex justify-center items-center w-full'>
                <img src="https://res.cloudinary.com/dkncrhkfo/image/upload/v1724384468/Group_238040_bllsnm.png" alt="" className='w-1/3'/>
            </div>
            <div className=' w-full min-h-screen space-y-20 relative'>
                <div className="w-full h-full rounded-lg py-10 overflow-hidden">
                <div className="w-full h-full flex flex-wrap gap-12 ml-28 px-12">
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
