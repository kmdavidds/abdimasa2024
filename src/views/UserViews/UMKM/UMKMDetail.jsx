import React from "react";

const UmkmDetail = () => {
    return (
        <section className="font-poppins">
            <div id="description" className='lg:px-32 px-10 bg-cust-softblue pt-28 bg-[url("images/Landing/LandingSection/bgPattern.png")]'>
                <div>
                    <img src="/images/UMKM/frameUMKM.webp" alt="" className="pb-20" />
                </div>
                <div className="flex flex-col gap-8 pb-10">
                    <div className="gap-4 flex flex-col">
                        <h1 className="font-bold">Deskripsi</h1>
                        <p className="text-justify text-cust-gray">Kerajinan batik dari Desa Wisata Toyomarto merupakan produk handmade ibu-ibu pengrajin lokal yang menggunakan teknik batik tulis. Dengan pewarna alami dan motif khas yang terinspirasi oleh alam, batik ini dapat dijadikan baju, selendang, taplak meja, dan lainnya. Memiliki batik Toyomarto berarti Anda mendukung pelestarian tradisi lokal dan memberdayakan pengrajin setempat. Dengan mengenakan atau memiliki batik Toyomarto, Anda tidak hanya mendapatkan busana yang indah tetapi juga karya seni yang memiliki nilai historis dan budaya.</p>
                    </div>
                    <div className="gap-4 flex flex-col">
                        <h1 className="font-bold">Alamat</h1>
                        <p className="text-cust-gray">Dusun Wonosari Desa Toyomarto Kecamatan Singosari Kabupaten Malang, Jawa Timur</p>
                    </div>
                    <div className="flex gap-36">
                        <div className="gap-4 flex flex-col">
                            <h1 className="font-bold">Harga</h1>
                            <p className="text-cust-gray">Rp. 47.000 - Rp. 259.000</p>
                        </div>
                        {/* <div className="gap-4 flex flex-col">
                            <h1 className="font-bold">Jam Tutup</h1>
                            <p className="text-cust-gray">15.00 WIB</p>
                        </div> */}
                    </div>
                    <div className="gap-4 flex flex-col">
                        <h1 className="font-bold">Contact Person</h1>
                        <p className="text-cust-gray">081222110991</p>
                    </div>
                </div>
            </div>
            <div id="ulasan" className='py-20 lg:px-32 px-10 bg-cust-blue bg-[url("images/Landing/LandingSection/bgPattern.png")]'>
                <img src="/images/UMKM/umkmUlasan.webp" alt="" />
            </div>
            <div className="py-20 lg:px-32 px-10 bg-cust-softblue">
                <img src="/images/UMKM/umkmHero.webp" alt="" />
            </div>
        </section>
    )
}

export default UmkmDetail

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import getUmkm from "../../../api/userApi/Umkm";

// const UmkmDetail = () => {
//     const { id } = useParams();
//     const [umkm, setUmkm] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchUmkm = async () => {
//             try {
//                 const businesses = await getUmkm();
//                 const selectedUmkm = businesses.find(business => business.id === id);
//                 if (selectedUmkm) {
//                     setUmkm(selectedUmkm);
//                 } else {
//                     setError("UMKM not found.");
//                 }
//             } catch (err) {
//                 setError("Failed to fetch UMKM details.");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchUmkm();
//     }, [id]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }
//     if (error) {
//         return <div>{error}</div>;
//     }
//     if (!umkm) {
//         return <div>No UMKM details available.</div>;
//     }

//     return (
//         <div className="umkm-detail-container">
//             <h1 className="text-3xl font-semibold">{umkm.name}</h1>
//             <div className="images-grid">
//                 {umkm.images.map((image, index) => (
//                     <img key={index} src={image} alt={`UMKM image ${index + 1}`} className="w-full h-auto" />
//                 ))}
//             </div>
//             <p className="text-lg mt-4">{umkm.description}</p>
//             <div className="mt-4">
//                 <strong>Address:</strong> <span>{umkm.address}</span>
//             </div>
//             <div className="mt-2">
//                 <strong>Price Range:</strong> <span>{umkm.priceRange}</span>
//             </div>
//             <div className="mt-2">
//                 <strong>Contact:</strong> <span>{umkm.contact}</span>
//             </div>
//             <div className="mt-2">
//                 <strong>Rating:</strong> <span>{umkm.rating}</span>
//             </div>
//             <div className="mt-4">
//                 <a href={umkm.mapURL} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
//                     View on Map
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default UmkmDetail;
