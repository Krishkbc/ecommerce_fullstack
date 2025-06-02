import React from "react";
import rightArrow from "../../assests/Wishlist/rightArrow.svg";
import { useNavigate } from "react-router-dom";

export default function ShoppingCardTotal({
  subtotal,
  shipping = 10,
  discount = 0,
  taxRate = 0.1,
}) {
  const tax = +(subtotal * taxRate).toFixed(2);
  const grandTotal = +(subtotal + shipping + tax - discount).toFixed(2);

  const navigate = useNavigate();

  function handleCheckOut() {
    navigate("/checkout");
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="w-full max-w-sm p-6 rounded-sm border border-gray-200 bg-white min-w-96">
        <h2 className="text-lg font-semibold mb-4 ">Cart Summary</h2>

        {/* Cost breakdown */}
        <div className="space-y-3 text-sm text-gray-700 mb-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-medium text-black">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span className="text-red-500">- ${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (10%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
        </div>

        <hr className="my-4" />

        {/* Grand total */}
        <div className="flex justify-between text-base font-bold text-black mb-6">
          <span>Grand Total</span>
          <span>${grandTotal.toFixed(2)}</span>
        </div>

        {/* Checkout button */}
        <button
          onClick={handleCheckOut}
          className="w-full uppercase bg-[#FA8232] hover:bg-[#e36f22] text-white py-4 text-sm font-bold rounded-sm transition flex justify-center items-center gap-3"
        >
          Proceed to Checkout
          <img src={rightArrow} />
        </button>
      </div>

      <div className="flex gap-4 flex-col w-full max-w-sm p-6 rounded-sm border border-gray-200 bg-white">
        <h2 className="text-lg font-semibold">Coupon Code</h2>
        <input
          placeholder="Email address"
          className="border border-gray-200 py-3 px-4"
        />
        <div>
          <button className="bg-[#2DA5F3] font-public border-2 text-white font-bold text-sm py-3 px-7 hover:cursor-pointer hover:text-[#2DA5F3] hover:bg-white  hover:border-2 hover:border-[#2DA5F3] ">
            APPLY COUPON
          </button>
        </div>
      </div>
    </div>
  );
}
