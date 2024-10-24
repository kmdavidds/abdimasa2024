import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCirclePlus } from "react-icons/fa6";
import Swal from 'sweetalert2';
import BeritaCard from '../../../../components/AdminComp/Dashboard/Berita/BeritaCard';

// API
import { getAllNews, deleteNews } from '../../../../api/adminApi/Berita';


const BeritaAdmin = () => {
    const navigate = useNavigate();
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const allNews = await getAllNews();
                setNews(allNews);
            } catch (error) {
                console.error("Error fetching news:", error);
            } finally {
                setLoading(false); 
            }
        };
        fetchNews();
    }, []);

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
            await deleteNews(id);
            setNews(news.filter(item => item.id !== id));
            Swal.fire('Dihapus!', 'Berita berhasil dihapus.', 'success');
        }
    };

    const handleEdit = (id) => {
        navigate(`/admin/berita/edit/${id}`);
    };

    return (
        <div className='flex flex-col items-center gap-10 font-poppins'>
            <div>
                <img src="/images/Admin/berita/titleBerita.svg" alt="" className='lg:w-[430px] lg:h-[97px] w-[243px] h-[55px]' />
            </div>
            {loading ? (
                <div className="flex justify-center items-center h-96">
                    <p className="text-2xl">Loading data berita...</p>
                </div>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-[95%]'>
                    {news.length > 0 ? (
                        news.map(item => (
                            <BeritaCard key={item.id} berita={item}>
                                <button onClick={() => handleDelete(item.id)} className="bg-red-500 text-white px-4 py-2 rounded">Hapus</button>
                                {/* <button onClick={() => handleEdit(item.id)} className="bg-cust-blue text-white px-4 py-2 rounded">Edit</button> */}
                            </BeritaCard>
                        ))
                    ) : (
                        <p className="text-center col-span-full">Tidak ada berita yang ditemukan.</p>
                    )}
                </div>
            )}
            <div className='fixed bottom-10 right-20 bg-white rounded-full'>
                <FaCirclePlus onClick={() => navigate('/admin/berita/create')} className='text-cust-blue w-16 h-16 cursor-pointer' />
            </div>
        </div>
    )
}

export default BeritaAdmin
