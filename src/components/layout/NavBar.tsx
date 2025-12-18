const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function NavBar() {
  return (
    <nav className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand - Logo */}
          <div className="flex items-center">
            <img 
              src="/src/assets/logo.png" 
              alt="Tech eInnovation Logo" 
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Glassmorphic Pills */}
          <div className="hidden md:flex items-center space-x-1 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 p-1 -mr-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium text-white/90 transition-all hover:text-white"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            {/* GitHub button - Hidden for now */}
            {/* <button className="group relative overflow-hidden rounded-full inline-flex items-center justify-center font-medium transition-all text-white/90 hover:text-white px-4 py-2 text-sm">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </button> */}
            

            <a href="/#contact" className="group relative overflow-hidden rounded-full inline-flex items-center justify-center font-medium transition-all bg-white text-black hover:bg-gray-100 px-4 py-2 text-sm">
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
}
