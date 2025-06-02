// import { Link } from "react-router";
// import PasswordEye from "../../assests/Header/PasswordEye.svg";
// import ArrowRight from "../../assests/Header/ArrowRight.svg";
// import Google from "../../assests/images/AuthPage/Google.png";
// import Apple from "../../assests/images/AuthPage/Apple.png";
// import { useState } from "react";
// import useAuth from "../../Hooks/useAuth";
// import { useNavigate } from "react-router-dom";
// export default function Login() {
//   const [activeLink, setActiveLink] = useState("signin");

//   const { login } = useAuth();

//   function handleLogin() {
//     const token = "1234567890";
//     login(token);

//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-1 00">
//       <div className="bg-white w-96 shadow-md py-4 border border-gray-200 rounded-md">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col gap-4">
//             <div className="flex items-center justify-between space-x-8 mb-6">
//               <Link
//                 to="/login"
//                 className={`font-public font-semibold text-xl pb-2 transition-all ${
//                   activeLink === "signin"
//                     ? "border-b-2 border-orange-500"
//                     : "border-b-2 border-gray-300"
//                 }`}
//               >
//                 Sign In
//               </Link>

//               <Link
//                 to="/signup"
//                 className={`font-public font-semibold text-xl pb-2 transition-all ${
//                   activeLink === "signin"
//                     ? "border-b-2 border-orange-500"
//                     : "border-b-2 border-gray-300"
//                 }`}
//               >
//                 Sign Up
//               </Link>
//             </div>

//             <div className="flex flex-col gap-4">
//               {/* Email Address */}
//               <div className="flex flex-col gap-2 text-start">
//                 <p className="text-sm font-public font-normal">Email Address</p>
//                 <input className="border border-gray-200 rounded-md w-full py-3" />
//               </div>

//               {/* Password */}
//               <div>
//                 <div className="flex justify-between">
//                   <p className="text-sm font-public font-normal">Password</p>
//                   <a
//                     className="font-public font-medium text-sm text-[#2DA5F3]"
//                     href="/login/forgot-password"
//                   >
//                     Forgot Password?
//                   </a>
//                 </div>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     className="border border-gray-200 rounded-md w-full py-3"
//                   />
//                   <img
//                     src={PasswordEye}
//                     className="text-black group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"
//                   />
//                 </div>
//               </div>

//               <button onClick={handleLogin} className="font-public font-bold text-sm text-white bg-orange-500 w-full py-3 rounded-sm flex justify-center items-center gap-2">
//                 Login <img src={ArrowRight} alt="ArrowRight" />
//               </button>

//               <div className="flex items-center my-4">
//                 <hr className="flex-grow border-t border-gray-300" />
//                 <span className="mx-4 text-sm font-medium text-gray-500">
//                   OR
//                 </span>
//                 <hr className="flex-grow border-t border-gray-300" />
//               </div>

//               <div className="flex flex-col gap-2">
//                 <button className="flex items-center gap-2 w-full text-center justify-start border border-gray-200 rounded-md py-2 px-4 text-sm font-public font-normal text-gray-text">
//                   <img src={Google} alt="Google" className="w-6 h-6" />
//                   <span className="flex-1 text-center">Login with Google</span>
//                 </button>
//                 <button className="flex items-center gap-2 w-full text-center justify-start border border-gray-200 rounded-md py-2 px-4 text-sm font-public font-normal text-gray-text">
//                   <img src={Apple} alt="Apple" className="w-6 h-6" />
//                   <span className="flex-1 text-center">
//                     Login with Facebook
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const generateProducts = () => {
//   const brands = [
//     "SpeedDrive",
//     "TechNova",
//     "UltraByte",
//     "DataCore",
//     "MegaStore",
//   ];
//   const categories = ["Storage", "Accessories", "Networking", "Peripherals"];
//   const tagsPool = [
//     "ssd",
//     "portable",
//     "storage",
//     "fast",
//     "durable",
//     "wireless",
//     "usb-c",
//   ];

//   return Array.from({ length: 50 }, (_, i) => {
//     const id = Number(i + 1);
//     const name = `Product ${id}`;
//     const description = `This is the description for Product ${id}. Great performance and value.`;
//     const image = "https://i.ibb.co/8nLxqW1m/AC.png";
//     const price = (Math.random() * 200 + 50).toFixed(2); // price between $50 and $250
//     const stock = Math.floor(Math.random() * 20) + 1; // stock between 1 and 20
//     const brand = brands[i % brands.length];
//     const category = categories[i % categories.length];
//     const tags = [
//       tagsPool[i % tagsPool.length],
//       tagsPool[(i + 1) % tagsPool.length],
//       tagsPool[(i + 2) % tagsPool.length],
//     ];

//     return {
//       id,
//       name,
//       description,
//       image,
//       price: parseFloat(price),
//       stock,
//       stockRemaining: stock,
//       brand,
//       category,
//       tags,
//     };
//   });
// };

// const products = generateProducts();

import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import useAuth from "../../Hooks/useAuth";
import PasswordEye from "../../assests/Header/PasswordEye.svg";
import ArrowRight from "../../assests/Header/ArrowRight.svg";
import Google from "../../assests/images/AuthPage/Google.png";
import Apple from "../../assests/images/AuthPage/Apple.png";
import { useState } from "react";
import { c } from "../../firebase/Auth";
import { login } from "../../api/auth";
import md5 from "md5";

// import { db } from "../../firebase/config";
// import { setDoc, doc } from "firebase/firestore";

var person = {
  name: "krish",
  greet() {},
};

export default function Login() {
  const navigate = useNavigate();
  // const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [activeLink, setActiveLink] = useState("login");

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        // await logIn(values.email, values.password); this is for firebase authentication

        // this data was used to add data initially for the first no need to run it again

        // const batchPromises = products.map((item) =>
        //   setDoc(doc(db, "product", item.id.toString()), item)
        // );

        // try {
        //   await Promise.all(batchPromises);
        //   console.log("All data uploaded with custom IDs!");
        // } catch (error) {
        //   console.error("Error uploading data:", error);
        // }

        // this is for backend authentication
        const email = values.email;
        const password = md5(values.password);
        const response = await login({ email, password });
        console.log(response);
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      } catch (error) {
        console.log(error.message);
      }
    },
  });

  return (
    <div className="flex items-center justify-center py-12">
      <div className="bg-white w-96 shadow-md py-4 border border-gray-200 rounded-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4">
            {/* Sign In & Sign Up Links */}
            <div className="flex items-center justify-between space-x-8 mb-6 border-b border-gray-300">
              <Link to="/login" className="w-full text-center">
                <span
                  className={`inline-block pb-2 transition-all border-b-2  ${
                    activeLink === "login"
                      ? "border-orange-500 w-full"
                      : "border-transparent w-full"
                  }`}
                >
                  Sign In
                </span>
              </Link>

              <Link to="/signup" className="w-full text-center">
                <span
                  className={`inline-block pb-2 transition-all border-b-2 ${
                    activeLink === "signup"
                      ? "border-orange-500 w-24"
                      : "border-transparent w-24"
                  }`}
                >
                  Sign Up
                </span>
              </Link>
            </div>

            {/* Form */}
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-4"
            >
              {/* Email Input */}
              <div className="flex flex-col gap-2 text-start">
                <p className="text-sm font-normal">Email Address</p>
                <input
                  type="email"
                  name="email"
                  className="border border-gray-200 rounded-md w-full py-3 px-2"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-red-500 text-xs">{formik.errors.email}</p>
                ) : null}
              </div>

              {/* Password Input */}
              <div>
                <div className="flex justify-between">
                  <p className="text-sm font-normal">Password</p>
                  <Link className="text-sm text-blue-500" to="/forgot-password">
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    type={`${showPassword ? "type" : "password"}`}
                    name="password"
                    className="border border-gray-200 rounded-md w-full py-3 px-2"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  <img
                    src={PasswordEye}
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 -translate-y-1/2 right-3"
                  />
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <p className="text-red-500 text-xs">
                    {formik.errors.password}
                  </p>
                ) : null}
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="font-bold text-sm text-white bg-orange-500 w-full py-3 rounded-sm flex justify-center items-center gap-2"
              >
                Login <img src={ArrowRight} alt="ArrowRight" />
              </button>
            </form>

            {/* OR Divider */}
            <div className="flex items-center my-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-4 text-sm font-medium text-gray-500">OR</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            {/* Social Login Buttons */}
            <div className="flex flex-col gap-2">
              <button className="flex items-center gap-2 w-full border border-gray-200 rounded-md py-2 px-4 text-sm font-normal">
                <img src={Google} alt="Google" className="w-6 h-6" />
                <span className="flex-1 text-center">Login with Google</span>
              </button>
              <button className="flex items-center gap-2 w-full border border-gray-200 rounded-md py-2 px-4 text-sm font-normal">
                <img src={Apple} alt="Apple" className="w-6 h-6" />
                <span className="flex-1 text-center">Login with Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
