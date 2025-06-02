import { Outlet } from "react-router-dom";
import SideNavBar from "../component/SideNavBar/SideNavBar";
import { ProtectedRoute } from "./ProtectedRoute";

export default function ProtectedLayout() {
  return (
    <ProtectedRoute>
      <div className="flex container mx-auto px-4">
        {/* Sidebar (Persistent) */}
        <SideNavBar />

        {/* Page Content */}
        <div className="flex-grow p-4">
          <Outlet />
        </div>
      </div>
    </ProtectedRoute>
  );
}
