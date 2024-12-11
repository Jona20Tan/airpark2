import { Container } from './layout/Container';
import { Card } from './ui/Card';
import { Clock, MapPin, Users } from 'lucide-react';

interface EventCardProps {
  date: string;
  month: string;
  title: string;
  time: string;
  location: string;
  capacity: string;
  color: string;
  description: string;
}

function EventCard({ date, month, title, time, location, capacity, color, description }: EventCardProps) {
  return (
    <Card className="flex overflow-hidden hover:shadow-xl transition-shadow">
      <div className={`${color} p-6 flex flex-col items-center justify-center min-w-[120px]`}>
        <span className="text-lg font-bold text-gray-700">{month}</span>
        <span className="text-4xl font-bold text-gray-800">{date}</span>
      </div>
      <div className="p-6 flex-1">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <div className="space-y-2 text-gray-600">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-2" />
            <span>{capacity}</span>
          </div>
        </div>
        <p className="mt-4 text-gray-600">{description}</p>
      </div>
    </Card>
  );
}

export function EventDates() {
  const events = [
    {
      date: "25",
      month: "JUN",
      title: "Summer Bounce Festival",
      time: "10:00 AM - 6:00 PM",
      location: "Main Park Arena",
      capacity: "500 participants",
      color: "bg-teal-200",
      description: "Join us for our biggest bouncing event of the summer! Features special performances and exclusive activities."
    },
    {
      date: "26",
      month: "JUN",
      title: "Kids Championship",
      time: "2:00 PM - 5:00 PM",
      location: "Competition Zone",
      capacity: "200 participants",
      color: "bg-yellow-200",
      description: "Watch young athletes compete in various bouncing challenges and obstacle courses."
    },
    {
      date: "27",
      month: "JUN",
      title: "Family Fun Day",
      time: "11:00 AM - 4:00 PM",
      location: "All Park Areas",
      capacity: "300 participants",
      color: "bg-red-200",
      description: "A special day dedicated to families with exclusive group activities and special discounts."
    },
    {
      date: "28",
      month: "JUN",
      title: "Glow Night Bounce",
      time: "6:00 PM - 10:00 PM",
      location: "Indoor Arena",
      capacity: "250 participants",
      color: "bg-blue-200",
      description: "Experience Air Park in a whole new light with our special nighttime bouncing event."
    }
  ];

  return (
    <div className="py-12">
      <Container>
      <h2 className="text-4xl font-bold text-center mb-4">
        Upcoming Events
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Join us for these exciting upcoming events at Air Park. Book your spots early as spaces are limited!
      </p>
      <div className="space-y-6">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
      </Container>
    </div>
  );
}