import React from 'react'
import SaranCard from '../../../components/AdminComp/Dashboard/Saran/SaranCard'

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
    return (
        <div className='flex flex-col items-center gap-10'>
            <div>
                <img src="/images/Admin/saran/titleSaran.svg" alt="" />
            </div>
            <div className='w-full space-y-10'>
                {saranData.map(saran => (
                    <SaranCard key={saran.id} name={saran.name} pengaduan={saran.pengaduan} lampiran={saran.lampiran} />
                ))}
            </div>
        </div>
    )
}

export default KotakSaranAdmin
