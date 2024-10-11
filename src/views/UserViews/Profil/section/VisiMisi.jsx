import React, { useState } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

const VisiMisi = () => {
    const [isVisiOpen, setIsVisiOpen] = useState(false);
    const [isMisiOpen, setIsMisiOpen] = useState(true);

    const toggleVisi = () => {
        setIsVisiOpen(!isVisiOpen);
    };

    const toggleMisi = () => {
        setIsMisiOpen(!isMisiOpen);
    };

    return (
        <section className='font-poppins'>
            <div className="bg-cust-softblue pt-10 lg:px-32 px-10 pb-36 justify-center">
                <div className='flex justify-center mb-16'>
                    <img src="/images/Profile/VisiMisiSection/visimisiTitle.webp" alt="title" className='lg:w-[430px] lg:h-[97px] w-[243px] h-[55px]' />
                </div>

                <div className='flex flex-col lg:flex-row lg:justify-between gap-16 items-center lg:items-start'>
                    <img src="/images/Profile/VisiMisiSection/visimisi.webp" alt="Hero" className='w-[308px] h-[270px] xl:w-[480px] xl:h-[421px] lg:order-2 pt-2' />
                    <div className='lg:order-1 w-full'>
                        <div className="mb-7">
                            <button
                                className="w-[108px] lg:w-[218px] text-left flex justify-between bg-cust-blue text-white font-bold -mb-2 py-3 lg:py-4 px-6 rounded-t-2xl lg:text-2xl text-sm"
                                onClick={toggleVisi}
                            >
                                Visi
                                {isVisiOpen ? <FiChevronUp /> : <FiChevronDown />}
                            </button>
                            <div
                                className={`transition-max-height duration-300 ease-in-out bg-gradient-to-t from-[#F2F8FF] via-[#E2EDF9] to-[#E2EDF9] px-6 py-6 rounded-b-2xl rounded-tr-2xl lg:text-lg text-xs mt-2 border-cust-blue border border-opacity-30`}
                            >
                                {isVisiOpen && (
                                    <p>Terwujudnya Masyarakat Toyomarto yang Sehat, Cerdas, dan Sejahtera</p>
                                )}
                            </div>
                        </div>

                        <div className="mb-7">
                            <button
                                className="w-[108px] lg:w-[218px] text-left flex justify-between bg-cust-blue text-white font-bold -mb-2 py-3 lg:py-4 px-6 rounded-t-2xl lg:text-2xl text-sm"
                                onClick={toggleMisi}
                            >
                                Misi
                                {isMisiOpen ? <FiChevronUp /> : <FiChevronDown />}
                            </button>
                            <div
                                className={`transition-max-height duration-300 ease-in-out bg-gradient-to-t from-[#F2F8FF] via-[#E2EDF9] to-[#E2EDF9] px-6 py-6 rounded-b-2xl rounded-tr-2xl lg:text-lg text-xs mt-2 border-cust-blue border border-opacity-30`}
                            >
                                {isMisiOpen && (
                                    <ul className="list-decimal pl-5 text-justify space-y-4">
                                        <li>
                                            <strong>Cendekia</strong>
                                            <ul className='list-disc pl-5'>
                                                <li>Membangun Toyomarto sebagai Desa “Cendekia” dengan meningkatkan kualitas sumber daya manusia yang cerdas dan tangguh melalui pendidikan dan peningkatan minat baca masyarakat.</li>
                                                <li>Meningkatkan akses masyarakat terhadap layanan pendidikan untuk menunjang upaya peningkatan indeks pembangunan manusia, terutama memenui capaian wajib belajar Minimal 9 tahun, dengan mengupayakan pendidikan kelompok belajar paket A (SD), B (SMP), Paket C (SMU).</li>
                                                <li>Mengupayakan sarana / prasarana bagi ruang gerak anak dan remaja agar dapat berkreasi, tumbuh, dan berkembang secara paripurna.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Ekowisata</strong>
                                            <ul className='list-disc pl-5'>
                                                <li>Membangun Toyomarto sebagai Destinasi “Ekowisata” merupakan salah satu kegiatan pariwisata yang berwawasan lingkungan dengan mengutamakan aspek konservasi alam.</li>
                                                <li>Aspek pemberdayaan sosial budaya ekonomi masyarakat lokal serta aspek pembelajaran dan pendidikan.</li>
                                                <li>Terbentuknya Kawasan Rumah Pangan Lestari (KRPL) yaitu rumah tangga dengan prinsip pemanfaatan pekarangan yang ramah lingkungan dan dirancang untuk pemenuhan kebutuhan pangan dan gizi keluarga, diversifikasi pangan berbasis sumber daya lokal, pelestarian tanaman pangan untuk masa depan serta peningkatan pendapatan yang pada akhirnya akan meningkatkan kesejahteraan masyarakat.</li>
                                                <li>Menumbuh kembangkan usaha mikro kecil menengah bersama BUMDES (Badan Usaha Milik Desa).</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Religius</strong>
                                            <ul className='list-disc pl-5'>
                                                <li>Membangun Masyarakat Toyomarto yang Semakin “Religius” dan Menjunjung Tinggi Nilai-Nilai Moral, Sosial, Kerukunan dan Toleransi.</li>
                                                <li>Meningkatkan Kehidupan Beriman dan berakhlak mulia.</li>
                                                <li>Bersinergi antara Pemerintah Desa dan Lembaga/Organisasi Keagamaan.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Daya Saing</strong>
                                            <ul className='list-disc pl-5'>
                                                <li>Membangun Toyomarto yang memiliki “Daya Saing” dengan Berorientasi pada Kualitas Pelayanan Publik Berbasis Teknologi Informasi dan Komunikasi.</li>
                                                <li>Meningkatkan Kualitas Sumber Daya Manusia dan kualitas layanan di bidang pelayanan publik dan serta optimalisasi tugas pokok dan fungsi pada bidang masing-masing perangkat desa, sesuai dengan SOTK (Struktur Organisasi tata Kerja) Pemerintah Desa.</li>
                                                <li>Untuk meningkatkan kepercayaan masyarakat, Kepala Desa dan Aparaturnya, Berprinsip pada keterbukaan terhadap pengelolaan keuangan Desa, mengikutsertakan masyarakat dalam pengelolaannya, Transparansi keuangan yang dimaksud adalah di mana masyarakat harus mengetahui proses perencanaan, pelaksanaan penatausahaan, dan pertanggungjawaban, serta sumber-sumber keuangan yang didapat dan dibelanjakan dan disosialisasikan kepada masyarakat melalui Rapat terbuka RT dan Media Desa secara terbuka.</li>
                                                <li>Membentuk teamwork yang kuat antara pemerintah desa dan kelembagaan desa sehingga terjalin sinergitas dalam membangun desa sesuai dengan regulasi yang berlaku, tanpa adanya tumpang tindih kewenangan.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Aman & Nyaman</strong>
                                            <ul className='list-disc pl-5'>
                                                <li>Mewujudkan Toyomarto yang “Aman dan Nyaman” melalui Peningkatan Kualitas Sistem Keamanan (membangun komunikasi di Masyarakat dari bawah sampai tingkat pemerintahan desa), Menghidupkan kembali fungsi Linmas dan Kelompok Ronda di masyarakat, serta pemeliharaan pos-pos Keamanan guna Menciptakan Lingkungan desa yang Aman melalui Peningkatan Kualitas dan Kuantitas Pengawasan Keamanan Lingkungan yang mampu memberikan pelayanan yang optimal sesuai fungsi bagi masyarakat.</li>
                                                <li>Melaksanakan Pembangunan Infrastruktur yang berkualitas serta melakukan pemetaan dan evaluasi terhadap pembangunan infrastruktur Desa, Akan tercipta kualitas lingkungan desa yang lebih nyaman dan bebas kumuh.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Sehat dan Sejahtera</strong>
                                            <ul className='list-disc pl-5'>
                                                <li>Mewujudkan Toyomarto Desa yang Sehat melalui Peningkatan Kualitas Pelayanan Kesehatan untuk Menciptakan Kondisi Masyarakat yang Lebih “Sehat Sejahtera” dengan Lingkungan desa yang Bersih.</li>
                                                <li>Meningkatkan Akses Masyarakat terhadap Layanan Kesehatan yang Lebih Berkualitas, Menurunkan Disparitas Pelayanan Kesehatan dalam Rangka Meningkatkan Derajat Kesehatan Masyarakat.</li>
                                                <li>Menciptakan Lingkungan desa yang Lebih Asri, Bersih dan Sehat melalui Peningkatan Kualitas Pelayanan Kebersihan desa dan Peran Masyarakat yang Sadar Bersih dalam Pengelolaan Sampah Meningkatkan kualitas hidup dan Kesejahteraan Masyarakat.</li>
                                                <li>Mengupayakan kesehatan (Preventif) masyarakat dengan tabungan kesehatan mandiri masyarakat dengan tabungan bank sampah, yang nantinya akan dikelola melalui BUMDES (Badan Usaha Milik Desa).</li>
                                                <li>Membentuk Desa siaga, mengajak masyarakat bersama untuk memiliki kesiapan sumber daya dan kemampuan serta kemauan untuk mencegah dan mengatasi masalah kesehatan, bencana, dan kegawadaruratan kesehatan secara mandiri.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisiMisi;