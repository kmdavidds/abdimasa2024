import { IoLogoWhatsapp } from "react-icons/io";
import { FaTrash } from "react-icons/fa";


const UMKMCard = ({ image, desc, name, priceRange, contact, handleDelete, id, rating }) => {

    const waClick = () => {
        const nomorHP = contact;
        return window.location.href = `https://api.whatsapp.com/send?phone=62${nomorHP}&text=&app_absent=0`;
    }

    const validatedRating = Math.min(5, Math.max(1, parseInt(rating, 10) || 1));

    const filledStars = validatedRating;
    const emptyStars = 5 - filledStars;

    return (
        <div className="bg-gradient-to-b from-cust-blue via-cust-softblue to-gray flex rounded-xl border-2 border-cust-sofblue w-full">
            <div className="w-1/5 my-6 mx-6">
                <img
                    src={image}
                    alt=""
                    className="rounded-2xl" />
            </div>
            <div className="grid w-full pr-6">
                <div className='text-[30px] font-bold mt-6'>
                    {name}
                </div>
                <div className='text-[20px] text-cust-gray text-justify mt-2'>
                    {desc}
                </div>
                <div className='text-[20px] font-bold text-cust-blue text-justify mt-2'>
                    {priceRange}
                </div>
                <div className="flex items-center mt-4">
                    <div className="flex text-yellow-400 text-[26px]">
                        {Array(filledStars).fill(0).map((_, index) => (
                            <span key={index}>⭐</span>
                        ))}
                        {Array(emptyStars).fill(0).map((_, index) => (
                            <span key={index + filledStars}>☆</span>
                        ))}
                    </div>
                    <div className="ml-auto flex items-center space-x-4 my-4">
                        <a onClick={waClick}
                            rel="noopener noreferrer"
                            className="text-green-500 rounded-full text-3xl">
                            <IoLogoWhatsapp />
                        </a>
                        <button onClick={() => handleDelete(id)} className="bg-red-500 text-white rounded-xl text-xl px-4 py-2 ">
                            Hapus
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UMKMCard;
