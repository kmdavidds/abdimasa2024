const BeritaCard = ({ berita, children }) => {
    return (
        <div className='border rounded-xl shadow w-full h-80 overflow-hidden relative'>
            <img src={berita.imageURL} alt={berita.title} className='w-full h-52 object-cover rounded ' />
            <div className="w-full xl:h-[175px] bg-gradient-to-b from-[#CBE0F8] via-[#E2EDF9] to-[#F2F8FF] px-4 py-3 flex flex-col justify-between rounded-xl absolute bottom-0 right-0 left-0">
                <div>
                    <span className='text-[10px] text-gray-400'>{new Date(berita.createdAt).toLocaleDateString()}</span>
                    <h1 className='text-xs font-bold'>{berita.title}</h1>
                    <p className='text-gray-600 text-[9px] line-clamp-3'>{berita.description}</p>
                </div>
                <div className='mt-2 flex gap-5'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default BeritaCard;
