import React from 'react'
import { Navigate } from 'react-router-dom';
import FormLogin from '../../../components/AdminComp/Login/FormLogin'

const LoginAdmin = () => {
    const token = sessionStorage.getItem('token');

    if (token) {
        return <Navigate to="/admin" />;
    }
    return (
        <div className="bg-cust-softblue bg-[url('/images/Admin/bgLogin.svg')] bg-cover  w-full flex items-center justify-center">
            <div className='container max-w-[80%] h-screen flex items-center justify-center'>
                <div className='w-1/2 flex flex-col items-center justify-center gap-14'>
                    <img src="/images/Admin/titleLogin.svg" alt="Halo Admin" />
                    <img src="/images/Admin/Maskot.svg" alt="Maskot" />
                </div>
                <div className='w-1/2 flex flex-col items-center justify-center gap-10 '>
                    {/* title */}
                    <div className=' text-center space-y-6'>
                        <h2 className='font-bold text-4xl'>Log In</h2>
                        <p className='text-2xl text-gray-500'>Silahkan login terlebih dahulu</p>
                    </div>
                    {/* form */}
                    <FormLogin />

                </div>
            </div>
        </div>
    )
}

export default LoginAdmin
