import React, { useEffect, useState } from 'react';
import UMKMCard from '../../../../components/AdminComp/Dashboard/UMKM/UMKMCard';
import { getAllUMKM, deleteUMKM } from '../../../../api/adminApi/UMKM';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { FaCirclePlus } from "react-icons/fa6";

const UMKMAdmin = () => {
    const navigate = useNavigate();
    const [umkms, setUmkms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUMKM = async () => {
            try {
                const allUMKM = await getAllUMKM();
                console.log(allUMKM);
                setUmkms(allUMKM);
            } catch (error) {
                console.error('Error fetching UMKM:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUMKM();
    }, []);

    const handleDelete = async (id) => {
        Swal.fire({
            title: 'Apakah Anda yakin?',
            text: "UMKM ini akan dihapus secara permanen!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, hapus!',
            cancelButtonText: 'Batal'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteUMKM(id);
                    // Remove the deleted UMKM from the local state
                    setUmkms(umkms.filter(umkm => umkm.id !== id));
                    Swal.fire(
                        'Dihapus!',
                        'UMKM berhasil dihapus.',
                        'success'
                    );
                } catch (error) {
                    console.error('Error deleting UMKM:', error);
                    Swal.fire(
                        'Error!',
                        'Terjadi kesalahan saat menghapus UMKM.',
                        'error'
                    );
                }
            }
        });
    };
    return (
        <div className='flex flex-col items-center gap-10 font-poppins'>
            <div>
                <img src="/images/Admin/umkm/titleUMKM.svg" alt="" className='lg:w-[430px] lg:h-[97px] w-[243px] h-[55px]' />
            </div>
            <div>
                {loading ? (
                    <div className="flex justify-center items-center h-96">
                        <p className="text-2xl">Loading data UMKM...</p>
                    </div>
                ) : (
                    <div className='items-center w-full flex flex-wrap justify-center mt-14 mx-auto gap-6'>
                        {umkms.length > 0 ? (
                            umkms.map((umkm, index) => (
                                <UMKMCard
                                    key={umkm.id}
                                    image={umkm.imageURL1}
                                    name={umkm.name}
                                    priceRange={umkm.priceRange}
                                    rating={umkm.rating}
                                    location={umkm.location}
                                    desc={umkm.description}
                                />
                            ))
                        ) : (
                            <p className="text-center col-span-full">Tidak ada UMKM yang ditemukan.</p>
                        )}
                    </div>
                )}
            </div>
            <div className='fixed bottom-10 right-20 bg-white rounded-full'>
                <FaCirclePlus onClick={() => navigate('/admin/umkm/create')} className='text-cust-blue w-16 h-16 cursor-pointer' />
            </div>
        </div>
    )
}

export default UMKMAdmin
