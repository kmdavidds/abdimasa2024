import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const UMKMCard = ({ id, image, title, desc, priceRange, nomorWA, rating }) => {
  const navigate = useNavigate();

  const waClick = () => {
    const nomorHP = nomorWA;
    return (window.location.href = `https://api.whatsapp.com/send?phone=62${nomorHP}&text=&app_absent=0`);
  };

  const validatedRating = Math.min(5, Math.max(1, parseInt(rating, 10) || 1));

  const filledStars = validatedRating;
  const emptyStars = 5 - filledStars;

  const handleSelengkapnyaClick = () => {
    navigate(`/UMKM/${id}`);
  };

  return (
    <div className="bg-gradient-to-b from-cust-blue via-cust-softblue to-gray flex flex-col md:flex-row rounded-xl border-2 border-cust-softblue w-full">
  
      <div className="md:w-1/3 sm:w-full lg:w-1/3 w-full flex justify-center items-center my-4 md:my-6">
        <img
          src={image}
          alt={title}
          className="rounded-xl w-60 h-40 object-cover md:w-60 md:h-60"
        />
      </div>

  
      <div className="flex flex-col justify-between w-full p-6">
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-base text-cust-gray text-justify mt-2 line-clamp-3">
          {desc}
        </div>
        <div className="text-lg font-bold text-cust-blue mt-2">
          {priceRange}
        </div>

       
        <div className="flex items-center mt-4">
       
          <div className="flex text-yellow-400 text-lg">
            {Array(filledStars)
              .fill(0)
              .map((_, index) => (
                <span key={index}>⭐</span>
              ))}
            {Array(emptyStars)
              .fill(0)
              .map((_, index) => (
                <span key={index + filledStars}>☆</span>
              ))}
          </div>

        
          <div className="ml-auto flex items-center space-x-3 mt-4">
            <a
              onClick={waClick}
              rel="noopener noreferrer"
              className="text-green-500 rounded-full text-3xl cursor-pointer"
            >
              <IoLogoWhatsapp />
            </a>
            <button
              onClick={handleSelengkapnyaClick}
              className="text-sm text-white bg-cust-blue rounded-full px-4 py-2"
            >
              Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UMKMCard;
