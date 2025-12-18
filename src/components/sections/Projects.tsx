import { Code2, Smartphone, ArrowRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      image: "/software-dev.jpg",
      title: "Software Development",
      description: "Custom solutions tailored to meet your business needs effectively.",
      icon: Code2,
    },
    {
      image: "/mobile-apps.jpg",
      title: "Mobile Apps",
      description: "Engaging mobile applications designed for user-friendly experiences.",
      icon: Smartphone,
    },
  ];

  return (
    <section id="projects" className="py-20" style={{ backgroundColor: '#2E2E2E' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Accent Line with Large Heading in Mint */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-1" style={{ backgroundColor: '#a5d0a8' }} />
            <h2 className="text-4xl font-bold mx-6" style={{ color: '#a5d0a8' }}>Our Projects</h2>
            <div className="w-12 h-1" style={{ backgroundColor: '#a5d0a8' }} />
          </div>

          <p className="text-xl text-gray-100">
            Explore our innovative solutions in software and mobile development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="group relative rounded-lg overflow-hidden backdrop-blur-xl border transition-all duration-300 flex flex-col hover:shadow-2xl"
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
                {/* Image Container with Overlay */}
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Icon Badge Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                    <div className="bg-black rounded-full p-4 border-2" style={{ borderColor: '#a5d0a8' }}>
                      <IconComponent size={48} style={{ color: '#a5d0a8' }} />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-10 flex flex-col flex-grow">
                  {/* Top Border Accent */}
                  <div 
                    className="w-12 h-1 mb-4 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: '#a5d0a8' }}
                  />
                  
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-200 mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Learn More Button */}
                  <button className="group/btn relative overflow-hidden rounded-full inline-flex items-center justify-start font-medium transition-all px-6 py-3 text-sm backdrop-blur-xl border text-white self-start opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      borderColor: 'rgba(165, 208, 168, 0.5)'
                    }}>
                    <span className="relative z-10 flex items-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                    <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-out" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
