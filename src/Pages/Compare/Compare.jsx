import React from "react";
import image from "../../assests/Compare/Image.png";
import shoppingCart from "../../assests/Compare/shoppingCart.svg";
import heart from "../../assests/Compare/heart.svg";

const products = [
  {
    name: "Product A",
    price: "$499",
    image: image,
    rating: "4.5/5",
    brand: "Brand A",
    color: "Black",
    stock: "Not in stock",
    storage: "512GB SSD",
  },
  {
    name: "Product B",
    price: "$599",
    image: image,
    rating: "4.2/5",
    brand: "Brand B",
    color: "Silver",
    stock: "in stock",
    storage: "1TB HDD",
  },
  {
    name: "Product C",
    price: "$699",
    image: image,
    rating: "4.7/5",
    brand: "Brand C",
    color: "Grey",
    stock: "in stock",
    storage: "256GB SSD",
  },
];

const features = [
  "Image",
  "Name",
  "Price",
  "Rating",
  "Brand",
  "Color",
  "Stock",
  "Storage",
];

export default function Compare() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-100px)] bg-gray-100 py-12 px-4">
      <div className="w-full max-w-7xl">
        <div className="overflow-x-auto">
          <table className="border border-gray-200 w-full">
            <thead>
              <tr>
                <th className="border border-gray-200 p-4 bg-gray-100 text-left w-[300px]">
                  Feature
                </th>
                {products.map((product, index) => (
                  <th
                    key={index}
                    className="border border-gray-200 p-4 bg-gray-100 text-center w-[280px]"
                  >
                    {product.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`text-sm ${
                    rowIndex % 2 === 0 ? "bg-white" : "bg-gray-100"
                  } text-gray-700`}
                >
                  <td className="border border-gray-200 p-4 font-medium whitespace-nowrap w-fit">
                    {feature === "Image" ?  "": feature}
                  </td>

                  {products.map((product, colIndex) => {
                    let value;

                    if (feature.toLowerCase() === "image") {
                      value = (
                        <div className="flex flex-col gap-2">
                          <img
                            src={product.image} 
                            alt={product.name}
                            className=""
                          />
                          <p className="text-base font-normal text-black text-center px-2">
                            Gamdias ARES M2 Gaming Keyboard, Mouse and Mouse Mat
                            Combo
                          </p>
                          <div className="flex gap-2 mt-2">
                            <button
                              className={`${
                                product.stock === "in stock"
                                  ? "bg-[#FA8232]"
                                  : "bg-[#ADB7BC]"
                              } text-white text-xs font-public font-bold px-12 py-3 rounded flex gap-2 items-center`}
                            >
                              Add to Cart <img src={shoppingCart} />
                            </button>
                            <button className="border border-[#FA8232] p-2">
                              <img src={heart} />
                            </button>
                          </div>
                        </div>
                      );
                    } else {
                      switch (feature.toLowerCase()) {
                        case "name":
                          value = product.name;
                          break;
                        case "price":
                          value = (
                            <span className="font-public font-semibold text-[#2DA5F3] text-lg">
                              {product.price}
                            </span>
                          );
                          break;
                        case "rating": {
                          const numericRating = parseFloat(product.rating);
                          const fullStars = Math.floor(numericRating);
                          const halfStar = numericRating - fullStars >= 0.5;
                          const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

                          value = (
                            <div className="flex items-center gap-1">
                              {[...Array(fullStars)].map((_, i) => (
                                <span
                                  key={`full-${i}`}
                                  className="text-yellow-500"
                                >
                                  ★
                                </span>
                              ))}
                              {halfStar && (
                                <span className="text-yellow-500">☆</span>
                              )}
                              {[...Array(emptyStars)].map((_, i) => (
                                <span
                                  key={`empty-${i}`}
                                  className="text-gray-300"
                                >
                                  ★
                                </span>
                              ))}
                              <span className="ml-2 text-sm text-gray-600">
                                {product.rating}
                              </span>
                            </div>
                          );
                          break;
                        }

                        case "brand":
                          value = product.brand;
                          break;
                        case "color":
                          value = product.color;
                          break;
                        case "stock":
                          value = (
                            <span
                              className={`font-public font-semibold text-sm ${
                                product.stock === "in stock"
                                  ? "text-[#2DB224]"
                                  : "text-[#EE5858]"
                              }`}
                            >
                              {product.stock}
                            </span>
                          );
                          break;
                        case "storage":
                          value = product.storage;
                          break;
                        default:
                          value = "-";
                      }
                    }

                    return (
                      <td
                        key={colIndex}
                        className="border border-gray-200 p-4 align-top"
                      >
                        {value}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
