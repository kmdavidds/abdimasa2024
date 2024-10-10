import React from 'react'
import { NavLink } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";
import { TiNews } from "react-icons/ti";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import { GiShop } from "react-icons/gi";
import { MdOutlinePlace } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";

const SideBar = () => {

    const adminRoutes = [
        { name: 'Dashboard', path: '/admin', icon: <RxDashboard />, exact: true },
        { name: 'Berita', path: '/admin/berita', icon: <TiNews /> },
        { name: 'Kalender', path: '/admin/kalender', icon: <FaCalendarAlt /> },
        { name: 'Kotak Saran', path: '/admin/saran', icon: <FaRegComments /> },
        { name: 'UMKM', path: '/admin/umkm', icon: <GiShop /> },
        { name: 'Wisata', path: '/admin/wisata', icon: <MdOutlinePlace /> },
        { name: 'Penduduk', path: '/admin/penduduk', icon: <FaPeopleGroup/>  }
    ];

    return (
        <div className='w-full h-full bg-cust-blue flex justify-center items-center'>
            {/* berisi routing an ke tiap page admin */}
            <div className='w-[80%] h-[90%]'>
                <ul className="space-y-4">
                    {adminRoutes.map((route, index) => (
                        <li key={index}>
                            <NavLink
                                to={route.path}
                                className={({ isActive }) =>
                                    `flex gap-5 items-center text-2xl duration-500 px-4 py-3 rounded-lg ${isActive ? "bg-gradient-to-b from-[#CBE0F8] via-[#E2EDF9] to-[#F2F8FF] text-cust-blue font-bold pl-8" : " text-white"
                                    }`
                                }
                                end={route.exact}
                            >
                                <div className='flex gap-3 items-center text-2xl'>
                                    {route.icon}{route.name}
                                </div>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SideBar

