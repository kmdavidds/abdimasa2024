import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Swal from 'sweetalert2';
import { createNews } from '../../../../api/adminApi/Berita';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
    title: z.string().min(1, { message: 'Judul harus diisi' }),
    description: z.string().min(1, { message: 'Deskripsi harus diisi' }),
    imageURL: z.string().url({ message: 'URL gambar tidak valid' })
});

const CreateBerita = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const result = await createNews(data);

            if (result === undefined) {
                Swal.fire('Berhasil!', 'Berita telah ditambahkan.', 'success');
                navigate('/admin/berita');
            } else {
                Swal.fire('Gagal!', 'Terjadi kesalahan saat menambahkan berita.', 'error');
            }
        } catch (error) {
            console.error('Error creating news:', error);
            const errorMessage = error.response?.data?.message || 'Terjadi kesalahan saat menambahkan berita.';
            Swal.fire('Gagal!', errorMessage, 'error');
        }
    };


    return (
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2xl font-bold'>Tambah Berita</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 w-full'>
                <div>
                    <label className='block font-medium'>
                        Judul <span className='text-red-500'>*</span>
                    </label>
                    <Controller
                        name="title"
                        control={control}
                        render={({ field }) => (
                            <input
                                type='text'
                                id='title'
                                placeholder='Masukkan judul berita'
                                {...field}
                                className='w-full px-4 py-2 mt-3 border-2 rounded-2xl border-gray-300 focus:border-blue-500 focus:outline-none'
                            />
                        )}
                    />
                    {errors.title && <p className="text-red-500 mt-1">{errors.title.message}</p>}
                </div>

                <div>
                    <label className='block font-medium'>
                        Deskripsi <span className='text-red-500'>*</span>
                    </label>
                    <Controller
                        name="description"
                        control={control}
                        render={({ field }) => (
                            <textarea
                                id='description'
                                placeholder='Masukkan deskripsi berita'
                                {...field}
                                className='w-full px-4 py-2 mt-3 border-2 rounded-xl border-gray-300 focus:border-blue-500 focus:outline-none'
                                rows='4'
                            />
                        )}
                    />
                    {errors.description && <p className="text-red-500 mt-1">{errors.description.message}</p>}
                </div>

                <div>
                    <label className='block font-medium'>
                        URL Gambar <span className='text-red-500'>*</span>
                    </label>
                    <Controller
                        name="imageURL"
                        control={control}
                        render={({ field }) => (
                            <input
                                type='text'
                                id='imageURL'
                                placeholder='Masukkan URL gambar'
                                {...field}
                                className='w-full px-4 py-2 mt-3 border-2 rounded-2xl border-gray-300 focus:border-blue-500 focus:outline-none'
                            />
                        )}
                    />
                    {errors.imageURL && <p className="text-red-500 mt-1">{errors.imageURL.message}</p>}
                </div>
                <div className=' w-full justify-end flex gap-4'>
                    <button
                        type='button'
                        className='bg-gray-300 text-black rounded-xl px-20 py-3'
                        onClick={() => navigate(-1)}
                    >
                        Kembali
                    </button>
                    <button
                        type='submit'
                        className='bg-blue-500 text-white rounded-xl px-20 py-3'
                        disabled={loading}
                    >
                        {loading ? 'Menambahkan...' : 'Tambah Berita'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateBerita;
