import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Swal from 'sweetalert2';
import { fetchDetails, createDetail, updateDetail } from "../../../api/adminApi/Penduduk"

const schema = z.object({
    lakiLaki: z.number().positive({ message: 'Jumlah laki-laki harus lebih dari 0' }).optional(),
    perempuan: z.number().positive({ message: 'Jumlah perempuan harus lebih dari 0' }).optional(),
});

const PendudukAdmin = () => {
    const { control, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentValues, setCurrentValues] = useState({ lakiLaki: 0, perempuan: 0 });

    useEffect(() => {
        const getDetails = async () => {
            try {
                const data = await fetchDetails();
                setDetails(data);
                const lakiLakiDetail = data.find(detail => detail.slug === "jiwa-laki-laki");
                const perempuanDetail = data.find(detail => detail.slug === "jiwa-perempuan");

                if (lakiLakiDetail) {
                    const lakiLakiValue = parseInt(lakiLakiDetail.value);
                    setValue('lakiLaki', lakiLakiValue);
                    setCurrentValues(prev => ({ ...prev, lakiLaki: lakiLakiValue }));
                }
                if (perempuanDetail) {
                    const perempuanValue = parseInt(perempuanDetail.value);
                    setValue('perempuan', perempuanValue);
                    setCurrentValues(prev => ({ ...prev, perempuan: perempuanValue }));
                }
            } catch (error) {
                console.error('Failed to fetch details:', error);
            }
        };

        getDetails();
    }, [setValue]);

    const onSubmit = async (data) => {
        setLoading(true);
        const totalPenduduk = (data.lakiLaki || 0) + (data.perempuan || 0);
        const actionType = details.length === 0 ? 'create' : 'update';
        const confirmationMessage = actionType === 'create'
            ? 'Anda akan membuat data baru. Apakah Anda yakin?'
            : 'Anda akan memperbarui data yang ada. Apakah Anda yakin?';

        if (
            (data.lakiLaki === currentValues.lakiLaki &&
                data.perempuan === currentValues.perempuan) ||
            (data.lakiLaki === 0 && data.perempuan === 0)
        ) {
            Swal.fire('Peringatan!', 'Data yang Anda masukkan sama dengan data sebelumnya atau tidak ada perubahan.', 'warning');
            setLoading(false);
            return;
        }

        const result = await Swal.fire({
            title: 'Konfirmasi',
            text: confirmationMessage,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya',
            cancelButtonText: 'Batal',
        });

        if (result.isConfirmed) {
            try {
                if (actionType === 'create') {
                    await createDetail('jiwa-total-penduduk', totalPenduduk.toString());
                    await createDetail('jiwa-laki-laki', data.lakiLaki.toString());
                    await createDetail('jiwa-perempuan', data.perempuan.toString());
                } else {
                    if (data.lakiLaki) {
                        await updateDetail(
                            details.find(detail => detail.slug === "jiwa-laki-laki").id,
                            'jiwa-laki-laki',
                            data.lakiLaki.toString()
                        );
                    }
                    if (data.perempuan) {
                        await updateDetail(
                            details.find(detail => detail.slug === "jiwa-perempuan").id,
                            'jiwa-perempuan',
                            data.perempuan.toString()
                        );
                    }
                    await updateDetail(
                        details.find(detail => detail.slug === "jiwa-total-penduduk").id,
                        'jiwa-total-penduduk',
                        totalPenduduk.toString()
                    );
                }
                Swal.fire('Berhasil!', 'Data telah berhasil disimpan.', 'success');
            } catch (error) {
                console.error('Error submitting data:', error);
                Swal.fire('Gagal!', 'Terjadi kesalahan saat menyimpan data.', 'error');
            } finally {
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    };


    return (
        <div className='flex flex-col items-center gap-10 font-poppins'>
            <div>
                <img src="/images/Admin/penduduk/titlePenduduk.svg" alt="" className='lg:w-[430px] lg:h-[97px] w-[243px] h-[55px]'/>
            </div>
            <div className='w-full'>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                        <label className="block font-medium">
                            Jumlah Laki-laki <span className="text-red-500">*</span>
                        </label>
                        <Controller
                            name="lakiLaki"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="number"
                                    {...field}
                                    onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                    placeholder="Masukkan jumlah laki-laki"
                                    className="w-full px-4 py-2 mt-3 border-2 rounded-full border-gray-300 focus:border-blue-500 focus:outline-none"
                                />
                            )}
                        />
                        {errors.lakiLaki && <p className="text-red-500 mt-1">{errors.lakiLaki.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">
                            Jumlah Perempuan <span className="text-red-500">*</span>
                        </label>
                        <Controller
                            name="perempuan"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="number"
                                    {...field}
                                    onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                    placeholder="Masukkan jumlah perempuan"
                                    className="w-full px-4 py-2 mt-3 border-2 rounded-full border-gray-300 focus:border-blue-500 focus:outline-none"
                                />
                            )}
                        />
                        {errors.perempuan && <p className="text-red-500 mt-1">{errors.perempuan.message}</p>}
                    </div>

                    <div className='w-full flex lg:justify-end justify-center'>
                        <button
                            type="submit"
                            className="py-3 px-24 text-white font-bold text-lg bg-blue-500 rounded-full hover:bg-blue-600 mt-5"
                            disabled={loading}
                        >
                            {loading ? 'Mengirim...' : 'Kirim'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PendudukAdmin
