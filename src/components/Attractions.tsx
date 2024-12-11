import React from 'react';
import { Sparkles, Ship, Palmtree, Waves, Anchor, Compass, ChevronRight, ChevronLeft } from 'lucide-react';
import { Modal } from './ui/Modal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ArrowProps {
  className?: string;
  onClick?: () => void;
  isNext?: boolean;
}

function SliderArrow({ className, onClick, isNext }: ArrowProps) {
  const Icon = isNext ? ChevronRight : ChevronLeft;
  return (
    <button
      className={`absolute top-1/2 -translate-y-1/2 ${isNext ? 'right-4' : 'left-4'} z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors ${className}`}
      onClick={onClick}
    >
      <Icon className="w-6 h-6 text-gray-600" />
    </button>
  );
}

interface AttractionProps {
  name: string;
  icon: React.ReactNode;
  images: string[];
  description: string;
  onViewMore: () => void;
}

function AttractionCard({ name, icon, onViewMore }: AttractionProps) {
  return (
    <div className="bg-purple-100 rounded-2xl p-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] transform hover:scale-105 hover:rotate-2 transition-all duration-300 border-4 border-white">
      <div className="w-full h-48 bg-white rounded-lg mb-4 flex items-center justify-center">
        <div className="text-purple-500 w-24 h-24">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-center mb-2">{name}</h3>
      <button 
        onClick={onViewMore}
        className="w-full bg-yellow-400 text-black py-3 rounded-full font-bold hover:bg-yellow-500 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 uppercase tracking-wider"
      >
        VIEW MORE
      </button>
    </div>
  );
}

export function Attractions() {
  const [selectedAttraction, setSelectedAttraction] = React.useState<number | null>(null);

  const attractions = [
    { 
      name: 'Mangosteen Sparrow', 
      icon: <Sparkles className="w-full h-full" />,
      images: ['/placeholder1.jpg', '/placeholder2.jpg', '/placeholder3.jpg'],
      description: 'Experience the thrill of bouncing higher than ever before on our signature attraction. Perfect for all ages!'
    },
    { 
      name: 'Dragon Slide', 
      icon: <Waves className="w-full h-full" />,
      images: ['/placeholder1.jpg', '/placeholder2.jpg', '/placeholder3.jpg'],
      description: 'Slide down our majestic dragon-themed inflatable slide with exciting twists and turns.'
    },
    { 
      name: 'Pineapple Playground', 
      icon: <Palmtree className="w-full h-full" />,
      images: ['/placeholder1.jpg', '/placeholder2.jpg', '/placeholder3.jpg'],
      description: 'A tropical-themed bouncing paradise with multiple play zones and obstacles.'
    },
    { 
      name: 'Watermelon Playground', 
      icon: <Compass className="w-full h-full" />,
      images: ['/placeholder1.jpg', '/placeholder2.jpg', '/placeholder3.jpg'],
      description: 'Fresh and fun watermelon-themed area with climbing walls and bounce pads.'
    },
    { 
      name: 'Boat Pit', 
      icon: <Ship className="w-full h-full" />,
      images: ['/placeholder1.jpg', '/placeholder2.jpg', '/placeholder3.jpg'],
      description: 'Set sail on our boat-shaped bouncing pit filled with soft foam blocks.'
    },
    { 
      name: 'Pelican Maze', 
      icon: <Anchor className="w-full h-full" />,
      images: ['/placeholder1.jpg', '/placeholder2.jpg', '/placeholder3.jpg'],
      description: 'Navigate through our challenging inflatable maze with surprise obstacles.'
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderArrow isNext />,
    prevArrow: <SliderArrow />,
    className: "relative"
  };

  return (
    <div className="container mx-auto px-4 py-12 relative">
      <div className="absolute top-0 left-0 w-32 h-32 -rotate-12 bg-purple-300 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-40 h-40 rotate-45 bg-yellow-300 rounded-full blur-3xl opacity-30 animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-300 rounded-full blur-2xl opacity-20 animate-float" />
      <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-blue-300 rounded-full blur-2xl opacity-20 animate-wobble" />
      
      <h2 className="text-4xl font-bold text-center mb-8 relative animate-bounce">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Our Attractions
        </span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {attractions.map((attraction, index) => (
          <div
            key={attraction.name}
            className="transform hover:-rotate-2 transition-all duration-300"
            style={{
              animationDelay: `${index * 100}ms`,
              animation: 'fadeInUp 0.5s ease-out forwards'
            }}
          >
            <AttractionCard
              key={attraction.name}
              name={attraction.name}
              icon={attraction.icon}
              images={attraction.images}
              description={attraction.description}
              onViewMore={() => setSelectedAttraction(index)}
            />
          </div>
        ))}
      </div>
      
      <Modal 
        isOpen={selectedAttraction !== null}
        onClose={() => setSelectedAttraction(null)}
      >
        {selectedAttraction !== null && (
          <div>
            <h2 className="text-3xl font-bold mb-4 text-center">{attractions[selectedAttraction].name}</h2>
            <div className="mb-6">
              <Slider {...sliderSettings}>
                {attractions[selectedAttraction].images.map((_, index) => (
                  <div key={index} className="aspect-video bg-gray-200 rounded-lg">
                    <div className="w-full h-64 flex items-center justify-center text-gray-500">
                      Image Placeholder {index + 1}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">{attractions[selectedAttraction].description}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}