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
    image1: z.instanceof(File).refine(file => file.size > 0, {
        message: 'Gambar harus diunggah'
    })
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
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('image1', data.image1);
        try {
            const result = await createNews(formData);

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
        } finally {
            setLoading(false);
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
                        Unggah Gambar <span className='text-red-500'>*</span>
                    </label>
                    <Controller
                        name="image1"
                        control={control}
                        render={({ field: { onChange } }) => (
                            <input
                                type='file' 
                                accept="image/*"
                                onChange={e => onChange(e.target.files[0])}
                                className='w-full px-4 py-2 mt-3 border-2 rounded-2xl border-gray-300 focus:border-blue-500 focus:outline-none'
                            />
                        )}
                    />
                    {errors.image1 && <p className="text-red-500 mt-1">{errors.image1.message}</p>}
                </div>
                <div className=' w-full justify-end flex xl:gap-4 gap-2'>
                    <button
                        type='button'
                        className='bg-gray-300 text-black rounded-xl xl:px-20 px-8 xl:py-3 py-2'
                        onClick={() => navigate(-1)}
                    >
                        Kembali
                    </button>
                    <button
                        type='submit'
                        className='bg-blue-500 text-white rounded-xl xl:px-20 px-8 xl:py-3 py-2'
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
