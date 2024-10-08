import React from 'react'

const Navbar = () => {

    const handleLogout = () => {
        sessionStorage.removeItem('isLoggedIn');
        window.location.href = '/admin/login';
    };

    return (
        <div className='w-full px-10 flex justify-center items-center py-5 border-navbar bg-cust-blue  shadow-[0_4px_6px_-1px_rgba(0,0,0,0.5)] z-10'>
            <div className='flex justify-between container items-center'>
                <div className='flex gap-5 items-center justify-center cursor-pointer'>
                    <img src="/logo.png" alt="Logo Abdimasa" className='max-h-10' />
                    <h1 className='text-2xl font-bold text-white'>Desa Toyomarto</h1>
                </div>
                <div>
                    <button className='bg-white text-cust-blue hover:bg-slate-200  px-8 py-3 rounded-xl' onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
