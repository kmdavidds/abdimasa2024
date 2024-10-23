import React, { useState, useEffect } from 'react'
import SaranCard from '../../../components/AdminComp/Dashboard/Saran/SaranCard'
import { getAllSaran } from "../../../api/adminApi/KotakSaran"

const KotakSaranAdmin = () => {
    const saranData = [
        {
            id: 1,
            name: "Firza Aurelia",
            pengaduan: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptate.",
            lampiran: "https://via.placeholder.com/800x600.png?text=Example+Image"
        },
        {
            id: 2,
            name: "Firza Aurelia",
            pengaduan: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptate.",
            lampiran: "https://via.placeholder.com/800x600.png?text=Example+Image"
        },
        {
            id: 3,
            name: "Firza Aurelia",
            pengaduan: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptate.",
            lampiran: "https://via.placeholder.com/800x600.png?text=Example+Image"
        },
    ]
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const saran = await getAllSaran();
                console.log("Data yang diambil dari API:", saran);
                setData(saran);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        getData();
    }, []);
    return (
        <div className='flex flex-col items-center gap-10 font-poppins'>
            <div>
                <img src="/images/Admin/saran/titleSaran.svg" alt="" className='lg:w-[430px] lg:h-[97px] w-[243px] h-[55px]' />
            </div>
            <div className='w-full space-y-10'>
                {loading ? (
                    <>
                    <div className='w-full'>Loading...</div>
                    </>
                ) : (
                    <>
                        {data.map(saran => (
                            <SaranCard key={saran.id} name={saran.name} pengaduan={saran.description} lampiran={saran.attachmentURL} />
                        ))}
                    </>
                )}
            </div>
        </div>
    )
}

export default KotakSaranAdmin
