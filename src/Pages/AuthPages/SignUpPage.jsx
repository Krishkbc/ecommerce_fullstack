import { useState } from "react";
import { Link } from "react-router-dom";
import PasswordEye from "../../assests/Header/PasswordEye.svg";
import ArrowRight from "../../assests/Header/ArrowRight.svg";
import Google from "../../assests/images/AuthPage/Google.png";
import Apple from "../../assests/images/AuthPage/Apple.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { register } from "../../api/auth";
import md5 from "md5";

import { signUp } from "../../firebase/Auth";
import { db } from "../../firebase/config";
import { doc, setDoc } from "firebase/firestore";

export default function SignUpPage() {
  const [activeLink, setActiveLink] = useState("signup");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "", confirmPassword: "" },
    validationSchema,
    onSubmit: async (values) => {
      // localStorage.setItem(values.email, values.password);
      // localStorage.setItem("LoggedInUser", values.email);
      // navigate("/dashboard");
      try {
        // const user = await signUp(values.email, values.password); this is with firebase authentication
        // console.log("User UID: ", user.uid); // Debugging line to check the UID
        // await setDoc(doc(db, "users", user.uid), {
        //   name: values.name,
        //   email: values.email,
        // });

        const name = values.name;
        const email = values.email;
        const password = md5(values.password);

        const response = await register({
          name,
          email,
          password,
          country: "India",
          state: "Gujarat",
        });
        console.log(response);
        alert("added successfully");
      } catch (err) {
        console.log("register error", err.message);
      }
    },
  });

  return (
    <div className="flex items-center justify-center py-12">
      <div className="bg-white w-96 shadow-md py-4 border border-gray-200 rounded-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4">
            {/* Tabs */}
            <div className="flex items-center justify-between space-x-8 mb-6 border-b border-gray-300">
              <Link to="/login" className="w-full text-center">
                <span
                  className={`inline-block pb-2 transition-all border-b-2 ${
                    activeLink === "login"
                      ? "border-orange-500 w-24"
                      : "border-transparent w-24"
                  }`}
                >
                  Sign In
                </span>
              </Link>

              <Link to="/signup" className="w-full text-center">
                <span
                  className={`inline-block pb-2 transition-all border-b-2 text-[#191C1F] ${
                    activeLink === "signup"
                      ? "border-orange-500 w-full"
                      : "border-transparent w-full"
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
              {/* Name */}
              <div className="flex flex-col gap-2 text-start">
                <p className="text-sm font-public font-normal">Name</p>
                <input
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="border border-gray-200 rounded-md w-full py-3 px-2"
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-xs">{formik.errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2 text-start">
                <p className="text-sm font-public font-normal">Email Address</p>
                <input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="border border-gray-200 rounded-md w-full py-3 px-2"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-xs">{formik.errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between">
                  <p className="text-sm font-public font-normal">Password</p>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className="border border-gray-200 rounded-md w-full py-3 px-2"
                  />
                  <img
                    src={PasswordEye}
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-3"
                  />
                </div>
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-xs">
                    {formik.errors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <div className="flex justify-between">
                  <p className="text-sm font-public font-normal">
                    Confirm Password
                  </p>
                </div>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                    className="border border-gray-200 rounded-md w-full py-3 px-2"
                  />
                  <img
                    src={PasswordEye}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-3"
                  />
                </div>
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword && (
                    <p className="text-red-500 text-xs">
                      {formik.errors.confirmPassword}
                    </p>
                  )}
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center text-sm text-gray-600 gap-2">
                <input type="checkbox" id="agree" className="w-4 h-4" />
                <label htmlFor="agree">
                  I agree to the
                  <a href="#" className="text-blue-500 hover:underline mx-1">
                    Terms & Conditions
                  </a>
                  and
                  <a href="#" className="text-blue-500 hover:underline mx-1">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="font-public font-bold text-sm text-white bg-orange-500 w-full py-3 rounded-md flex justify-center items-center gap-2"
              >
                Sign Up
                <img src={ArrowRight} alt="ArrowRight" />
              </button>
            </form>

            {/* OR Divider */}
            <div className="flex items-center my-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-4 text-sm font-medium text-gray-500">OR</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            {/* Social Login */}
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
  );
}
