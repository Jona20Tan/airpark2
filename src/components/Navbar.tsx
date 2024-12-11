import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { Container } from './layout/Container';

export function Navbar() {
  return (
    <nav className="relative mx-4 mt-4">
      <div className="absolute inset-0 rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.15)]" />
      <div className="bg-white p-2 md:p-4 rounded-full relative">
        <Container className="flex justify-between items-center">
          <div className="flex space-x-2 md:space-x-6">
            <Link to="/" className="text-gray-900 hover:text-purple-600 font-black text-sm md:text-lg transition-colors">HOME</Link>
            <Link to="/about" className="text-gray-900 hover:text-purple-600 font-black text-sm md:text-lg transition-colors">ABOUT US</Link>
            <Link to="/dates" className="text-gray-900 hover:text-purple-600 font-black text-sm md:text-lg transition-colors">EVENT DATES</Link>
            <Link to="/faq" className="text-gray-900 hover:text-purple-600 font-black text-sm md:text-lg transition-colors">FAQs</Link>
          </div>
          <Button as={Link} to="/book" className="bg-yellow-400 hover:bg-yellow-500 text-black font-black text-sm md:text-lg px-4 md:px-8 py-1 md:py-2 rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)] hover:translate-y-[-2px] transition-all duration-300">
            BOOK NOW
          </Button>
        </Container>
      </div>
    </nav>
  );
}