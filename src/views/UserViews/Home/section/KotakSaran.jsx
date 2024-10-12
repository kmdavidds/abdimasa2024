import React, { useState } from 'react';
import { CiFileOn } from "react-icons/ci";
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
// hover atropos
import Atropos from "atropos/react";
import Swal from 'sweetalert2';
import { createSaran } from '../../../../api/userApi/KotakSaran';

const schema = z.object({
    name: z.string().min(1, { message: 'Nama harus diisi' }),
    description: z.string().min(1, { message: 'Pengaduan harus diisi' }),
    attachment1: z.instanceof(File).optional(),
});

const KotakSaran = () => {
    const [fileName, setFileName] = useState('');

    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(schema),
    });

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFileName(file ? file.name : '');
        setValue('attachment1', file);
    };

    const onSubmit = async (data) => {
        try {
            await createSaran(data);
            setFileName('');
            reset({
                name: '',
                description: '',
                attachment1: null,
            });
            Swal.fire({
                icon: 'success',
                title: 'Terkirim!',
                text: 'Pengaduan Anda telah berhasil dikirim.',
                confirmButtonText: 'OK',
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal',
                text: 'Terjadi kesalahan saat mengirim pengaduan. Silakan coba lagi nanti.',
                confirmButtonText: 'OK',
            });
        }
    };

    return (
        <div className='bg-cust-softblue w-full flex items-center font-poppins justify-center sm:py-28 py-20'>
            <div className='flex md:flex-row flex-col justify-center container w-full min-h-full xl:min-h-screen max-w-full sm:max-w-[80%]'>
                <div className='md:w-1/2 w-full px-8 md:px-0 flex flex-col md:flex-row items-center justify-end relative text-cust-blue gap-5'>
                    <div className='select-none md:hidden'>
                        <img src="/images/Landing/KotakSaranSection/judulSaran.svg" alt="" />
                    </div>
                    <div className='relative w-full'>
                        <img src="/images/Landing/KotakSaranSection/saranImg.svg" alt="" className='select-none ' />
                        <Atropos shadow={true} shadowOffset={50} highlight={true} duration={100} className='absolute group md:top-[22%] sm:top-[25%] sm:right-[30%] top-[25%] right-[30%]'>
                            <div data-atropos-offset="15" className='max-w-[130px] sm:max-w-[240px] md:max-w-[200px] xl:max-w-[240px] rounded-lg bg-gradient-to-b from-[#CBE0F8] via-[#E2EDF9] to-[#F2F8FF] flex items-center justify-center px-3 sm:px-5 py-2 sm:py-3 text-center border-2 border-gray-300 text-[8px] sm:text-base md:text-xs xl:text-base'>
                                “Kemarin air PDAM mati ya pakk harap dicek”
                            </div>
                        </Atropos>
                        <Atropos shadow={true} shadowOffset={50} highlight={true} duration={100} className='absolute group sm:bottom-[40%] md:bottom-[15%] md:left-[7%] sm:left-[0%] left-[10%] bottom-[20%]'>
                            <div data-atropos-offset="15" className='max-w-[130px] sm:max-w-[240px] md:max-w-[200px] xl:max-w-[240px] rounded-lg bg-gradient-to-b from-[#CBE0F8] via-[#E2EDF9] to-[#F2F8FF] flex items-center justify-center px-3 sm:px-5 py-2 sm:py-3 text-center border-2 border-gray-300 text-[8px] sm:text-base md:text-xs xl:text-base'>
                                “Taman skg bagus bgt warnanya jadi seger!”
                            </div>
                        </Atropos>
                        <Atropos shadow={true} shadowOffset={50} highlight={true} duration={100} className='absolute group md:top-[45%] md:left-[-5%] md:bottom-[50%] sm:left-[10%] sm:bottom-[20%] left-[0%] bottom-[40%]'>
                            <div data-atropos-offset="15" className='max-w-[130px] sm:max-w-[240px] md:max-w-[200px] xl:max-w-[240px] rounded-lg bg-gradient-to-b from-[#CBE0F8] via-[#E2EDF9] to-[#F2F8FF] flex items-center justify-center px-3 sm:px-5 py-2 sm:py-3 text-center border-2 border-gray-300 text-[8px] sm:text-base md:text-xs xl:text-base'>
                                “Pak tolong mulai tindaklanjuti pungli yaa”
                            </div>
                        </Atropos>
                    </div>
                </div>
                <div className='md:w-1/2 w-full flex items-center justify-center text-sm sm:text-base'>
                    <div className='w-full max-w-[80%]  xl:max-w-[100%] xl:w-max flex flex-col items-center justify-center gap-7 '>
                        <div className='select-none md:block hidden'>
                            <img src="/images/Landing/KotakSaranSection/judulSaran.svg" alt="" />
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data" className="space-y-7 w-full">
                            <div>
                                <label htmlFor="name" className="block font-medium">
                                    Nama <span className="text-red-500">*</span>
                                </label>
                                <Controller
                                    name="name"
                                    control={control}
                                    render={({ field }) => (
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Masukkan nama Anda"
                                            {...field}
                                            className="w-full px-4 py-2 mt-3 border-2 rounded-full border-cust-blue border-opacity-35 focus:border-opacity-100 focus:outline-none"
                                        />
                                    )}
                                />
                                {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="description" className="block font-medium">
                                    Pengaduan <span className="text-red-500">*</span>
                                </label>
                                <Controller
                                    name="description"
                                    control={control}
                                    render={({ field }) => (
                                        <input
                                            type="text"
                                            id="description"
                                            placeholder="Masukkan pengaduan disini..."
                                            {...field}
                                            className="w-full px-4 py-2 mt-3 border-2 rounded-full border-cust-blue border-opacity-35 focus:border-opacity-100 focus:outline-none"
                                        />
                                    )}
                                />
                                {errors.description && <p className="text-red-500 mt-1">{errors.description.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="attachment1" className="block font-medium">
                                    Lampiran (Optional)
                                </label>
                                <label className='w-full flex flex-col items-start px-4 py-2 mt-3 bg-gray-100 border-2 rounded-full border-cust-blue border-opacity-35 focus:border-opacity-100 focus:outline-none cursor-pointer'>
                                    <input
                                        type="file"
                                        id="attachment1"
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                    <div className='flex gap-2'>
                                        <CiFileOn className='w-6 h-6' />
                                        <span>{fileName ? fileName : 'Pilih lampiran'}</span>
                                    </div>
                                </label>
                            </div>

                            <div>
                                <button type="submit" className='w-full py-3 text-white bg-cust-blue rounded-full'>
                                    Kirim
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KotakSaran;
