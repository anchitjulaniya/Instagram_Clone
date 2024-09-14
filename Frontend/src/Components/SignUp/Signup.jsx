import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import microsoftBtn from '../../assets/Images/microsoftBtn.png'
import googleplayBtn from '../../assets/Images/googleplayBtn.png'
import InstaLogo from '../../assets/Images/Insta-logo-1.png'

function Signup() {
  return (
    <div className="">
      <div className="max-w-sm w-sm mx-auto mt-6">
        <div className="flex flex-col gap-3 sm:border-[1.5px] border-[rgb(218 218 218)] py-8 px-2 sm:px-12">
          {/* <h1 className="text-center text-3xl font-bold italic">Instagram</h1> */}
          <img src={InstaLogo} className="h-[70px] w-[210px] mx-auto" alt="" />
          <p className="text-center text-[#737373] font-semibold">
            Sign up to see photos and videos from your friends.
          </p>
          <button className="bg-[#0095F6] text-white px-4 py-1 rounded-md flex items-center justify-center gap-2">
            <FaSquareFacebook />
            Log in with Facebook
          </button>
          <div className="flex items-center gap-3">
            <div className="w-1/2 h-[1px] bg-[#dbdbdb]"></div>
            <span className="text-[#737373] font-semibold">OR</span>
            <div className="w-1/2 h-[1px] bg-[#dbdbdb] "></div>
          </div>
          <div className="flex flex-col gap-3">
            <input
              className="bg-[#fafafa] outline-none border-[rgb(219, 219, 219)] border px-3 py-1 focus:border-black"
              type="text"
              placeholder="Mobile number or email address"
            />
            <input
              className="bg-[#fafafa] outline-none border-[rgb(219, 219, 219)] border px-3 py-1 focus:border-black"
              type="text"
              placeholder="Full Name"
            />
            <input
              className="bg-[#fafafa] outline-none border-[rgb(219, 219, 219)] border px-3 py-1 focus:border-black"
              type="text"
              placeholder="Username"
            />
            <input
              className="bg-[#fafafa] outline-none border-[rgb(219, 219, 219)] border px-3 py-1 focus:border-black"
              type="password"
              placeholder="Password"
            />
          </div>
          <p className="text-[#737373] text-center text-[12px]">
            People who use our service may have uploaded your contact
            information to Instagram.{" "}
            <a
              href="https://www.facebook.com/help/instagram/261704639352628"
              className="text-[#00376B]"
            >
              Learn more
            </a>
          </p>
          <p className="text-[#737373] text-center text-[12px]">
            By signing up, you agree to our{" "}
            <a href="http://" className="text-[#00376B]">
              Terms, Privacy Policy
            </a>{" "}
            and{" "}
            <a className="text-[#00376B]" href="">
              Cookies Policy.
            </a>
          </p>
          <button className="bg-[#0095F6] text-white text-center rounded-lg py-1">
            Sign up
          </button>
        </div>

        <div className="flex justify-center items-center border-[rgb(218 218 218)] sm:border-[1.5px] mt-3 py-6 px-2 sm:px-12">
          <p>
            Have an account?{" "}
            <span className="text-[#0095F6] font-semibold">Log in</span>
          </p>
        </div>

        <p className="text-center mt-6">Get the app.</p>
        <div className="flex gap-5 justify-center my-5">
            <img src={googleplayBtn} className="h-[40px] " alt="" />
            <img src={microsoftBtn} className="h-[40px] " alt="" />
        </div>

      </div>
    </div>
  );
}

export default Signup;
