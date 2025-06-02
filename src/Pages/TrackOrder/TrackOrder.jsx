import info from "../../assests/TrackOrder/info.svg";
import ArrowRight from "../../assests/Footer/svg/ArrowRight.svg";
import { useNavigate } from "react-router-dom";

export default function TrackOrder() {
  const navigate = useNavigate();
  function handleCLick() {
    navigate("/details")
  }
  return (
    <div className="container mx-auto px-6 h-full">
      <div className="p-6 flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <h1 className="font-public font-semibold text-4xl">Track Order</h1>
          <p className="font-public font-normal text-base text-gray-text max-w-3xl">
            To track your order please enter your order ID in the input field
            below and press the “Track Order” button. this was given to you on
            your receipt and in the confirmation email you should have received.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="ID"
                className=" w-[420px] border border-gray-300 rounded-md px-4 py-2 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-[420px] border border-gray-300 rounded-md px-4 py-2 text-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-1">
            <img src={info} />
            <p className="font-public font-normal text-gray-text text-sm">
              Order ID that we sended to your in your email address.
            </p>
          </div>
        </div>

        <div>
          <button
            onCLick={handleCLick}
            className="bg-[#FA8232] text-white font-public font-bold text-base px-7 py-3"
          >
            TRACK ORDER
          </button>
        </div>
      </div>
    </div>
  );
}
