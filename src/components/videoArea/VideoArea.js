
import React from 'react';
import './VideoArea.css'; 
import PlayButton from './../../img/logo/play-butto.svg';

function VideoArea() {
  return (
    <div className="videoArea">
      <div className="video-icon">
        <a
          className="popup-video"
          href="https://www.youtube.com/watch?v=-LZ6x6GFvj0"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={PlayButton} alt="Play Button" />
        </a>
      </div>
      <h3 className="videoArea_Text">Watch our last tour</h3>
     
    </div>
  );
}

export default VideoArea;
