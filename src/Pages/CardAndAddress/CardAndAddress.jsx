import { useState } from "react";
import PaymentOption from "../DashBoard/PaymentOption";
import AddCardModal from "../../component/Modal/AddCardModal";

export default function CardAndAddress() {

    const [openModal, setOpenModal] = useState(false)


  return (
    <div>
      <PaymentOption setOpenModal = {setOpenModal}/>

      {/* Billing Address */}
      <div className="w-full flex flex-wrap gap-6 mt-6">
        {Array(2)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="flex-1 min-w-[300px] max-w-[380px] p-4 border border-gray-200 rounded-lg shadow-sm bg-white flex flex-col justify-between h-full"
            >
              <div className="flex flex-col justify-between h-full">
                {/* Address Content */}
                <div className="space-y-1 text-sm text-gray-700">
                  <h3 className="font-semibold text-base text-gray-900 mb-2">
                    Billing Address
                  </h3>
                  <p className="font-medium">Kevin Hurt</p>
                  <p className="text-gray-600 text-sm leading-snug">
                    East Tejturi Bazar, Word No. 04, Road No. 13/x, House no.
                    1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh
                  </p>
                  <div className="flex gap-2 items-start">
                    <p className="font-semibold min-w-[50px]">Phone:</p>
                    <p>+8801717171717</p>
                  </div>
                  <div className="flex gap-2 items-start">
                    <p className="font-semibold min-w-[50px]">Email:</p>
                    <p>kevin@gmail.com</p>
                  </div>
                </div>

                {/* Edit Button at the Bottom */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button className="text-sm text-blue-600 hover:underline font-medium">
                    Edit Address
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      {openModal && <AddCardModal setIsOpen={setOpenModal}/>}
    </div>
  );
}
