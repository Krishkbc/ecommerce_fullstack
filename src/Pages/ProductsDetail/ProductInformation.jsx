import { useSelector } from "react-redux";
import star from "../../assests/productDetail/Star.png";

export default function ProductInformation({ product }) {
  // const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-1">
        <img src={star} />
        <p className="font-public font-semibold text-sm">4.7 Star Rating</p>
        <p className="font-public font-normal text-sm text-gray-text">
          (21,716 User Feedback)
        </p>
      </div>

      <div className="font-public font-normal text-xl">
        {product.description}
      </div>
      <div className="flex items-center gap-48">
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            <p className="text-gray-text font-public font-normal text-sm">
              Sku:
            </p>
            <p className="font-public font-semibold text-sm">AZ2342</p>
          </div>
          <div className="flex gap-1">
            <p className="text-gray-text font-public font-normal text-sm">
              Sku:
            </p>
            <p className="font-public font-semibold text-sm">AZ2342</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            <p className="text-gray-text font-public font-normal text-sm">
              Avalibility:
            </p>
            <p
              className={`font-public font-semibold text-sm ${
                product.stockRemaining < 0 ? "text-red-400" : "text-green-400"
              }`}
            >
              {product.stockRemaining < 0 ? "not in stock" : "In Stock"}
            </p>
          </div>
          <div className="flex gap-1">
            <p className="text-gray-text font-public font-normal text-sm">
              Category:
            </p>
            <p className="font-public font-semibold text-sm">
              Electronic Device
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-1 items-center">
          <p className="text-[#2DA5F3] font-public font-semibold text-2xl">
            ${product.price}
          </p>
          <p className="text-gray-text text-lg font-public">$1999</p>
          <p className="bg-[#EFD33D] text-black font-public font-semibold p-1">
            21% off
          </p>
        </div>
      </div>
    </div>
  );
}
