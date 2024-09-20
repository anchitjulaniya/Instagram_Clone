import React from "react";
import Story from "../Story/Story";
import "./storybar.css";
import { stories } from "../../Constant/Stories";


function StoryBar() {
  return (
    <div
      id="story-bar"
      className=" mt-[44px] md:mt-0 flex justify-start px-6 gap-2 overflow-x-scroll w-screen max-w-[702px] scrollbar-hide mx-auto"
    >
      {/* <Story img={''} username={'Jane Doe'} newStory={false} /> */}
      {stories.map((story) => (
        <Story
          key={story.id}
          profileImage={story.profileImage}
          userName={story.userName}
          newStory={story.newStory}
        />
      ))}
    </div>
  );
}

export default StoryBar;
