import productImage from "../../assests/OrderDetails/phone1.png";

export default function TotalProduct() {
  return (
    <div className="w-full bg-white p-6">
      <h1 className="font-medium text-lg mb-4">Products</h1>

      {/* Table Section */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
            <th className="py-3 px-4 text-left">Product</th>
            <th className="py-3 px-4 text-left">Quantity</th>
            <th className="py-3 px-4 text-left">Price</th>
            <th className="py-3 px-4 text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className=" hover:bg-gray-50 transition">
            <td className="py-4 px-4 flex items-center gap-4">
              <img
                src={productImage}
                alt="product"
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="w-72">
                <p className="font-semibold text-sm text-blue-500">
                  SmartPhone
                </p>
                <p className="text-gray-600 text-sm break-words">
                  Google Pixel 6 Pro - 5G Android Phone - Unlocked Smartphone
                  with Advanced Pixel Camera and AI Features
                </p>
              </div>
            </td>
            <td className="text-sm py-4 px-4 text-gray-700">1</td>
            <td className="text-sm py-4 px-4 text-gray-700">$100</td>
            <td className="text-sm py-4 px-4 font-semibold text-gray-700">
              $100
            </td>
          </tr>
        </tbody>
      </table>

      <hr className="my-6 border-t border-gray-200" />

      {/* Billing Section */}
      <div className="w-full flex flex-wrap gap-6">
        {Array(3)
          .fill("")
          .map((_, index) => (
            <div key={index} className="flex-1 p-3 min-w-[300px]">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Billing Address
              </h3>
              <div className="space-y-2">
                <p className="font-medium text-gray-700">Kevin Hurt</p>
                <p className="text-gray-600 text-sm">
                  East Tejturi Bazar, Word No. 04, Road No. 13/x, House no.
                  1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh
                </p>
                <div className="flex gap-2 items-center">
                  <p className="font-semibold text-sm text-gray-800">Phone:</p>
                  <p className="text-gray-700">+8801717171717</p>
                </div>
                <div className="flex gap-2 items-center">
                  <p className="font-semibold text-sm text-gray-800">Email:</p>
                  <p className="text-gray-700">kevin@gmail.com</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
