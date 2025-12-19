export default function Testimonials() {
  const testimonials = [
    {
      stars: 5,
      quote: "Tech E-Innovation transformed our business with their exceptional software and mobile app development services.",
      author: "Shawn Lee",
      title: "CEO, Tech Startup",
      initials: "SL",
    },
    {
      stars: 5,
      quote: "Outstanding service and professional team. They delivered our project on time and exceeded our expectations.",
      author: "Sarah Johnson",
      title: "Product Manager",
      initials: "SJ",
    },
  ];

  return (
    <section
      id="testimonials"
      className="min-h-screen py-20"
      style={{ backgroundColor: "#0c2143" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#FFFFFF" }}
          >
            Testimonials
          </h2>
          <p
            className="text-xl"
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            What Our Clients Say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg p-8 backdrop-blur-xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(255, 255, 255, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.borderColor = "rgba(44, 158, 216, 0.4)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(44, 158, 216, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <span key={i} style={{ color: "#2c9ed8" }}>
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-lg mb-6"
                style={{ color: "rgba(255, 255, 255, 0.9)" }}
              >
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
                  style={{
                    backgroundColor: "#2c9ed8",
                    color: "#FFFFFF",
                  }}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p
                    className="font-semibold"
                    style={{ color: "#FFFFFF" }}
                  >
                    {testimonial.author}
                  </p>
                  <p
                    style={{ color: "rgba(255, 255, 255, 0.7)" }}
                  >
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
