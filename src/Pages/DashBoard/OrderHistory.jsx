import blueRightArrow from "../../assests/Dashboard/blueRightArrow.svg";
import { useState } from "react";
import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";

const orders = Array.from({ length: 50 }, (_, index) => ({
  id: `#${12345 + index}`,
  status: ["Pending", "Completed", "Cancelled"][Math.floor(Math.random() * 3)],
  date: `2025-04-${String(4 - (index % 3)).padStart(2, "0")}`,
  total: `$${(Math.random() * 200 + 20).toFixed(2)}`,
}));

export default function OrderHistory() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  function handleOrderDetails() {
    navigate("/order-history/order-details");
  }

  const pageSize = 10;
  const totalPages = Math.ceil(orders.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedOrders = orders.slice(startIndex, startIndex + pageSize);

  return (
    <div className="bg-white shadow-md rounded-lg border border-gray-200 w-full">
      {/* Title with padding */}
      <div className="px-6 py-4 flex justify-between items-center flex-col md:flex-row">
        <p className="text-lg font-semibold text-gray-900">ORDER HISTORY</p>
      </div>

      {/* Table with no extra wrapping padding */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
            <th className="py-3 px-6 text-left">Order ID</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-left">Date</th>
            <th className="py-3 px-6 text-left">Total</th>
            <th className="py-3 px-6 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {paginatedOrders.map((order, index) => (
            <tr
              key={index}
              className="bg-white border-b hover:bg-gray-50 transition"
            >
              <td className="py-3 px-6">{order.id}</td>
              <td className="py-3 px-6">
                <span
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    order.status === "Completed"
                      ? " text-green-600"
                      : order.status === "Pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="py-3 px-6">{order.date}</td>
              <td className="py-3 px-6">{order.total}</td>
              <td className="py-3 px-6">
                <button
                  onClick={handleOrderDetails}
                  className="text-[#2DA5F3] hover:text-blue-700 text-sm font-medium flex items-center gap-2"
                >
                  View Details <img src={blueRightArrow} alt="" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-6 py-3">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(_, value) => {
            setCurrentPage(value);
            window.scrollTo({ top: 0, behavior: "smooth" });
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
  );
}
