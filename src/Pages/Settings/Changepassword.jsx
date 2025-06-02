import { useFormik } from "formik";
import * as Yup from "yup";
import PasswordEye from "../../assests/Header/PasswordEye.svg";
import { useState } from "react";

export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);

  const validationSchema = Yup.object({
    password: Yup.string().required("Password is required"),
    currentPassword: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const formik = useFormik({
    initialValues: { password: "", confirmPassword: "", currentPassword: "" },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted: ", values);
    },
  });

  return (
    <div className="bg-white rounded-sm p-6 border border-gray-200 w-full">
      <div className="flex justify-between items-center flex-col md:flex-row mb-3">
        <p className="text-sm font-medium text-gray-900">Change Passoword</p>
      </div>
      <hr className="mb-6"></hr>
      <form>
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex justify-between">
              <p className="text-sm font-public font-normal">
                Current Password
              </p>
            </div>
            <div className="relative">
              <input
                type={showCurrentPassword ? "text" : "password"}
                name="currentPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.currentPassword}
                className="border border-gray-200 rounded-md w-full py-3 px-2"
              />
              <img
                src={PasswordEye}
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-3"
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-xs">
                {formik.errors.currentPassword}
              </p>
            )}
          </div>

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
              <p className="text-red-500 text-xs">{formik.errors.password}</p>
            )}
          </div>

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
          <div>
            <button className="bg-[#FA8232] uppercase py-3 px-5 font-public text-white text-sm font-bold ">
              Change passoword
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
