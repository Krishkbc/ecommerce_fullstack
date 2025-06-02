import cameraPopUp from "../../../assests/Header/cameraPopUp.png";
import CrossPopUp from "../../../assests/Header/CrossPopUp.svg";
import { getCurrentUserUid } from "../../../firebase/Auth";
import useAddToCart from "../../../Hooks/useAddToCart";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

export default function OpenCartPopUp({ setCartPopUp }) {
  const navigate = useNavigate();
  const userId = getCurrentUserUid();
  const [cartItems, setCartItems] = useState([]);
  const { fetchCart } = useAddToCart();

  function handleCheckOut() {
    navigate("/checkout");
  }

  function handleViewCart() {
    navigate("/shoppingcard");
  }

  const subTotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const cartData = await fetchCart(userId);
        setCartItems(cartData);
      } catch (err) {
        console.log(err.message);
      }
    };
    loadCart();
  }, [userId]);
  return (
    <div
      onMouseLeave={() => setCartPopUp(false)}
      className="absolute top-full right-0 -translate-x-24 mt-2 w-[380px] bg-white shadow-lg rounded-lg p-4 space-y-4 z-40"
    >
      {/* Heading */}
      <h3 className="text-lg font-semibold font-public">Shopping Cart</h3>
      <hr />

      {/* Product Item Row */}
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-3"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />

            {/* Content */}
            <div className="flex-1">
              <p className="text-sm font-normal line-clamp-2">{item.name}</p>
              <p className="text-xs text-gray-text mt-1">
                {item.quantity} ×{" "}
                <span className="text-[#2DA5F3] font-semibold text-sm">
                  ${item.price}
                </span>
              </p>
            </div>

            {/* Remove Button */}
            <button className="text-gray-400 hover:text-red-500 transition">
              <img src={CrossPopUp} alt="Remove" className="w-4 h-4" />
            </button>
          </div>
        ))
      ) : (
        <p className="text-sm text-gray-500 text-center">Your cart is empty.</p>
      )}

      <hr />

      {/* Subtotal */}
      <div className="flex justify-between items-center">
        <p className="text-sm font-medium text-gray-700">Subtotal</p>
        <p className="text-sm font-semibold text-black">
          ${subTotal.toFixed(2)}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2">
        <button
          onClick={handleCheckOut}
          className="bg-[#FA8232] text-white py-2 px-4 rounded hover:bg-orange-600 transition font-medium"
        >
          Checkout
        </button>
        <button
          onClick={handleViewCart}
          className="border border-[#FA8232] text-[#FA8232] py-2 px-4 rounded hover:bg-gray-300 transition font-medium"
        >
          View Cart
        </button>
      </div>
    </div>
  );
}
