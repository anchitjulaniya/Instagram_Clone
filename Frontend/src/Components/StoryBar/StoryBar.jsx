import React from "react";
import Story from "../Story/Story";
import "./storybar.css";
import { stories } from "../../Constant/Stories";


function StoryBar() {
  return (
    <div
      id="story-bar"
      className="mt-[44px] md:mt-0 bg-[rgb(240,240,240)] flex pl-3 pr-3 gap-3 overflow-x-scroll scrollbar-hide"
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
