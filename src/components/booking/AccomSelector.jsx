import React, { useState } from "react";
import Cart from "./Cart";

function AccomSelector({ onAddToCart }) {
  const [twoPersonCount, setTwoPersonCount] = useState(0);
  const [threePersonCount, setThreePersonCount] = useState(0);
  const [greenCamping, setGreenCamping] = useState(0); // State for the Green camping fee

  const handleAddToCartClick = () => {
    onAddToCart(twoPersonCount, threePersonCount, greenCamping);
  };

  const updatePlusOne = () => {
    setThreePersonCount(Math.min(8, threePersonCount + 1));
    handleAddToCartClick();
  };

  return (
    <div className="flex text-indigo-600 text-3xl font-semibold p-4">
      {/* Two Person Accom Counter */}
      <div className="mr-4">
        <p className="text-sm mb-2">2-person tent</p>
        <button
          onClick={() => setTwoPersonCount(Math.max(0, twoPersonCount - 1))}
          className="mr-2"
        >
          -
        </button>
        <span>{twoPersonCount}</span>
        <button
          onClick={() => setTwoPersonCount(Math.min(8, twoPersonCount + 1))}
          className="ml-2"
        >
          +
        </button>
      </div>

      {/* Three person Accom Counter */}
      <div className="mr-4">
        <p className="text-sm mb-2">3-person tent</p>
        <button
          onClick={() => setThreePersonCount(Math.max(0, threePersonCount - 1))}
          className="mr-2"
        >
          -
        </button>
        <span>{threePersonCount}</span>
        <button onClick={updatePlusOne} className="ml-2">
          +
        </button>
      </div>

      {/* Green Camping Fee */}
      <div className="mr-4">
        <label className="text-sm mb-2">
          <input
            type="checkbox"
            checked={greenCamping}
            onChange={() => setGreenCamping(!greenCamping)}
          />
          Green camping fee
        </label>
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

export default AccomSelector;
