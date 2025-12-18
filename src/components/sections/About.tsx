export default function About() {
  const stats = [
    { number: "2016", label: "Year Founded" },
    { number: "500+", label: "Projects Delivered" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#2E2E2E' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Accent Line with Large Heading in Mint */}
            <div className="flex items-center mb-6">
              <div className="w-12 h-1" style={{ backgroundColor: '#a5d0a8' }} />
              <h2 className="text-4xl font-bold mx-6" style={{ color: '#a5d0a8' }}>About Us</h2>
            </div>

            <p className="text-lg text-gray-100 mb-8 leading-relaxed">
              Tech Einnovation has been delivering exceptional IT services since 2016, specializing in software development, mobile apps, cloud services, AI, and industrial training.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Contact Button */}
            <button className="group relative overflow-hidden rounded-full inline-flex items-center justify-center font-medium transition-all px-8 py-3 text-lg backdrop-blur-xl border text-white" style={{
              backgroundColor: '#000000',
              borderColor: 'rgba(255, 255, 255, 0.2)'
            }}>
              <span className="relative z-10 font-semibold">Contact Us</span>
              <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </button>
          </div>

          {/* Right - Company Logo with Enhanced Glassy Card */}
          <div 
            className="group rounded-lg p-12 flex items-center justify-center backdrop-blur-xl border transition-all duration-300 cursor-pointer"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'rgba(255, 255, 255, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(165, 208, 168, 0.6)';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(165, 208, 168, 0.3)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            <img 
              src="/logo.png" 
              alt="Tech eInnovation Logo" 
              className="w-72 h-72 object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
