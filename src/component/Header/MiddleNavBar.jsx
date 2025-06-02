import Logo from "../../assests/Header/Logo.svg";
import { IoMdSearch } from "react-icons/io";
import ShoppingCart from "../../assests/Header/ShoppingCart.svg";
import Heart from "../../assests/Header/Heart.svg";
import Person from "../../assests/Header/Person.svg";
import LoginPopup from "./PopUp/LoginPopUp";
import OpenCartPopUp from "./PopUp/OpenCartPopUp";


import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductModal from "../Modal/ProductModal";

export default function LowerNavBar() {
  const [CartPopUp, setCartPopUp] = useState(false);
  const [openLoginPopUp, setLoginPopUp] = useState(false);

  const [productDetailModal, setProductDetailModal] = useState(false);


  const navigate = useNavigate();

  function handleClick() {
    navigate("/shoppage");
  }

  function handleLoginPopUp() {
    setLoginPopUp((prev) => setLoginPopUp(!prev));
  }


  return (
    <div className="bg-secondary py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div
            onClick={handleClick}
            className="flex items-center gap-2 hover:cursor-pointer"
          >
            <img src={Logo} alt="Logo" />
            <h1 className="font-public font-bold text-[32px] text-white leading-10">
              CLICON
            </h1>
          </div>
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="search"
              className="lg:w-[600px] md:w-[300px] border border-gray-300 rounded-sm px-2 py-1 focus:outline-none focus:border-1 focus:border-black"
            />
            <IoMdSearch className="text-black group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
          </div>
          <div className="flex items-center gap-3 relative">
            {/* Cart Icon with toggle */}
            <div
              onMouseEnter={() => setCartPopUp(true)}
              className="cursor-pointer relative"
            >
              <img src={ShoppingCart} alt="ShoppingCart" />
            </div>

            {/* Cart Pop-up Dropdown */}
            {CartPopUp && <OpenCartPopUp setCartPopUp={setCartPopUp} />}

            <>
              <div
                onClick={() => setProductDetailModal(true)}
                className="cursor-pointer"
              >
                <img src={Heart} alt="Heart" />
              </div>

              {productDetailModal && (
                <ProductModal onClose={() => setProductDetailModal(false)} />
              )}
            </>
            {/* Other icons */}

            <div className="cursor-pointer relative" onClick={handleLoginPopUp}>
              <img src={Person} alt="Person" />
              {openLoginPopUp && <LoginPopup />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
