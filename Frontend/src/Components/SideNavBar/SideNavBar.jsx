import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import InstaLogo from "../../assets/Images/Insta-logo-1.png";
import navlogo from "../../assets/Images/nav-logo.png";
import { MdOutlineExplore } from "react-icons/md";
import { RxVideo } from "react-icons/rx";
import { BsThreads } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { TbBrandMessenger } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";

function SideNavBar() {
  return (
    <>
      {/* laptop and tablet navbar */}
      <div className="hidden md:flex flex-col items-center lg:items-start w-[80px] lg:w-[250px] px-3 border-r border-[#dbdbdb] h-[100vh] pt-10 overflow-hidden">
        <img
          src={InstaLogo}
          className="hidden lg:block h-[40px] w-[120px] "
          alt="Instagram Logo"
        />
        <img className="h-[30px] w-[30px] lg:hidden" src={navlogo} alt="" />

        <div className="flex flex-col justify-between h-full py-8 w-full">
          <div className="flex flex-col items-center lg:items-start gap-3 w-full">
            <div className="flex items-center gap-3 rounded-xl p-2 bg-[#dbdbdb] px-3 py-2 lg:px-2 lg:w-full">
              <span className="text-xl">
                <IoHomeSharp />
              </span>
              <span className="text-lg hidden lg:block">Home</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl px-3 py-2 lg:px-2 lg:w-full">
              <span className="text-xl">
                <IoSearchSharp />
              </span>
              <span className="text-lg hidden lg:block">Search</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl px-3 py-2 lg:px-2 lg:w-full">
              <span className="text-xl">
                <MdOutlineExplore />
              </span>
              <span className="text-lg hidden lg:block">Explore</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl px-3 py-2 lg:px-2 lg:w-full">
              <span className="text-xl">
                <RxVideo />
              </span>
              <span className="text-lg hidden lg:block">Reels</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl px-3 py-2 lg:px-2 lg:w-full">
              <span className="text-xl">
                <TbBrandMessenger />
              </span>
              <span className="text-lg hidden lg:block">Messages</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl px-3 py-2 lg:px-2 lg:w-full">
              <span className="text-xl">
                <FaRegHeart />
              </span>
              <span className="text-lg hidden lg:block">Notification</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl px-3 py-2 lg:px-2 lg:w-full">
              <span className="text-xl">
                <FiPlusSquare />
              </span>
              <span className="text-lg hidden lg:block">Create</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl px-3 py-2 lg:px-2 lg:w-full">
              <span className="text-xl">
                <CgProfile />
              </span>
              <span className="text-lg hidden lg:block">Profile</span>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-3 w-full">
            <div className="flex items-center gap-3 rounded-xl px-3 py-2 lg:px-2 lg:w-full">
              <span className="text-xl">
                <BsThreads />
              </span>
              <span className="text-lg hidden lg:block">Threads</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl px-3 py-2 lg:px-2 lg:w-full">
              <span className="text-xl">
                <FaBars />
              </span>
              <span className="text-lg hidden lg:block">More</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideNavBar;
