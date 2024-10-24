import React, { useState, useEffect } from 'react'
import SaranCard from '../../../components/AdminComp/Dashboard/Saran/SaranCard'
import { getAllSaran, deleteSaran } from "../../../api/adminApi/KotakSaran"
import Swal from 'sweetalert2';

const KotakSaranAdmin = () => {
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

    const handleDelete = async (id) => {
        const confirmDelete = await Swal.fire({
            title: 'Apakah Anda yakin?',
            text: "Saran ini akan dihapus!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Ya, hapus!'
        });
        if (confirmDelete.isConfirmed) {
            await deleteSaran(id);
            setData(data.filter(item => item.id !== id));
            Swal.fire('Dihapus!', 'Saran berhasil dihapus.', 'success');
        }
    };

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
                    data.length > 0 ? (
                        data.map(saran => (
                            <SaranCard key={saran.id} name={saran.name} pengaduan={saran.description} lampiran={saran.attachmentURL}>
                                <button onClick={() => handleDelete(saran.id)} className="bg-red-500 text-white px-4 py-2 rounded">Hapus</button>
                            </SaranCard>
                        ))

                    ) : (
                        <p className="text-center col-span-full">Tidak ada kritik dan saran sejauh ini.</p>
                    )
                )}
            </div>
        </div>
    )
}

export default KotakSaranAdmin
