import { Outlet } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

export default function ProtectedCheckout() {
  return (
    <div>
      <ProtectedRoute>
        <div className="flex-grow p-4">
          <Outlet />
        </div>
      </ProtectedRoute>
    </div>
  );
}
