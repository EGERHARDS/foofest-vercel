import React from "react";
import { useCart } from "./CartContext";
import { PRICES } from "./Constants";

function Cart() {
  const { cart } = useCart();

  const total =
    cart.standard * PRICES.standard +
    cart.elite * PRICES.elite +
    cart.twoperson * PRICES.twoperson +
    cart.threeperson * PRICES.threeperson +
    cart.greenCamping * PRICES.greenCamping +
    PRICES.bookingFee;

  return (
    <div className="justify-start text-left text-indigo-600 font-semibold bg-gray-100 p-4">
      <p className="text-3xl">Your Cart</p>
      <p>
        Standard Tickets: {cart.standard} x {PRICES.standard}kr = 
        {cart.standard * PRICES.standard}kr
      </p>
      <p>
        Elite Tickets: {cart.elite} x {PRICES.elite}kr =  
        {cart.elite * PRICES.elite}kr
      </p>
      <p>
        2-person tent: {cart.twoperson} x {PRICES.twoperson}kr =  
        {cart.twoperson * PRICES.twoperson}kr
      </p>
      <p>
        3-person tent: {cart.threeperson} x {PRICES.threeperson}kr =  
        {cart.threeperson * PRICES.threeperson}kr
      </p>
      <p>
        Green camping fee: {cart.greenCamping} x {PRICES.greenCamping}kr = 
        {cart.greenCamping * PRICES.greenCamping}kr
      </p>
      <p>Booking Fee: {PRICES.bookingFee}kr</p>
      <p className="text-xl font-bold">Total: {total}kr</p>
    </div>
  );
}

export default Cart;
