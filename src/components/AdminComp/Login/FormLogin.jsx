import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Skema validasi menggunakan Zod
const schema = z.object({
    identifier: z.string().min(1, 'Email tidak boleh kosong'),
    password: z.string().min(8, 'Password harus minimal 8 karakter'),
});

const FormLogin = () => {

    const validAdmin = {
        email : 'admin@gmail.com',
        password : 'admin123'
    }
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });


    const onSubmit = (data) => {
        const isValidEmail = data.identifier === validAdmin.email;
        const isValidPassword = data.password === validAdmin.password;

        if (isValidEmail && isValidPassword) {
            sessionStorage.setItem('isLoggedIn', 'true');
            alert('Login berhasil! Selamat datang admin.');
            window.location.href = '/admin';
        } else {
            alert('Login gagal. Email atau Password salah.');
        }
    };

    const handleForgotPassword = () => {
        const adminPhone = '081249930807';
        window.location.href = `https://wa.me/${adminPhone}?text=Hai%20Admin%Abdimasa%2C%20Saya%20lupa%20kata%20sandi,%20mohon%20bantuan.`;
    };

    return (
        <div className="w-full flex items-center justify-center max-h-screen">
            <div className="container max-w-lg p-8 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-8'>
                    {/* Input Email */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Email</label>
                        <input
                            type="text"
                            {...register('identifier')}
                            placeholder="Masukkan Email"
                            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.identifier && (
                            <p className="text-red-500 text-sm mt-1">{errors.identifier.message}</p>
                        )}
                    </div>

                    {/* Input Password */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Password</label>
                        <input
                            type="password"
                            {...register('password')}
                            placeholder="Masukkan Password"
                            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Lupa Kata Sandi */}
                    <div className="text-end mt-4">
                        <button
                            type="button"
                            onClick={handleForgotPassword}
                            className="text-blue-500 hover:underline"
                        >
                            Lupa kata sandi?
                        </button>
                    </div>

                    {/* Tombol Masuk */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
                    >
                        Masuk
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormLogin;
