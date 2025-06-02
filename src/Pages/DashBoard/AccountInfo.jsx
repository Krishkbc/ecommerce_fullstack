import profile from "../../assests/Dashboard/profile.png";
import blueBox from "../../assests/Dashboard/blueBox.png";
import greenBox from "../../assests/Dashboard/greenBox.png";
import redBox from "../../assests/Dashboard/redBox.png";

export default function AccountInfo() {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 w-full">
      {/* Greeting Section */}
      <div className="mb-6 w-[500px]">
        <h1 className="font-public font-semibold text-xl text-gray-900">
          Hello, Kevin 👋
        </h1>
        <p className="font-public text-gray-600 text-sm mt-2 leading-relaxed">
          From your account dashboard, you can easily check & view your{" "}
          <a href="#" className="text-[#2DA5F3] font-medium hover:underline">
            Recent Orders
          </a>
          , manage your{" "}
          <a href="#" className="text-[#2DA5F3] font-medium hover:underline">
            Shipping and Billing Addresses
          </a>
          , and edit your{" "}
          <a href="#" className="text-[#2DA5F3] font-medium hover:underline">
            Password
          </a>{" "}
          and{" "}
          <a href="#" className="text-[#2DA5F3] font-medium hover:underline">
            Account Details
          </a>
          .
        </p>
      </div>

      {/* Account Information and Stats in a Row */}
      <div className="flex gap-6">
        {/* Two Account Info Boxes */}
        {[1, 2].map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-5 border border-gray-200 w-[30%]"
          >
            <h2 className="font-public font-medium text-lg text-gray-800 mb-4">
              Account Information
            </h2>
            <hr className="mb-4" />

            {/* Profile Section */}
            <div className="flex items-center gap-3">
              <img
                src={profile}
                alt="Profile"
                className="w-14 h-14 rounded-full border"
              />
              <div>
                <h3 className="font-semibold text-gray-900 text-base">
                  Kevin Gilbert
                </h3>
                <p className="text-sm text-gray-600">
                  Dhaka - 1207, Bangladesh
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="mt-5 space-y-2">
              <div className="flex items-center text-sm">
                <p className="font-medium text-gray-700">Email:</p>
                <p className="text-gray-600">kevin@gmail.com</p>
              </div>
              <div className="flex items-center text-sm">
                <p className="font-medium text-gray-700">Phone:</p>
                <p className="text-gray-600">+8801717171717</p>
              </div>
            </div>

            {/* Edit Button */}
            <button className="mt-5 w-full text-[#2DA5F3] border border-[#2DA5F3] font-medium py-2 rounded-md hover:bg-[#2DA5F3] hover:text-white transition">
              EDIT ACCOUNT
            </button>
          </div>
        ))}

        {/* Colorful Stats Boxes */}
        <div className="flex flex-col justify-between w-[30%]">
          <div className="bg-[#EAF6FE] flex items-center gap-4 p-4 rounded-lg ">
            <img src={blueBox} alt="Orders" className="w-12 h-12" />
            <div>
              <p className="text-xl font-semibold text-gray-900">154</p>
              <p className="text-sm text-gray-600">Total Orders</p>
            </div>
          </div>

          <div className="bg-[#FFF3EB] flex items-center gap-4 p-4 rounded-lg ">
            <img src={greenBox} alt="Pending" className="w-12 h-12" />
            <div>
              <p className="text-xl font-semibold text-gray-900">05</p>
              <p className="text-sm text-gray-600">Pending Orders</p>
            </div>
          </div>

          <div className="bg-[#EAF7E9] flex items-center gap-4 p-4 rounded-lg ">
            <img src={redBox} alt="Canceled" className="w-12 h-12" />
            <div>
              <p className="text-xl font-semibold text-gray-900">03</p>
              <p className="text-sm text-gray-600">Canceled Orders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
