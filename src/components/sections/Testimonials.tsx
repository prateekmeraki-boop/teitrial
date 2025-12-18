import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Tech Einnovation transformed our business with their exceptional software and mobile app development services. Their expertise in AI and cloud solutions is unmatched. Highly recommend!",
      author: "Shawn Lee",
      role: "CEO, Tech Startup",
      initials: "SL",
      rating: 5,
    },
    {
      text: "Outstanding service and professional team. They delivered our project on time and exceeded our expectations. The communication throughout was excellent and they truly care about client success.",
      author: "Sarah Johnson",
      role: "Product Manager",
      initials: "SJ",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 flex items-center" style={{ backgroundColor: '#0f1114' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          {/* Accent Line with Large Heading in Mint */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-1" style={{ backgroundColor: '#a5d0a8' }} />
            <h2 className="text-4xl font-bold mx-6" style={{ color: '#a5d0a8' }}>Testimonials</h2>
            <div className="w-12 h-1" style={{ backgroundColor: '#a5d0a8' }} />
          </div>

          <p className="text-xl text-gray-100">
            What Our Clients Say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative rounded-lg p-8 backdrop-blur-xl border transition-all duration-300 flex flex-col hover:shadow-2xl"
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
              {/* Top Border Accent */}
              <div 
                className="w-12 h-1 mb-6 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: '#a5d0a8' }}
              />

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#a5d0a8" style={{ color: '#a5d0a8' }} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg text-gray-100 mb-8 flex-grow italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author Info with Avatar */}
              <div className="flex items-center gap-4 pt-6 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                {/* Author Avatar with Initials */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold border-2 transition-transform duration-300 group-hover:scale-110"
                  style={{ 
                    backgroundColor: '#a5d0a8',
                    color: '#0f1114',
                    borderColor: '#a5d0a8'
                  }}
                >
                  {testimonial.initials}
                </div>

                {/* Author Details */}
                <div>
                  <h4 className="text-lg font-bold text-white">{testimonial.author}</h4>
                  <p style={{ color: '#a5d0a8' }} className="text-sm font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
