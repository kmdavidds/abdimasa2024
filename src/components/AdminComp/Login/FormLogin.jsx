import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Swal from 'sweetalert2';
import useLogin from "../../../api/adminApi/Auth"

// Skema validasi menggunakan Zod
const loginSchema = z.object({
    id: z.string().min(1, 'ID is required'),
    password: z.string().min(1, 'Password is required'),
});

const FormLogin = () => {
    const { login, loading, error } = useLogin();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });


    const onSubmit = async (data) => {
        await login(data.id, data.password);
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
                        <label htmlFor='id' className="block text-gray-700 font-bold mb-2">Username</label>
                        <input
                            type="text"
                            {...register('id')}
                            placeholder="Masukkan username"
                            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.id && (
                            <p className="text-red-500 text-sm mt-1">{errors.id.message}</p>
                        )}
                    </div>

                    {/* Input Password */}
                    <div className="mb-4">
                        <label htmlFor='password' className="block text-gray-700 font-bold mb-2">Password</label>
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
                        disabled={loading}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormLogin;
