import React, { useEffect, useState } from "react";
import { getAvailableSpots } from "../api";
import { Link, useLocation } from "react-router-dom";
import { Navbar } from "../components/booking/Navbar.jsx";

export const OpeningPage = () => {
  const [availableSpots, setAvailableSpots] = useState([]);
  const location = useLocation().pathname;

  useEffect(() => {
    console.log(location);
    getAvailableSpots()
      .then((response) => response.json())
      .then((data) => {
        setAvailableSpots(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-pastel-orange min-h-screen">
      <Navbar path={location} />
      {availableSpots &&
        availableSpots.map(({ area, spots, available }, index) => (
          <CampingInformationCard
            key={index}
            area={area}
            spots={spots}
            availability={available}
          />
        ))}
    </div>
  );
};

export const CampingInformationCard = ({ area, spots, availability }) => {
  return (
    <div className="p-2 lg:w-full lg:max-w-md hover:shadow-lg transition-shadow duration-300">
      <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
        <div className="mx-auto max-w-xs px-8">
          <p className="text-base font-semibold text-gray-600">Camping area</p>
          <p className="mt-6 flex items-baseline justify-center gap-x-2">
            <span className="text-5xl font-bold tracking-tight text-gray-900">
              {area}
            </span>
          </p>

          <Link to={`/booking/${area}`}>
            <a
              href="/"
              className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 
              text-center text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-indigo-600 cursor-pointer focus-visible:outline focus-visible:outline-2 
              focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get Tickets
            </a>
          </Link>

          <p className="mt-6 text-xs leading-5 text-gray-600">
            Available spots: {availability}/{spots}
          </p>
        </div>
      </div>
    </div>
  );
};
