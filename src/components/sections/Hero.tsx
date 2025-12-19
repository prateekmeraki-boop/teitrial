import { EtherealBeamsBackground } from "@/components/ui/ethereal-beams-hero";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const services = [
    {
      title: "Cloud Services",
      description: "Reliable cloud solutions for your business needs.",
    },
    {
      title: "AI Solutions",
      description: "Transforming ideas into intelligent solutions.",
    },
    {
      title: "Industrial Training",
      description: "Empowering businesses with AI and ML.",
    },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-black pt-12">
      {/* Beams Background */}
      <EtherealBeamsBackground />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="mx-auto max-w-4xl text-center mb-16">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center rounded-full bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 text-sm text-white/90">
              <span className="mr-2">⭐</span>
              Trusted by industry leaders
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              <span className="text-[#2c9ed8]">Innovative Tech Solutions for Your Business</span>
            </h1>


            {/* Subtitle */}
            <p className="mb-10 text-lg leading-8 text-white/80 sm:text-xl lg:text-2xl max-w-3xl mx-auto">
              Transform your ideas into reality with our cutting-edge platform. Designed for industry leaders, built for performance, crafted for excellence.
            </p>

            {/* CTA Button - Updated to match navbar style */}
            <div className="mb-16">
              <button className="group relative overflow-hidden rounded-full inline-flex items-center justify-center font-medium transition-all px-8 py-3 text-lg backdrop-blur-xl border text-white/90 hover:text-white"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(255, 255, 255, 0.2)'
                }}>
                <span className="relative z-10 flex items-center font-semibold">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
                <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </button>
            </div>
          </div>

          {/* Service Cards */}
          {/* Service Cards */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-6 max-w-4xl mx-auto">
  {services.map((service, index) => (
    <div
      key={index}
      className="rounded-lg p-8 backdrop-blur-xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderColor: "rgba(255, 255, 255, 0.2)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
        e.currentTarget.style.borderColor = "rgba(165, 208, 168, 0.4)";
        e.currentTarget.style.boxShadow = "0 0 30px rgba(165, 208, 168, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-a5d0a8 transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-gray-200 text-lg group-hover:text-gray-100 transition-colors duration-300">
        {service.description}
      </p>
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
}
