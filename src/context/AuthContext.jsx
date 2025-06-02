// import { createContext, useEffect, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     const loggedInUserEmail = localStorage.getItem("LoggedInUser");
//     if (loggedInUserEmail) {
//       const storedPassword = localStorage.getItem(loggedInUserEmail);
//       setCurrentUser({ email: loggedInUserEmail, password: storedPassword });
//     }
//   }, []);

//   const login = (email, password) => {
//     localStorage.setItem(email, password);
//     localStorage.setItem("LoggedInUser", email);
//     setCurrentUser({ email, password });
//   };

//   const logout = () => {
//     localStorage.removeItem("LoggedInUser");
//     setCurrentUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ currentUser, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export { AuthContext };
