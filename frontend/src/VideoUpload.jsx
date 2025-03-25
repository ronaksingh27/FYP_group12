import React, { useState } from 'react';
import { uploadVideo } from './api';
import VideoDisplay from './VideoDisplay';

const VideoUpload = () => {
  const [video, setVideo] = useState(null);
  const [outputPath, setOutputPath] = useState('');
  const [message, setMessage] = useState('');

  const handleUpload = async () => {
    if (!video) {
      setMessage('Please select a video to upload.');
      return;
    }
    try {
      setMessage('Uploading and processing video...');
      const result = await uploadVideo(video);
      setOutputPath(result.outputPath);
      setMessage('Video processed successfully!');
    } catch (error) {
      setMessage('Error processing video. Please try again.',error);
      console.log("error : ",error);
    }
  };

  return (
    <div className="container">
      <h1>Video Processing App</h1>
      
      <input
        type="file"
        accept="video/*"
        onChange={(e) => setVideo(e.target.files[0])}
      />
      
      <button onClick={handleUpload}>Upload & Process</button>

      {message && (
        <p className={`message ${outputPath ? 'success' : 'error'}`}>
          {message}
        </p>
      )}

      {outputPath && (
        <VideoDisplay videoSrc={`http://localhost:5000/${outputPath}`} />
      )}
    </div>
  );
};

export default VideoUpload;
