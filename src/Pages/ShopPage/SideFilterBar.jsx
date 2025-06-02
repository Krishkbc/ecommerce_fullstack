import { Slider } from "@mui/material";
import React, { useState } from "react";

const categories = [
  "Electronics",
  "Clothing",
  "Home Appliances",
  "Books",
  "Sports",
  "Beauty",
  "Toys",
  "Groceries",
  "Footwear",
  "Accessories",
];

const popularBrands = [
  "Apple",
  "Samsung",
  "Nike",
  "Adidas",
  "Sony",
  "LG",
  "Puma",
  "Dell",
  "HP",
  "Philips",
];

const priceRanges = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "$100 - $500", min: 100, max: 500 },
  { label: "Above $500", min: 500, max: 10000 },
];

const popularTags = ["New", "Featured", "Limited", "Best Seller", "Trending"];

export default function SideBarFilter() {
  const [sliderValue, setSliderValue] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const toggleSelection = (value, setter, state) => {
    if (state.includes(value)) {
      setter(state.filter((item) => item !== value));
    } else {
      setter([...state, value]);
    }
  };

  return (
    <div className="w-64 bg-white shadow p-4 rounded-xl flex flex-col gap-6">
      {/* Category */}
      <div>
        <h3 className="font-public font-semibold text-lg mb-2">Category</h3>
        {categories.map((cat, idx) => (
          <label key={idx} className="flex items-center text-sm mb-1">
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedCategories.includes(cat)}
              onChange={() => toggleSelection(cat, setSelectedCategories, selectedCategories)}
            />
            {cat}
          </label>
        ))}
      </div>

      {/* Price Range Slider */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Price Range</h3>
        <Slider
          value={sliderValue}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          min={0}
          max={1000}
          step={10}
          sx={{
            color: "#FA8232",
            height: 4,
          }}
        />
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>Min: ${sliderValue[0]}</span>
          <span>Max: ${sliderValue[1]}</span>
        </div>
      </div>

      {/* Price Range Checkbox */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Fixed Price Filters</h3>
        {priceRanges.map((range, idx) => (
          <label key={idx} className="flex items-center text-sm mb-1">
            <input
              type="checkbox"
              className="mr-2"
              value={range.label}
              checked={selectedPriceRanges.includes(range.label)}
              onChange={() =>
                toggleSelection(range.label, setSelectedPriceRanges, selectedPriceRanges)
              }
            />
            {range.label}
          </label>
        ))}
      </div>

      {/* Popular Brands */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Popular Brands</h3>
        {popularBrands.map((brand, idx) => (
          <label key={idx} className="flex items-center text-sm mb-1">
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedBrands.includes(brand)}
              onChange={() => toggleSelection(brand, setSelectedBrands, selectedBrands)}
            />
            {brand}
          </label>
        ))}
      </div>

      {/* Popular Tags */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag, idx) => (
            <button
              key={idx}
              onClick={() => toggleSelection(tag, setSelectedTags, selectedTags)}
              className={`px-2 py-1 rounded-sm text-xs border ${
                selectedTags.includes(tag)
                  ? "bg-[#FA8232] text-white border-[#FA8232]"
                  : "bg-white text-gray-700 border-gray-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Ad Section */}
      <div className="mt-4">
        <div className="bg-[#FA8232] text-white text-center rounded-lg p-4 text-sm font-medium">
          Your Ad Here
        </div>
      </div>
    </div>
  );
}
