import React from 'react'
import Navbar from './Dashboard/Navbar'
import SideBar from './Dashboard/SideBar'

const PageLayout = ({ children }) => {
    return (
        <div className='h-screen flex flex-col'>
            <Navbar />
            <div className='flex flex-grow overflow-hidden'>
                <div className='w-[20%]'>
                    <SideBar />
                </div>
                <div className='w-[80%] h-full overflow-y-hidden'>
                    <div className='w-full h-full overflow-y-auto bg-cust-softblue flex flex-col items-center py-20'>
                        <div className='w-[90%]'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageLayout
