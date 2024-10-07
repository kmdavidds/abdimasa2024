import React from 'react'

const SejarahDesa = () => {
    return (
        <section className='font-poppins'>
            <div className="bg-cust-blue pt-10 bg-[url('images/Profile/SambutanSection/bgPattern.png')] w-full lg:px-32 px-10 pb-36">
                <div className='flex lg:justify-between justify-center items-end mb-16'>
                    <img src="/images/Profile/SejarahSection/sejarahTitle.webp" alt="title" className='lg:w-[430px] lg:h-[97px] w-[243px] h-[55px]' />
                    <img src="/images/Landing/KalenderSection/icon.svg" alt="icon" className='lg:flex hidden'/>
                </div>
            
                <div className='flex flex-col lg:flex-row gap-10 items-center'>
                    <img src="/images/Profile/SejarahSection/sejarah.webp" alt="sejarah" className='lg:w-[434px] lg:h-[422px] w-[308px] h-[300px]'/>
                    <ul className='space-y-4 text-cust-softblue flex flex-col justify-center text-justify lg:text-xl text-xs'>
                        <li>Didirikan pada awal abad ke-18, desa ini awalnya adalah permukiman kecil yang dihuni oleh para petani dan pengrajin. Pada masa kolonial, Toyomarto menjadi salah satu pusat pengrajin cobek batu dan alat-alat rumah tangga dari batu. Kerajinan ini diwariskan secara turun-temurun dan menjadi identitas kuat desa ini. Seiring berjalannya waktu, keahlian penduduk Toyomarto dalam membuat cobek batu berkembang, dan produk mereka mulai dikenal di luar daerah.</li>
                        <li>Pada tahun 2000-an, dengan meningkatnya minat terhadap pariwisata dan budaya lokal, desa ini mulai bertransformasi menjadi destinasi wisata. Pemerintah daerah dan masyarakat setempat bekerja sama untuk mengembangkan potensi wisata alam dan budaya desa. Dan Desa Toyomarto pun masih eksis hingga saat ini.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SejarahDesa
