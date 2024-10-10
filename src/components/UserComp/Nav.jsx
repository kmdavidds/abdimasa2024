import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import Logo from "../../../public/logo.png";

export default function Navbar({ variant }) {
    const [click, setClick] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY >= 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const isActive = (paths) => paths.includes(pathname);

    const getIconColor = () => {
        if (isActive(["/"])) return "white";
        if (isScrolled) return "white";
        return "#3E9ADD";
    };

    return (
        <nav
            className={`font-medium xl:text-xl lg:text-base fixed font-poppins w-full lg:px-32 px-10 py-3 top-0 z-50 flex items-center justify-between transition-colors duration-200 ${isScrolled
                ? "bg-cust-blue text-white shadow-lg"
                : "bg-transparent shadow-lg lg:shadow-none"
                }`}
        >
            <div className="flex items-center lg:w-fit">
                <Link
                    to="/"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setClick(false); 
                    }}
                >
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-16"
                    />
                </Link>
            </div>


            <div className="items-center hidden gap-16 lg:flex xl:gap-20 2xl:gap-24">
                <Link
                    to="/"
                    className={`${isActive(["/"])
                        ? "font-semibold text-white hover:border-white"
                        : isActive(["/profil", "/wisata", "/berita", "/UMKM"])
                            ? "text-cust-blue"
                            : "text-white"
                        } ${isScrolled ? "text-white hover:border-white" : ""} hover:border-b-2 hover:border-cust-blue`}
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setClick(false);
                    }}
                >
                    Beranda
                </Link>

                <Link
                    to="/profil"
                    className={`${isActive(["/profil"])
                        ? "text-cust-blue font-semibold "
                        : isActive(["/"])
                            ? "text-white hover:border-white"
                            : "text-cust-blue"
                        } ${isScrolled ? "text-white hover:border-white" : ""} hover:border-b-2 hover:border-cust-blue`}
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setClick(false);
                    }}
                >
                    Profil
                </Link>


                <Link
                    to="/wisata"
                    className={`${isActive(["/wisata"])
                        ? "text-cust-blue font-semibold"
                        : isActive(["/"])
                            ? "text-white hover:border-white"
                            : "text-cust-blue"
                        } ${isScrolled ? "text-white hover:border-white" : ""} hover:border-b-2 hover:border-cust-blue`}
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setClick(false);
                    }}
                >
                    Wisata
                </Link>

                <Link
                    to="/UMKM"
                    className={`${isActive(["/UMKM"])
                        ? "text-cust-blue font-semibold"
                        : isActive(["/"])
                            ? "text-white hover:border-white"
                            : "text-cust-blue"
                        } ${isScrolled ? "text-white hover:border-white" : ""} hover:border-b-2 hover:border-cust-blue`}
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setClick(false);
                    }}
                >
                    UMKM
                </Link>

                <Link
                    to="/berita"
                    className={`${isActive(["/berita"])
                        ? "text-cust-blue font-semibold"
                        : isActive(["/"])
                            ? "text-white hover:border-white"
                            : "text-cust-blue"
                        } ${isScrolled ? "text-white hover:border-white" : ""} hover:border-b-2 hover:border-cust-blue`}
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setClick(false);
                    }}
                >
                    Berita
                </Link>
            </div>

            <button
                type="button"
                className="transition-transform duration-300 lg:hidden"
                onClick={() => setClick(!click)}
            >
                {click ? (
                    <TfiClose
                        size={24}
                        color={getIconColor()}
                        className="transition-transform duration-300"
                    />
                ) : (
                    <CiMenuFries
                        size={24}
                        color={getIconColor()}
                        className="transition-transform duration-300"
                    />
                )}
            </button>

            {click && (
                <div
                    className="fixed inset-0 bg-opacity-50 bg-cust-blue lg:hidden"
                    onClick={() => setClick(false)}
                ></div>
            )}
            <div
                className={`fixed top-0 right-0 h-full w-3/4 bg-cust-blue shadow-lg transition-transform ${click ? "translate-x-0" : "translate-x-full"
                    } duration-300`}
            >
                <div className="flex items-center justify-between px-10 py-4">
                    <img src={Logo} alt="Logo" className="w-16" />
                    <button onClick={() => setClick(false)}>
                        <TfiClose
                            size={24}
                            color="white"
                            className="transition-transform duration-300"
                        />
                    </button>
                </div>
                <ul className="flex flex-col items-center gap-5 py-4 text-base">
                    <li>
                        <Link
                            className={`${isActive(["/"])
                                ? "font-semibold border-b-2 text-white"
                                : "text-white"
                                } hover:border-b-2`}
                            to="/"
                            onClick={() => setClick(false)}
                        >
                            Beranda
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`${isActive(["/profil"])
                                ? "font-semibold border-b-2 text-white"
                                : "text-white"
                                } hover:border-b-2`}
                            to="/profil"
                            onClick={() => setClick(false)}
                        >
                            Profil
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`${isActive(["/wisata"])
                                ? "font-semibold border-b-2 text-white"
                                : "text-white"
                                } hover:border-b-2`}
                            to="/wisata"
                            onClick={() => setClick(false)}
                        >
                            Wisata
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`${isActive(["/UMKM"])
                                ? "font-semibold border-b-2 text-white"
                                : "text-white"
                                } hover:border-b-2`}
                            to="/UMKM"
                            onClick={() => setClick(false)}
                        >
                            UMKM
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`${isActive(["/berita"])
                                ? "font-semibold border-b-2 text-white"
                                : "text-white"
                                } hover:border-b-2`}
                            to="/berita"
                            onClick={() => setClick(false)}
                        >
                            Berita
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}