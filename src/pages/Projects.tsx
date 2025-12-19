import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "SmartSchoolSync ERP",
      category: "Software Development",
      description:
        "Comprehensive school management platform with academic administration, digital examinations, and role-based access for students, teachers, and parents.",
      emoji: "🎓",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      results: ["500+ Schools", "50K+ Users", "99.9% Uptime"],
    },
    {
      id: 2,
      title: "Mobile Banking Application",
      category: "Mobile App Development",
      description:
        "User-friendly mobile banking app with seamless payment processing, transaction management, and secure authentication.",
      emoji: "💳",
      technologies: ["React Native", "Firebase", "Stripe", "iOS/Android"],
      results: ["100K+ Downloads", "4.8 Rating", "99.9% Uptime"],
    },
    {
      id: 3,
      title: "Cloud Infrastructure Platform",
      category: "Cloud Services",
      description:
        "Enterprise cloud infrastructure management with automated deployment, monitoring, and disaster recovery capabilities.",
      emoji: "☁️",
      technologies: ["AWS", "Kubernetes", "Docker", "Terraform"],
      results: ["Zero Downtime", "60% Cost Reduction", "24/7 Support"],
    },
    {
      id: 4,
      title: "AI Analytics Dashboard",
      category: "AI/ML Solutions",
      description:
        "Machine learning platform providing intelligent insights, predictive analytics, and real-time data visualization.",
      emoji: "📊",
      technologies: ["Python", "TensorFlow", "PostgreSQL", "AWS ML"],
      results: ["92% Accuracy", "Real-time Processing", "Automated Insights"],
    },
    {
      id: 5,
      title: "E-Commerce Platform",
      category: "Software Development",
      description:
        "Scalable e-commerce solution with payment integration, inventory management, and comprehensive customer analytics.",
      emoji: "🛒",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      results: ["2M+ Revenue", "50K Products", "100K Orders/Month"],
    },
    {
      id: 6,
      title: "IoT Device Dashboard",
      category: "Software Development",
      description:
        "Real-time IoT monitoring dashboard with live data visualization, custom alerts, and device management.",
      emoji: "📱",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      results: ["1000+ Devices", "Real-time Updates", "Custom Alerts"],
    },
  ];

  return (
    <section
      id="projects"
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
            <span style={{ color: "#2c9ed8" }}>Projects</span>
          </h1>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            Explore our diverse range of innovative tech solutions and
            successful case studies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 flex flex-col group"
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
              {/* Project Image/Icon */}
              <div
                className="h-40 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(44, 158, 216, 0.2) 0%, rgba(44, 158, 216, 0.05) 100%)",
                }}
              >
                {project.emoji}
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Category */}
                <div className="mb-3">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "#2c9ed8" }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold mb-2 group-hover:text-[#2c9ed8] transition-colors"
                  style={{ color: "#FFFFFF" }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm mb-4"
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <p
                    className="text-xs font-semibold mb-2"
                    style={{ color: "rgba(255, 255, 255, 0.6)" }}
                  >
                    Tech Stack:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded"
                        style={{
                          backgroundColor: "rgba(44, 158, 216, 0.2)",
                          color: "#2c9ed8",
                          border: "1px solid rgba(44, 158, 216, 0.3)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div
                  className="mb-6 pt-4"
                  style={{
                    borderTop: "1px solid rgba(44, 158, 216, 0.2)",
                  }}
                >
                  <p
                    className="text-xs font-semibold mb-2"
                    style={{ color: "rgba(255, 255, 255, 0.6)" }}
                  >
                    Results:
                  </p>
                  <div className="space-y-1">
                    {project.results.map((result, i) => (
                      <p
                        key={i}
                        className="text-xs flex items-center"
                        style={{ color: "rgba(255, 255, 255, 0.7)" }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mr-2"
                          style={{ backgroundColor: "#2c9ed8" }}
                        />
                        {result}
                      </p>
                    ))}
                  </div>
                </div>

                {/* View Case Study Button */}
                <button
                  className="mt-auto w-full py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn border-2"
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
                  View Case Study
                  <ArrowRight
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
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
            Want to see more?
          </h2>
          <p
            className="mb-8 text-lg"
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            Check out our portfolio and get inspired by what we've created for
            our clients.
          </p>
          <Link to="/#contact">
            <button
              className="group relative overflow-hidden px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg inline-block"
              style={{
                backgroundColor: "#2c9ed8",
                color: "#FFFFFF",
              }}
            >
              <span className="relative z-10">Discuss Your Project</span>
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
