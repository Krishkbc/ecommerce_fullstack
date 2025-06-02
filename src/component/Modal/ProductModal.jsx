import ProductImage from "../../Pages/ProductsDetail/ProductImage";
import { X } from "lucide-react";
import img1 from "../../assests/productDetail/01.png";

const products = {
  id: 1,
  title: "TOZO T6 True Wireless Earbuds Bluetooth Headphone",
  price: "$99",
  rating: 4.5,
  totalReviews: 1243,
  images: [img1, img1, img1],
  colors: ["Black", "White", "Blue"],
  description:
    "TOZO T6 delivers immersive sound with Bluetooth 5.0, waterproof design, and a compact charging case. Perfect for on-the-go listening.",
};

export default function ProductModal({ onClose }) {

  return (
    <div className="fixed inset-0 z-40 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="relative bg-white rounded-xl shadow-lg w-[90%] max-w-7xl p-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          <X className="w-6 h-6" />
        </button>

        <ProductImage product={products} />
      </div>
    </div>
  );
}
