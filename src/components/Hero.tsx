import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Sparkles } from 'lucide-react';
import { Container } from './layout/Container';

export function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  const text = "BOUNCE-TASTIC ADVENTURE!";

  const createArcText = () => {
    return text.split('').map((char, i) => {
      const radius = window.innerWidth < 768 ? 150 : 250; // Increased radius for better spacing
      const angleSpread = 180; // Degrees for the semi-circle
      const startAngle = -180; // Start from left side
      const angleStep = angleSpread / (text.length - 1);
      const currentAngle = startAngle + (i * angleStep);
      const radian = (currentAngle * Math.PI) / 180;
      
      // Calculate position on the arc
      const x = radius * Math.cos(radian);
      const y = radius * Math.sin(radian);
      const letterSpacing = '0.4em'; // Increased letter spacing

      return (
        <span
          key={i}
          style={{
            position: 'absolute',
            left: `calc(50% + ${x}px - 0.5em)`,
            top: `${y + radius + 20}px`,
            transform: `rotate(${currentAngle + 90}deg)`,
            display: 'inline-block',
            transformOrigin: 'center',
            letterSpacing,
            transition: 'transform 0.3s ease',
            fontSize: window.innerWidth < 768 ? '1.5rem' : '3rem'
          }}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-orange-400 -z-10" />
      <Container className="py-8">
        <section className="text-center mb-24">
          <h1 className="font-bold text-white relative">
            <div className="arc-text relative" style={{ height: window.innerWidth < 768 ? '250px' : '350px' }}>
              {createArcText()}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[-45%]">
                <div className="w-48 h-48 md:w-64 md:h-64 animate-bounce bg-yellow-300 rounded-full flex items-center justify-center">
                  <Sparkles className="w-24 h-24 md:w-32 md:h-32 text-purple-600" />
                </div>
                <div className="absolute -right-8 md:-right-16 top-1/2 bg-blue-500 text-white p-2 md:p-4 rounded-full rotate-12">
                  <p className="font-bold text-sm md:text-base">TICKETS<br/>ON<br/>SALE!</p>
                </div>
              </div>
            </div>
          </h1>
        </section>

        <section className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm p-4 md:p-8 rounded-2xl shadow-2xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-8 text-white">
            Our Attractions
          </h2>
          <Slider {...settings}>
            <div>
              <div className="w-full h-48 md:h-96 bg-purple-200 rounded-lg flex items-center justify-center">
                <p className="text-xl md:text-2xl font-bold text-purple-600">Fun Bouncing Activities!</p>
              </div>
            </div>
            <div>
              <div className="w-full h-48 md:h-96 bg-blue-200 rounded-lg flex items-center justify-center">
                <p className="text-xl md:text-2xl font-bold text-blue-600">Exciting Adventures!</p>
              </div>
            </div>
          </Slider>
          <p className="text-center max-w-2xl mx-auto mt-4 md:mt-6 text-sm md:text-base text-white/90">
            Experience the thrill and excitement of our world-class attractions
          </p>
        </section>
      </Container>
    </div>
  );
}