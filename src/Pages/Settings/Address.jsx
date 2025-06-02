export default function Address() {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Billing Address */}
      <div className="bg-white rounded-sm p-6 border border-gray-200 w-full">
        <div className="flex justify-between items-center flex-col md:flex-row mb-6">
          <p className="text-sm font-medium text-gray-900">
            BILLING ADDRESS 
          </p>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              First Name
            </label>
            <input
              type="text"
              placeholder="John"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Doe"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Company Inc."
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Address
            </label>
            <input
              type="text"
              placeholder="123 Street, Area"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
          </div>

          {/* Country */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Country
            </label>
            <input
              type="text"
              placeholder="USA"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
          </div>

          {/* State */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-700 block mb-1">
              State
            </label>
            <input
              type="text"
              placeholder="California"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
          </div>

          {/* City */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              City
            </label>
            <input
              type="text"
              placeholder="Los Angeles"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
          </div>

          {/* Zip Code */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Zip Code
            </label>
            <input
              type="text"
              placeholder="90001"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
          </div>

          {/* Email */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
          </div>

          {/* Phone */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+1 234 567 8900"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
          </div>

          {/* Save Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="mt-2 uppercase bg-[#FA8232] hover:bg-[#fa8232cc] text-white text-sm font-medium rounded-sm px-6 py-3"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>

      {/* Shipping Address */}
      <div className="bg-white rounded-sm p-6 border border-gray-200 w-full">
      <div className="flex justify-between items-center flex-col md:flex-row mb-6">
        <p className="text-sm font-medium text-gray-900">SHIPPING ADDRESS</p>
      </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              First Name
            </label>
            <input
              type="text"
              placeholder="John"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Doe"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Company Inc."
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Address
            </label>
            <input
              type="text"
              placeholder="123 Street, Area"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
          </div>

          {/* Country */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Country
            </label>
            <input
              type="text"
              placeholder="USA"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
          </div>

          {/* State */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-700 block mb-1">
              State
            </label>
            <input
              type="text"
              placeholder="California"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
          </div>

          {/* City */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              City
            </label>
            <input
              type="text"
              placeholder="Los Angeles"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
          </div>

          {/* Zip Code */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Zip Code
            </label>
            <input
              type="text"
              placeholder="90001"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
          </div>

          {/* Email */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
          </div>

          {/* Phone */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+1 234 567 8900"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
          </div>

          {/* Save Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="mt-2 bg-[#FA8232] uppercase hover:bg-[#fa8232cc] text-white text-sm font-medium rounded-sm px-6 py-3"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
