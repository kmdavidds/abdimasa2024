import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../../../public/logo.png";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [colorChange, setColorChange] = useState(false);
    const location = useLocation();

    const handleClick = () => setNav(!nav);

    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorChange(true);
        }
        if (isActive(["/wisata", "/profil"])) {
            return "cust-blue";
        }
        else {
            setColorChange(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNavbarColor);
        return () => {
            window.removeEventListener('scroll', changeNavbarColor);
        };
    }, []);

    const isActive = (paths) => {
        return paths.includes(location.pathname);
    };

    return (
        <section className={`fixed lg:px-20 px-5 py-5 items-center flex w-full justify-between font-poppins z-10 ${colorChange ? 'bg-cust-blue shadow-lg shadow-cust-dark' : 'bg-transparent'} text-white transition-colors duration-300`}>
            <div className='w-16'>
                <img src={Logo} alt="logo" />
            </div>

            <ul className="hidden md:flex gap-11 text-xl">
                <li>
                    <Link
                        to="/"
                        className={`${isActive(['/'])
                            ? 'font-semibold'
                            : isActive
                            } ${colorChange ? 'text-white' : 'text-white'}`}
                    >
                        Beranda
                    </Link>
                </li>
                <li>
                    <Link
                        to="/profil"
                        className={`${isActive(['/profil'])
                            ? 'font-semibold'
                            : isActive (["/", "/galeri"])
                            } ${colorChange ? 'text-white' : 'text-white'}`}
                    >
                        Profil
                    </Link>
                </li>
                <li>
                    <Link
                        to="/wisata"
                        className={`${isActive(['/wisata'])
                            ? 'font-semibold'
                            : isActive
                            } ${colorChange ? 'text-white' : 'text-white'}`}
                    >
                        Wisata
                    </Link>
                </li>
                <li>
                    <Link
                        to="/UMKM"
                        className={`${isActive(['/UMKM'])
                            ? 'font-semibold'
                            : isActive
                            } ${colorChange ? 'text-white' : 'text-white'}`}
                    >
                        UMKM
                    </Link>
                </li>
                <li>
                    <Link
                        to="/berita"
                        className={`${isActive(['/berita'])
                            ? 'font-semibold'
                            : isActive
                            } ${colorChange ? 'text-white' : 'text-white'}`}
                    >
                        Berita
                    </Link>
                </li>
            </ul>

            <div className="md:hidden z-10" onClick={handleClick}>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            <ul
                className={
                    !nav
                        ? 'hidden '
                        : 'absolute top-0 right-0 w-3/4 h-screen bg-cust-blue flex flex-col justify-start px-5 pt-36 items-start gap-10'
                }
            >
                <li className="text-xl">
                    <Link onClick={handleClick} to="/" smooth={true} duration={500}>
                        Beranda
                    </Link>
                </li>
                <li className="text-xl">
                    <Link onClick={handleClick} to="/profil" smooth={true} duration={500}>
                        Profil
                    </Link>
                </li>
                <li className="text-xl">
                    <Link onClick={handleClick} to="/wisata" smooth={true} duration={500}>
                        Wisata
                    </Link>
                </li>
                <li className="text-xl">
                    <Link onClick={handleClick} to="/UMKM" smooth={true} duration={500}>
                        UMKM
                    </Link>
                </li>
                <li className="text-xl">
                    <Link onClick={handleClick} to="/berita" smooth={true} duration={500}>
                        Berita
                    </Link>
                </li>
            </ul>
        </section>
    );
};

export default Navbar;
