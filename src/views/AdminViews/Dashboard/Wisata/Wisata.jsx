import React, { useEffect, useState } from 'react'
import WisataCard from '../../../../components/AdminComp/Dashboard/Wisata/WisataCard'
import { getAllPlaces, deletePlace } from '../../../../api/adminApi/Wisata'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { FaCirclePlus } from "react-icons/fa6"

const WisataAdmin = () => {
    const navigate = useNavigate();
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const allPlaces = await getAllPlaces();
                setPlaces(allPlaces);
            } catch (error) {
                console.error('Error fetching places:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlaces();
    }, []);

    const handleDelete = async (id) => {
        Swal.fire({
            title: 'Apakah Anda yakin?',
            text: "Tempat wisata ini akan dihapus secara permanen!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, hapus!',
            cancelButtonText: 'Batal'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deletePlace(id);
                    // Remove the deleted place from the local state
                    setPlaces(places.filter(place => place.id !== id));
                    Swal.fire(
                        'Dihapus!',
                        'Tempat wisata berhasil dihapus.',
                        'success'
                    );
                } catch (error) {
                    console.error('Error deleting place:', error);
                    Swal.fire(
                        'Error!',
                        'Terjadi kesalahan saat menghapus tempat wisata.',
                        'error'
                    );
                }
            }
        });
    };

    return (
        <div className='flex flex-col items-center gap-10 font-poppins'>
            <div>
                <img src="/images/Admin/wisata/titleWisata.svg" alt="" className='lg:w-[430px] lg:h-[97px] w-[243px] h-[55px]' />
            </div>
            <div>
                {loading ? (
                    <div className="flex justify-center items-center h-96">
                        <p className="text-2xl">Loading data wisata...</p>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full xl:w-[95%] items-center justify-center'>
                        {places.length > 0 ? (
                            places.map(place => (
                                <WisataCard
                                    key={place.id}
                                    image={place.imageURL1}
                                    title={place.name}
                                    location={place.location}
                                >
                                    <button onClick={() => handleDelete(place.id)} className="bg-red-500 text-white px-4 py-2 text-sm xl:text-base rounded">Hapus</button>
                                </WisataCard>
                            ))
                        ) : (
                            <p className="text-center col-span-full">Tidak ada tempat wisata yang ditemukan.</p>
                        )}
                    </div>
                )}
            </div>
            <div className='fixed bottom-10 right-20 bg-white rounded-full'>
                <FaCirclePlus onClick={() => navigate('/admin/wisata/create')} className='text-cust-blue w-16 h-16 cursor-pointer' />
            </div>
        </div>
    )
}

export default WisataAdmin
