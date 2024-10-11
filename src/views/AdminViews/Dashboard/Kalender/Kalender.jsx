import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCirclePlus } from "react-icons/fa6";
import Swal from 'sweetalert2';
import KalenderCard from '../../../../components/AdminComp/Dashboard/Kalender/KalenderCard';

// API
import { getAllKalender, deleteKalender } from '../../../../api/adminApi/Kalender';

const KalenderAdmin = () => {
    const navigate = useNavigate();
    const [kalender, setKalender] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchKalender = async () => {
            try {
                const allKalenderData = await getAllKalender();
                const currentDate = new Date();

                // Filtering only upcoming or today's events
                const upcomingKalender = allKalenderData.filter(item => {
                    const itemDate = new Date(item.date);
                    return itemDate >= currentDate.setHours(0, 0, 0, 0);
                });

                const sortedKalender = upcomingKalender.sort((a, b) => {
                    const dateA = new Date(a.date);
                    const dateB = new Date(b.date);
                    return dateA - dateB;
                });

                const updatedKalender = sortedKalender.map(item => {
                    const newDate = new Date(item.date);
                    newDate.setDate(newDate.getDate() + 1);
                    return { ...item, date: newDate };
                });

                setKalender(updatedKalender);
            } catch (error) {
                console.error("Error fetching kalender:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchKalender();
    }, []);

    const handleEdit = (id) => {
        navigate(`/admin/kalender/edit/${id}`);
    };

    const handleDelete = async (id) => {
        const confirmDelete = await Swal.fire({
            title: 'Apakah Anda yakin?',
            text: "Data ini akan dihapus!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Ya, hapus!'
        });
        if (confirmDelete.isConfirmed) {
            await deleteKalender(id);
            setKalender(kalender.filter(item => item.id !== id));
            Swal.fire('Dihapus!', 'Berita berhasil dihapus.', 'success');
        }
    };

    return (
        <div className='flex flex-col items-center gap-10'>
            <div>
                <img src="/images/Admin/Kalender/titleKalender.svg" alt="" />
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-[95%]'>
                    {kalender.length > 0 ? (
                        kalender.map(item => (
                            <KalenderCard key={item.id} kalender={item}>
                                <button onClick={() => handleDelete(item.id)} className="bg-red-500 text-white px-4 py-2 rounded">Hapus</button>
                            </KalenderCard>
                        ))
                    ) : (
                        <p>Tidak ada kegiatan yang akan datang.</p>
                    )}
                </div>
            )}
            <div className='fixed bottom-10 right-20 bg-white rounded-full'>
                <FaCirclePlus onClick={() => navigate('/admin/kalender/create')} className='text-cust-blue w-16 h-16 cursor-pointer' />
            </div>
        </div>
    )
}

export default KalenderAdmin
