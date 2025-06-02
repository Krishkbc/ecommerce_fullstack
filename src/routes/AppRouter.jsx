import { Routes, Route } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "../Pages/AuthPages/LoginPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<AuthRoutes />} />
      <Route path="/signup" element={<AuthRoutes />} />
      <Route path="/forgot-password" element={<AuthRoutes />} />
      <Route path="/reset-password" element={<AuthRoutes />} />

      <Route path="/*" element={<ProtectedRoutes />} />

      <Route path="*" element={<Login />} />
    </Routes>
  );
}
