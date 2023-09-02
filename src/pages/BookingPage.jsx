import React, { useEffect, useState, useContext } from "react";
import { getAvailableSpots, updateAvailableSpots } from "../api";
import { TicketView } from "../components/booking/TicketView";
import { AccommodationView } from "../components/booking/AccommodationView";
import { CheckoutView } from "../components/booking/CheckoutView";
import { PRICES } from "../components/booking/Constants";
import { useCart } from "../components/booking/CartContext";

import "./pages.css";
import { useLocation } from "react-router-dom";

const bookingSteps = [
  { name: "tickets", view: TicketView },
  { name: "accommodation", view: AccommodationView },
  { name: "checkout", view: CheckoutView },
];

export const BookingPage = () => {
  const [availableSpots, setAvailableSpots] = useState([]);
  const location = useLocation().pathname;
  const context = useCart();

  const [cart, setCart] = useState({
    standard: 0,
    elite: 0,
    twoperson: 0,
    threeperson: 0,
    greenCamping: 0,
    bookingFee: PRICES.bookingFee,
  });

  const subtractPurchasedTickets = () => {
    let currentTicket;
    availableSpots.map((place) => {
      // console.log(place.area, location);
      if ("/booking/" + place.area === location) {
        currentTicket = place;
      }
    });
    console.log(currentTicket);

    const ticketsPurchased = context.cart.standard;

    const actualTickets = {
      area: currentTicket.area,
      amount: ticketsPurchased,
    };

    console.log(actualTickets);

    updateAvailableSpots(actualTickets).then(async (res) => {
      const responseJson = await res.json()
    });
  };
  const [step, setStep] = useState(0);

  useEffect(() => {
    getAvailableSpots()
      .then((response) => response.json())
      .then((data) => {
        setAvailableSpots(data);
      });
  }, []);

  const currentStep = bookingSteps[step];

  return (
    <div className="flex flex-col h-screen w-screen p-4">
      <div className="text-indigo-600 text-transform: capitalize cursor-pointer text-6xl font-semibold p-2">
        {currentStep.name}
      </div>
      {currentStep.view && <currentStep.view cart={cart} setCart={setCart} subtractPurchasedTickets={subtractPurchasedTickets} />}
      {step < bookingSteps.length - 1 && (
    <button
        className="mx-auto bg-indigo-600 hover:bg-white text-white hover:text-indigo-600 font-bold py-2 px-4"
        onClick={() => {
            if (step < bookingSteps.length - 1) {
                setStep(step + 1);
            }
        }}
    >
        Next
    </button>
)}
    </div>
  );
};

export default BookingPage;
