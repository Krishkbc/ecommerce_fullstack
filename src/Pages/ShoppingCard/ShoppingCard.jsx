import ShoppingCardTable from "./ShoppingCardTable";
import ShoppingCardTotal from "./ShoppingCardTotal";
import React, { useEffect, useState } from "react";
import sampleImage from "../../assests/Wishlist/Image.png";
import useAddToCart from "../../Hooks/useAddToCart";

import { getCurrentUserUid } from "../../firebase/Auth";

// const initialCart = [
//   {
//     id: 1,
//     name: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear Headphones",
//     image: sampleImage,
//     price: 120,
//     quantity: 1,
//   },
//   {
//     id: 2,
//     name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control",
//     image: sampleImage,
//     price: 99,
//     quantity: 2,
//   },
// ];

export default function ShoppingCard() {
  const userId = getCurrentUserUid();

  const { fetchCart } = useAddToCart();
  const [cartItems, setCartItems] = useState([]);
  const [subTotal, setSubtotal] = useState();

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
    <div className="container mx-auto px-6 py-10">
      <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
        {/* Left: Cart Table */}
        <div className="w-full lg:w-2/3">
          <ShoppingCardTable
            cartItems={cartItems}
            setCartItems={setCartItems}
            subTotal={subTotal}
            setSubtotal={setSubtotal}
          />
        </div>

        {/* Right: Cart Summary + Coupon */}
        <div className="w-full lg:w-1/3">
          <ShoppingCardTotal subtotal={300} />
        </div>
      </div>
    </div>
  );
}
