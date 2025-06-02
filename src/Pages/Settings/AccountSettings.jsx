import profileImage from "../../assests/Setting/Avatar.png";

export default function AccountSettings() {
  return (
    <div className="bg-white rounded-sm p-6 border border-gray-200 w-full">
      {/* Header */}
      <div className="flex items-center flex-col md:flex-row mb-6">
        <p className="text-sm font-medium text-gray-900">ACCOUNT SETTINGS</p>
      </div>

      {/* Image + Form */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Profile Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
          />
        </div>

        {/* Form Fields */}
        <form className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {/* Display Name */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Display Name
              </label>
              <input
                type="text"
                placeholder="Display Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
              />
            </div>

            {/* Full Name */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
              />
            </div>

            {/* Secondary Email */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Secondary Email
              </label>
              <input
                type="email"
                placeholder="alt@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
              />
            </div>

            {/* State & Zip Code */}

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Country
              </label>
              <input
                type="text"
                placeholder="Country"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
              />
            </div>

            {/* Save Changes Button */}
            <div>
              <button
                type="submit"
                className="font-public mt-2 bg-[#FA8232] hover:bg-[#fa8232cc] text-white text-sm font-medium rounded-sm px-5 py-3"
              >
                SAVE CHANGES
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {/* Username */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1234567890"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
              />
            </div>

            {/* Country */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  State
                </label>
                <input
                  type="text"
                  placeholder="State"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
                />
              </div>
              <div className="flex-1">
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Zip Code
                </label>
                <input
                  type="text"
                  placeholder="123456"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
