import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FiCamera } from "react-icons/fi";
import Swal from 'sweetalert2';
import { createUMKM } from '../../../../api/adminApi/UMKM';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
    name: z.string().min(1, { message: 'Nama tempat harus diisi' }),
    location: z.string().min(1, { message: 'Lokasi harus diisi' }),
    description: z.string().min(1, { message: 'Deskripsi harus diisi' }),
    address: z.string().min(1, { message: 'Alamat harus diisi' }),
    priceRange: z.string().min(1, { message: 'Rentang harga harus diisi' }),
    contact: z.string().min(1, { message: 'Kontak harus diisi' }),
    mapURL: z.string().url({ message: 'URL peta harus valid' }),
    rating: z.number().min(0, { message: 'Rating tidak boleh kurang dari 0' }).max(100, { message: 'Rating tidak boleh lebih dari 100' }),
    imageURL1: z.string().url({ message: 'URL gambar 1 harus valid' }),
    imageURL2: z.string().url({ message: 'URL gambar 2 harus valid' }),
    imageURL3: z.string().url({ message: 'URL gambar 3 harus valid' }),
});

const CreateUMKM = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const token = sessionStorage.getItem('token');

    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            location: '',
            description: '',
            address: '',
            priceRange: '',
            contact: '',
            mapURL: '',
            rating: 0,
            imageURL1: '',
            imageURL2: '',
            imageURL3: '',
        },
    });

    const handleRatingChange = (event) => {
        const value = parseFloat(event.target.value);
        setValue('rating', isNaN(value) ? 0 : value);
    };

    const onSubmit = async (data) => {
        setLoading(true);
        const formData = {
            name: data.name,
            location: data.location,
            description: data.description,
            address: data.address,
            priceRange: data.priceRange,
            contact: data.contact,
            mapURL: data.mapURL,
            rating: data.rating,
            imageURL1: data.imageURL1,
            imageURL2: data.imageURL2,
            imageURL3: data.imageURL3,
        };

        try {
            await createPlace(formData, token);
            Swal.fire('Success!', 'Data UMKM berhasil ditambahkan.', 'success');
            reset();
            navigate('/admin/umkm'); // Ganti dengan path yang sesuai
        } catch (error) {
            console.error("Error uploading data:", error);
            Swal.fire('Error!', 'Gagal menambahkan data UMKM. ' + (error.response?.data?.message || ''), 'error');
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className='flex flex-col items-center gap-10'>
            <div>
                <img src="/images/Admin/umkm/titleUMKM.svg" alt="Title UMKM" />
            </div>
            <div className='w-full'>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                        <label className="block font-medium">Nama Tempat <span className="text-red-500">*</span></label>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    placeholder="Masukkan nama tempat"
                                    {...field}
                                    className="w-full px-4 py-2 mt-3 border-2 rounded-full border-gray-300 focus:border-blue-500 focus:outline-none"
                                />
                            )}
                        />
                        {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">Lokasi <span className="text-red-500">*</span></label>
                        <Controller
                            name="location"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    placeholder="Masukkan lokasi"
                                    {...field}
                                    className="w-full px-4 py-2 mt-3 border-2 rounded-full border-gray-300 focus:border-blue-500 focus:outline-none"
                                />
                            )}
                        />
                        {errors.location && <p className="text-red-500 mt-1">{errors.location.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">Deskripsi <span className="text-red-500">*</span></label>
                        <Controller
                            name="description"
                            control={control}
                            render={({ field }) => (
                                <textarea
                                    rows="3"
                                    placeholder="Masukkan deskripsi"
                                    {...field}
                                    className="w-full px-4 py-2 mt-3 border-2 rounded-lg border-gray-300 focus:border-blue-500 focus:outline-none"
                                />
                            )}
                        />
                        {errors.description && <p className="text-red-500 mt-1">{errors.description.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">Alamat <span className="text-red-500">*</span></label>
                        <Controller
                            name="address"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    placeholder="Masukkan alamat"
                                    {...field}
                                    className="w-full px-4 py-2 mt-3 border-2 rounded-full border-gray-300 focus:border-blue-500 focus:outline-none"
                                />
                            )}
                        />
                        {errors.address && <p className="text-red-500 mt-1">{errors.address.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">Rentang Harga <span className="text-red-500">*</span></label>
                        <Controller
                            name="priceRange"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    placeholder="Masukkan rentang harga"
                                    {...field}
                                    className="w-full px-4 py-2 mt-3 border-2 rounded-full border-gray-300 focus:border-blue-500 focus:outline-none"
                                />
                            )}
                        />
                        {errors.priceRange && <p className="text-red-500 mt-1">{errors.priceRange.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">Kontak <span className="text-red-500">*</span></label>
                        <Controller
                            name="contact"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    placeholder="Masukkan kontak"
                                    {...field}
                                    className="w-full px-4 py-2 mt-3 border-2 rounded-full border-gray-300 focus:border-blue-500 focus:outline-none"
                                />
                            )}
                        />
                        {errors.contact && <p className="text-red-500 mt-1">{errors.contact.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">URL Peta <span className="text-red-500">*</span></label>
                        <Controller
                            name="mapURL"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    placeholder="Masukkan URL peta"
                                    {...field}
                                    className="w-full px-4 py-2 mt-3 border-2 rounded-full border-gray-300 focus:border-blue-500 focus:outline-none"
                                />
                            )}
                        />
                        {errors.mapURL && <p className="text-red-500 mt-1">{errors.mapURL.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">Rating <span className="text-red-500">*</span></label>
                        <Controller
                            name="rating"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="number"
                                    min="0"
                                    max="100"
                                    value={field.value || 0}
                                    onChange={(e) => {
                                        const value = parseFloat(e.target.value);
                                        field.onChange(isNaN(value) ? 0 : value);
                                    }}
                                    placeholder="Masukkan rating (0-100)"
                                    {...field}
                                    className="w-full px-4 py-2 mt-3 border-2 rounded-full border-gray-300 focus:border-blue-500 focus:outline-none"
                                />
                            )}
                        />
                        {errors.rating && <p className="text-red-500 mt-1">{errors.rating.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">URL Gambar 1 <span className="text-red-500">*</span></label>
                        <Controller
                            name="imageURL1"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    placeholder="Masukkan URL gambar 1"
                                    {...field}
                                    className="w-full px-4 py-2 mt-3 border-2 rounded-full border-gray-300 focus:border-blue-500 focus:outline-none"
                                />
                            )}
                        />
                        {errors.imageURL1 && <p className="text-red-500 mt-1">{errors.imageURL1.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">URL Gambar 2 <span className="text-red-500">*</span></label>
                        <Controller
                            name="imageURL2"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    placeholder="Masukkan URL gambar 2"
                                    {...field}
                                    className="w-full px-4 py-2 mt-3 border-2 rounded-full border-gray-300 focus:border-blue-500 focus:outline-none"
                                />
                            )}
                        />
                        {errors.imageURL2 && <p className="text-red-500 mt-1">{errors.imageURL2.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">URL Gambar 3 <span className="text-red-500">*</span></label>
                        <Controller
                            name="imageURL3"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    placeholder="Masukkan URL gambar 3"
                                    {...field}
                                    className="w-full px-4 py-2 mt-3 border-2 rounded-full border-gray-300 focus:border-blue-500 focus:outline-none"
                                />
                            )}
                        />
                        {errors.imageURL3 && <p className="text-red-500 mt-1">{errors.imageURL3.message}</p>}
                    </div>

                    <div className='flex w-full justify-end'>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`mt-5 px-10 py-2 rounded-full text-white ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} transition-all`}
                        >
                            {loading ? 'Loading...' : 'Tambah UMKM'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateUMKM
