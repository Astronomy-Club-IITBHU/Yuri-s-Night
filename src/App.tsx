import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { LoadingScreen } from './components/LoadingScreen';
import { SpaceScene } from './components/SpaceScene';
import { Menu, X, ChevronRight, Home as HomeIcon, Info, Calendar, Users, Image, Shield, Award, Mail } from 'lucide-react';
import { Home } from './pages/Home.tsx';
import { About } from './pages/About.tsx';
import { Events } from './pages/Events.tsx';
import { Guests } from './pages/Guests.tsx';
import { Gallery } from './pages/Gallery.tsx';
import { Team } from './pages/Team.tsx';
import { Sponsors } from './pages/Sponsors.tsx';
import { Contact } from './pages/Contact.tsx';
import { motion, AnimatePresence } from 'framer-motion';

// NavLink component for active state highlighting
const NavLink = ({ to, children, icon = null }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`${isActive ? 'text-blue-400 font-medium' : 'text-white'
        } hover:text-blue-400 transition-colors flex items-center gap-2`}
    >
      {icon}
      {children}
    </Link>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close menu when route changes
  const closeMenu = () => setIsMenuOpen(false);

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
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-black/50 backdrop-blur-sm'
            }`}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-2xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                  Yuri's Night
                </span>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-full bg-blue-500/20 hover:bg-blue-500/30 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Desktop Menu - Hidden on mobile */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-6">
                  <NavLink to="/" icon={<HomeIcon size={18} />}>Home</NavLink>
                  <NavLink to="/about" icon={<Info size={18} />}>About</NavLink>
                  <NavLink to="/events" icon={<Calendar size={18} />}>Events</NavLink>
                  <NavLink to="/guests" icon={<Users size={18} />}>Guests</NavLink>
                  <NavLink to="/gallery" icon={<Image size={18} />}>Gallery</NavLink>
                  <NavLink to="/team" icon={<Shield size={18} />}>Team</NavLink>
                  <NavLink to="/sponsors" icon={<Award size={18} />}>Sponsors</NavLink>
                  <NavLink to="/contact" icon={<Mail size={18} />}>Contact</NavLink>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu - Dropdown style */}
          {isMenuOpen && (
            <div className="md:hidden py-4 px-4 bg-black/90 border-t border-gray-800">
              <div className="flex flex-col space-y-4">
                <MobileNavLink to="/" onClick={closeMenu}>
                  <HomeIcon size={20} className="mr-3" /> Home
                </MobileNavLink>
                <MobileNavLink to="/about" onClick={closeMenu}>
                  <Info size={20} className="mr-3" /> About
                </MobileNavLink>
                <MobileNavLink to="/events" onClick={closeMenu}>
                  <Calendar size={20} className="mr-3" /> Events
                </MobileNavLink>
                <MobileNavLink to="/guests" onClick={closeMenu}>
                  <Users size={20} className="mr-3" /> Guests
                </MobileNavLink>
                <MobileNavLink to="/gallery" onClick={closeMenu}>
                  <Image size={20} className="mr-3" /> Gallery
                </MobileNavLink>
                <MobileNavLink to="/team" onClick={closeMenu}>
                  <Shield size={20} className="mr-3" /> Team
                </MobileNavLink>
                <MobileNavLink to="/sponsors" onClick={closeMenu}>
                  <Award size={20} className="mr-3" /> Sponsors
                </MobileNavLink>
                <MobileNavLink to="/contact" onClick={closeMenu}>
                  <Mail size={20} className="mr-3" /> Contact
                </MobileNavLink>
              </div>
            </div>
          )}
        </nav>

        {/* Alternative Mobile Navigation - Slide-Out Panel */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </AnimatePresence>

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

// Mobile-specific NavLink with different styling
const MobileNavLink = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center px-2 py-2 rounded-md ${isActive
          ? 'bg-blue-600/20 text-blue-400 font-medium'
          : 'hover:bg-white/5'
        }`}
    >
      {children}
    </Link>
  );
};

export default App;