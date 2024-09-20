import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { RxVideo } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { TbBrandMessenger } from "react-icons/tb";
function BottomNavbar() {
  return (
    <div className="bg-white flex md:hidden fixed bottom-0 items-center justify-evenly w-screen h-[50px] text-2xl border-t border-[#dbdbdb]">
      <span className="cursor-pointer scale-105 px-3"><IoHomeSharp /></span>
      <span className="cursor-pointer scale-105 px-3"><IoSearchSharp /></span>
      <span className="cursor-pointer scale-105 px-3"><RxVideo /></span>
      <span className="cursor-pointer scale-105 px-3"><TbBrandMessenger /></span>
      <span className="cursor-pointer scale-105 px-3"><CgProfile /></span>
    </div>
  );
}

export default BottomNavbar;
{
  /* mobile navbar */
}
