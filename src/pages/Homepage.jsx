import React, { useEffect, useState } from "react";
import "../App.css";
import { getAvailableSpots } from "../api";
import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <div class="relative h-full p-32 ptop-0 align-top bg-indigo-600">
      <div class="relative marquee opacity-20 z-0">
        <img src="../logo-foo.png" alt="logo"></img>
      </div>
      <div className="z-10 align-top h-full">
          <a href="/enter" className="h-32 border-8 p-3 text-white font-semibold hover:bg-white hover:text-blue-500">ENTER THE BOOKING SITE</a>
      </div>
    </div>
  );
};
