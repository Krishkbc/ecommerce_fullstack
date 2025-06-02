import React from "react";

export default function AddCardModal({ setIsOpen }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl  p-6 shadow-lg relative flex flex-col gap-6">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-500 text-xl"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>

        {/* Heading */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Add Card</h2>
          <hr className="border-gray-300 mt-2" />
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Name on Card
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Card Number
            </label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
          </div>
          {/* expiry date and cvv  */}
            <div className="flex gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Expiry Date
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="border border-gray-300 rounded-md px-4 py-2 text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  CVV
                </label>
                <input
                  type="text"
                  placeholder="123"
                  className="border border-gray-300 rounded-md px-4 py-2 text-sm"
                />
              </div>
            </div>
        </div>

        <div className="flex justify-end">
          <button
            className="bg-[#FA8232] hover:bg-opacity-90 text-white px-10 py-2 rounded-md text-sm font-medium"
            onClick={() => setIsOpen(false)}
          >
            Add Card
          </button>
        </div>
      </div>
    </div>
  );
}
