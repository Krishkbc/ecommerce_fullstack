import { Link } from "react-router-dom";
import ArrowRight from "../../assests/Header/ArrowRight.svg";
export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-1 ">
      <div className="bg-white w-96 shadow-md py-4 border border-gray-200 rounded-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4">
            <div className="font-public font-semibold text-xl text-center">
              Forget Password
            </div>

            <p className="text-sm font-public font-normal text-gray-text text-center">
              Enter the email address or mobile phone number associated with
              your clicon account
            </p>

            <div className="flex flex-col gap-2 text-start">
              <p className="text-sm font-public font-normal">Email Address</p>
              <input className="border border-gray-200 rounded-md w-full py-3 " />
            </div>

            <button className="font-public font-bold text-sm text-white bg-orange-500 w-full py-3 rounded-sm flex justify-center items-center gap-2">
              SEND CODE <img src={ArrowRight} alt="ArrowRight" />
            </button>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-sm font-public font-normal text-gray-text">
                Already have an account?{" "}
                <Link className="text-[#2DA5F3]" to="/login">
                  Login
                </Link>
              </div>

              <div className="flex items-center gap-2 text-sm font-public font-normal text-gray-text">
                Don't have an account?{" "}
                <Link className="text-[#2DA5F3]" to="/signup">
                  Signup
                </Link>
              </div>
            </div>

            <hr></hr>

            <label
              htmlFor="agree"
              className="text-sm font-medium font-public text-gray-text"
            >
              You may contact{" "}
              <a href="" className="text-[#2DA5F3] hover:underline">
                Customer Care{" "}
              </a>
              and for help restoring access to your account{" "}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
