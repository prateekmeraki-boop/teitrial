import React from 'react';
import { Award, Users, Target, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '150+', label: 'Projects Completed', icon: Target },
    { number: '15', label: 'Trusted Clients', icon: Users },
    { number: '9+', label: 'Years of Excellence', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Zap }
  ];

  const values = [
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Cutting-edge solutions for modern business challenges'
    },
    {
      icon: '🎯',
      title: 'Quality',
      description: 'Delivering excellence in every project we undertake'
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'Building long-term relationships with our clients'
    },
    {
      icon: '⚡',
      title: 'Efficiency',
      description: 'Fast delivery without compromising on quality'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1114] via-[#1a1d22] to-[#0f1114]">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-[#a5d0a8]">Tech eInnovation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Delivering exceptional IT services since 2016, specializing in innovative solutions for diverse industries.
          </p>
        </div>

        {/* About Content */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 hover:border-white/20 transition-all duration-300 shadow-2xl mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-1 h-10 bg-[#a5d0a8] rounded-full mr-4"></span>
              Our Mission
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Tech eInnovation has been delivering exceptional IT services since 2016, specializing in software development, mobile app development, cloud services, AI-ML, and industrial training to enhance customer experiences. We are committed to enhancing our services and providing top-notch solutions tailored to meet the evolving needs of our customers.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={idx}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#a5d0a8]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#a5d0a8]/20 text-center group"
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-[#a5d0a8] group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#a5d0a8] mb-2">{stat.number}</h3>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Values Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              <span className="text-[#a5d0a8]">Our Values</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#a5d0a8]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#a5d0a8]/20 group text-center"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{value.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#a5d0a8] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services Overview */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              <span className="text-[#a5d0a8]">What We Do</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Software Development',
                  description: 'Custom software solutions tailored to your business requirements and objectives.'
                },
                {
                  title: 'Mobile App Development',
                  description: 'Creating engaging mobile applications for all platforms with exceptional UX.'
                },
                {
                  title: 'Cloud Services',
                  description: 'Reliable cloud solutions to ensure scalability, security, and data accessibility.'
                },
                {
                  title: 'AI & ML Solutions',
                  description: 'Leveraging AI and machine learning for smarter, data-driven solutions.'
                }
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#a5d0a8]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#a5d0a8]/20 group"
                >
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#a5d0a8] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-gradient-to-r from-[#a5d0a8]/10 via-white/5 to-[#a5d0a8]/10 border border-[#a5d0a8]/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Let's create innovative solutions together for your business needs.
            </p>
            <a
              href="/#contact"
              className="inline-block bg-[#a5d0a8] hover:bg-[#b8e0ba] text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
