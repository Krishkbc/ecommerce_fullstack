import greenTick from "../../assests/CheckOut/greenTick.svg";
import stack from "../../assests/CheckOut/stack.svg";
import whiteStack from "../../assests/CheckOut/whiteStack.svg";
import rightArrow from "../../assests/CheckOut/rightArrow.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function OrderPlaced() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  function handleGoToDashBoard() {
    navigate("/dashboard");
  }

  return (
    <div className="flex justify-center items-center min-h-[500px]">
      <div className="text-center max-w-md">
        <img src={greenTick} className="mx-auto mb-4" />
        <p className="font-semibold text-2xl mb-2">
          Your order is successfully placed
        </p>
        <p className="text-gray-text font-normal text-sm mb-6">
          Pellentesque sed lectus nec tortor tristique accumsan quis dictum
          risus. Donec volutpat mollis nulla non facilisis.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleGoToDashBoard}
            className="flex gap-3 items-center border border-[#FFE7D6] py-2 px-5 rounded hover:bg-[#FA8232] text-[#FA8232] hover:text-white"
          >
            {isHovered ? <img src={whiteStack} /> : <img src={stack} />}
            GO TO DASHBOARD
          </button>
          <button className="flex items-center gap-2 py-2 px-5 bg-[#FA8232] text-white rounded">
            VIEW ORDER
            <img src={rightArrow} />
          </button>
        </div>
      </div>
    </div>
  );
}
