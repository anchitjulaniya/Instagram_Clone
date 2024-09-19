import React from "react";
import profilePic from "../../assets/Images/profilePic.jpg";
import { IoIosSettings } from "react-icons/io";
import { IoMdGrid } from "react-icons/io";
import { GoTag } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { CgDisplayFullwidth } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { FaThreads } from "react-icons/fa6";

function Profile() {
  return (
    <div className=" sm:p-8">
      <div className=" max-w-[912px] w-full h-screen">
        {/* for mobile */}
        <div id="header-2" className="fixed w-full top-0 bg-white flex sm:hidden justify-between items-center py-2 px-2 border-b border-[rgb(255, 255, 255)]">
            <span><IoIosSettings /></span>
            <span className="flex items-center justify-center gap-1">
                <span>janedoe</span>
                <button><IoIosArrowDown /></button>
            </span>
            <span>
                <FaThreads />
            </span>
        </div>

        {/* for tablet and desktop */}
        <div className="flex mt-16 sm:mt-0">
          <div className="max-w-[276px] w-fit pl-4 sm:pl-0 sm:w-full flex justify-start sm:justify-center items-start">
            <img
              src={profilePic}
              className="max-w-[150px] min-w-[77px] min-h-[77px] w-full mt-[12px] sm:mt-[48px] max-h-[150px] rounded-full"
              alt="profile picture"
            />
          </div>
          <div className="max-w-[608px] w-full pl-4 flex flex-col gap-5">
            <div className="font-semibold flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <span className=" pl-4 sm:pl-0">janedoe</span>
              <span className="flex items-center text-[14px] sm:text-md justify-start gap-2 sm:gap-4 pr-1">
                <button className="text-black bg-[#efefef] rounded-md px-2 sm:px-4 py-1 ml-[10px]">
                  Edit Profile
                </button>
                <button className="text-black bg-[#efefef] rounded-md px-2 sm:px-4 py-1">
                  View archive
                </button>
              </span>
              <IoIosSettings className="text-2xl hidden sm:block" />
            </div>
            <div className="hidden sm:flex items-center gap-8">
              <div>
                <span className="font-semibold">3</span> posts
              </div>
              <div>
                <span className="font-semibold">217</span> followers
              </div>
              <div>
                <span className="font-semibold">191</span> following
              </div>
            </div>
            {/* for mobile */}
            <div className="hidden sm:block">
              <span className="font-semibold">Jane Doe</span>
              <div id="tag" className="">
                <div id="tag" className=" py-1 text-[14px]">
                    <p className="max-w-full h-[22px] text-ellipsis overflow-hidden">🥷 Don’t tell anyone, but I’m a ninja.</p>
                    <p className="max-w-full h-[22px] text-ellipsis overflow-hidden">🥓🍳 BAE: Bacon And Eggs.</p>
                    <p className="max-w-full h-[22px] text-ellipsis overflow-hidden">⚠️ ❤Do not trust too fast*</p>
                </div>
              </div>
            </div>
          </div>
        </div>

{/* for mobile */}
        <div className="py-3 pl-[5%] block sm:hidden">
            <div className=" sm:pl-0 font-semibold">janedoe</div>
            <div id="tag" className=" py-1 text-[14px]">
                <p className="max-w-full h-[22px] text-ellipsis overflow-hidden">🥷 Don’t tell anyone, but I’m a ninja.</p>
                <p className="max-w-full h-[22px] text-ellipsis overflow-hidden">🥓🍳 BAE: Bacon And Eggs.</p>
                <p className="max-w-full h-[22px] text-ellipsis overflow-hidden">⚠️ ❤Do not trust too fast*</p>
            </div>
        </div>

{/* for mobile */}
        <div className="flex sm:hidden items-center justify-evenly w-full py-3 border-t border-[rgb(142, 142, 142)]">
          <div className="flex flex-col items-center justify-center">
            <span className="font-semibold">3</span> 
            <span className="text-[#969696]">posts</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-semibold">217</span> 
            <span className="text-[#969696]">followers</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-semibold">191</span>
            <span className="text-[#969696]">following</span>
          </div>
        </div>
        
        <div className="w-full border-t border-b border-[rgb(142, 142, 142)] flex items-center justify-evenly sm:justify-center sm:gap-8 sm:mt-20">
          <button className="flex items-center justify-center py-3 gap-2 border-t border-black">
            <IoMdGrid />
            <span className="hidden sm:block">POSTS</span>
          </button>
          <button className="flex sm:hidden items-center justify-center py-3 gap-2">
            <CgDisplayFullwidth />
          </button>
          <button className="flex items-center justify-center py-3 gap-2">
            <GoTag />
            <span className="hidden sm:block">SAVED</span>
          </button>
          <button className="flex items-center justify-center py-3 gap-2">
            <CgProfile />
            <span className="hidden sm:block">TAGGED</span>
          </button>
        </div>
        <div id="posts" className="flex flex-wrap px-6 py-1 gap-2">

        </div>
      </div>
    </div>
  );
}

export default Profile;
