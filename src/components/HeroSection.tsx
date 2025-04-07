
import React from 'react';
import VideoFrame from './VideoFrame';
import HeroButton from './HeroButton';

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-b from-gray-50 to-gray-100">
      <h1 className="mb-8 text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-purple-gradient">
        AI Code Generator
      </h1>
      
      <div className="mb-12 w-full max-w-4xl">
        <VideoFrame videoId="M5JYOxcLcUw" />
      </div>
      
      <HeroButton 
        text="Try CodeGenius" 
        url="https://codegenius-landing-page.vercel.app/"
      />
    </div>
  );
};

export default HeroSection;
