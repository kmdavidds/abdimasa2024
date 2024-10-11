
    import React, { useState, useEffect } from 'react'
    import BeritaCard from "../../../components/UserComp/Berita/BeritaCard.jsx";
    import fetchNews  from "../../../api/userApi/Berita";

    const berita = () => {
        const [data, setData] = useState([]); 
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null); 

        useEffect(() => {
         const getData = async () => {
            try {
                const news = await fetchNews(); 
                setData(news); 
                setLoading(false); 
            } catch (err) {
                setError(err.message); 
                setLoading(false); 
            }
        };

        getData(); 
    }, []);

         if (loading) return <div>Loading...</div>; 
         if (error) return <div>Error: {error}</div>; 

        return (
            <div className="bg-cust-softblue bg-cover bg-[url('images/Landing/WisataUMKMSection/bgPattern.png')] w-full flex-col items-center justify-center py-28">
                <div className='flex justify-center items-center w-full mb-10'>
                    <img src="https://res.cloudinary.com/ddlo3v9hx/image/upload/v1728422598/Berita_Desa_znxkqy.png" alt="" className='lg:w-1/4 md:w-1/2 sm:w-1/3 w-1/3' />
                </div>

        
                <div className="flex justify-center flex-wrap gap-10">
                {data.map((card) => (
                    <BeritaCard
                        key={card.id} 
                        image={card.imageURL} 
                        title={card.title}
                        desc={card.description}
                        date={new Date(card.createdAt).toLocaleDateString()} 
                    />
                ))}
                </div>

            </div>
        );
    };

    export default berita;
