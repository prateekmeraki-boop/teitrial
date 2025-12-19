import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          email: formData.email,
          message: formData.message,
          to: 'contact@techeinnovation.com',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ firstName: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const services = [
    { title: 'Software Development', icon: '💻' },
    { title: 'Mobile Apps', icon: '📱' },
    { title: 'Cloud Services', icon: '☁️' },
    { title: 'AI & ML Solutions', icon: '🤖' },
  ];
  return (
    <section id="contact" className="py-16 md:py-24" style={{ backgroundColor: '#0c2143' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get in{' '}
            <span style={{ color: '#2c9ed8' }}>touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch for software, mobile, and cloud services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          <div
            className="backdrop-blur-xl rounded-2xl p-8 transition-all duration-300 shadow-2xl border-2"
            style={{
              backgroundColor: 'rgba(44, 158, 216, 0.1)',
              borderColor: 'rgba(44, 158, 216, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(44, 158, 216, 0.15)';
              e.currentTarget.style.borderColor = '#2c9ed8';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(44, 158, 216, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(44, 158, 216, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(44, 158, 216, 0.3)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="w-1 h-8 rounded-full mr-3" style={{ backgroundColor: '#2c9ed8' }}></span>
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(44, 158, 216, 0.3)',
                    border: '1px solid',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#2c9ed8')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(44, 158, 216, 0.3)')}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(44, 158, 216, 0.3)',
                    border: '1px solid',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#2c9ed8')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(44, 158, 216, 0.3)')}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors resize-none"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(44, 158, 216, 0.3)',
                    border: '1px solid',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#2c9ed8')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(44, 158, 216, 0.3)')}
                  required
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 rounded-lg text-white text-sm font-medium" style={{ backgroundColor: 'rgba(76, 175, 80, 0.2)', borderColor: '#4caf50', border: '1px solid' }}>
                  ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 rounded-lg text-white text-sm font-medium" style={{ backgroundColor: 'rgba(244, 67, 54, 0.2)', borderColor: '#f44336', border: '1px solid' }}>
                  ✗ Error sending message. Please try again or email us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  backgroundColor: '#2c9ed8',
                  color: '#0c2143',
                  opacity: isLoading ? 0.7 : 1,
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                }}
                onMouseEnter={(e) => !isLoading && (e.currentTarget.style.backgroundColor = '#1e7aa8')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2c9ed8')}
              >
                <Send className="w-5 h-5" />
                {isLoading ? 'Sending...' : 'Submit Your Inquiry'}
              </button>
            </form>
          </div>
          <div className="space-y-6">
            {/* Location Card */}
            <div className="backdrop-blur-xl rounded-2xl p-8 transition-all duration-300 shadow-2xl border-2" style={{ backgroundColor: 'rgba(44, 158, 216, 0.1)', borderColor: 'rgba(44, 158, 216, 0.3)' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(44, 158, 216, 0.15)'; e.currentTarget.style.borderColor = '#2c9ed8'; e.currentTarget.style.boxShadow = '0 0 30px rgba(44, 158, 216, 0.2)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(44, 158, 216, 0.1)'; e.currentTarget.style.borderColor = 'rgba(44, 158, 216, 0.3)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(44, 158, 216, 0.2)' }}>
                  <MapPin className="w-6 h-6" style={{ color: '#2c9ed8' }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                  <p className="text-gray-400">Office 7, Magarpatta<br />Pune, India 411028</p>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="backdrop-blur-xl rounded-2xl p-8 transition-all duration-300 shadow-2xl border-2" style={{ backgroundColor: 'rgba(44, 158, 216, 0.1)', borderColor: 'rgba(44, 158, 216, 0.3)' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(44, 158, 216, 0.15)'; e.currentTarget.style.borderColor = '#2c9ed8'; e.currentTarget.style.boxShadow = '0 0 30px rgba(44, 158, 216, 0.2)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(44, 158, 216, 0.1)'; e.currentTarget.style.borderColor = 'rgba(44, 158, 216, 0.3)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(44, 158, 216, 0.2)' }}>
                  <Clock className="w-6 h-6" style={{ color: '#2c9ed8' }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Business Hours</h3>
                  <p className="text-gray-400">Monday to Friday<br />9:00 AM - 5:00 PM IST</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="backdrop-blur-xl rounded-2xl p-8 transition-all duration-300 shadow-2xl border-2" style={{ backgroundColor: 'rgba(44, 158, 216, 0.1)', borderColor: 'rgba(44, 158, 216, 0.3)' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(44, 158, 216, 0.15)'; e.currentTarget.style.borderColor = '#2c9ed8'; e.currentTarget.style.boxShadow = '0 0 30px rgba(44, 158, 216, 0.2)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(44, 158, 216, 0.1)'; e.currentTarget.style.borderColor = 'rgba(44, 158, 216, 0.3)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(44, 158, 216, 0.2)' }}>
                  <Mail className="w-6 h-6" style={{ color: '#2c9ed8' }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <p className="text-gray-400">contact@techeinnovation.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Services Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              <span style={{ color: '#2c9ed8' }}>What We Offer</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="backdrop-blur-xl rounded-xl p-6 border-2 transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'rgba(44, 158, 216, 0.1)',
                  borderColor: 'rgba(44, 158, 216, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(44, 158, 216, 0.15)';
                  e.currentTarget.style.borderColor = '#2c9ed8';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(44, 158, 216, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(44, 158, 216, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(44, 158, 216, 0.3)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-white font-semibold" style={{ color: '#2c9ed8' }}>
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="max-w-4xl mx-auto rounded-2xl p-12 text-center border-2"
          style={{
            backgroundColor: 'rgba(44, 158, 216, 0.1)',
            borderColor: 'rgba(44, 158, 216, 0.4)',
          }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Let's discuss how our innovative solutions can help your organization achieve its goals.
          </p>
          <button
            className="group relative overflow-hidden px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg inline-block"
            style={{
              backgroundColor: '#2c9ed8',
              color: '#FFFFFF',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1e7aa8')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2c9ed8')}
          >
            <span className="relative z-10">Schedule a Consultation</span>
          </button>
        </div>
      </div>
    </section>
  );
}
