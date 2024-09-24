import React, { useState, useEffect } from 'react';
import Reel from '../Reel/Reel';
import reel1 from '../../assets/Reels/Reel(1).mp4';
import reel2 from '../../assets/Reels/Reel(2).mp4';

function Reels() {
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const reels = [
    { id: 'reel1', url: reel1 },
    { id: 'reel2', url: reel2 },
  ];

  // Handle swipe logic
  const handleSwipe = (direction) => {
    if (direction === 'up' && currentReelIndex < reels.length - 1) {
      setCurrentReelIndex((prevIndex) => prevIndex + 1);
    } else if (direction === 'down' && currentReelIndex > 0) {
      setCurrentReelIndex((prevIndex) => prevIndex - 1);
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

      if (distanceY > 50) {
        handleSwipe('up');
      } else if (distanceY < -50) {
        handleSwipe('down');
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentReelIndex]);

  return (
    <div className="relative h-screen overflow-hidden">
      {reels.map((reel, index) => {
        if (index === currentReelIndex || index === currentReelIndex - 1 || index === currentReelIndex + 1) {
          return (
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
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Reels;
