import React from "react";
import { Link } from "react-router-dom";

const EstateCard = ({ estate }) => {
  const {
    id,
    estate_title,
    type,
    segment_name,
    description,
    price,
    status,
    location,
    facilities,
    image,
    area,
  } = estate;

  return (
    <div data-aos="flip-down" className="w-full relative h-[600px] lg:max-w-sm overflow-hidden bg-[#F3F3F3] rounded-lg shadow-lg">
      <div className="relative">
        <img
          className="object-cover object-center w-full h-56 rounded-lg"
          src={image}
          alt="avatar"
        />
        <div className="absolute bottom-0 flex right-0 m-4 gap-3">
          <div className="px-3 py-1 text-xs text-white uppercase rounded-full bg-[#1A385A]">
            {segment_name}
          </div>
          <div className="px-3 py-1 text-xs text-white uppercase rounded-full bg-[#1A385A]">
            {status}
          </div>
          <div className="px-3 py-1 text-xs text-white uppercase rounded-full bg-[#1A385A]">
            {price}
          </div>
        </div>
      </div>
      <div className="px-6 py-4 ">
        <h1 className="text-xl font-semibold text-gray-800">{estate_title}</h1>
        <p className="py-2 text-gray-700">{description}</p>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Facilities:</h2>
          <ul className="ml-7">
            {facilities.map((facility, index) => (
              <li
                key={index}
                className="py-1 list-disc capitalize text-gray-700"
              >
                {facility}
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-7">
          <Link to={`estate/${id}`}>
            <button className="btn bg-[#004274] text-white hover:bg-[#004274] btn-sm mt-6">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
