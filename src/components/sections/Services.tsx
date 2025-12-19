export default function Services() {
  const services = [
    {
      title: "Cloud Services",
      description: "Reliable cloud solutions tailored to enhance your business operations and efficiency.",
      image: "/cloud-services.jpg",
    },
    {
      title: "AI & ML",
      description: "Harness the power of AI and machine learning to drive innovation in your projects.",
      image: "/ai-ml.jpg",
    },
    {
      title: "Industrial Training",
      description: "Expert training programs for individuals and teams to excel in technology and innovation.",
      image: "/training.jpg",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen py-20"
      style={{ backgroundColor: "#0c2143" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "#FFFFFF" }}
          >
            Innovative Tech Solutions
          </h2>
          <p
            className="text-xl"
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            Providing top-notch software and mobile app development services since 2016 for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(255, 255, 255, 0.2)",
                border: "1px solid",
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
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div
                  className="w-12 h-1 mb-4 rounded"
                  style={{ backgroundColor: "#2c9ed8" }}
                />
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#FFFFFF" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#2c9ed8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                >
                  {service.title}
                </h3>
                <p
                  className="text-lg mb-6"
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  {service.description}
                </p>
                <button
                  className="font-semibold transition-all"
                  style={{
                    color: "#2c9ed8",
                  }}
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
