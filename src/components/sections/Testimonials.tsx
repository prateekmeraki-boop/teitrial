export default function Testimonials() {
  const testimonials = [
    {
      name: 'Shawn Lee',
      role: 'CEO, Tech Startup',
      image: 'SL',
      testimonial: 'Tech Einnovation transformed our business with their exceptional software and mobile app development services. Their expertise in AI and cloud solutions is unmatched. Highly recommend!',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      image: 'SJ',
      testimonial: 'Outstanding service and professional team. They delivered our project on time and exceeded our expectations. The communication throughout was excellent and they truly care about client success.',
      rating: 5
    }
  ];

  return (
    <div id="testimonials" className="min-h-screen bg-black py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-[#a5d0a8]">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-300">What Our Clients Say</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="group relative rounded-lg overflow-hidden backdrop-blur-xl border transition-all duration-300 flex flex-col h-full hover:shadow-2xl"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(165, 208, 168, 0.6)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(165, 208, 168, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Accent Line */}
                <div
                  className="w-12 h-1 mb-4 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: '#a5d0a8' }}
                ></div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={{ color: '#a5d0a8' }} className="text-lg">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-200 text-lg mb-6 flex-grow italic">
                  "{testimonial.testimonial}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-black text-lg"
                    style={{ backgroundColor: '#a5d0a8' }}
                  >
                    {testimonial.image}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold group-hover:text-[#a5d0a8] transition-colors">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-20">
          <div
            className="backdrop-blur-xl border rounded-2xl p-12 text-center transition-all duration-300"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              borderColor: 'rgba(165, 208, 168, 0.5)',
            }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Success Stories?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Let's work together to transform your business and create your own success story.
            </p>
            <button
              style={{
                backgroundColor: '#a5d0a8',
                color: 'black',
              }}
              className="inline-block font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
