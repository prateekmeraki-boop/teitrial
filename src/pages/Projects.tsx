import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Enterprise Software Solution',
      category: 'Software Development',
      description: 'Custom enterprise software platform for managing business operations with advanced analytics and reporting features.',
      image: '💻',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      results: ['40% Efficiency Increase', '3 Months Deployment', '500+ Users']
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'Mobile App Development',
      description: 'User-friendly mobile banking application with seamless payment processing and transaction management.',
      image: '📱',
      technologies: ['React Native', 'Firebase', 'Stripe', 'iOS/Android'],
      results: ['100K+ Downloads', '4.8★ Rating', '99.9% Uptime']
    },
    {
      id: 3,
      title: 'Cloud Migration Platform',
      category: 'Cloud Services',
      description: 'Comprehensive cloud infrastructure migration and management platform for enterprise clients.',
      image: '☁️',
      technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform'],
      results: ['Zero Downtime', '60% Cost Reduction', '24/7 Support']
    },
    {
      id: 4,
      title: 'AI-Powered Analytics Engine',
      category: 'AI & ML Solutions',
      description: 'Machine learning platform providing intelligent insights and predictive analytics for business intelligence.',
      image: '🤖',
      technologies: ['Python', 'TensorFlow', 'PostgreSQL', 'AWS ML'],
      results: ['92% Accuracy', 'Real-time Processing', 'Automated Insights']
    },
    {
      id: 5,
      title: 'E-Commerce Platform',
      category: 'Software Development',
      description: 'Scalable e-commerce platform with payment integration, inventory management, and customer analytics.',
      image: '🛒',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      results: ['$2M+ Revenue', '50K Products', '100K Orders/Month']
    },
    {
      id: 6,
      title: 'IoT Dashboard System',
      category: 'Software Development',
      description: 'Real-time IoT device monitoring dashboard with data visualization and alert management capabilities.',
      image: '📊',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      results: ['1000+ Devices', 'Real-time Updates', 'Custom Alerts']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1114] via-[#1a1d22] to-[#0f1114]">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-[#a5d0a8]">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our diverse range of innovative tech solutions and successful case studies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#a5d0a8]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#a5d0a8]/20 group flex flex-col"
              >
                {/* Project Image/Icon */}
                <div className="bg-gradient-to-br from-[#a5d0a8]/20 to-[#a5d0a8]/5 h-40 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-3">
                    <span className="text-[#a5d0a8] text-xs font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#a5d0a8] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-300 font-semibold mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-[#a5d0a8]/20 text-[#a5d0a8] px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6 pt-4 border-t border-white/10">
                    <p className="text-xs text-gray-300 font-semibold mb-2">Results:</p>
                    <div className="space-y-1">
                      {project.results.map((result, i) => (
                        <p key={i} className="text-xs text-gray-400 flex items-center">
                          <span className="w-1.5 h-1.5 bg-[#a5d0a8] rounded-full mr-2"></span>
                          {result}
                        </p>
                      ))}
                    </div>
                  </div>

                  <button className="mt-auto w-full bg-gradient-to-r from-[#a5d0a8]/20 to-[#a5d0a8]/10 hover:from-[#a5d0a8]/30 hover:to-[#a5d0a8]/20 border border-[#a5d0a8]/50 text-[#a5d0a8] font-semibold py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                    View Case Study
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="backdrop-blur-xl bg-gradient-to-r from-[#a5d0a8]/10 via-white/5 to-[#a5d0a8]/10 border border-[#a5d0a8]/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Want to see more?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Check out our portfolio and get inspired by what we've created for our clients.
            </p>
            <a
              href="/#contact"
              className="inline-block bg-[#a5d0a8] hover:bg-[#b8e0ba] text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
