import { Code, Smartphone, Cloud, Brain, Check } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to enhance your business operations and efficiency.',
      features: ['Custom Solutions', 'Enterprise Apps', 'API Development', 'System Integration']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Creating user-friendly mobile applications that engage and retain your customers effectively.',
      features: ['iOS Development', 'Android Development', 'Cross-Platform', 'App Optimization']
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Reliable cloud solutions to ensure scalability, security, and seamless access to your data.',
      features: ['AWS Solutions', 'Azure Services', 'Migration', 'Cloud Infrastructure']
    },
    {
      icon: Brain,
      title: 'AI & ML Solutions',
      description: 'Intelligent automation and data-driven insights to enhance business operations.',
      features: ['Machine Learning', 'AI Models', 'Data Analytics', 'Automation']
    }
  ];

  const process = [
    { step: 1, title: 'Discovery', description: 'Understanding your business needs and requirements' },
    { step: 2, title: 'Planning', description: 'Creating a comprehensive strategy and roadmap' },
    { step: 3, title: 'Development', description: 'Building your solution with cutting-edge technology' },
    { step: 4, title: 'Deployment', description: 'Launching your solution to production' },
    { step: 5, title: 'Support', description: '24/7 ongoing support and maintenance' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1114] via-[#1a1d22] to-[#0f1114]">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-[#a5d0a8]">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Providing cutting-edge software and mobile app development services for diverse industries since 2016.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={idx}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#a5d0a8]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#a5d0a8]/20 group"
                >
                  <div className="mb-6 flex items-center justify-center w-14 h-14 bg-[#a5d0a8]/20 rounded-lg group-hover:bg-[#a5d0a8]/30 transition-all">
                    <IconComponent className="w-7 h-7 text-[#a5d0a8]" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-[#a5d0a8] transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  
                  <div className="space-y-3">
                    <p className="text-sm text-gray-300 font-semibold">Key Features:</p>
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-[#a5d0a8]" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="mt-8 w-full bg-gradient-to-r from-[#a5d0a8] to-[#7fb89a] hover:from-[#b8e0ba] hover:to-[#8fc9a6] text-black font-semibold py-2 rounded-lg transition-all duration-300">
                    Learn More
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            <span className="text-[#a5d0a8]">Our Process</span>
          </h2>
          
          <div className="grid md:grid-cols-5 gap-4">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-[#a5d0a8]/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#a5d0a8] text-black rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
                {idx < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/3 -right-2 w-4 h-0.5 bg-gradient-to-r from-[#a5d0a8] to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-gradient-to-r from-[#a5d0a8]/10 via-white/5 to-[#a5d0a8]/10 border border-[#a5d0a8]/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Let's discuss how our services can transform your business.
            </p>
            <a
              href="/#contact"
              className="inline-block bg-[#a5d0a8] hover:bg-[#b8e0ba] text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
