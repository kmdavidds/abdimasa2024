const KalenderCard = ({ kalender, children }) => {
    return (
        <div className='border rounded-xl shadow w-full h-80 overflow-hidden relative'>
            <img src={kalender.imageURL} alt={kalender.title} className='w-full h-52 object-cover rounded ' />
            <div className="w-full xl:h-[175px] bg-gradient-to-b from-[#CBE0F8] via-[#E2EDF9] to-[#F2F8FF] px-4 py-3 flex flex-col justify-between rounded-xl absolute bottom-0 right-0 left-0">
                <div>
                    <span className='text-[10px] text-gray-400'>
                        {new Date(kalender.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                    <h1 className='text-xs font-bold'>{kalender.title}</h1>
                    <span className='text-gray-600 text-xs'>{kalender.time}</span>
                    <p className='text-gray-600 text-xs'>{kalender.location}</p>
                </div>
                <div className='mt-2 flex justify-end gap-5'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default KalenderCard;
