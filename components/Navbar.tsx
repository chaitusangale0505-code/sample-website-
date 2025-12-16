import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#therapy' },
    { name: 'Portfolio', href: '#products' },
    { name: 'Leadership', href: '#leadership' },
  ];

  return (
    <>
      <header 
        className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 mx-auto max-w-7xl px-4`}
      >
        <div className={`glass-nav rounded-2xl border border-white/10 px-6 py-4 flex justify-between items-center ${isScrolled ? 'shadow-2xl shadow-black/50' : ''}`}>
          <a href="#home" className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-accent to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-black text-lg">A</span>
            </div>
            <span>Astranova</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-400 font-medium hover:text-white transition-colors duration-200 text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a 
              href="#contact"
              className="bg-white text-black px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-2xl font-bold text-white hover:text-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="w-full bg-accent text-black py-4 rounded-xl font-bold text-center text-lg mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get in touch
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;