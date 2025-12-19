import { Link } from "react-router-dom";

export default function About() {
  const stats = [
    { value: "2016", label: "Year Founded" },
    { value: "500+", label: "Projects Delivered" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "#0c2143" }}
            >
              About Us
            </h2>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "rgba(12, 33, 67, 0.8)" }}
            >
              Tech Einnovation has been delivering exceptional IT services since
              2016, specializing in software development, mobile app creation,
              and innovative tech solutions.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-lg p-6 transition-all duration-300 hover:scale-110 hover:shadow-xl group"
                  style={{
                    backgroundColor: "rgba(44, 158, 216, 0.08)",
                    border: "2px solid rgba(44, 158, 216, 0.2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(44, 158, 216, 0.15)";
                    e.currentTarget.style.borderColor = "rgba(44, 158, 216, 0.5)";
                    e.currentTarget.style.boxShadow = "0 0 20px rgba(44, 158, 216, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(44, 158, 216, 0.08)";
                    e.currentTarget.style.borderColor = "rgba(44, 158, 216, 0.2)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    className="text-3xl md:text-4xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#0c2143]"
                    style={{ color: "#2c9ed8" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-sm font-medium transition-colors duration-300 group-hover:text-[#0c2143]"
                    style={{ color: "rgba(12, 33, 67, 0.7)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Button with Animation */}
            <Link to="/#contact">
              <button
                className="group relative overflow-hidden rounded-lg px-6 py-3 font-semibold transition-all hover:shadow-lg"
                style={{
                  backgroundColor: "#2c9ed8",
                  color: "#FFFFFF",
                }}
              >
                <span className="relative z-10">Contact Us</span>
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

          {/* Right Content - Logo with Animation */}
          <div className="flex justify-center">
            <div
              className="relative transition-all duration-500 hover:scale-105 hover:shadow-2xl rounded-2xl p-8"
              style={{
                backgroundColor: "rgba(44, 158, 216, 0.08)",
                border: "2px solid rgba(44, 158, 216, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(44, 158, 216, 0.15)";
                e.currentTarget.style.borderColor = "rgba(44, 158, 216, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(44, 158, 216, 0.08)";
                e.currentTarget.style.borderColor = "rgba(44, 158, 216, 0.2)";
              }}
            >
              <img
                src="/logo.png"
                alt="Tech eInnovation Logo"
                className="w-72 h-72 object-contain transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
