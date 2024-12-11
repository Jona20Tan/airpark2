import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Attractions } from './components/Attractions';
import { EventDates } from './components/EventDates';
import { Footer } from './components/Footer';
import { FAQ } from './components/FAQ';
import { AboutUs } from './components/AboutUs';

function Home() {
  return (
    <>
      <Hero />
      <Attractions />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-orange-400 to-yellow-300 relative overflow-x-hidden">
        {/* Background overlay elements */}
        <div className="fixed inset-0 bg-gradient-to-b from-orange-400 to-yellow-300 -z-20" />
        <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h20v20H0z\' fill=\'%23fff\' fill-opacity=\'.05\'/%3E%3C/svg%3E')] opacity-30 -z-10" />
        <div className="absolute inset-x-0 top-0 h-32">
          <div className="w-full h-full bg-purple-500" style={{
            maskImage: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0,0 L100,0 L100,60 Q50,100 0,60 Z\' fill=\'black\'/%3E%3C/svg%3E")',
            WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0,0 L100,0 L100,60 Q50,100 0,60 Z\' fill=\'black\'/%3E%3C/svg%3E")',
            maskSize: '100% 100%',
            WebkitMaskSize: '100% 100%',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            opacity: 0.1
          }} />
        </div>
        <div className="relative z-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/dates" element={<EventDates />} />
        </Routes>
        <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;