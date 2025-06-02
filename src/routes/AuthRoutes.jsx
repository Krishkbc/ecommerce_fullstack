import Login from "../Pages/AuthPages/LoginPage";
import Signup from "../Pages/AuthPages/SignUpPage";
import ForgotPassword from "../Pages/AuthPages/ForgetPassword";
import ResetPassword from "../Pages/AuthPages/ResetPassword";
import { ProtectedRoute } from "./ProtectedRoute";
import { useLocation } from "react-router-dom";


export default function AuthRoutes() {
  const { pathname } = useLocation();

  if (pathname === "/login") return <Login />;
  if (pathname === "/signup") return <Signup />;
  if (pathname === "/forgot-password") return <ForgotPassword />;
  if (pathname === "/reset-password")
    return (
      <ProtectedRoute>
        <ResetPassword />
      </ProtectedRoute>
    );

  return <Login />;
}
