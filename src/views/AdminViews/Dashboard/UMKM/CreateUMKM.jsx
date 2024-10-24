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
    rating: z.number()
        .min(1, { message: 'Rating minimal 1' })
        .max(5, { message: 'Rating maksimal 5' }),
    imageURL1: z.any().refine(file => file instanceof File, {
        message: "Gambar 1 harus diunggah"
    }),
    imageURL2: z.any().refine(file => file instanceof File, {
        message: "Gambar 2 harus diunggah"
    }),
    imageURL3: z.any().refine(file => file instanceof File, {
        message: "Gambar 3 harus diunggah"
    }),
});

const CreateUMKM = () => {
    const [fileNames, setFileNames] = useState({ imageURL1: '', imageURL2: '', imageURL3: '' });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

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
            imageURL1: null,
            imageURL2: null,
            imageURL3: null,
        },
    });

    const handleFileChange = (event, field) => {
        const file = event.target.files[0];
        setFileNames(prev => ({ ...prev, [field]: file ? file.name : '' }));
        setValue(field, file);
    };

    const handleRatingChange = (event) => {
        const value = parseFloat(event.target.value);
        setValue('rating', isNaN(value) ? 0 : value);
    };

    const onSubmit = async (data) => {
        setLoading(true);
        const formData = new FormData();



        try {
            formData.append('name', data.name.trim());
            formData.append('location', data.location.trim());
            formData.append('description', data.description.trim());
            formData.append('address', data.address.trim());
            formData.append('priceRange', data.priceRange.trim());
            formData.append('contact', data.contact.trim());
            formData.append('mapURL', data.mapURL.trim());
            formData.append('rating', data.rating || 0);

            // Append image files
            formData.append('imageURL1', data.imageURL1);
            formData.append('imageURL2', data.imageURL2);
            formData.append('imageURL3', data.imageURL3);

            const response = await createUMKM(formData);

            Swal.fire('Success!', 'Data UMKM berhasil ditambahkan.', 'success');
            reset();
            setFileNames({ imageURL1: '', imageURL2: '', imageURL3: '' });
            navigate('/admin/umkm');
        } catch (error) {
            console.error("Error details:", {
                response: error.response?.data,
                status: error.response?.status,
                message: error.message
            });
            const errorMessage = error.response?.data?.message || error.message || 'Terjadi Kesalahan pada server';
            Swal.fire('Error!', errorMessage, 'error');
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
                        <label className="block font-medium">Nama Produk UMKM <span className="text-red-500">*</span></label>
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
                                    placeholder="Masukkan rentang harga, contoh : Rp. 15.000 - Rp. 20.000"
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
                        <label className="block font-medium">Rating (1 - 5) <span className="text-red-500">*</span></label>
                        <Controller
                            name="rating"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="number"
                                    placeholder="Masukkan rating (bintang 1 - 5)"
                                    {...field}
                                    value={field.value || 0}
                                    onChange={(e) => {
                                        const value = parseFloat(e.target.value);
                                        field.onChange(isNaN(value) ? 0 : value); // Use 0 as default
                                        handleRatingChange(e);
                                    }}
                                    className="w-full px-4 py-2 mt-3 border-2 rounded-full border-gray-300 focus:border-blue-500 focus:outline-none"
                                />
                            )}
                        />
                        {errors.rating && <p className="text-red-500 mt-1">{errors.rating.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">Upload Gambar Produk 1 <span className="text-red-500">*</span></label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, 'imageURL1')}
                            className="mt-2 px-4 py-2 border-2 rounded-full border-gray-300 focus:border-blue-500 focus:outline-none"
                        />
                        {errors.imageURL1 && <p className="text-red-500 mt-1">{errors.imageURL1.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">URL Gambar Produk 2 <span className="text-red-500">*</span></label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, 'imageURL2')}
                            className="mt-2 px-4 py-2 border-2 rounded-full border-gray-300 focus:border-blue-500 focus:outline-none"
                        />
                        {errors.imageURL2 && <p className="text-red-500 mt-1">{errors.imageURL2.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">URL Gambar Produk 3 <span className="text-red-500">*</span></label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, 'imageURL3')}
                            className="mt-2 px-4 py-2 border-2 rounded-full border-gray-300 focus:border-blue-500 focus:outline-none"
                        />
                        {errors.imageURL3 && <p className="text-red-500 mt-1">{errors.imageURL3.message}</p>}
                    </div>

                    <div className='flex w-full justify-end gap-5'>
                        <button
                            type='button'
                            className='bg-gray-300 text-black text-lg py-3 px-14 rounded-full mt-5'
                            onClick={() => navigate(-1)}
                        >
                            Kembali
                        </button>
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
