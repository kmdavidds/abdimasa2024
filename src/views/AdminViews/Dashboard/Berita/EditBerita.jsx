import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Swal from 'sweetalert2';
import { getNewsById, updateNews } from '../../../../api/adminApi/Berita';
import { useNavigate, useParams } from 'react-router-dom';

const schema = z.object({
    title: z.string().min(1, { message: 'Judul harus diisi' }).max(70, { message: 'Judul tidak boleh lebih dari 70 karakter' }),
    description: z.string().min(1, { message: 'Deskripsi harus diisi' }),
    imageURL: z.string().url({ message: 'URL gambar tidak valid' })
});

const EditBerita = () => {
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const news = await getNewsById(id);
                setNews(news.news);
                reset({
                    title: news.news.title,
                    description: news.news.description,
                    imageURL: news.news.imageURL,
                });
            } catch (error) {
                console.error('Error fetching news:', error);
                Swal.fire('Gagal!', 'Terjadi kesalahan saat mengambil data berita.', 'error');
            } finally {
                setLoading(false);
            }
        };
        fetchNews();
    }, [id, reset]);

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const currentData = await getNewsById(id);
            if (
                data.title === currentData.news.title &&
                data.description === currentData.news.description &&
                data.imageURL === currentData.news.imageURL
            ) {
                Swal.fire('Tidak ada perubahan', 'Data tidak diubah.', 'info');
                setLoading(false);
                return;
            }
            const updateResponse = await updateNews(id, {
                title: data.title,
                description: data.description,
                imageURL: data.imageURL,
            });

            if (updateResponse || updateResponse === true) {
                Swal.fire('Berhasil!', 'Berita telah diperbarui.', 'success');
                navigate('/admin/berita');
            } else {
                throw new Error('Gagal memperbarui berita');
            }
        } catch (error) {
            console.error('Error updating news:', error);
            Swal.fire('Gagal!', 'Terjadi kesalahan saat memperbarui berita.', 'error');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2xl font-bold'>Edit Berita</h1>
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
                        className='bg-gray-300 text-black rounded px-20 py-3'
                        onClick={() => navigate(-1)}
                    >
                        Kembali
                    </button>
                    <button
                        type='submit'
                        className='bg-blue-500 text-white rounded px-20 py-3'
                        disabled={loading}
                    >
                        {loading ? 'Memperbarui...' : 'Perbarui Berita'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditBerita
