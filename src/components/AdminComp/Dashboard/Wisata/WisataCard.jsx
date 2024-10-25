const WisataCard = ({ image, title, location, children }) => {
    return (
        <div className="bg-white relative font-poppins rounded-lg overflow-hidden w-full md:w-full md:max-w-[360px] h-full max-h-[200px] md:max-h-[416px]">
            <img
                src={image}
                alt={title}
                className="w-full h-[175px] md:h-[416px] object-cover"
            />
            <div className="p-3 md:p-4 absolute bottom-0 flex flex-col justify-end h-full bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent w-full text-white">
                <h3 className="text-xs md:text-2xl font-bold">{title}</h3>
                <p className="md:text-base text-[8px] text-opacity-70">{location}</p>
                <div className='mt-2 flex w-full justify-end gap-5'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default WisataCard;
