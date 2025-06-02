import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import PasswordEye from "../../../assests/Header/PasswordEye.svg";
import ArrowRight from "../../../assests/Header/ArrowRight.svg";

export default function LoginPopup() {
  const [showPassword, setShowPassword] = useState(false);

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
    onSubmit: (values) => {
      const storedPassword = localStorage.getItem(values.email);
      if (storedPassword) {
        if (storedPassword === values.password) {
          alert("Logged in successfully"); // replace with your login logic
        } else {
          alert("Incorrect password.");
        }
      } else {
        alert("Email not found.");
      }
    },
  });

  return (
    <div className="absolute top-full right-0 mt-2 w-96 bg-white border border-gray-200 shadow-lg rounded-md z-50">
      <div className="p-6">
        <h2 className="text-xl font-bold text-center mb-4">
          Sign in to your account
        </h2>

        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              className="border border-gray-300 rounded-md w-full py-2 px-3"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-xs">{formik.errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <label className="text-sm font-medium">Password</label>
              <Link to="/forgot-password" className="text-sm text-blue-500">
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="border border-gray-300 rounded-md w-full py-2 px-3"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <img
                src={PasswordEye}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer w-5 h-5"
                alt="Toggle Password"
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-xs">{formik.errors.password}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="font-bold text-sm text-white bg-orange-500 w-full py-3 rounded-sm flex justify-center items-center gap-2"
          >
            Login <img src={ArrowRight} alt="ArrowRight" />
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-sm font-medium text-gray-500">
              Don't have an account
            </span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <button className="bg-white border border-[#FA8232] py-3 rounded-sm uppercase text-[#FA8232] text-sm font-bold">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
