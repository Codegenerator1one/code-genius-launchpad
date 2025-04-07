
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
        className="bg-codegenius-purple hover:bg-codegenius-purple/90 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
      >
        {text}
      </Button>
    </a>
  );
};

export default HeroButton;
