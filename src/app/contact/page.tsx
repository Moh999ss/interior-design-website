import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Luxury Interior Design Studio',
  description: 'Get in touch with our design team. Visit our studio in New Delhi or reach out for a consultation.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1400&h=600&fit=crop"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#0f0f0f]"></div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300">We'd love to hear about your design dreams</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-12" style={{ fontFamily: 'Playfair Display' }}>
              Contact Information
            </h2>

            {/* Phone */}
            <div className="flex gap-4 mb-10">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded bg-[#c9a96e]/20">
                  <Phone size={24} className="text-[#c9a96e]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">+91 XXXX XXX XXX</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 mb-10">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded bg-[#c9a96e]/20">
                  <Mail size={24} className="text-[#c9a96e]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400">hello@studioname.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4 mb-10">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded bg-[#c9a96e]/20">
                  <MapPin size={24} className="text-[#c9a96e]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Address</h3>
                <p className="text-gray-400">Studio Name, New Delhi, India</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4 mb-10">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded bg-[#c9a96e]/20">
                  <Clock size={24} className="text-[#c9a96e]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
                <p className="text-gray-400">Mon - Sat: 10:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <h2 className="text-4xl font-bold mb-12" style={{ fontFamily: 'Playfair Display' }}>
              Send us a Message
            </h2>
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a96e] transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a96e] transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 XXXX XXX XXX"
                  className="w-full px-4 py-3 rounded bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a96e] transition-colors"
                />
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-sm font-medium mb-2">Service Type</label>
                <select className="w-full px-4 py-3 rounded bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-[#c9a96e] transition-colors">
                  <option value="">Select a service</option>
                  <option value="residential">Residential Design</option>
                  <option value="commercial">Commercial Design</option>
                  <option value="hospitality">Hospitality Design</option>
                  <option value="consultation">Design Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a96e] transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#c9a96e] text-black font-semibold rounded hover:bg-[#b8985f] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="bg-black/60 border border-gray-700 rounded-lg p-16 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
            Visit Our Studio
          </h2>
          <p className="text-gray-400 text-lg">
            Studio Name, New Delhi, India
          </p>
        </div>
      </section>

      {/* Social Media CTA */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center border-t border-[#c9a96e]/30">
        <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: 'Playfair Display' }}>
          Follow Us On Social Media
        </h2>
        <div className="flex justify-center gap-8">
          {/* Facebook Icon */}
          <a
            href="#"
            className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#c9a96e]/20 hover:bg-[#c9a96e]/40 transition-colors"
            aria-label="Facebook"
          >
            <svg
              className="h-6 w-6 text-[#c9a96e]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* Instagram Icon */}
          <a
            href="#"
            className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#c9a96e]/20 hover:bg-[#c9a96e]/40 transition-colors"
            aria-label="Instagram"
          >
            <svg
              className="h-6 w-6 text-[#c9a96e]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
            </svg>
          </a>

          {/* LinkedIn Icon */}
          <a
            href="#"
            className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#c9a96e]/20 hover:bg-[#c9a96e]/40 transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              className="h-6 w-6 text-[#c9a96e]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
