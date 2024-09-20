import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { HiOutlineTag } from "react-icons/hi2";
import post1 from '../../assets/Images/post1.avif'

function Post() {
  return (
    <div className="flex flex-col max-w-lg w-lg sm:px-12">
      <div id="top" className="flex justify-between items-center h-[65px]">
        <div className="flex items-center gap-2">
          <div
            className="rounded-full h-[42px] w-[42px] bg-red-200"
          ></div>
          <div className="flex flex-col justify-start text-sm">
            <div className="flex gap-1">
              <span className="font-semibold">Jane Doe</span>
              <span className="text-[#8e8e8e]">•</span>
              <span className="text-[#8e8e8e]">6h</span>
              <span className="text-[#8e8e8e]">•</span>
              <span className="text-[#0095F6] ">Following</span>
            </div>
            <span className="text-[#8e8e8e]">Hills</span>
          </div>
        </div>
        <span>
          <BsThreeDots />
        </span>
      </div>
      <div id="image" className="w-full max-w-screen">
        <img src={post1} className="rounded-md" />
      </div>
      <div className="flex justify-between w-full py-2  text-xl">
        <div className="flex gap-3">
            <FaRegHeart />
            <FaRegComment />
            <LuSend />
        </div>
        <div>
            <HiOutlineTag />
        </div>
      </div>
      <div className="w-full font-semibold">360 likes</div>
      <div className="flex items-center gap-2">
        <span className="font-semibold">Jane Doe</span>
        <span className="text-[#8e8e8e] max-w-[120px] w-[120px] max-h-[24px] h-[24px] text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet</span>
      </div>
      <div className="w-full text-[#8e8e8e]">View all 10 comments</div>
      <div id="bottom" className="flex w-full gap-2">
        <input
          type="text"
          className="outline-none w-full "
          placeholder="Add a comment..."
        />
        <button className="text-[#0095F6]">Post</button>
      </div>
      <div className="my-[10px] border-b border-[#dbdbdb]"></div>
    </div>
  );
}

export default Post;
