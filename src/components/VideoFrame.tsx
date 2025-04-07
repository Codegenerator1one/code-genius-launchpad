
import React from 'react';

interface VideoFrameProps {
  videoId: string;
}

const VideoFrame: React.FC<VideoFrameProps> = ({ videoId }) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-purple-gradient blur-[2px] -m-1"></div>
      <div className="relative aspect-video rounded-xl overflow-hidden z-10">
        <iframe 
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoFrame;
