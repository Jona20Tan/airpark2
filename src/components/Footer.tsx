import { Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-purple-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 mb-4 bg-yellow-300 rounded-full flex items-center justify-center">
            <Sparkles className="w-16 h-16 text-purple-600" />
          </div>
          <h3 className="text-2xl font-bold mb-4">CONTACT US</h3>
          <div className="flex flex-col items-center space-y-2">
            <a 
              href="mailto:air.communications@airpark.com" 
              className="hover:text-yellow-400"
            >
              air.communications@airpark.com
            </a>
            <a 
              href="https://twitter.com/airpark" 
              className="hover:text-yellow-400"
            >
              @airpark
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}