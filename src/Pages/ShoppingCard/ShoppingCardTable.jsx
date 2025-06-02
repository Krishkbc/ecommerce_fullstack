import { X } from "lucide-react";
import leftArrow from "../../assests/Wishlist/leftArrow.svg";
import whiteLeftArrow from "../../assests/Wishlist/whiteLeftArrow.svg";
import { useState } from "react";

import { getCurrentUserUid } from "../../firebase/Auth";
import useAddToCart from "../../Hooks/useAddToCart";

import { ToastContainer, toast } from "react-toastify";

export default function ShoppingCardTable({
  cartItems,
  setCartItems,
  setSubTotal,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const userId = getCurrentUserUid();
  const { removeFromCart } = useAddToCart();

  const handleIncrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    removeFromCart(userId, id);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast.success("Item removed from cart", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const calculateSubtotal = (price, quantity) => price * quantity;

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6 ">Shopping Card</h2>
      <div className="overflow-x-auto border border-gray-300">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left text-xs text-gray-600 font-medium">
              <th className="p-4">PRODUCT</th>
              <th className="p-4">PRICE</th>
              <th className="p-4 text-center">QUANTITY</th>
              <th className="p-4">SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr
                key={item.id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } text-sm`}
              >
                {/* Remove */}

                {/* Product + Description */}
                <td className="p-4 flex gap-4 items-center">
                  <button
                    className="text-gray-400 hover:text-red-500"
                    onClick={() => handleRemove(item.id)}
                  >
                    <X size={18} />
                  </button>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain rounded"
                  />
                  <span className="w-60 text-black text-sm font-normal line-clamp-2">
                    {item.name}
                  </span>
                </td>

                {/* Price */}
                <td className="p-4 font-medium text-black">${item.price}</td>

                {/* Quantity */}
                <td className="p-4 text-center">
                  <div className="inline-flex items-center border rounded-md overflow-hidden shadow-sm">
                    <button
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-text text-sm font-semibold"
                      onClick={() => handleDecrement(item.id)}
                    >
                      −
                    </button>
                    <span className="px-4 py-1 text-sm font-medium bg-white text-gray-800">
                      {item.quantity}
                    </span>
                    <button
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-text text-sm font-semibold"
                      onClick={() => handleIncrement(item.id)}
                    >
                      +
                    </button>
                  </div>
                </td>
                {/* Subtotal */}
                <td className="p-4 font-semibold text-black">
                  ${calculateSubtotal(item.price, item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between  py-5 px-2">
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="font-bold text-[#2DA5F3] text-sm border border-[#2DA5F3] border-3 px-10 py-2 hover:cursor-pointer hover:bg-[#2DA5F3] hover:text-white uppercase flex justify-center items-center gap-3"
        >
          {isHovered ? <img src={whiteLeftArrow} /> : <img src={leftArrow} />}
          Return To Shop
        </button>
        <button className="font-bold text-[#2DA5F3] text-sm border border-[#2DA5F3] border-3 px-10 py-2 hover:cursor-pointer hover:bg-[#2DA5F3] hover:text-white uppercase">
          Update
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
