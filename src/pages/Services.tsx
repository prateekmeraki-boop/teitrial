import { Code, Smartphone, Cloud, Brain, Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description:
        "Custom software solutions tailored to enhance your business operations and efficiency.",
      features: [
        "Custom Solutions",
        "Enterprise Apps",
        "API Development",
        "System Integration",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Creating user-friendly mobile applications that engage and retain your customers effectively.",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-Platform",
        "App Optimization",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description:
        "Reliable cloud solutions to ensure scalability, security, and seamless access to your data.",
      features: [
        "AWS Solutions",
        "Hybrid Cloud Strategy",
        "Migration Support",
        "Cloud Infrastructure",
      ],
    },
    {
      icon: Brain,
      title: "AI & ML Solutions",
      description:
        "Intelligent automation and data-driven insights to enhance business operations.",
      features: [
        "Machine Learning",
        "Predictive Analytics",
        "Data Insights",
        "Automation",
      ],
    },
  ];

  const process = [
    {
      step: 1,
      title: "Discovery",
      description: "Understanding your business needs and requirements",
    },
    {
      step: 2,
      title: "Planning",
      description: "Creating a comprehensive strategy and roadmap",
    },
    {
      step: 3,
      title: "Development",
      description: "Building your solution with cutting-edge technology",
    },
    {
      step: 4,
      title: "Deployment",
      description: "Launching your solution to production",
    },
    {
      step: 5,
      title: "Support",
      description: "24/7 ongoing support and maintenance",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 md:py-24"
      style={{ backgroundColor: "#0c2143" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ color: "#FFFFFF" }}
          >
            Our{" "}
            <span style={{ color: "#2c9ed8" }}>Services</span>
          </h1>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            Providing cutting-edge software and mobile app development services
            for diverse industries since 2016.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 group"
                style={{
                  backgroundColor: "rgba(44, 158, 216, 0.1)",
                  borderColor: "rgba(44, 158, 216, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(44, 158, 216, 0.15)";
                  e.currentTarget.style.borderColor = "#2c9ed8";
                  e.currentTarget.style.boxShadow =
                    "0 0 30px rgba(44, 158, 216, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(44, 158, 216, 0.1)";
                  e.currentTarget.style.borderColor =
                    "rgba(44, 158, 216, 0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Icon */}
                <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-lg group-hover:scale-110 transition-transform duration-300"
                  style={{
                    backgroundColor: "rgba(44, 158, 216, 0.2)",
                    borderColor: "rgba(44, 158, 216, 0.3)",
                    border: "2px solid",
                  }}
                >
                  <IconComponent
                    size={28}
                    style={{ color: "#2c9ed8" }}
                  />
                </div>

                {/* Title */}
                <h2
                  className="text-2xl font-bold mb-3 group-hover:text-[#2c9ed8] transition-colors"
                  style={{ color: "#FFFFFF" }}
                >
                  {service.title}
                </h2>

                {/* Description */}
                <p
                  className="mb-6"
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "rgba(255, 255, 255, 0.8)" }}
                  >
                    Key Features:
                  </p>
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check
                        size={20}
                        style={{ color: "#2c9ed8" }}
                      />
                      <span
                        style={{ color: "rgba(255, 255, 255, 0.7)" }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <button
                  className="mt-8 w-full py-3 rounded-lg font-semibold transition-all duration-300 group/btn border-2"
                  style={{
                    backgroundColor: "rgba(44, 158, 216, 0.2)",
                    borderColor: "#2c9ed8",
                    color: "#2c9ed8",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(44, 158, 216, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(44, 158, 216, 0.2)";
                  }}
                >
                  Learn More
                </button>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: "#FFFFFF" }}
          >
            <span style={{ color: "#2c9ed8" }}>Our Process</span>
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Process Card */}
                <div
                  className="rounded-xl p-6 text-center transition-all duration-300 hover:scale-110 hover:shadow-xl border-2 group"
                  style={{
                    backgroundColor: "rgba(44, 158, 216, 0.1)",
                    borderColor: "rgba(44, 158, 216, 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(44, 158, 216, 0.15)";
                    e.currentTarget.style.borderColor = "#2c9ed8";
                    e.currentTarget.style.boxShadow =
                      "0 0 20px rgba(44, 158, 216, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(44, 158, 216, 0.1)";
                    e.currentTarget.style.borderColor =
                      "rgba(44, 158, 216, 0.3)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Step Number */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3"
                    style={{
                      backgroundColor: "#2c9ed8",
                      color: "#0c2143",
                    }}
                  >
                    {item.step}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-white font-semibold mb-2 group-hover:text-[#2c9ed8] transition-colors"
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm"
                    style={{ color: "rgba(255, 255, 255, 0.7)" }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Arrow Connector */}
                {idx < process.length - 1 && (
                  <div
                    className="hidden md:block absolute top-12 -right-2 w-4 h-0.5"
                    style={{
                      background:
                        "linear-gradient(to right, #2c9ed8, transparent)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="rounded-2xl p-12 text-center border-2"
          style={{
            backgroundColor: "rgba(44, 158, 216, 0.1)",
            borderColor: "rgba(44, 158, 216, 0.4)",
          }}
        >
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "#FFFFFF" }}
          >
            Ready to Get Started?
          </h2>
          <p
            className="mb-8 text-lg"
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            Let's discuss how our services can transform your business.
          </p>
          <Link to="/#contact">
            <button
              className="group relative overflow-hidden px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg inline-block"
              style={{
                backgroundColor: "#2c9ed8",
                color: "#FFFFFF",
              }}
            >
              <span className="relative z-10">Contact Us Today</span>
              <div
                className="absolute inset-0 -top-1 -bottom-1 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent)",
                }}
              />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
