import React, { useState, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { FiCamera } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const schema = z.object({
    namaKegiatan: z.string().min(1, { message: 'Nama kegiatan harus diisi' }),
    tempat: z.string().min(1, { message: 'Tempat harus diisi' }),
    foto: z.instanceof(File, { message: 'Foto harus diunggah' }),
    tanggal: z.date({ required_error: 'Tanggal harus diisi' }),
    jam: z.string().min(1, { message: 'Jam harus diisi' }),
});

const KalenderAdmin = () => {
    const [fileName, setFileName] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [startTime, setStartTime] = useState(null);
    const today = new Date();
    const datePickerRef = useRef(null);
    const timePickerRef = useRef(null);

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

    const onSubmit = (data) => {
        console.log('Form submitted:', data);
        setFileName('');
        setSelectedDate('');
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
                            name="namaKegiatan"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    id="namaKegiatan"
                                    placeholder="Masukkan nama kegiatan"
                                    {...field}
                                    className="w-full px-4 py-2 mt-3 border-2 rounded-full border-gray-300 focus:border-blue-500 focus:outline-none"
                                />
                            )}
                        />
                        {errors.namaKegiatan && <p className="text-red-500 mt-1">{errors.namaKegiatan.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">
                            Tempat <span className="text-red-500">*</span>
                        </label>
                        <Controller
                            name="tempat"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    id="tempat"
                                    placeholder="Masukkan tempat kegiatan (Maksimal 10 Karakter)"
                                    {...field}
                                    className="w-full px-4 py-2 mt-3 border-2 rounded-full border-gray-300 focus:border-blue-500 focus:outline-none"
                                />
                            )}
                        />
                        {errors.tempat && <p className="text-red-500 mt-1">{errors.tempat.message}</p>}
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
                            <div
                                onClick={openDatePicker}
                                className='flex items-center cursor-pointer mt-3 w-full px-4 py-2 bg-white border-2 font-semibold border-gray-300 rounded-full'
                            >
                                <CiCalendar className='text-xl mr-2' />

                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    dateFormat="dd MMMM yyyy"
                                    placeholderText="Pilih tanggal"
                                    className='opacity-50'
                                    dayClassName={getDayClassName}
                                    ref={datePickerRef}
                                />

                            </div>
                            {errors.tanggal && <p className="text-red-500 mt-1">{errors.tanggal.message}</p>}
                        </div>
                        <div className='w-[50%]'>
                            <label className="block font-medium">
                                Waktu <span className="text-red-500">*</span>
                            </label>
                            <div
                                onClick={openTimePicker}
                                className='flex items-center cursor-pointer mt-3 w-full px-4 py-2 bg-white border-2 font-semibold border-gray-300 rounded-full'
                            >
                                <CiClock2 className='text-xl mr-2' />
                                <DatePicker
                                    selected={startTime}
                                    onChange={(time) => setStartTime(time)}
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
                            </div>
                            {errors.jam && <p className="text-red-500 mt-1">{errors.jam.message}</p>}
                        </div>
                    </div>

                    <div className='w-full flex justify-end'>
                        <button
                            type="submit"
                            className="py-3 px-24 text-white font-bold text-lg bg-blue-500 rounded-full hover:bg-blue-600 mt-5"
                        >
                            Kirim
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default KalenderAdmin
