import React, { useEffect, useState } from "react";
import sampleImage from "../../assests/Wishlist/Image.png";
import { X } from "lucide-react";
import { useSelector } from "react-redux";

// const wishlistItems = [
//   {
//     id: 1,
//     name: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear Headphones for Workouts and Running, Triple Black",
//     image: sampleImage,
//     price: "$12000000",
//     inStock: true,
//   },
//   {
//     id: 2,
//     name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless Charging Case IPX8 Waterproof Stereo Earphones in-Ear",
//     image: sampleImage,
//     price: "$99",
//     inStock: false,
//   },
//   {
//     id: 3,
//     name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless Charging Case IPX8 Waterproof Stereo Earphones in-Ear",
//     image: sampleImage,
//     price: "$99",
//     inStock: false,
//   },
//   {
//     id: 4,
//     name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless Charging Case IPX8 Waterproof Stereo Earphones in-Ear",
//     image: sampleImage,
//     price: "$99",
//     inStock: true,
//   },
//   {
//     id: 5,
//     name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless Charging Case IPX8 Waterproof Stereo Earphones in-Ear",
//     image: sampleImage,
//     price: "$99",
//     inStock: false,
//   },
// ];

import { ToastContainer, toast } from "react-toastify";

import useHandleWishlist from "../../Hooks/useHandleWishlist";
import { getCurrentUserUid } from "../../firebase/Auth";

export default function WishlistTable() {
  const { fetchWishlist, removeFromWishList } = useHandleWishlist();
  const [catItems, setCartItems] = useState([]);
  const userUid = getCurrentUserUid();

  useEffect(() => {
    const getData = async () => {
      const res = await fetchWishlist(userUid);
      setCartItems(res);
    };

    getData();
  }, [catItems]);

  function handleRemove(id) {
    removeFromWishList(userUid, id);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast.success("Item removed from wishlist", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="font-public text-2xl font-bold mb-6">My Wishlist</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-text text-xs font-public font-medium">
              <th className="p-4">PRODUCTS</th>
              <th className="p-4">PRICE</th>
              <th className="p-4">STOCK STATUS</th>
              <th className="p-4 text-center">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {catItems.map((item, index) => (
              <tr
                key={item.id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } text-sm`}
              >
                {/* Product + Description */}
                <td className="p-4 flex gap-4 items-center max-w-[500px]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain rounded"
                  />
                  <span className=" text-gray-text font-public text-sm font-normal ">
                    {item.name}
                  </span>
                </td>

                {/* Price */}
                <td className="p-4 text-black font-public font-medium text-sm">
                  {item.price}
                </td>

                {/* Stock */}
                <td className="p-4">
                  {item.stockRemaining > 0 ? (
                    <span className="text-[#2DB224] text-sm font-semibold font-public">
                      In Stock
                    </span>
                  ) : (
                    <span className="text-[#EE5858] text-sm font-semibold font-public">
                      Out of Stock
                    </span>
                  )}
                </td>

                {/* Actions */}
                <td className="p-4 text-center w-56">
                  <div className="flex items-center justify-center gap-3">
                    <button
                      className={`bg-[#FA8232] text-white text-sm font-bold px-4 py-2 rounded hover:bg-[#e36f22] ${
                        item.stock ? "bg-[#FA8232]" : "bg-[#ADB7BC]"
                      }`}
                      disabled={item.stockRemaining}
                    >
                      ADD TO CART
                    </button>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
}
