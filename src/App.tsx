import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { LoadingScreen } from './components/LoadingScreen';
import { SpaceScene } from './components/SpaceScene';
import { Menu, X } from 'lucide-react';
import { Home } from './pages/Home.tsx';
import { About } from './pages/About.tsx';
import { Events } from './pages/Events.tsx';
import { Guests } from './pages/Guests.tsx';
import { Gallery } from './pages/Gallery.tsx';
import { Team } from './pages/Team.tsx';
import { Sponsors } from './pages/Sponsors.tsx';
import { Contact } from './pages/Contact.tsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="relative min-h-screen bg-black text-white">
        {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
        
        {/* 3D Background */}
        <div className="fixed inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <Suspense fallback={null}>
              <SpaceScene />
            </Suspense>
          </Canvas>
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-2xl font-bold">Yuri's Night</Link>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>

              <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0">
                  <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
                  <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
                  <Link to="/events" className="hover:text-blue-400 transition-colors">Events</Link>
                  <Link to="/guests" className="hover:text-blue-400 transition-colors">Guests</Link>
                  <Link to="/gallery" className="hover:text-blue-400 transition-colors">Gallery</Link>
                  <Link to="/team" className="hover:text-blue-400 transition-colors">Team</Link>
                  <Link to="/sponsors" className="hover:text-blue-400 transition-colors">Sponsors</Link>
                  <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="relative z-10 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/guests" element={<Guests />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/team" element={<Team />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;