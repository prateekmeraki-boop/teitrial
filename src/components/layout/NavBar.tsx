import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '#home' },
    { label: 'About', path: '#about' },
    { label: 'Projects', path: '#projects' },
    { label: 'Services', path: '#services' },
    { label: 'Testimonials', path: '#testimonials' },
  ];

  const handleNavClick = (path: string) => {
    window.location.href = path;
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 backdrop-blur-md border-b"
      style={{
        backgroundColor: 'rgba(0, 21, 30, 0.4)',
        borderColor: 'rgba(44, 158, 216, 0.3)',
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <button
            onClick={() => (window.location.href = '#home')}
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img src="logo2.png" alt="Tech eInnovation Logo" className="h-10 w-10" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className="text-sm font-medium transition-all duration-300 relative group cursor-pointer"
                style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#2c9ed8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)')}
              >
                {item.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-500 group-hover:w-full"
                  style={{ background: 'linear-gradient(to right, transparent, #2c9ed8)' }}
                />
              </button>
            ))}
          </div>

          {/* Contact Button */}
          <button
            onClick={() => (window.location.href = '#contact')}
            className="hidden md:block px-6 py-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer"
            style={{
              backgroundColor: '#2c9ed8',
              color: '#FFFFFF',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1e7aa8';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(44, 158, 216, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#2c9ed8';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Contact Us
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 cursor-pointer"
            style={{ color: '#FFFFFF' }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="md:hidden pb-6 space-y-1"
            style={{ backgroundColor: 'rgba(12, 33, 67, 0.95)' }}
          >
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className="block w-full text-left px-6 py-3 text-sm font-medium transition-colors duration-300 cursor-pointer"
                style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#2c9ed8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)')}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => (window.location.href = '#contact')}
              className="w-full mx-6 mt-4 px-4 py-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: '#2c9ed8',
                color: '#FFFFFF',
              }}
            >
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
