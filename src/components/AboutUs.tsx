import React from 'react';
import { Container } from './layout/Container';
import { Card } from './ui/Card';
import { Users, Target, Heart, Award } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <Card className="p-6 text-center hover:shadow-xl transition-shadow">
      <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
}

export function AboutUs() {
  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family First",
      description: "Creating memorable experiences for families is at the heart of everything we do."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Safety Focus",
      description: "We maintain the highest safety standards to ensure worry-free fun for everyone."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion for Fun",
      description: "Our team is dedicated to bringing joy and excitement to every visitor."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Experience",
      description: "We continuously innovate to provide the best bouncing adventure possible."
    }
  ];

  const { targetRef, hasIntersected } = useIntersectionObserver({ threshold: 0.5 });
  
  const visitorCount = useCountUp({ 
    end: 100000,
    start: 0,
    duration: 2000
  });
  
  const teamCount = useCountUp({
    end: 50,
    start: 0,
    duration: 2000
  });
  
  const eventCount = useCountUp({
    end: 1000,
    start: 0,
    duration: 2000
  });

  return (
    <div className="py-12">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Our Story</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-4">
              Founded in 2020, Air Park emerged from a simple dream: creating the most exciting and safe bouncing experience for families. What started as a small indoor park has grown into the region's premier destination for bounce-tastic adventures.
            </p>
            <p className="text-lg text-gray-600">
              Our team of dedicated professionals works tirelessly to ensure every visit is filled with joy, laughter, and unforgettable memories. From toddlers to adults, we've designed our attractions to provide fun for everyone.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>

        <div ref={targetRef} className="bg-purple-100 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Adventure!</h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether you're planning a birthday party, family outing, or corporate event, 
            Air Park is your destination for extraordinary bouncing experiences.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-6 md:space-y-0">
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
              <h3 className="font-bold text-4xl mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {hasIntersected ? `${visitorCount.toLocaleString()}+` : '0+'}
              </h3>
              <p className="text-gray-600">Happy Visitors</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
              <h3 className="font-bold text-4xl mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {hasIntersected ? `${teamCount}+` : '0+'}
              </h3>
              <p className="text-gray-600">Team Members</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
              <h3 className="font-bold text-4xl mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {hasIntersected ? `${eventCount.toLocaleString()}+` : '0+'}
              </h3>
              <p className="text-gray-600">Events Hosted</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}