'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Home() {
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsNavScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedElements((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: 'Residential',
      description: 'Luxury homes tailored to your lifestyle and vision',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&h=400&fit=crop',
    },
    {
      title: 'Commercial',
      description: 'Corporate spaces that inspire productivity',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=400&fit=crop',
    },
    {
      title: 'Hospitality',
      description: 'Hotels and venues with unforgettable ambiance',
      image: 'https://images.unsplash.com/photo-1631049307038-da31d880588b?w=500&h=400&fit=crop',
    },
    {
      title: 'Turnkey',
      description: 'Complete project management from concept to completion',
      image: 'https://images.unsplash.com/photo-1589930695075-e5bddf79282f?w=500&h=400&fit=crop',
    },
  ];

  const featuredProjects = [
    {
      title: 'The Grand Penthouse',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
    },
    {
      title: 'Azure Office Hub',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop',
    },
    {
      title: 'The Velvet Lounge',
      category: 'Hospitality',
      image: 'https://images.unsplash.com/photo-1631049307038-da31d880588b?w=600&h=400&fit=crop',
    },
  ];

  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '200+', label: 'Projects' },
    { value: '50+', label: 'Awards' },
    { value: '100%', label: 'Satisfaction' },
  ];

  const testimonial = {
    quote: 'Working with this studio was transformative. They took our vision and created a space that exceeded every expectation. Their attention to detail and understanding of luxury design is unparalleled.',
    author: 'Sarah Mitchell',
    project: 'The Grand Penthouse',
  };

  return (
    <div className="w-full overflow-x-hidden bg-stone-950">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isNavScrolled
          ? 'bg-stone-950/95 backdrop-blur shadow-lg'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-serif font-bold gold-accent cursor-pointer">
            STUDIO NAME
          </h1>

          {/* Desktop Menu */}
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

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-stone-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-stone-900/95 backdrop-blur border-t border-stone-800">
            <div className="flex flex-col gap-4 px-6 py-4">
              <Link href="/" className="text-stone-200 hover:gold-accent transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-stone-200 hover:gold-accent transition-colors">
                About
              </Link>
              <Link href="/services" className="text-stone-200 hover:gold-accent transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-stone-200 hover:gold-accent transition-colors">
                Portfolio
              </Link>
              <Link href="/contact" className="text-stone-200 hover:gold-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center pt-20">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop"
          alt="Luxury interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
              Crafting Timeless Interiors
            </h1>
            <p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto">
              Luxury design solutions for residential, commercial, and hospitality spaces
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
              <Link
                href="/portfolio"
                className="px-8 py-3 bg-stone-100 text-stone-950 font-semibold hover:bg-stone-200 transition-colors duration-300 inline-block"
              >
                View Portfolio
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-stone-100 text-stone-100 font-semibold hover:bg-stone-100 hover:text-stone-950 transition-colors duration-300 inline-block"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-stone-400 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Intro Section with Stats */}
      <section className="py-24 px-6 bg-stone-900">
        <div className="max-w-6xl mx-auto">
          <div data-animate className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              About Our Studio
            </h2>
            <p className="text-stone-300 text-lg max-w-2xl mx-auto mb-12">
              We create luxury interiors that reflect your vision and enhance your lifestyle. With over 15 years of experience, we've transformed spaces for discerning clients worldwide.
            </p>
          </div>

          {/* Stats Grid */}
          <div data-animate className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="stagger-item animate-fade-in-up text-center">
                <p className="text-5xl md:text-6xl font-serif font-bold gold-accent mb-2">
                  {stat.value}
                </p>
                <p className="text-stone-400 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 bg-stone-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Services</h2>
            <p className="text-stone-300 text-lg max-w-2xl mx-auto">
              Comprehensive design solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                data-animate
                className="stagger-item animate-fade-in-up group cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden rounded-lg mb-4 h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:gold-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-400 text-sm mb-4">{service.description}</p>
                <Link
                  href="/services"
                  className="inline-flex text-stone-300 hover:gold-accent transition-colors duration-300 font-semibold text-sm"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-6 bg-stone-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-stone-300 text-lg">Award-winning design work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <Link
                key={idx}
                href="/portfolio"
                data-animate
                className="stagger-item animate-fade-in-up group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg h-72">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-stone-300 text-sm">{project.category}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="py-24 px-6 bg-stone-950">
        <div className="max-w-4xl mx-auto">
          <div
            data-animate
            className="animate-fade-in-up p-12 bg-gradient-to-br from-stone-900 to-stone-950 border border-stone-800 rounded-lg"
          >
            <div className="text-5xl gold-accent mb-6">"</div>
            <p className="text-2xl font-serif text-white mb-8 leading-relaxed">
              {testimonial.quote}
            </p>
            <div className="border-t border-stone-700 pt-6">
              <p className="font-serif font-bold text-white text-lg">{testimonial.author}</p>
              <p className="text-stone-400 text-sm">{testimonial.project}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6 bg-stone-900">
        <div className="max-w-4xl mx-auto text-center">
          <div data-animate className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Let's Create Something Extraordinary
            </h2>
            <p className="text-stone-300 text-lg mb-8 max-w-2xl mx-auto">
              Ready to transform your space into something truly remarkable? Our team is here to bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-stone-100 text-stone-950 font-semibold hover:bg-stone-200 transition-colors duration-300"
            >
              Start Your Project
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
