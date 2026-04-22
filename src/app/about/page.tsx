import Link from 'next/link';
import { Compass, Eye, Heart } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Studio Name',
  description: 'Learn about our passion for design, our philosophy, and the team behind the luxury interiors.',
};

export default function About() {
  const philosophyPillars = [
    {
      title: 'Design with Purpose',
      description: 'Every design decision is intentional, creating spaces that serve both aesthetics and function.',
      icon: Compass,
    },
    {
      title: 'Attention to Detail',
      description: 'We believe luxury is in the details. Every texture, color, and element is carefully considered.',
      icon: Eye,
    },
    {
      title: 'Client-Centric Approach',
      description: 'Your vision, lifestyle, and aspirations drive our design process from start to finish.',
      icon: Heart,
    },
  ];

  const team = [
    {
      name: 'Alexandra Chen',
      role: 'Principal Designer',
      gradient: 'gradient-warm-1',
    },
    {
      name: 'Marco Rossi',
      role: 'Senior Architect',
      gradient: 'gradient-warm-2',
    },
    {
      name: 'Emma Thompson',
      role: 'Project Manager',
      gradient: 'gradient-warm-3',
    },
  ];

  const awards = [
    'Interior Design Excellence Award',
    'Best Residential Project 2023',
    'Luxury Design Innovation Award',
    'Sustainability in Design Award',
    'Client Choice Award',
    'Best Commercial Space Design',
  ];

  return (
    <div className="w-full overflow-x-hidden bg-stone-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-stone-950/95 backdrop-blur shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-serif font-bold gold-accent">
            STUDIO NAME
          </h1>
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-stone-200 hover:gold-accent transition-colors duration-300">
              Home
            </Link>
            <Link href="/about" className="text-stone-200 hover:gold-accent transition-colors duration-300">
              About
            </Link>
            <Link href="/services" className="text-stone-200 hover:gold-accent transition-colors duration-300">
              Services
            </Link>
            <Link href="/portfolio" className="text-stone-200 hover:gold-accent transition-colors duration-300">
              Portfolio
            </Link>
            <Link href="/contact" className="text-stone-200 hover:gold-accent transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="relative w-full h-96 flex items-center justify-center pt-20 mt-20">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=800&fit=crop"
          alt="About us banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white">About Us</h1>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-6 bg-stone-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div data-animate className="animate-slide-in-left space-y-6">
              <h2 className="text-4xl font-serif font-bold text-white">Our Story</h2>
              <p className="text-stone-300 text-lg leading-relaxed">
                Founded on the belief that spaces shape lives, our design studio was born from a passion for creating environments that inspire, comfort, and endure. What began as a small vision has grown into an award-winning practice recognized for luxury, innovation, and meticulous attention to detail.
              </p>
              <p className="text-stone-300 text-lg leading-relaxed">
                Based in the vibrant design capital of New York, with a deep appreciation for Indian craftsmanship and aesthetics, we blend global influences with local insights. Our team brings together decades of experience across residential, commercial, and hospitality design.
              </p>
              <p className="text-stone-300 text-lg leading-relaxed">
                Every project is a conversation. We listen, we understand, and we collaborate to transform your vision into a reality that exceeds expectations. Our work has taken us across continents, but our commitment to excellence remains unwavering.
              </p>
            </div>

            {/* Image */}
            <div data-animate className="animate-slide-in-right overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop"
                alt="Our studio space"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-24 px-6 bg-stone-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Philosophy</h2>
            <p className="text-stone-300 text-lg max-w-2xl mx-auto">
              Three core pillars guide everything we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophyPillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={idx}
                  data-animate
                  className="stagger-item animate-fade-in-up p-8 bg-stone-900 border border-stone-800 rounded-lg text-center hover:border-stone-700 transition-colors duration-300"
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-stone-950 rounded-full">
                      <IconComponent size={32} className="text-gold-accent gold-accent" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-stone-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24 px-6 bg-stone-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Meet the Team</h2>
            <p className="text-stone-300 text-lg">Exceptional talent behind exceptional design</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, idx) => (
              <div
                key={idx}
                data-animate
                className="stagger-item animate-fade-in-up text-center"
              >
                <div className={`${member.gradient} w-full h-64 rounded-lg mb-6`} />
                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-gold-accent gold-accent font-semibold">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 px-6 bg-stone-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-16 text-center">
            Awards & Recognition
          </h2>

          <div
            data-animate
            className="animate-fade-in grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="stagger-item animate-fade-in-up p-6 bg-stone-900 border border-stone-800 rounded-lg flex items-center gap-4 hover:border-stone-700 transition-colors duration-300"
              >
                <div className="text-2xl gold-accent">★</div>
                <p className="text-white font-semibold">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-stone-900">
        <div className="max-w-4xl mx-auto text-center">
          <div data-animate className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-stone-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your project and explore how we can bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-stone-100 text-stone-950 font-semibold hover:bg-stone-200 transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 border-t border-stone-800 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-serif font-bold gold-accent mb-4">STUDIO NAME</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Award-winning interior design studio creating luxury spaces.
              </p>
            </div>
            <div>
              <h4 className="text-stone-100 font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li><Link href="/" className="hover:gold-accent transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:gold-accent transition-colors">About</Link></li>
                <li><Link href="/services" className="hover:gold-accent transition-colors">Services</Link></li>
                <li><Link href="/portfolio" className="hover:gold-accent transition-colors">Portfolio</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-stone-100 font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li>hello@studioname.com</li>
                <li>+1 (555) 123-4567</li>
                <li>New York, NY</li>
              </ul>
            </div>
            <div>
              <h4 className="text-stone-100 font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li><a href="#" className="hover:gold-accent transition-colors">Pinterest</a></li>
                <li><a href="#" className="hover:gold-accent transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:gold-accent transition-colors">YouTube</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 text-center">
            <p className="text-stone-400 text-sm">&copy; 2024 Studio Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
