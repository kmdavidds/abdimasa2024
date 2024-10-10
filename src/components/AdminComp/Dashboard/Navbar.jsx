import React from 'react'

const Navbar = () => {

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        window.location.href = '/admin/login';
    };

    return (
        <div className='w-full flex justify-center items-center py-5 border-navbar bg-cust-blue  shadow-[0_4px_6px_-1px_rgba(0,0,0,0.5)] z-10'>
            <div className='flex justify-between w-full items-center max-w-[95%]'>
                <div className='flex gap-5 items-center justify-center cursor-pointer'>
                    <img src="/logo.png" alt="Logo Abdimasa" className='max-h-10' />
                    <h1 className='text-2xl font-bold text-white'>Desa Toyomarto</h1>
                </div>
                <div>
                    <button className='bg-transparent text-white border-white hover:bg-white hover:text-cust-blue font-bold text-xl px-12 py-2 rounded-full border-2' onClick={handleLogout}>Keluar</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar