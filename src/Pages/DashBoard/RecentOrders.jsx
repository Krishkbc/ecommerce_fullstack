import orangeRightArrow from "../../assests/Dashboard/orangeRightArrow.svg";
import blueRightArrow from "../../assests/Dashboard/blueRightArrow.svg";
import whiteRightArrow from "../../assests/Dashboard/whiteRightArrow.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const orders = [
  { id: "#12345", status: "Pending", date: "2025-04-04", total: "$120.00" },
  { id: "#12346", status: "Completed", date: "2025-04-03", total: "$80.00" },
  { id: "#12347", status: "Cancelled", date: "2025-04-02", total: "$50.00" },
  { id: "#12347", status: "Cancelled", date: "2025-04-02", total: "$50.00" },
  { id: "#12347", status: "Cancelled", date: "2025-04-02", total: "$50.00" },
  { id: "#12347", status: "Cancelled", date: "2025-04-02", total: "$50.00" },
  { id: "#12347", status: "Cancelled", date: "2025-04-02", total: "$50.00" },
];

export default function RecentOrders() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const handleViewAll = () => {
    navigate("/order-history");
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 w-full">
      <div className="flex flex-col gap-4 px-6 py-4">
        {/* Header Section */}
        <div className="flex justify-between items-center flex-col md:flex-row">
          <p className="text-lg font-semibold text-gray-900">RECENT ORDERS</p>
          <button
            onClick={handleViewAll}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-[#FA8232] text-sm font-semibold flex items-center gap-2 border border-[#FA8232] px-4 py-2 rounded-md hover:bg-[#FA8232] hover:text-white transition"
          >
            View All
            {isHovered ? (
              <img src={whiteRightArrow} alt="whiteRightArrow" />
            ) : (
              <img src={orangeRightArrow} alt="orangeRightArrow" />
            )}
          </button>
        </div>
      </div>

      {/* Table with no padding */}
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
          {orders.map((order, index) => (
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
                      ? " text-yellow-600"
                      : " text-red-600"
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="py-3 px-6">{order.date}</td>
              <td className="py-3 px-6">{order.total}</td>
              <td className="py-3 px-6">
                <button className="text-[#2DA5F3] hover:text-blue-700 text-sm font-medium flex items-center gap-2">
                  View Details <img src={blueRightArrow} alt="" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
