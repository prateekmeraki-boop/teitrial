import { Award, Users, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const stats = [
    { number: "150+", label: "Projects Completed", icon: Target },
    { number: "15", label: "Trusted Clients", icon: Users },
    { number: "9+", label: "Years of Excellence", icon: Award },
    { number: "24/7", label: "Support Available", icon: Zap },
  ];

  const values = [
    {
      icon: "💡",
      title: "Innovation",
      description: "Cutting-edge solutions for modern business challenges",
    },
    {
      icon: "⭐",
      title: "Quality",
      description: "Delivering excellence in every project we undertake",
    },
    {
      icon: "🤝",
      title: "Partnership",
      description: "Building long-term relationships with our clients",
    },
    {
      icon: "⚡",
      title: "Efficiency",
      description: "Fast delivery without compromising on quality",
    },
  ];

  const services = [
    {
      title: "Software Development",
      description:
        "Custom software solutions tailored to your business requirements and objectives.",
    },
    {
      title: "Mobile App Development",
      description:
        "Creating engaging mobile applications for all platforms with exceptional UX.",
    },
    {
      title: "Cloud Services",
      description:
        "Reliable cloud solutions to ensure scalability, security, and data accessibility.",
    },
    {
      title: "AI & ML Solutions",
      description:
        "Leveraging AI and machine learning for smarter, data-driven solutions.",
    },
  ];

  return (
    <section
      id="about"
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
            About{" "}
            <span style={{ color: "#2c9ed8" }}>Tech eInnovation</span>
          </h1>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            Delivering exceptional IT services since 2016, specializing in
            innovative solutions for diverse industries.
          </p>
        </div>

        {/* Mission Section */}
        <div
          className="rounded-2xl p-8 md:p-12 mb-16 hover:border-[#2c9ed8] transition-all duration-300 border-2"
          style={{
            backgroundColor: "rgba(44, 158, 216, 0.1)",
            borderColor: "rgba(44, 158, 216, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(44, 158, 216, 0.15)";
            e.currentTarget.style.borderColor = "#2c9ed8";
            e.currentTarget.style.boxShadow = "0 0 20px rgba(44, 158, 216, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(44, 158, 216, 0.1)";
            e.currentTarget.style.borderColor = "rgba(44, 158, 216, 0.3)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <h2
            className="text-3xl font-bold mb-6 flex items-center"
            style={{ color: "#FFFFFF" }}
          >
            <span
              className="w-1 h-10 rounded-full mr-4"
              style={{ backgroundColor: "#2c9ed8" }}
            />
            Our Mission
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "rgba(255, 255, 255, 0.9)" }}
          >
            Tech eInnovation has been delivering exceptional IT services since
            2016, specializing in software development, mobile app development,
            cloud services, AI-ML, and industrial training to enhance customer
            experiences. We are committed to enhancing our services and
            providing top-notch solutions tailored to meet the evolving needs of
            our customers.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="rounded-xl p-6 text-center group transition-all duration-300 hover:scale-110 hover:shadow-xl border-2"
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
                <div className="flex justify-center mb-4">
                  <IconComponent
                    size={32}
                    style={{
                      color: "#2c9ed8",
                      transition: "transform 0.3s",
                    }}
                    className="group-hover:scale-110"
                  />
                </div>
                <h3
                  className="text-3xl font-bold mb-2"
                  style={{ color: "#2c9ed8" }}
                >
                  {stat.number}
                </h3>
                <p
                  className="text-sm font-medium"
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2
            className="text-3xl font-bold text-center mb-8"
            style={{ color: "#FFFFFF" }}
          >
            <span style={{ color: "#2c9ed8" }}>Our Values</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="rounded-xl p-6 group transition-all duration-300 hover:scale-105 hover:shadow-xl border-2"
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
                <div
                  className="text-4xl mb-3 group-hover:scale-110 transition-transform"
                  style={{}}
                >
                  {value.icon}
                </div>
                <h3
                  className="text-lg font-semibold mb-2 group-hover:text-[#2c9ed8] transition-colors"
                  style={{ color: "#FFFFFF" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2
            className="text-3xl font-bold text-center mb-8"
            style={{ color: "#FFFFFF" }}
          >
            <span style={{ color: "#2c9ed8" }}>What We Do</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="rounded-xl p-6 group transition-all duration-300 hover:scale-105 hover:shadow-xl border-2"
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
                <h3
                  className="text-lg font-semibold mb-3 group-hover:text-[#2c9ed8] transition-colors"
                  style={{ color: "#FFFFFF" }}
                >
                  {service.title}
                </h3>
                <p style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-2xl p-12 text-center border-2"
          style={{
            backgroundColor: "rgba(44, 158, 216, 0.15)",
            borderColor: "rgba(44, 158, 216, 0.4)",
          }}
        >
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "#FFFFFF" }}
          >
            Ready to Work With Us?
          </h2>
          <p
            className="mb-8 text-lg"
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            Let's create innovative solutions together for your business needs.
          </p>
          <Link to="/#contact">
            <button
              className="group relative overflow-hidden px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg"
              style={{
                backgroundColor: "#2c9ed8",
                color: "#FFFFFF",
              }}
            >
              <span className="relative z-10">Get In Touch</span>
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
