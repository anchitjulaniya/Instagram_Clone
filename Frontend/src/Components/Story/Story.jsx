import React from 'react'
import PropTypes from 'prop-types'
import './story.css'

function Story({ profileImage, userName, newStory }) {
  return (
    <div id="story" className="flex flex-col items-center min-w-[64px] w-[64px] h-[84px] justify-between py-1 overflow-hidden">
      <div className={`story-border relative rounded-full w-[56px] h-[56px] overflow-hidden ${newStory ? 'has-new-story' : ''}`}>
        <div className='absolute top-[2px] left-[2px] h-[52px] w-[52px] bg-white rounded-full'>
            <img src={profileImage} alt={`${userName}'s profile`} className="rounded-full w-full h-full object-cover" />
        </div>
      </div>
      <p className="text-sm text-black truncate w-full text-center">{userName} </p>
    </div>
  )
}

// Add prop types for validation
Story.propTypes = {
  profileImage: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  newStory: PropTypes.bool
}

export default Story
