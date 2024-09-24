import React, { useState, useEffect } from 'react';
import Reel from '../Reel/Reel';
import reel1 from '../../assets/Reels/Reel(1).mp4';
import reel2 from '../../assets/Reels/Reel(2).mp4';
import reel3 from '../../assets/Reels/Reel(3).mp4';
import reel4 from '../../assets/Reels/Reel(4).mp4';
import reel5 from '../../assets/Reels/Reel(5).mp4';
import reel6 from '../../assets/Reels/Reel(6).mp4';


function Reels() {
  const [currentReelIndex, setCurrentReelIndex] = useState(0);

  const reels = [
    { id: 'reel1', url: reel1 },
    { id: 'reel2', url: reel2 },
    { id: 'reel3', url: reel3 },
    { id: 'reel4', url: reel4 },
    { id: 'reel5', url: reel5 },
    { id: 'reel6', url: reel6 },
    
  ];

  // Handle swipe logic for circular behavior
  const handleSwipe = (direction) => {
    if (direction === 'up') {
      setCurrentReelIndex((prevIndex) => 
        (prevIndex + 1) % reels.length
      );
    } else if (direction === 'down') {
      setCurrentReelIndex((prevIndex) => 
        (prevIndex - 1 + reels.length) % reels.length
      );
    }
  };

  // Swipe detection
  useEffect(() => {
    let startY;

    const handleTouchStart = (event) => {
      startY = event.touches[0].clientY;
    };

    const handleTouchEnd = (event) => {
      const endY = event.changedTouches[0].clientY;
      const distanceY = startY - endY;

      // Detect swipe direction
      if (distanceY > 50) {
        handleSwipe('up'); // swipe up
      } else if (distanceY < -50) {
        handleSwipe('down'); // swipe down
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {reels.map((reel, index) => (
        <div
          key={reel.id}
          className={`absolute inset-0 transition-transform duration-500 ${
            index === currentReelIndex
              ? 'translate-y-0'
              : index > currentReelIndex
              ? 'translate-y-full'
              : '-translate-y-full'
          }`}
        >
          <Reel reel={reel} />
        </div>
      ))}
    </div>
  );
}

export default Reels;
