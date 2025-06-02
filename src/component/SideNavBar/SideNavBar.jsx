import { NavLink } from "react-router-dom";
import stack from "../../assests/SideBar/Stack.svg";
import WhiteStack from "../../assests/SideBar/WhiteStack.svg";
import store from "../../assests/SideBar/Store.svg";
import WhiteStore from "../../assests/SideBar/WhiteStore.svg";
import location from "../../assests/SideBar/Location.svg";
import WhiteLocation from "../../assests/SideBar/WhiteLocation.svg";
import cart from "../../assests/SideBar/Cart.svg";
import WhiteCart from "../../assests/SideBar/WhiteCart.svg";
import heart from "../../assests/SideBar/Heart.svg";
import WhiteHeart from "../../assests/SideBar/WhiteHeart.svg";
import compare from "../../assests/SideBar/Compare.svg";
import WhiteCompare from "../../assests/SideBar/WhiteCompare.svg";
import cardAddress from "../../assests/SideBar/CardAddress.svg";
import WhiteCardAddress from "../../assests/SideBar/WhiteCardAddress.svg";

import browserHistory from "../../assests/SideBar/BrowsingHistory.svg";
import WhiteBrowserHistory from "../../assests/SideBar/WhiteBrowsingHistory.svg";
import setting from "../../assests/SideBar/Setting.svg";
import WhiteSetting from "../../assests/SideBar/WhiteSetting.svg";
import Logout from "../../assests/SideBar/Logout.svg";
import WhiteLogout from "../../assests/SideBar/WhiteLogout.svg";

// Dummy icons to match each section (customize as needed)
const icons = {
  Dashboard: { default: stack, active: WhiteStack },
  "Order history": { default: store, active: WhiteStore },
  "Track Order": { default: location, active: WhiteLocation },
  Wishlist: { default: heart, active: WhiteHeart },
  Compare: { default: compare, active: WhiteCompare },
  "Cards $ Address": { default: cardAddress, active: WhiteCardAddress },
  "Browsing History": { default: browserHistory, active: WhiteBrowserHistory },
  Setting: { default: setting, active: WhiteSetting },
  Logout: { default: Logout, active: WhiteLogout },
};

const sideBar = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Order history", path: "/order-history" },
  { name: "Track Order", path: "/track-order" },
  { name: "Wishlist", path: "/wishlist" },
  { name: "Compare", path: "/compare" },
  { name: "Cards $ Address", path: "/card-address" },
  { name: "Browsing History", path: "/browsing-history" },
  { name: "Setting", path: "/setting" },
  { name: "Logout", path: "/logout" },
];

export default function SideNavBar() {
  return (
    <div className="mt-5 h-fit w-64 text-gray-text text-sm font-public font-normal p-4 border border-gray-200 shadow-md rounded-sm sticky top-5">
      <ul>
        {sideBar.map((item) => (
          <li key={item.path} className="mb-2">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-md transition text-sm font-public font-normal ${
                  isActive
                    ? "bg-[#FA8232] text-white"
                    : "hover:bg-gray-100 text-gray-text"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    src={
                      isActive
                        ? icons[item.name].active
                        : icons[item.name].default
                    }
                    alt={item.name}
                    className="w-5 h-5"
                  />
                  {item.name}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
