import React from 'react';

const VideoDisplay = ({ videoSrc }) => {
  return (
    <div>
      <h2>Processed Video</h2>
      <video controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoDisplay;
