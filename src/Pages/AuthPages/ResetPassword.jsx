import { useFormik } from "formik";
import * as Yup from "yup";
import PasswordEye from "../../assests/Header/PasswordEye.svg";
import { useState } from "react";
import ArrowRight from "../../assests/Header/ArrowRight.svg";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validationSchema = Yup.object({
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const formik = useFormik({
    initialValues: { password: "", confirmPassword: "" },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted: ", values);
    },
  });

  return (
    <div className="flex items-center justify-center bg-gray-100 py-12">
      <div className="bg-white w-96 shadow-md py-4 border border-gray-200 rounded-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="font-public font-semibold text-xl text-[#191C1F]">
                Reset Password
              </h1>
              <p className="font-public font-normal text-sm text-gray-text">
                Duis sagittis molestie tellus, at eleifend sapien pellque quis.
                Fusce lorem nunc, fringilla sit amet nunc.
              </p>

              <form
                className="flex flex-col gap-4"
                onSubmit={formik.handleSubmit}
              >
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
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
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

                <button
                  type="submit"
                  className="font-public font-bold text-sm text-white bg-orange-500 w-full py-3 rounded-md flex justify-center items-center gap-2"
                >
                  Reset Password
                  <img src={ArrowRight} alt="ArrowRight" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
