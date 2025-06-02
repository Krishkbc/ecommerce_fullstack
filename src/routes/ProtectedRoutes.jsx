// ProtectedRoutes.jsx
import { Routes, Route } from "react-router-dom";
import ProtectedLayout from "./ProtectedLayout";
import Dashboard from "../Pages/DashBoard/DashBoard";
import OrderHistory from "../Pages/DashBoard/OrderHistory";
import OrderDetails from "../Pages/OrderDetails/OrderDetails";
import CardAndAddress from "../Pages/CardAndAddress/CardAndAddress";
import BrowsingHistory from "../Pages/BrowisngHistory/BrowsingHistory";
import MainSetting from "../Pages/Settings/MainSetting";
import ShopPage from "../Pages/ShopPage/ShopPage";
import ProductDetailPage from "../Pages/ProductsDetail/ProductDetail";
import TrackOrder from "../Pages/TrackOrder/TrackOrder";
import TrackOrderDetail from "../Pages/TrackOrder/TrackOrderDetail";
import Compare from "../Pages/Compare/Compare";
import WishlistTable from "../Pages/Wishlist/Wishlist";
import ShoppingCard from "../Pages/ShoppingCard/ShoppingCard";
import Checkout from "../Pages/CheckOut/CheckOut";
import OrderPlaced from "../Pages/OrderPlaced/OrderPlaced";

export default function ProtectedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="order-history" element={<OrderHistory />} />
        <Route path="order-history/order-details" element={<OrderDetails />} />
        <Route path="card-address" element={<CardAndAddress />} />
        <Route path="browsing-history" element={<BrowsingHistory />} />
        <Route path="setting" element={<MainSetting />} />
      </Route>

      <Route path="shoppage" element={<ShopPage />} />
      <Route path="product-details" element={<ProductDetailPage />} />
      <Route path="track-order" element={<TrackOrder />} />
      <Route path="details" element={<TrackOrderDetail />} />
      <Route path="compare" element={<Compare />} />
      <Route path="wishlist" element={<WishlistTable />} />
      <Route path="shoppingcard" element={<ShoppingCard />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="order-placed" element={<OrderPlaced />} />
    </Routes>
  );
}
