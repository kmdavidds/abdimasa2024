// import necessary hooks
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { wisataDetail } from "../../../api/userApi/Wisata";

const WisataDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            console.log("ID yang dikirim ke API:", id);
            try {
                const response = await wisataDetail(id);
                console.log("Response dari API:", response);
                setData(response.place || response);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                console.log(err);
                setLoading(false);
            }
        };

        getData();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!data) return <div>Data tidak ditemukan</div>;

    return (
        <section className="font-poppins">
            <div id="description" className='lg:px-32 px-10 bg-cust-softblue pt-28 bg-[url("images/Landing/LandingSection/bgPattern.png")]'>
                <div>
                    <img src={data.imageURL1} alt={data.name} className="pb-20" />
                </div>
                <div className="flex flex-col gap-8 pb-10">
                    <div className="gap-4 flex flex-col">
                        <h1 className="font-bold lg:text-2xl text-sm">Deskripsi</h1>
                        <p className="text-justify text-cust-gray text-xs lg:text-xl">{data.description}</p>
                    </div>
                    <div className="gap-4 flex flex-col">
                        <h1 className="font-bold lg:text-2xl text-sm">Alamat</h1>
                        <p className="text-cust-gray text-xs lg:text-xl">{data.address}</p>
                    </div>
                    <div className="flex gap-36">
                        <div className="gap-4 flex flex-col">
                            <h1 className="font-bold lg:text-2xl text-sm">Jam Buka</h1>
                            <p className="text-cust-gray text-xs lg:text-xl">{data.openingHours}</p>
                        </div>
                        <div className="gap-4 flex flex-col">
                            <h1 className="font-bold lg:text-2xl text-sm">Jam Tutup</h1>
                            <p className="text-cust-gray text-xs lg:text-xl">{data.closingHours}</p>
                        </div>
                    </div>
                    <div className="gap-4 flex flex-col">
                        <h1 className="font-bold lg:text-2xl text-sm">Tiket Masuk</h1>
                        <p className="text-cust-gray text-xs lg:text-xl">{data.entryPrice}</p>
                    </div>
                </div>
            </div>
            <div id="ulasan" className='py-20 lg:px-32 px-10 bg-cust-blue bg-[url("images/Landing/LandingSection/bgPattern.png")]'>
                <img src={data.imageURL2} alt="" />
            </div>
            <div className="py-20 lg:px-32 px-10 bg-cust-softblue">
                <img src={data.imageURL3} alt="" />
            </div>
        </section>
    )
}

export default WisataDetail;