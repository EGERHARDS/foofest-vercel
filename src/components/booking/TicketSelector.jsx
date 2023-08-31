import React from "react";
import { useState } from "react";

function TicketSelector({ onAddToCart }) {
  const [standardCount, setStandardCount] = useState(0);
  const [eliteCount, setEliteCount] = useState(0);

  const handleAddToCartClick = () => {
    onAddToCart(standardCount, eliteCount);
  };
  return (
    <div className="flex">
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
        className="flex text-3xl border-solid border-4 w-fit items-center justify-center p-4 "
      >
        Update Cart
      </button>
    </div>
  );
}

export default TicketSelector;
