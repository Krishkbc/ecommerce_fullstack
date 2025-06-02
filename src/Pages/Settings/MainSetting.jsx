import AccountSettings from "./AccountSettings";
import Address from "./Address";
import ChangePassword from "./Changepassword";

export default function MainSetting() {
  return (
    <div className="flex flex-col gap-6 mb-16">
      <AccountSettings />
      <Address />
      <ChangePassword />
    </div>
  );
}
