import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-20 w-full bg-black/50 backdrop-blur-xl border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand - Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Tech eInnovation Logo" className="h-10 w-auto object-contain" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 p-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium text-white/90 transition-all hover:text-white"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            {/* Contact Us Button - Hidden on very small screens */}
            <a
              href="#contact"
              className="hidden sm:inline-block group relative overflow-hidden rounded-full inline-flex items-center justify-center font-medium transition-all bg-white text-black hover:bg-gray-100 px-4 py-2 text-sm"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/5 border-t border-white/10 rounded-b-lg py-4 px-4 space-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 rounded-lg text-white hover:bg-white/10 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
