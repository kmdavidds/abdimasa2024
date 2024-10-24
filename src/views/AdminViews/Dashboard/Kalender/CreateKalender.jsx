import React, { useState, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { FiCamera } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';
import { createKalenderData } from "../../../../api/adminApi/Kalender";
import { useNavigate } from 'react-router-dom';

const schema = z.object({
    title: z.string().min(1, { message: 'Nama kegiatan harus diisi' }),
    location: z.string().min(1, { message: 'Lokasi harus diisi' }).max(25, { message: 'Lokasi tidak boleh lebih dari 25 karakter' }),
    foto: z.instanceof(File, { message: 'Foto harus diunggah' }),
    date: z.date({ required_error: 'Tanggal harus diisi' }),
    time: z.date({ required_error: 'Jam harus diisi' }),
});

const CreateKalender = () => {
    const [fileName, setFileName] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [startTime, setStartTime] = useState(null);
    const today = new Date();
    const datePickerRef = useRef(null);
    const timePickerRef = useRef(null);
    const token = sessionStorage.getItem('token');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();


    const openDatePicker = () => {
        datePickerRef.current.setFocus();
    };

    const openTimePicker = () => {
        timePickerRef.current.setFocus();
    };

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
        setValue('foto', file);
    };

    const getDayClassName = (date) => {
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
            ? 'border border-black'
            : '';
    };

    const onSubmit = async (data) => {
        setLoading(true);
        const formData = new FormData();
        formData.append('title', data.title);
        const date = new Date(data.date);
        date.setHours(0, 0, 0, 0);
        const formattedDate = date.toISOString().split('T')[0];
        formData.append('date', formattedDate);
        const time = new Date(data.time);
        time.setSeconds(0);
        const options = { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Jakarta' };
        const formattedTime = time.toLocaleTimeString('id-ID', options) + ' WIB';
        formData.append('time', formattedTime);
        formData.append('location', data.location);
        formData.append('image1', data.foto);


        try {
            await createKalenderData(formData, token);
            Swal.fire('Success!', 'Data successfully uploaded.', 'success');
            reset({
                title: '',
                location: '',
                foto: null,
                date: null,
                time: null
            });
            setFileName('');
            setStartDate(new Date());
            setStartTime(null);
            navigate('/admin/kalender');
        } catch (error) {
            console.error("Error uploading data:", error);
            Swal.fire('Error!', 'Failed to upload data.', 'error');
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className='flex flex-col items-center gap-10'>
            <div>
                <img src="/images/Admin/kalender/titleKalender.svg" alt="" />
            </div>
            <div className='w-full'>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                        <label className="block font-medium">
                            Nama Kegiatan <span className="text-red-500">*</span>
                        </label>
                        <Controller
                            name="title"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    id="title"
                                    placeholder="Masukkan nama kegiatan"
                                    {...field}
                                    className="w-full px-4 py-2 mt-3 border-2 rounded-full border-gray-300 focus:border-blue-500 focus:outline-none"
                                />
                            )}
                        />
                        {errors.title && <p className="text-red-500 mt-1">{errors.title.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">
                            Tempat <span className="text-red-500">*</span>
                        </label>
                        <Controller
                            name="location"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    id="location"
                                    placeholder="Masukkan tempat kegiatan (Maksimal 25 Karakter)"
                                    {...field}
                                    maxLength={25}
                                    className="w-full px-4 py-2 mt-3 border-2 rounded-full border-gray-300 focus:border-blue-500 focus:outline-none"
                                />
                            )}
                        />
                        {errors.location && <p className="text-red-500 mt-1">{errors.location.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">
                            Foto <span className="text-red-500">*</span>
                        </label>
                        <label className='w-full flex items-center px-4 py-2 mt-3 bg-white rounded-full border-2 border-gray-300 cursor-pointer '>
                            <FiCamera className='text-xl mr-2 opacity-50 font-semibold' />
                            <span className='opacity-50 font-semibold'>{fileName || "Unggah foto kegiatan"}</span>
                            <input
                                type="file"
                                id="foto"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                        </label>
                        {errors.foto && <p className="text-red-500 mt-1">{errors.foto.message}</p>}
                    </div>

                    <div className='flex gap-10'>
                        <div className='w-[50%]'>
                            <label className="block font-medium">
                                Tanggal <span className="text-red-500">*</span>
                            </label>

                            <Controller
                                name="date"
                                control={control}
                                defaultValue={null}
                                render={({ field }) => (
                                    <DatePicker
                                        selected={field.value}
                                        onChange={(date) => {
                                            setStartDate(date);
                                            field.onChange(date);
                                        }}
                                        dateFormat="dd MMMM yyyy"
                                        placeholderText="Pilih tanggal"
                                        className='opacity-50'
                                        dayClassName={getDayClassName}
                                        ref={datePickerRef}
                                    />
                                )}
                            />

                            {errors.date && <p className="text-red-500 mt-1">{errors.date.message}</p>}
                        </div>
                        <div className='w-[50%]'>
                            <label className="block font-medium">
                                Waktu <span className="text-red-500">*</span>
                            </label>
                            <Controller
                                name="time"
                                control={control}
                                defaultValue={null}
                                render={({ field }) => (
                                    <DatePicker
                                        selected={field.value}
                                        onChange={(time) => {
                                            if (time) {
                                                setStartTime(time);
                                                field.onChange(time);
                                            } else {
                                                setStartTime(new Date());
                                                field.onChange(new Date());
                                            }
                                        }}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        timeFormat="HH:mm"
                                        timeCaption="Jam"
                                        dateFormat="HH:mm"
                                        placeholderText="Pilih waktu"
                                        className='opacity-50 w-full'
                                        ref={timePickerRef}
                                    />
                                )}
                            />
                            {errors.time && <p className="text-red-500 mt-1">{errors.time.message}</p>}
                        </div>
                    </div>

                    <div className='w-full gap-5 flex justify-end'>
                        <button
                            type='button'
                            className='bg-gray-300 text-black font-bold text-lg py-3 px-24 rounded-full mt-5'
                            onClick={() => navigate(-1)}
                        >
                            Kembali
                        </button>
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

export default CreateKalender
