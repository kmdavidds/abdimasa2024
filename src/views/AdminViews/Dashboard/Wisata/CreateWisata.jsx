import React, { useState, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FiCamera } from "react-icons/fi";
import Swal from 'sweetalert2';
import { createPlace } from '../../../../api/adminApi/Wisata';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
    name: z.string().min(1, { message: 'Nama tempat harus diisi' }),
    location: z.string().min(1, { message: 'Lokasi harus diisi' }),
    description: z.string().min(1, { message: 'Deskripsi harus diisi' }),
    address: z.string().min(1, { message: 'Alamat harus diisi' }),
    openingHours: z.string().min(1, { message: 'Jam buka harus diisi' }),
    closingHours: z.string().min(1, { message: 'Jam tutup harus diisi' }),
    entryPrice: z.string().min(1, { message: 'Harga tiket harus diisi' }),
    mapURL: z.string().url({ message: 'URL peta harus valid' }),
    rating: z.number().min(0, { message: 'Rating tidak boleh kurang dari 0' }).max(100, { message: 'Rating tidak boleh lebih dari 100' }),
    image1: z.instanceof(File, { message: 'Gambar 1 harus diunggah' }),
    image2: z.instanceof(File, { message: 'Gambar 2 harus diunggah' }),
    image3: z.instanceof(File, { message: 'Gambar 3 harus diunggah' }),
});

const CreateWisata = () => {
    const [fileNames, setFileNames] = useState({ image1: '', image2: '', image3: '' });
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
            openingHours: '',
            closingHours: '',
            entryPrice: '',
            mapURL: '',
            rating: 0,
            image1: null,
            image2: null,
            image3: null,
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
        formData.append('name', data.name);
        formData.append('location', data.location);
        formData.append('description', data.description);
        formData.append('address', data.address);
        formData.append('openingHours', data.openingHours);
        formData.append('closingHours', data.closingHours);
        formData.append('entryPrice', data.entryPrice);
        formData.append('mapURL', data.mapURL);
        formData.append('rating', data.rating);
        formData.append('image1', data.image1);
        formData.append('image2', data.image2);
        formData.append('image3', data.image3);

        try {
            await createPlace(formData, token);
            Swal.fire('Success!', 'Data wisata berhasil ditambahkan.', 'success');
            reset({
                name: '',
                location: '',
                description: '',
                address: '',
                openingHours: '',
                closingHours: '',
                entryPrice: '',
                mapURL: '',
                rating: 0,
                image1: null,
                image2: null,
                image3: null,
            });
            setFileNames({ image1: '', image2: '', image3: '' });
            navigate('/admin/wisata'); // Ganti dengan path yang sesuai
        } catch (error) {
            console.error("Error uploading data:", error);
            Swal.fire('Error!', 'Gagal menambahkan data wisata. ' + (error.response?.data?.message || ''), 'error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex flex-col items-center gap-10'>
            <div>
                <img src="/images/Admin/wisata/titleWisata.svg" alt="Title Wisata" />
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
                        <label className="block font-medium">Jam Buka <span className="text-red-500">*</span></label>
                        <Controller
                            name="openingHours"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    placeholder="Masukkan jam buka"
                                    {...field}
                                    className="w-full px-4 py-2 mt-3 border-2 rounded-full border-gray-300 focus:border-blue-500 focus:outline-none"
                                />
                            )}
                        />
                        {errors.openingHours && <p className="text-red-500 mt-1">{errors.openingHours.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">Jam Tutup <span className="text-red-500">*</span></label>
                        <Controller
                            name="closingHours"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    placeholder="Masukkan jam tutup"
                                    {...field}
                                    className="w-full px-4 py-2 mt-3 border-2 rounded-full border-gray-300 focus:border-blue-500 focus:outline-none"
                                />
                            )}
                        />
                        {errors.closingHours && <p className="text-red-500 mt-1">{errors.closingHours.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">Harga Tiket <span className="text-red-500">*</span></label>
                        <Controller
                            name="entryPrice"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    placeholder="Masukkan harga tiket"
                                    {...field}
                                    className="w-full px-4 py-2 mt-3 border-2 rounded-full border-gray-300 focus:border-blue-500 focus:outline-none"
                                />
                            )}
                        />
                        {errors.entryPrice && <p className="text-red-500 mt-1">{errors.entryPrice.message}</p>}
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
                        <label className="block font-medium">Rating (0-100) <span className="text-red-500">*</span></label>
                        <Controller
                            name="rating"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="number"
                                    placeholder="Masukkan rating"
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
                        <label className="block font-medium">Unggah Gambar 1 <span className="text-red-500">*</span></label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, 'image1')}
                            className="mt-2"
                        />
                        {fileNames.image1 && <p className="mt-1">{fileNames.image1}</p>}
                        {errors.image1 && <p className="text-red-500 mt-1">{errors.image1.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">Unggah Gambar 2 <span className="text-red-500">*</span></label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, 'image2')}
                            className="mt-2"
                        />
                        {fileNames.image2 && <p className="mt-1">{fileNames.image2}</p>}
                        {errors.image2 && <p className="text-red-500 mt-1">{errors.image2.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">Unggah Gambar 3 <span className="text-red-500">*</span></label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, 'image3')}
                            className="mt-2"
                        />
                        {fileNames.image3 && <p className="mt-1">{fileNames.image3}</p>}
                        {errors.image3 && <p className="text-red-500 mt-1">{errors.image3.message}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`mt-5 w-full py-2 rounded-full text-white ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} transition-all`}
                    >
                        {loading ? 'Loading...' : 'Tambah Wisata'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateWisata;
