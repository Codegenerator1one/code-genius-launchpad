
import React from 'react';
import VideoFrame from './VideoFrame';
import HeroButton from './HeroButton';

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="relative z-10 animate-fade-in">
        <h1 className="mb-8 text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-white-gradient">
          AI Code Generator
        </h1>
      </div>
      
      <div className="mb-12 w-full max-w-4xl relative z-10 animate-scale-in">
        <VideoFrame videoId="M5JYOxcLcUw" />
      </div>
      
      <div className="animate-fade-in animation-delay-300">
        <HeroButton 
          text="Try CodeGenius" 
          url="https://codegenius-landing-page.vercel.app/"
        />
      </div>

      {/* Cinematic light streaks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="light-streak light-streak-1"></div>
        <div className="light-streak light-streak-2"></div>
      </div>
    </div>
  );
};

export default HeroSection;
