
import React, { useState } from 'react';

interface VideoFrameProps {
  videoId: string;
}

const VideoFrame: React.FC<VideoFrameProps> = ({ videoId }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  const handlePlayVideo = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-glow">
      <div className="absolute inset-0 bg-white-gradient opacity-20 blur-[4px] -m-1"></div>
      <div className="relative aspect-video rounded-xl overflow-hidden z-10 border border-white/20">
        {videoLoaded ? (
          <iframe 
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="relative w-full h-full cursor-pointer" onClick={handlePlayVideo}>
            <img 
              src="/lovable-uploads/0ab3e260-ec7d-4b68-8972-94874fbe63a7.png" 
              alt="AI Code Generator Trailer" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300">
                <svg 
                  className="w-10 h-10 text-white ml-1" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoFrame;
