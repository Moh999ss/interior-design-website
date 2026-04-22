import { Star } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Testimonials | Luxury Interior Design Studio',
  description: 'Read testimonials from our satisfied clients across residential, commercial, and hospitality projects.',
};

interface Testimonial {
  quote: string;
  name: string;
  project: string;
  rating: number;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote: 'Transformed our apartment into a luxury haven',
    name: 'Priya & Rahul M.',
    project: 'Residential — Mumbai',
    rating: 5,
    initials: 'PR',
  },
  {
    quote: 'The office design boosted our team productivity by 40%',
    name: 'Vikram S.',
    project: 'Commercial — Bangalore',
    rating: 5,
    initials: 'VS',
  },
  {
    quote: 'Our restaurant is now the most Instagrammed spot in the city',
    name: 'Ananya K.',
    project: 'Hospitality — Delhi',
    rating: 5,
    initials: 'AK',
  },
  {
    quote: 'Attention to detail was extraordinary',
    name: 'Dr. Meera P.',
    project: 'Residential — Pune',
    rating: 5,
    initials: 'MP',
  },
  {
    quote: 'They turned our vision into reality, on time and on budget',
    name: 'Rajesh & Sunita G.',
    project: 'Residential — Goa',
    rating: 5,
    initials: 'RG',
  },
  {
    quote: 'Best investment we made for our hotel',
    name: 'Arjun T.',
    project: 'Hospitality — Udaipur',
    rating: 5,
    initials: 'AT',
  },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&h=600&fit=crop"
          alt="Client Testimonials"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#0f0f0f]"></div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Client Testimonials
            </h1>
            <p className="text-xl text-gray-300">Stories of transformation and luxury living</p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="border-2 border-[#c9a96e] rounded-lg p-12 bg-black/40 backdrop-blur-sm">
          <div className="mb-8">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="#c9a96e" stroke="#c9a96e" />
              ))}
            </div>
          </div>
          <p className="text-3xl font-light mb-8 italic text-gray-100" style={{ fontFamily: 'Playfair Display' }}>
            "Transformed our apartment into a luxury haven. Every detail was carefully considered, and the result exceeded our wildest expectations. We couldn't be happier."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#c9a96e] to-[#a88c5b] flex items-center justify-center text-white font-bold text-lg">
              PR
            </div>
            <div>
              <p className="text-lg font-semibold">Priya & Rahul M.</p>
              <p className="text-gray-400">Residential — Mumbai</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Grid */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16" style={{ fontFamily: 'Playfair Display' }}>
          More Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.slice(1).map((testimonial, idx) => (
            <div key={idx} className="border border-gray-700 rounded-lg p-8 bg-black/30 hover:border-[#c9a96e] transition-all duration-300">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#c9a96e" stroke="#c9a96e" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c9a96e] to-[#a88c5b] flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Bar */}
      <section className="px-6 py-16 bg-black/60 border-y border-[#c9a96e]/30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-[#c9a96e]">200+</p>
            <p className="text-gray-400 mt-2">Happy Clients</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#c9a96e]">4.9★</p>
            <p className="text-gray-400 mt-2">Average Rating</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#c9a96e]">98%</p>
            <p className="text-gray-400 mt-2">Referral Rate</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Playfair Display' }}>
          Ready to Transform Your Space?
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          Experience the luxury design difference with our team of expert designers.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-[#c9a96e] text-black font-semibold rounded hover:bg-[#b8985f] transition-colors"
        >
          Experience the Difference
        </a>
      </section>
    </div>
  );
}
