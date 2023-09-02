import React from "react";
import Cart from "./Cart";
import AccomSelector from "./AccomSelector";
import { useCart } from "./CartContext";

export const AccommodationView = (props) => {
  const { cart, setCart } = useCart();

  const handleAddToCart = (twoperson, threeperson, greenCamping) => {
    setCart(prevCart => ({
      ...prevCart,
      twoperson,
      threeperson,
      greenCamping
    }));
  };

  return (
    <div className="flex border-solid h-full w-full border-indigo-600 border-8 ">
      {/* Left Column */}
      <div className="flex-1 flex flex-col justify-between p-4">
        {/* Space for text */}
        <div className="mb-4 text-sm text-black text-left justify-start normal-case p-4">
          During FOOFEST, we provide versatile lodging choices to
          amplify your festivity journey. Feel free to carry your personal tent
          and immerse yourself in our lively campsite atmosphere. For those
          prioritizing ease, we have tents already set up, awaiting your
          presence.
          <br></br>
          <br></br>
          There are two possible tent options: a tent that fits two - and one that fits three.
          You are free to choose either of the options for your own comfort.
          At FOOFEST, we believe in taking care of each other as well as the environment around us. 
          That's why we have introduced a 'Green' camping fee. 
          You are free to choose whether you'd like to add this fee that would help offset the carbon footprint of the FOOFEST camping area - it's all about selecting what aligns
          with your preferences!
          <br></br>
          <br></br>
          If you prefer to bring your own tent, you can skip this step by just pressing Next.
        </div>
        {/* Space for buttons */}
        <AccomSelector onAddToCart={handleAddToCart} />
      </div>

      {/* Right Column */}
      <div className="flex-1 p-4">
        <Cart cart={cart} /> {/* Use the Cart component here */}
      </div>
    </div>
  );
};
