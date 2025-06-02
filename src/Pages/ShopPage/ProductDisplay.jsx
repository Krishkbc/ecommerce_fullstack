import { useState } from "react";
import searchButton from "../../assests/BrowsingHistory/searchButton.svg";
import product1 from "../../assests/Dashboard/AC.png";
import { StarIcon } from "lucide-react";
import { useNavigate } from "react-router";
import star from "../../assests/productDetail/Star.png";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

import {
  Pagination,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

// const generateProducts = () => {
//   const brands = [
//     "SpeedDrive",
//     "TechNova",
//     "UltraByte",
//     "DataCore",
//     "MegaStore",
//   ];
//   const categories = ["Storage", "Accessories", "Networking", "Peripherals"];
//   const tagsPool = [
//     "ssd",
//     "portable",
//     "storage",
//     "fast",
//     "durable",
//     "wireless",
//     "usb-c",
//   ];

//   return Array.from({ length: 50 }, (_, i) => {
//     const id = Number(i + 1);
//     const name = `Product ${id}`;
//     const description = `This is the description for Product ${id}. Great performance and value.`;
//     const price = (Math.random() * 200 + 50).toFixed(2); // price between $50 and $250
//     const stock = Math.floor(Math.random() * 20) + 1; // stock between 1 and 20
//     const brand = brands[i % brands.length];
//     const category = categories[i % categories.length];
//     const tags = [
//       tagsPool[i % tagsPool.length],
//       tagsPool[(i + 1) % tagsPool.length],
//       tagsPool[(i + 2) % tagsPool.length],
//     ];

//     return {
//       id,
//       name,
//       description,
//       price: parseFloat(price),
//       stock,
//       stockRemaining: stock,
//       brand,
//       category,
//       tags,
//       image: product1,
//     };
//   });
// };
// const products = generateProducts();

// API CALL

const querySnapshot = await getDocs(collection(db, "product"));

const products = querySnapshot.docs.map((doc) => ({
  id: doc.id,
  ...doc.data(),
}));

// console.log(products);

export default function ProductDisplay() {
  const [sortBy, setSortBy] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const productsPerPage = 24;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  function handleSelectProduct(product) {
    navigate("/product-details", { state: product });
  }

  return (
    <div className="bg-white rounded-sm p-6 border border-gray-200 w-full">
      {/* Search & Sort Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <input
            placeholder="Search for anything"
            className="w-full border border-gray-300 rounded-md px-4 pr-10 py-2 text-sm"
          />
          <img
            src={searchButton}
            alt="Search"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
          />
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-700">Sort by</p>
          <FormControl sx={{ minWidth: 160 }} size="small">
            <InputLabel id="sort-select-label">Options</InputLabel>
            <Select
              labelId="sort-select-label"
              id="sort-select"
              value={sortBy}
              label="Options"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="priceLowHigh">Price: Low to High</MenuItem>
              <MenuItem value="priceHighLow">Price: High to Low</MenuItem>
              <MenuItem value="newest">Newest Arrivals</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {paginatedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white hover:shadow-md border border-gray-200 rounded-lg p-4 w-full hover:cursor-pointer"
            onClick={() => handleSelectProduct(product)}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover rounded-lg"
            />

            {/* Rating */}
            <div className="flex mt-2">
              {/* {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  className={`text-yellow-500 ${
                    index < Math.floor(product.rating)
                      ? "opacity-100"
                      : "opacity-30"
                  }`}
                >
                  ★
                </span>
              ))} */}

              <img src={star} />
            </div>

            {/* Title & Price */}
            <h3 className="text-sm font-normal mt-2">{product.description}</h3>
            <p className="text-blue-600 font-bold mt-1">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(_, value) => {
            setCurrentPage(value);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          sx={{
            button: {
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "#FA8232",
              },
              "&.Mui-selected": {
                backgroundColor: "#FA8232",
                color: "white",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#FA8232",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}
