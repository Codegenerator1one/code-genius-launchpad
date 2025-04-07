
import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroButtonProps {
  text: string;
  url: string;
}

const HeroButton: React.FC<HeroButtonProps> = ({ text, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Button 
        className="relative bg-gradient-to-r from-white/90 to-white/70 text-black px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-glow hover:shadow-glow-lg overflow-hidden group"
      >
        <span className="relative z-10">{text}</span>
        <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </Button>
    </a>
  );
};

export default HeroButton;
