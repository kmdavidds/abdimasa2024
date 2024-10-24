import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getUmkm } from "../../../api/userApi/Umkm";
import UMKMCard from "../../../components/UserComp/UMKM/UMKMCard";

const Umkm = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const businesses = await getUmkm();
        setData(businesses);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-cust-softblue bg-cover bg-[url('images/Landing/WisataUMKMSection/bgPattern.png')] w-full flex-col items-center font-poppins justify-center lg:py-18 py-28 md:py-28">
      <div className="flex justify-center items-center w-full">
        <img
          src="https://res.cloudinary.com/ddlo3v9hx/image/upload/v1728373204/judul_umkm_uxrqpj.png"
          alt=""
          className="lg:w-1/4 md:w-1/2 sm:w-3/4 w-full px-4"
        />
      </div>

  
      <div className="items-center w-11/12 md:w-4/5 flex flex-wrap justify-center mt-10 mx-auto gap-6">
        {loading ? (
          <>Loading...</>
        ) : (
          data.map((business) => (
            <UMKMCard
              key={business.id}
              image={business.images[0]}
              id={business.id}
              title={business.name}
              rating={business.rating}
              desc={business.description}
              priceRange={business.priceRange}
              nomorWA={business.contact}
            />
          ))
        )}
      </div>
    </div>
  );

};

export default Umkm;
