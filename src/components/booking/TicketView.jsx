import React, { useState } from "react";
import { Link } from "react-router-dom";
import TicketSelector from "./TicketSelector";
import Cart from "./Cart";
import { useCart } from './CartContext';


export const TicketView = (props) => {
  const { cart, setCart } = useCart();

  const handleAddToCart = (standard, elite) => {
    setCart({ standard, elite });
  };

  return (
    <div className="flex border-solid h-auto w-full border-blue-500 border-8 ">
      {/* Left Column */}
      <div className="flex-1 flex flex-col justify-between p-4">
        {/* Space for text */}
        <div className="mb-4 text-sm text-black text-left justify-start normal-case p-4">
          Diverse ticket selections await to customize your journey at FOOFEST.
          With our Standard ticket, dive into a week-long celebration, exploring
          the rich tapestry of melodies and performances we've curated.
          <br></br><br></br>
          For attendees craving a touch of luxury, our Elite tickets provide all
          the benefits of the Standard ticket with additional privileges. Elite
          ticket holders receive priority access, entry to special Elite-only
          zones, superior restroom amenities, and beyond. Opt for the Elite
          ticket to elevate your FOOFEST adventure to unparalleled heights.
        </div>
        {/* Space for buttons */}
        <TicketSelector onAddToCart={handleAddToCart} />
      </div>

      {/* Right Column */}
      <div className="flex-1 p-4">
        <div className="flex-1 p-4">
        <Cart cart={cart} />  {/* Use the Cart component here */}
      </div>
      </div>
    </div>
  );
};
