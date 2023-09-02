import React from "react";
import { useState } from "react";
import {twoPersonCount, threePersonCount, setTwoPersonCount, setThreePersonCount} from "./AccomSelector"

function TicketSelector({ onAddToCart }) {
  const [standardCount, setStandardCount] = useState(0);
  const [eliteCount, setEliteCount] = useState(0);
  const [twoPersonCount, setTwoPersonCount] = useState(0);
  const [threePersonCount, setThreePersonCount] = useState(0);

  const handleAddToCartClick = () => {
    onAddToCart(standardCount, eliteCount);
  };
  return (
    <div className="flex text-indigo-600 text-3xl font-semibold p-4">
      {/* Standard Ticket Counter */}
      <div className="mr-4">
        <p className="text-sm mb-2">Standard</p>
        <button
          onClick={() => setStandardCount(Math.max(0, standardCount - 1))}
          className="mr-2"
        >
          -
        </button>
        <span>{standardCount}</span>
        <button
          onClick={() => setStandardCount(Math.min(8, standardCount + 1))}
          className="ml-2"
        >
          +
        </button>
      </div>

      {/* Elite Ticket Counter */}
      <div>
        <p className="text-sm mb-2">Elite</p>
        <button
          onClick={() => setEliteCount(Math.max(0, eliteCount - 1))}
          className="mr-2"
        >
          -
        </button>
        <span>{eliteCount}</span>
        <button
          onClick={() => setEliteCount(Math.min(8, eliteCount + 1))}
          className="ml-2"
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddToCartClick}
        className="flex text-3xl text-indigo-600 font-semibold border-solid border-4 w-fit items-center justify-center p-4 hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
      >
        Update Cart
      </button>
    </div>
  );
}

export default TicketSelector;
