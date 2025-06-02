// import { Navigate, Outlet } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { AuthContext } from "../context/AuthContext";
// import useAuth from "../Hooks/useAuth";
// import SideNavBar from "../component/SideNavBar/SideNavBar";

// export function ProtectedRoute() {
//   const { currentUser } = useAuth();

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setLoading(false);
//     }, 500);
//     return () => clearTimeout(timeout);
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return currentUser ? (
//     <div className="flex">
//       <SideNavBar />
//       <div className="flex-grow">
//         <Outlet />
//       </div>
//     </div>
//   ) : (
//     <Navigate to="/login" replace />
//   );
// }

import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import LoadingScreen from "../component/LoadingScreen";

export function ProtectedRoute({ children }) {
  // const { user, loading } = useAuth(); this is with firebase authentication
  const token = localStorage.getItem("token");
  const loading = false;

  if (loading) {
    return <LoadingScreen />;
  }

  return token ? children : <Navigate to="/login" replace />;
}
