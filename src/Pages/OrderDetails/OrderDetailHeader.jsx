import { useState } from "react";
import { useNavigate } from "react-router-dom";
import whiteRightArrow from "../../assests/Dashboard/whiteRightArrow.svg";
import orangeRightArrow from "../../assests/Dashboard/orangeRightArrow.svg";
import leftArrow from "../../assests/Dashboard/leftArrow.svg";

export default function OrderDetails({ setIsOpen }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-sm p-6 border border-gray-200 ">
      <div className="flex justify-between items-center flex-col md:flex-row">
        <button
          onClick={() => navigate("/dashboard/order-history")}
          className="font-public font-normal text-sm flex items-center gap-2"
        >
          <img src={leftArrow} alt="leftArrow" />
          ORDER DETAILS
        </button>
        <button
          onClick={() => setIsOpen(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`text-[#FA8232] text-sm font-semibold flex items-center gap-2 border border-[#FA8232] px-3 py-2 rounded-md hover:bg-[#FA8232] hover:text-white transition`}
        >
          Leave a Rating
          {isHovered ? (
            <img src={whiteRightArrow} alt="whiteRightArrow" />
          ) : (
            <img src={orangeRightArrow} alt="orangeRightArrow" />
          )}
        </button>
      </div>
    </div>
  );
}
