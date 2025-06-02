import React, { useState } from "react";
import { useSelector } from "react-redux";

import heart from "../../assests/productDetail/heart.svg";
import clockwiseArrow from "../../assests/productDetail/clockwiseArrow.svg";
import copy from "../../assests/productDetail/copy.svg";
import faceboook from "../../assests/productDetail/facebook.svg";
import pinterest from "../../assests/productDetail/pinterest.svg";
import twitter from "../../assests/productDetail/twitter.svg";
import cart from "../../assests/productDetail/cart.svg";
import gurantee from "../../assests/productDetail/Gurantee.png";

import plus from "../../assests/productDetail/plus.png";
import minus from "../../assests/productDetail/minus.png";

import { useDispatch } from "react-redux";
// import { addToCart } from "../../Store/CartReducer";
import { toggleWishlist } from "../../Store/WishListReducer";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import useAddToCart from "../../Hooks/useAddToCart";
import { getCurrentUserUid } from "../../firebase/Auth";
import useHandleWishlist from "../../Hooks/useHandleWishlist";
import { addToCart } from "../../api/cart";

import { addToWishlist } from "../../api/wishlist";

const colors = ["Black", "White", "Blue"];
const sizes = ["Small", "Medium", "Large", "XL"];

export default function ProductOptions({ product }) {
  const cartItems = useSelector((state) => state.cart.items);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [memory, setMemory] = useState("");
  const [storage, setStorage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const userUid = getCurrentUserUid();

  const { loading, updateCart } = useAddToCart();
  // const { addToWishlist } = useHandleWishlist();

  const dispatch = useDispatch();

  const colorMap = {
    Black: "bg-black",
    White: "bg-white",
    Blue: "bg-blue-500",
  };

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  function handleAddToCart(p, quantity) {
    // console.log("added to cart", p);
    // console.log(userUid);
    // console.log(typeof quantity);
    const product_id = p.id;
    addToCart({ product_id, quantity });

    // updateCart(userUid, p, quantity);
    // toast.success("item added to the cart", {
    //   position: "top-center",
    //   autoClose: 2000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: false,
    //   draggable: true,
    //   progress: undefined,
    // });

    // dispatch(addToCart({ item: p, quantity }));
  }

  function handleAddToWishList(p) {
    console.log("Adding to wishlist:", p);
    // addToWishlist(userUid, p);
    const product_id = p.id;
    console.log(product_id);
    addToWishlist({ product_id });
    dispatch(toggleWishlist(p));
    navigate("/wishlist");
  }

  function handleBuyNow() {
    navigate("/checkout");
  }

  return (
    <div className="p-6 space-y-8">
      {/* First Row: Color + Size */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Color Selection */}
        <div className="flex-1">
          <h4 className="font-semibold mb-2">Color:</h4>
          <div className="flex gap-3">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-10 h-10 rounded-full border-2 transition 
                  ${colorMap[color]} 
                  ${
                    selectedColor === color
                      ? "border-orange-500"
                      : "border-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Size Dropdown */}
        <div className="flex-1">
          <h4 className="font-semibold mb-2">Size:</h4>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          >
            {sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Second Row: Memory + Storage */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Memory Input */}
        <div className="flex-1">
          <h4 className="font-semibold mb-2">Memory (RAM):</h4>
          <input
            type="text"
            value={memory}
            onChange={(e) => setMemory(e.target.value)}
            placeholder="e.g. 8GB"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        {/* Storage Input */}
        <div className="flex-1">
          <h4 className="font-semibold mb-2">Storage (ROM):</h4>
          <input
            type="text"
            value={storage}
            onChange={(e) => setStorage(e.target.value)}
            placeholder="e.g. 128GB"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
      </div>

      {/* Third Row: Quantity + Add to Cart + Buy Now */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2 border rounded-lg px-3 py-4">
            <button onClick={decreaseQty} className="text-xl font-bold px-2">
              <img src={minus} />
            </button>
            <span className="min-w-[24px] text-gray-text font-public text-center">
              {quantity}
            </span>
            <button onClick={increaseQty} className="text-xl font-bold px-2">
              <img src={plus} />
            </button>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => handleAddToCart(product, quantity)}
            disabled={loading}
            className="flex flex-row gap-3 text-base bg-[#FA8232] hover:bg-orange-600 text-white font-public font-bold px-20 py-4 rounded-lg transition"
          >
            ADD TO CART
            <img src={cart} />
          </button>

          {/* Buy Now */}
          <button
            onClick={handleBuyNow}
            className="bg-white hover:bg-gray-800 border border-[#FA8232] text-[#FA8232] font-public font-medium px-5 py-4 rounded-lg transition"
          >
            BUY NOW
          </button>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-3">
            <button
              onClick={() => handleAddToWishList(product)}
              className="flex items-center"
            >
              <img src={heart} />
              <p className="text-[#475156]">Add to Whislist</p>
            </button>

            <button className="flex items-center">
              <img className="w-6 h-6" src={clockwiseArrow} />
              <p className="text-[#475156]">Add to Compare</p>
            </button>
          </div>

          <div className="flex gap-2">
            <p className="text-[#475156]">Share Product:</p>
            <img src={copy} />
            <img src={faceboook} />
            <img src={pinterest} />
            <img src={twitter} />
          </div>
        </div>
      </div>
      <img src={gurantee} />
      <ToastContainer />
    </div>
  );
}
