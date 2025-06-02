import AccountInfo from "./AccountInfo";
import PaymentOption from "./PaymentOption";
import RecentOrders from "./RecentOrders";
import BrowsingHistory from "./BrowsingHistory";

export default function DashBoard() {
  return (
    <div className="flex flex-col gap-6">
      <AccountInfo />
      <PaymentOption />
      <RecentOrders />
      <BrowsingHistory />
    </div>
  );
}
