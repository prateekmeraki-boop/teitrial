import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 w-full z-50 backdrop-blur-xl border-b"
      style={{
        backgroundColor: 'rgba(12, 33, 67, 0.8)',
        borderColor: 'rgba(44, 158, 216, 0.2)',
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo - Smaller */}
          <Link to="/" className="flex items-center">
            <img
              src="logo2.png"
              alt="Tech eInnovation Logo"
              className="h-10 w-10"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Home Link */}
            <Link to="/">
              <div className="group relative overflow-hidden">
                <span
                  className="relative z-10 transition-colors group-hover:text-2c9ed8"
                  style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                >
                  Home
                </span>
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-2c9ed8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                />
              </div>
            </Link>

            {/* About Link */}
            <Link to="/about">
              <div className="group relative overflow-hidden">
                <span
                  className="relative z-10 transition-colors group-hover:text-2c9ed8"
                  style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                >
                  About
                </span>
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-2c9ed8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                />
              </div>
            </Link>

            {/* Projects Link */}
            <Link to="/projects">
              <div className="group relative overflow-hidden">
                <span
                  className="relative z-10 transition-colors group-hover:text-2c9ed8"
                  style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                >
                  Projects
                </span>
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-2c9ed8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                />
              </div>
            </Link>

            {/* Services Link */}
            <Link to="/services">
              <div className="group relative overflow-hidden">
                <span
                  className="relative z-10 transition-colors group-hover:text-2c9ed8"
                  style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                >
                  Services
                </span>
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-2c9ed8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                />
              </div>
            </Link>

            {/* Testimonials Link */}
            <Link to="/testimonials">
              <div className="group relative overflow-hidden">
                <span
                  className="relative z-10 transition-colors group-hover:text-2c9ed8"
                  style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                >
                  Testimonials
                </span>
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-2c9ed8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                />
              </div>
            </Link>
          </div>

          {/* Contact Button with Hover Animation */}
          <Link to="/contact" className="hidden md:block">
            <button
              className="group relative overflow-hidden rounded-lg px-6 py-2 font-semibold transition-all"
              style={{
                backgroundColor: '#2c9ed8',
                color: '#FFFFFF',
              }}
            >
              <span className="relative z-10">Contact Us</span>
              <div
                className="absolute inset-0 -top-1 -bottom-1 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                style={{
                  background:
                    'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent)',
                }}
              />
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            style={{ color: '#FFFFFF' }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="md:hidden pb-4 space-y-4"
            style={{ backgroundColor: 'rgba(12, 33, 67, 0.95)' }}
          >
            {/* Mobile Home Link */}
            <Link to="/">
              <div
                className="px-4 py-2 hover:text-2c9ed8 transition-colors"
                style={{ color: 'rgba(255, 255, 255, 0.9)' }}
              >
                Home
              </div>
            </Link>

            {/* Mobile About Link */}
            <Link to="/about">
              <div
                className="px-4 py-2 hover:text-2c9ed8 transition-colors"
                style={{ color: 'rgba(255, 255, 255, 0.9)' }}
              >
                About
              </div>
            </Link>

            {/* Mobile Projects Link */}
            <Link to="/projects">
              <div
                className="px-4 py-2 hover:text-2c9ed8 transition-colors"
                style={{ color: 'rgba(255, 255, 255, 0.9)' }}
              >
                Projects
              </div>
            </Link>

            {/* Mobile Services Link */}
            <Link to="/services">
              <div
                className="px-4 py-2 hover:text-2c9ed8 transition-colors"
                style={{ color: 'rgba(255, 255, 255, 0.9)' }}
              >
                Services
              </div>
            </Link>

            {/* Mobile Testimonials Link */}
            <Link to="/testimonials">
              <div
                className="px-4 py-2 hover:text-2c9ed8 transition-colors"
                style={{ color: 'rgba(255, 255, 255, 0.9)' }}
              >
                Testimonials
              </div>
            </Link>

            {/* Mobile Contact Button */}
            <Link to="/contact">
              <button
                className="w-full group relative overflow-hidden rounded-lg px-4 py-2 font-semibold transition-all"
                style={{
                  backgroundColor: '#2c9ed8',
                  color: '#FFFFFF',
                }}
              >
                <span className="relative z-10">Contact Us</span>
                <div
                  className="absolute inset-0 -top-1 -bottom-1 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                  style={{
                    background:
                      'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent)',
                  }}
                />
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
