import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export const thankYouMessage = () => {
  return (
    <div className="relative h-screen bg-indigo-600">
      <div className="absolute inset-0 marquee opacity-20 z-0">
        <img src="../logo-foo.png" alt="logo" className="w-full h-full object-cover"></img>
      </div>
      <div className="flex flex-col justify-center items-center h-full z-10">
        <Link to="/tickets" className="h-16 border-8 p-3 text-white bg-indigo-600 font-semibold hover:bg-white hover:text-indigo-600">
          ENTER THE BOOKING SITE
        </Link>
      </div>
    </div>
  );
};