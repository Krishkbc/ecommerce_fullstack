import PasswordEye from "../../../assests/Header/PasswordEye.svg";
import ArrowRight from "../../../assests/Header/ArrowRight.svg";

export default function AuthPopUp() {
  return (
    <div className="bg-white w-80 shadow-md py-4">
      <div className="container mx-auto px-4">
        <div>
          <div className="text-center">
            <div className="font-public font-bold text-xl">
              Sign in to you account
            </div>

            <div className="flex flex-col gap-4">
              {/* Email Address */}
              <div className="flex flex-col gap-2 text-start">
                <p className="text-sm font-public font-normal">Email Address</p>
                <input className="border border-gray-200 rounded-md w-full py-1" />
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between">
                  <p className="text-sm font-public font-normal">Password</p>
                  <a
                    className="font-public font-medium text-sm text-secondary"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    className="border border-gray-200 rounded-md w-full py-1"
                  />    
                  <img
                    src={PasswordEye}
                    className="text-black group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"
                  />
                </div>
              </div>

              {/* Login button */}
              <button className="font-public font-bold text-sm text-white bg-orange-500 w-full py-3 rounded-sm flex justify-center items-center gap-2">
                Login <img src={ArrowRight} alt="ArrowRight" />
              </button>

              {/* create account */}
              <div>
                <div className="flex justify-center items-center gap-2">
                  <hr></hr>
                  <p>dont have an account?</p>
                  <hr></hr>
                </div>
                <button className="bg-white text-orange-500 font-public font-bold text-sm leading-10 w-full rounded-sm border border-orange-500">CREATE ACCOUNT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
