import React, { useEffect, useState } from "react";
import EstateCard from "./EstateCard";

const Estate = () => {
  const [estates, setEstates] = useState([]);

  useEffect(() => {
    fetch("estate.json")
      .then((res) => res.json())
      .then((data) => setEstates(data));
  }, []);

  return (
    <div className="bg-[#f7f7f7] py-40">
      <div className="container mx-auto ">
        <h1 className="text-5xl text-center text-[#004274] font-bold mb-20">Rental Listing</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {estates.map((estate) => (
            <EstateCard key={estate.id} estate={estate}></EstateCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Estate;
