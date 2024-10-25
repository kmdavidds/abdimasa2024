import React from 'react';
import WisataUMKMCard from '../../../../components/UserComp/Home/WisataUMKM/WisataUMKMCard';
import { Link } from 'react-router-dom';
import wisataData from '../../../../constants/dataDummy'

const Populer = () => {
    return (
        <section className="font-poppins bg-cust-softblue bg-cover bg-[url('/images/Landing/WisataUMKMSection/bgPattern.png')]">
            <div className='flex flex-col lg:pt-48 pt-32 md:pb-36 pb-9 px-5 lg:px-0'>
                <div className='flex justify-center lg:mb-16 mb-9 md:lg-12'>
                    <img 
                        src="https://res.cloudinary.com/ddlo3v9hx/image/upload/v1728371039/Group_238040_lihsi5.png" 
                        alt="" 
                        className='lg:w-[473px] lg:h-[97px] w-[234px] h-[48px]' 
                    />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-12 w-full lg:px-28 justify-items-center">
                    {wisataData.slice(0, 6).map((card) => (
                        <Link to={`/wisata-populer/${card.id}`} key={card.id}>
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