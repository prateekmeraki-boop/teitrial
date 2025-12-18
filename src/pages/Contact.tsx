import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a backend
    setFormData({ firstName: '', email: '', message: '' });
    alert('Thank you for your inquiry. We will get back to you soon!');
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get in<span className="text-[#a5d0a8]"> Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch for software, mobile, and cloud services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Contact Form */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="w-1 h-8 bg-[#a5d0a8] rounded-full mr-3"></span>
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#a5d0a8] transition-colors"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#a5d0a8] transition-colors"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#a5d0a8] transition-colors resize-none"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#a5d0a8] to-[#7fb89a] hover:from-[#b8e0ba] hover:to-[#8fc9a6] text-black font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Submit Your Inquiry
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Location Card */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 shadow-2xl group">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-[#a5d0a8]/20 rounded-lg group-hover:bg-[#a5d0a8]/30 transition-all">
                  <MapPin className="w-6 h-6 text-[#a5d0a8]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                  <p className="text-gray-400">
                    Office 7, Magarpatta<br />
                    Pune, India 411028
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 shadow-2xl group">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-[#a5d0a8]/20 rounded-lg group-hover:bg-[#a5d0a8]/30 transition-all">
                  <Clock className="w-6 h-6 text-[#a5d0a8]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Business Hours</h3>
                  <p className="text-gray-400">
                    Monday to Friday<br />
                    9:00 AM - 5:00 PM IST
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 shadow-2xl group">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-[#a5d0a8]/20 rounded-lg group-hover:bg-[#a5d0a8]/30 transition-all">
                  <Mail className="w-6 h-6 text-[#a5d0a8]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <p className="text-gray-400">
                    contact@techeinnovation.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              <span className="text-[#a5d0a8]">What We Offer</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Software Development', icon: '💻' },
              { title: 'Mobile Apps', icon: '📱' },
              { title: 'Cloud Services', icon: '☁️' },
              { title: 'AI & ML Solutions', icon: '🤖' }
            ].map((service, idx) => (
              <div
                key={idx}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#a5d0a8]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#a5d0a8]/20 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-white font-semibold group-hover:text-[#a5d0a8] transition-colors">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-gradient-to-r from-[#a5d0a8]/10 via-white/5 to-[#a5d0a8]/10 border border-[#a5d0a8]/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Let's discuss how our innovative solutions can help your organization achieve its goals.
            </p>
            <button className="bg-[#a5d0a8] hover:bg-[#b8e0ba] text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
