import { useState } from "react";
import whiteRightArrow from "../../assests/Dashboard/whiteRightArrow.svg";
import orangeRightArrow from "../../assests/Dashboard/orangeRightArrow.svg";
import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PaginationItem from "@mui/material/PaginationItem";

import star from "../../assests/productDetail/Star.png";

import product1 from "../../assests/Dashboard/Headphone.png";
import product2 from "../../assests/Dashboard/mobile.png";
import product3 from "../../assests/Dashboard/mobile2.png";
import product4 from "../../assests/Dashboard/AC.png";

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
    image: product2,
    price: "$120",
    rating: 3.8,
  },
  {
    id: 3,
    title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
    image: product3,
    price: "$75",
    rating: 4.2,
  },
  {
    id: 4,
    title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
    image: product4,
    price: "$200",
    rating: 5,
  },
  {
    id: 5,
    title: "Samsung Electronics Samsung Galexy S21 5G",
    image: product1,
    price: "$99",
    rating: 4.5,
  },
  {
    id: 6,
    title: "Samsung Electronics Samsung Galexy S21 5G",
    image: product2,
    price: "$120",
    rating: 3.8,
  },
  {
    id: 7,
    title: "Samsung Electronics Samsung Galexy S21 5G",
    image: product3,
    price: "$75",
    rating: 4.2,
  },
  {
    id: 8,
    title: "Samsung Electronics Samsung Galexy S21 5G",
    image: product4,
    price: "$200",
    rating: 5,
  },
];

export default function BrowsingHistory() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 w-full">
      <div>
        <div className="flex justify-between items-center flex-col md:flex-row">
          <p className="text-lg font-semibold text-gray-900">
            BROWSING HISTORY
          </p>
          <button
            onClick={() => navigate("/browsing-history")}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-[#FA8232] text-sm font-semibold flex items-center gap-2 border border-[#FA8232] px-3 py-2 rounded-md hover:bg-[#FA8232] hover:text-white transition"
          >
            Browsing History
            <img
              src={isHovered ? whiteRightArrow : orangeRightArrow}
              alt="arrow"
            />
          </button>
        </div>

        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            {paginatedProducts.map((product) => (
              <div key={product.id} className="w-56 bg-white rounded-lg p-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="flex mt-2">
                  <img src={star} />
                </div>
                <h3 className="text-sm font-normal font-public mt-2">
                  {product.title}
                </h3>
                <p className="text-blue-600 font-bold mt-1">{product.price}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 py-3">
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={(_, value) => {
                setCurrentPage(value);
              }}
              sx={{
                "& .MuiPaginationItem-root": {
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  backgroundColor: "white",
                  color: "black",
                  border: "1px solid #ddd",
                  transition: "all 0.3s",
                  "&:hover": {
                    backgroundColor: "#FA8232",
                    color: "white",
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
      </div>
    </div>
  );
}
