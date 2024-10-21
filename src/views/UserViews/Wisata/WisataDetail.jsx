import React from "react";

const WisataDetail = () => {
    return (
        <section className="font-poppins">
            <div id="description" className='lg:px-32 px-10 bg-cust-softblue pt-28 bg-[url("images/Landing/LandingSection/bgPattern.png")]'>
                <div>
                    <img src="/images/Wisata/frameWisata.webp" alt="" className="pb-20" />
                </div>
                <div className="flex flex-col gap-8 pb-10">
                    <div className="gap-4 flex flex-col">
                        <h1 className="font-bold">Deskripsi</h1>
                        <p className="text-justify text-cust-gray">Dengan ketinggian mencapai 1250 MDPL, pengunjung dapat menikmati pemandangan hamparan kebun teh yang luas dengan biaya tiket masuk hanya sebesar 10 ribu rupiah. Tidak hanya itu, spot-spot selfie yang tersebar di sepanjang bukit menambah daya tariknya. Bukit Kuneer menawarkan kesempatan untuk bersantai sambil menikmati udara segar dan panorama alam yang memukau. Bukit Kuneer siap menyambut para pengunjung yang ingin menciptakan kenangan tak terlupakan.</p>
                    </div>
                    <div className="gap-4 flex flex-col">
                        <h1 className="font-bold">Alamat</h1>
                        <p className="text-cust-gray">Dusun Wonosari Desa Toyomarto Kecamatan Singosari Kabupaten Malang, Jawa Timur</p>
                    </div>
                    <div className="flex gap-36">
                        <div className="gap-4 flex flex-col">
                            <h1 className="font-bold">Jam Buka</h1>
                            <p className="text-cust-gray">08.00 WIB</p>
                        </div>
                        <div className="gap-4 flex flex-col">
                            <h1 className="font-bold">Jam Tutup</h1>
                            <p className="text-cust-gray">15.00 WIB</p>
                        </div>
                    </div>
                    <div className="gap-4 flex flex-col">
                        <h1 className="font-bold">Tiket Masuk</h1>
                        <p className="text-cust-gray">Rp. 10.000</p>
                    </div>
                </div>
            </div>
            <div id="ulasan" className='py-20 lg:px-32 px-10 bg-cust-blue bg-[url("images/Landing/LandingSection/bgPattern.png")]'>
                <img src="/images/UMKM/umkmUlasan.webp" alt="" />
            </div>
            <div className="py-20 lg:px-32 px-10 bg-cust-softblue">
                <img src="/images/Wisata/petaLokasi.webp" alt="" />
            </div>
        </section>
    )
}

export default WisataDetail