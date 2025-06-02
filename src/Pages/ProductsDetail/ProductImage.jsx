import React from "react";
import selectedImage from "../../assests/productDetail/mainImage.png";
import ProductInformation from "./ProductInformation";
import ProductOptions from "./ProductOptions";
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

export default function ProductImage({ product }) {
  return (
    <div className="flex gap-5">
      {/* Product Images */}
      <div>
        <img
          src={selectedImage}
          alt="Product"
          className="w-full rounded-2xl shadow-lg object-cover"
        />
        <div className="flex gap-4 mt-4">
          {products.images.map((img, idx) => {
            return (
              <img
                key={idx}
                src={img}
                alt="Thumbnail"
                className={`w-20 h-20 rounded-xl cursor-pointer object-cover focus:outline-none focus:ring-0 ${
                  selectedImage === img ? "border-black" : "border-gray-300"
                }`}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col">
        <ProductInformation product={product} />
        <ProductOptions product={product} />
      </div>
    </div>
  );
}
