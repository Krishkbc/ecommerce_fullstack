import star from "../../assests/productDetail/Star.png";

import product1 from "../../assests/Dashboard/mobile.png";

const products = [
  {
    id: 1,
    title: "TOZO T6 True Wireless Earbuds Bluetooth Headphone",
    image: product1,
    price: "$99",
    rating: 4.5,
  },
  {
    id: 2,
    title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
    image: product1,
    price: "$120",
    rating: 3.8,
  },
  {
    id: 3,
    title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
    image: product1,
    price: "$75",
    rating: 4.2,
  },
  {
    id: 4,
    title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
    image: product1,
    price: "$200",
    rating: 5,
  },
];

export default function ProductHistory() {
  return (
    <div className="bg-white p-6 rounded-sm w-full">
      {/* Date Header */}
      <div className="font-public text-base pl-4 mb-2">17 OCT, 2020</div>
      <hr className="mb-6" />

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="w-56 bg-white border rounded-lg p-4">
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover rounded-lg"
            />

            {/* Rating */}
            <div className="flex mt-2">
              <span className={`text-yellow-500`}>
                <img src={star} />
              </span>
            </div>

            {/* Product Title */}
            <h3 className="text-sm font-normal font-public mt-2">
              {product.title}
            </h3>

            {/* Product Price */}
            <p className="text-blue-600 font-bold mt-1">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
