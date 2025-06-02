import ArrowUp from "../../assests/Header/ArrowUp.svg";
import Compare from "../../assests/Header/Compare.svg";
import Location from "../../assests/Header/Location.svg";
import HeadPhone from "../../assests/Header/HeadPhone.svg";
import Info from "../../assests/Header/Info.svg";
import Phone from "../../assests/Header/Phone.svg";
import { useState } from "react";
import WhiteArrowUp from "../../assests/Header/WhiteArrowUp.svg";
import CategoryDropDown from "./PopUp/CategoryDropDown";
import { NavLink } from "react-router-dom";

const categories = [
  "Computer & Laptop",
  "Computer & Laptop",
  "Computer & Laptop",
  "Computer & Laptop",
  "Computer & Laptop",
  "Computer & Laptop",
  "Computer & Laptop",
  "Computer & Laptop",
  "Computer & Laptop",
  "Computer & Laptop",
  "Computer & Laptop",
];

const navLinks = [
  { to: "/track-order", icon: Location, label: "Track Order" },
  { to: "/compare", icon: Compare, label: "Compare" },
  { to: "/customer-service", icon: HeadPhone, label: "Customer Service" },
  { to: "/help", icon: Info, label: "Need Help" },
];

export default function LowerNavBar() {
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();

  function handleCategoryVisible() {
    setCategoryVisible(!categoryVisible);
  }

  function handleSelectCategory(category) {
    setSelectedCategory(category);
  }

  return (
    <div className="py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 relative">
            <div
              className="flex items-center gap-4 relative"
              onMouseEnter={() => setCategoryVisible(true)}
              onMouseLeave={() => setCategoryVisible(false)}
            >
              <button
                className={`bg-gray-100 flex items-center gap-2 font-public font-medium text-sm px-5 py-2 ${
                  categoryVisible ? "bg-tertiary text-white" : ""
                }`}
              >
                All Category
                <img
                  src={categoryVisible ? ArrowUp : WhiteArrowUp}
                  alt="Arrow"
                  className="w-4 h-4"
                />
              </button>

              {/* Dropdown */}
              {categoryVisible && (
                <ul className="absolute top-full left-0 z-50 bg-gray-50 text-gray-text drop-shadow w-48 text-start">
                  {categories.map((cat, index) => (
                    <li
                      key={index}
                      onClick={() => handleSelectCategory(index)}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100 relative"
                    >
                      {cat}
                      {selectedCategory === index && (
                        <div className="absolute left-full top-0 z-50">
                          <CategoryDropDown />
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="flex flex-wrap gap-3">
              {navLinks.map(({ to, icon, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 font-public font-normal text-sm  ${
                      isActive
                        ? "text-[#FA8232] border-[#FA8232]"
                        : "text-gray-600 border-transparent"
                    }`
                  }
                >
                  <img src={icon} alt={label} />
                  <p>{label}</p>
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src={Phone} alt="Phone" />
            <p className="font-public font-normal text-lg">+1234567890</p>
          </div>
        </div>
      </div>
    </div>
  );
}
