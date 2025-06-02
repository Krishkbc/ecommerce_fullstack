import { useState } from "react";
import dotButton from "../../assests/Dashboard/dotButton.svg";
import whiteRightArrow from "../../assests/Dashboard/whiteRightArrow.svg";
import orangeRightArrow from "../../assests/Dashboard/orangeRightArrow.svg";
// import ThreeDot from "../../assests/Dashboard/ThreeDot.svg";
import { useNavigate } from "react-router-dom";
import { Copy, Check } from "lucide-react";
import visa from "../../assests/Dashboard/Visa.png";

export default function PaymentOption({ setOpenModal }) {
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const cardNumber = "**** **** **** 1234";
  const cardHolder = "Kevin Gilbert";

  function handleAddCard() {
    navigate("/card-address");
    setOpenModal(true);
  }

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const cards = [
    {
      colorFrom: "from-blue-500",
      colorTo: "to-blue-700",
    },
    {
      colorFrom: "from-green-500",
      colorTo: "to-green-700",
    },
  ];

  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 w-full">
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold text-gray-900">Payment Options</p>
        <button
          onClick={handleAddCard}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="text-[#FA8232] text-sm font-semibold flex items-center gap-2 border border-[#FA8232] px-3 py-2 rounded-md hover:bg-[#FA8232] hover:text-white transition"
        >
          Add Card
          <img
            src={isHovered ? whiteRightArrow : orangeRightArrow}
            alt="arrow"
          />
        </button>
      </div>

      {/* Payment Cards */}
      <div className="mt-6 flex gap-5 flex-wrap">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative bg-gradient-to-r ${card.colorFrom} ${card.colorTo} text-white p-6 rounded-2xl shadow-lg w-[350px] h-[200px] flex flex-col justify-between`}
          >
            {/* Dot Button */}
            <button
              onClick={() => handleDropdownToggle(index)}
              className="absolute top-4 right-4 p-1"
            >
              <img src={dotButton} />
              {/* <ThreeDot /> */}
            </button>

            <div className="text-base font-semibold">
              $96,999.00{" "}
              <span className="font-normal text-base text-gray-300">USD</span>
            </div>

            {/* Dropdown */}
            {activeDropdown === index && (
              <div className="absolute top-12 right-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 z-50">
                <ul className="py-2 w-40">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
                    onClick={() => {
                      setActiveDropdown(null);
                    }}
                  >
                    ✏️ Edit card
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 text-sm text-red-600 cursor-pointer"
                    onClick={() => {
                      setActiveDropdown(null);
                    }}
                  >
                    🗑️ Delete card
                  </li>
                </ul>
              </div>
            )}

            {/* Card Number with Copy */}
            <div>
              <p className="text-sm uppercase opacity-80 mb-1">Card Number</p>
              <div className="flex items-center justify-between gap-2">
                <p className="text-2xl font-semibold tracking-widest break-all">
                  {cardNumber}
                </p>
                <button
                  onClick={() => handleCopy(cardNumber, index)}
                  className="p-1 hover:bg-gray-200 rounded"
                >
                  {copiedIndex === index ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-white" />
                  )}
                </button>
              </div>
            </div>

            {/* Cardholder Name */}
            <div className="mt-2 flex justify-between items-center">
              <img src={visa} />
              <p className="text-lg font-semibold">{cardHolder}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
