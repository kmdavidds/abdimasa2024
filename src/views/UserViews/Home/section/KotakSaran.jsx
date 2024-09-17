import React, { useState } from 'react'
import { CiFileOn } from "react-icons/ci";
// hover atropos
import Atropos from "atropos/react";

const KotakSaran = () => {
    const [formData, setFormData] = useState({
        name: '',
        complaint: '',
        attachment: null,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            attachment: e.target.files[0],
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) {
            newErrors.name = 'Nama harus diisi';
        }
        if (!formData.complaint) {
            newErrors.complaint = 'Pengaduan harus diisi';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        console.log('Form submitted:', formData);
        setFormData({
            name: '',
            complaint: '',
            attachment: null,
        });
        setErrors({});
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
                        <Atropos
                            shadow={true}
                            shadowOffset={50}
                            highlight={true}
                            duration={100}
                            className='absolute group md:top-[22%] sm:top-[25%] sm:right-[30%] top-[25%] right-[30%]'

                        >
                            <div data-atropos-offset="15" className='max-w-[130px] sm:max-w-[240px] md:max-w-[200px] xl:max-w-[240px] rounded-lg bg-gradient-to-b from-[#CBE0F8] via-[#E2EDF9] to-[#F2F8FF] flex items-center justify-center px-3 sm:px-5 py-2 sm:py-3 text-center border-2 border-gray-300 text-[8px] sm:text-base md:text-xs xl:text-base'>
                                Lorem ipsum dolor sit amet  adipisicing elit. 1
                            </div>
                        </Atropos>
                        <Atropos
                            shadow={true}
                            shadowOffset={50}
                            highlight={true}
                            duration={100}
                            className='absolute group sm:bottom-[40%] md:bottom-[15%] md:left-[7%] sm:left-[0%] left-[10%] bottom-[20%]'

                        >
                            <div data-atropos-offset="15" className='max-w-[130px] sm:max-w-[240px] md:max-w-[200px] xl:max-w-[240px] rounded-lg bg-gradient-to-b from-[#CBE0F8] via-[#E2EDF9] to-[#F2F8FF] flex items-center justify-center px-3 sm:px-5 py-2 sm:py-3 text-center border-2 border-gray-300 text-[8px] sm:text-base md:text-xs xl:text-base'>
                                Lorem ipsum dolor sit amet  adipisicing elit. 2
                            </div>
                        </Atropos>
                        <Atropos
                            shadow={true}
                            shadowOffset={50}
                            highlight={true}
                            duration={100}
                            className='absolute group md:top-[45%] md:left-[-5%] md:bottom-[50%] sm:left-[10%] sm:bottom-[20%] left-[0%] bottom-[40%]'

                        >
                            <div data-atropos-offset="15" className='max-w-[130px] sm:max-w-[240px] md:max-w-[200px] xl:max-w-[240px] rounded-lg bg-gradient-to-b from-[#CBE0F8] via-[#E2EDF9] to-[#F2F8FF] flex items-center justify-center px-3 sm:px-5 py-2 sm:py-3 text-center border-2 border-gray-300 text-[8px] sm:text-base md:text-xs xl:text-base'>
                                Lorem ipsum dolor sit amet  adipisicing elit. 3
                            </div>
                        </Atropos>
                    </div>
                </div>
                <div className='md:w-1/2 w-full flex items-center justify-center text-sm sm:text-base'>
                    <div className='w-full max-w-[80%]  xl:max-w-[100%] xl:w-max flex flex-col items-center justify-center gap-7 '>
                        <div className='select-none md:block hidden'>
                            <img src="/images/Landing/KotakSaranSection/judulSaran.svg" alt="" />
                        </div>
                        <form onSubmit={handleSubmit} enctype="multipart/form-data" className="space-y-7 w-full">
                            <div>
                                <label htmlFor="name" className="block font-medium">
                                    Nama <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Masukkan nama Anda"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-3 border-2 rounded-full border-cust-blue border-opacity-35 focus:border-opacity-100  focus:outline-none"
                                />
                                {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
                            </div>

                            <div>
                                <label htmlFor="complaint" className="block font-medium">
                                    Pengaduan <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="complaint"
                                    name="complaint"
                                    placeholder="Masukkan pengaduan disini..."
                                    value={formData.complaint}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-3 border-2 rounded-full border-cust-blue border-opacity-35 focus:border-opacity-100 focus:outline-none"
                                />
                                {errors.complaint && <p className="text-red-500 mt-1">{errors.complaint}</p>}
                            </div>

                            <div>
                                <label htmlFor="attachment" className="block font-medium">
                                    Lampiran (Optional)
                                </label>
                                <label className='w-full flex flex-col items-start px-4 py-2 mt-3 bg-white rounded-full border-2 border-cust-blue border-opacity-35 focus:border-opacity-100 cursor-pointer focus:outline-none hover:text-white'>
                                    <span className="text-gray-500 items-center">
                                        <CiFileOn className='text-xl inline' />
                                        {formData.attachment ? formData.attachment.name : " Unggah foto/PDF jika ada"}
                                    </span>
                                    <input type="file" id="attachment" name="attachment" onChange={handleFileChange} className="hidden" />
                                </label>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full select-none py-3 text-white font-bold text-sm sm:text-lg bg-blue-500 rounded-full hover:bg-blue-600 mt-5"
                                >
                                    Kirim
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default KotakSaran
