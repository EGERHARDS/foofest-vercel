import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const CheckoutView = (props) => {
  return (
    <div className="flex border-solid h-auto w-full border-blue-500 border-8 ">
      {/* Left Column */}
      <div className="flex-1 flex flex-col justify-between p-4">
        {/* Space for text */}
        <div className="mb-4 text-sm text-black text-left justify-start normal-case p-4">
          During the FooFest Gala, we provide versatile lodging choices to
          amplify your festivity journey. Feel free to carry your personal tent
          and immerse yourself in our lively campsite atmosphere. For those
          prioritizing ease, we have tents already set up, awaiting your
          presence.
          <br></br>
          <br></br>
          Moreover, there's an available Eco Fee to counterbalance the
          festival's ecological footprint. It's all about selecting what aligns
          with your preferences!
        </div>
        {/* Space for buttons */}
        <div className="flex">
          <p className="text-sm">Standard</p>
          <button className="mr-2 text-sm">Button 1</button>
          <p className="text-sm">Elite</p>
          <button className="mr-2 text-sm">Button 2</button>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 p-4">
        {/* Empty space */}
        <div className="justify-start text-left bg-gray-100 p-4">
          <p className="text-3xl">Your Cart</p>
        </div>
      </div>
    </div>
  );
};
