import star from "../../assests/productDetail/Star.png";


export default function RatingModal({ setIsOpen }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[430px] h-[430px] rounded-lg shadow-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Leave a Rating</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 text-xl"
          >
            &times;
          </button>
        </div>

        {/* Gray Separator */}
      
        <hr className="mb-4"></hr>

        {/* Rating Dropdown */}
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Rating
        </label>
        <select className="w-full p-2 border border-gray-300 rounded-md mb-4">
          <option value="5">5 - Excellent</option>
          <option value="4">4 - Good</option>
          <option value="3">3 - Average</option>
          <option value="2">2 - Poor</option>
          <option value="1">1 - Terrible</option>
        </select>

        {/* Feedback Input */}
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Feedback
        </label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md h-24 resize-none"
          placeholder="Write your feedback here..."
        ></textarea>

        {/* Publish Button */}
        <button className=" mt-4 bg-[#FA8232] uppercase text-white py-2 px-4 rounded-sn hover:bg-[#fa82324d] transition">
          Publish Review
        </button>
      </div>
    </div>
  );
}
