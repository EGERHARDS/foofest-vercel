import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import Cart from "./Cart";
import { PersonalInfoForm } from "./PersonalInfoForm"
import { thankYouMessage } from "../../pages/ThankYou"

export const CheckoutView = (props) => {
  const { cart } = useCart();
  const [minutes, setMinutes] = useState(4);
  const [seconds, setSeconds] = useState(59);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);


  return (
    <div className=" mx-auto justify-center items-center border-solid h-auto w-1/2 border-indigo-600 border-8 bg-white ">
      {/* Left Column */}
      <div className="flex-1 flex flex-col justify-between p-4 space-y-4">
      <div className="text-red-500 font-bold">
          Your reservation is held for: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
        {/* Space for text */}
        <div className="mb-4 text-sm text-black text-left justify-start normal-case p-4">
         Please fill out the following form (one for each ticket). 
         Make sure to double-check the details as your tickets are going to be sent to the provided email address.
        </div>

        {/* Render forms for standard tickets */}
        {Array(cart.standard).fill().map((_, index) => (
          <PersonalInfoForm key={`standard-${index}`} ticketType="Standard" index={index + 1} />
        ))}

        {/* Render forms for elite tickets */}
        {Array(cart.elite).fill().map((_, index) => (
          <PersonalInfoForm key={`elite-${index}`} ticketType="Elite" index={index + 1} />
        ))}
        <div className="flex-1 p-4">
        <Cart cart={cart} /> {/* Display the cart information */}
        {/* Payment Fields */}
        <div className="justify-start text-left text-indigo-600 font-semibold bg-gray-100 p-4">
          <h3 className="text-xl font-semibold mb-2">Payment Details</h3>
          <input
            type="number"
            placeholder="Card Number"
            maxLength="16"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="p-2 mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Card Name"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            className="p-2 mb-2 w-full"
          />
          <input
            type="text"
            placeholder="MM/YY"
            maxLength={5}
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="p-2 mb-2 w-full"
          />
          <input
            type="number"
            maxLength={3}
            placeholder="CVC"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            className="p-2 w-full"
          />
        </div>
      </div>
      </div>
      <button
    className="h-auto w-full bg-indigo-600 hover:bg-white text-white text-3xl hover:text-indigo-600 font-bold py-2 px-4"
    onClick={() => {
        props.subtractPurchasedTickets();
        thankYouMessage();
    }}
>
    Buy
</button>
    </div>
  );
};