import React from 'react'
import { Navigate } from 'react-router-dom';
import FormLogin from '../../../components/AdminComp/Login/FormLogin'

const LoginAdmin = () => {
    const token = sessionStorage.getItem('token');

    if (token) {
        return <Navigate to="/admin" />;
    }
    return (
        <section className="font-poppins bg-cust-softblue bg-[url('/images/Admin/bgLogin.svg')]">
            <div className='lg:px-32 px-10 pt-20'>
                <div className='flex flex-col lg:flex-row items-center gap-14 lg:gap-20 xl:gap-56 justify-center'>
                    <div className='flex flex-col items-center gap-10'>
                        <img src="/images/Admin/titleLogin.svg" alt="Halo Admin" className='lg:w-[430px] lg:h-[97px] w-[243px] h-[55px]'/>
                        <img src="/images/Admin/Maskot.svg" alt="Maskot" className='w-2/3 lg:w-full'/>
                    </div>
                    <div>
                        <div className='flex flex-col gap-6 items-center'>
                            <h1 className='font-bold text-4xl'>Log In</h1>
                            <p className='xl:text-2xl text-xl text-gray-500'>Silahkan login terlebih dahulu</p>
                        </div>
                        <FormLogin />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginAdmin
