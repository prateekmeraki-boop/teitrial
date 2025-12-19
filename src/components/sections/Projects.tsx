export default function Projects() {
  const projects = [
    {
      title: "Software Development",
      description: "Custom solutions tailored to meet your business needs effectively.",
      image: "/software-dev.jpg",
    },
    {
      title: "Mobile Apps",
      description: "Engaging mobile applications designed for user-friendly experiences.",
      image: "/mobile-apps.jpg",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-20"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "#0c2143" }}
          >
            Our Projects
          </h2>
          <p
            className="text-xl"
            style={{ color: "rgba(12, 33, 67, 0.8)" }}
          >
            Explore our innovative solutions in software and mobile development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              style={{
                backgroundColor: "#0c2143",
                borderColor: "rgba(44, 158, 216, 0.2)",
                border: "1px solid",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(44, 158, 216, 0.5)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(44, 158, 216, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(44, 158, 216, 0.2)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div
                  className="w-12 h-1 mb-4 rounded"
                  style={{ backgroundColor: "#2c9ed8" }}
                />
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#FFFFFF" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-lg mb-6"
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  {project.description}
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
