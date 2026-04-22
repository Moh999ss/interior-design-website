import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Design Journal | Luxury Interior Design Blog',
  description: 'Explore interior design trends, tips, and behind-the-scenes stories from our design studio.',
};

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: 'Trends' | 'Tips' | 'Behind the Scenes';
  date: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '5 Interior Design Trends Dominating 2026',
    excerpt: 'Discover the top design trends that are reshaping luxury interiors this year, from bold color palettes to sustainable materials.',
    category: 'Trends',
    date: 'Jan 15, 2026',
    image: 'https://images.unsplash.com/photo-1618221195710-dd905b0fdd63?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'How to Choose the Perfect Color Palette',
    excerpt: 'Learn the expert techniques for selecting colors that reflect your style while creating harmony and balance in your space.',
    category: 'Tips',
    date: 'Feb 8, 2026',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Behind the Scenes: The Grand Penthouse Project',
    excerpt: 'Take an exclusive look at our transformation of a 5000 sq ft penthouse from concept to completion in just 4 months.',
    category: 'Behind the Scenes',
    date: 'Feb 22, 2026',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'Small Space, Big Impact: Maximizing Compact Apartments',
    excerpt: 'Practical strategies for making the most of limited square footage without compromising on style or luxury.',
    category: 'Tips',
    date: 'Mar 5, 2026',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop',
  },
  {
    id: 5,
    title: 'The Art of Mixing Modern and Traditional',
    excerpt: 'Explore how to seamlessly blend contemporary design elements with classic furniture for a timeless aesthetic.',
    category: 'Trends',
    date: 'Mar 18, 2026',
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    title: 'Sustainable Luxury: Eco-Friendly Design Choices',
    excerpt: 'Luxury and sustainability go hand in hand. Discover how to create beautiful spaces with minimal environmental impact.',
    category: 'Trends',
    date: 'Apr 2, 2026',
    image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77d?w=600&h=400&fit=crop',
  },
];

const categoryColors: Record<string, string> = {
  'Trends': 'bg-[#c9a96e]/20 text-[#c9a96e]',
  'Tips': 'bg-blue-500/20 text-blue-400',
  'Behind the Scenes': 'bg-purple-500/20 text-purple-400',
};

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const gridPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1400&h=600&fit=crop"
          alt="Design Journal"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#0f0f0f]"></div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Design Journal
            </h1>
            <p className="text-xl text-gray-300">Insights, trends, and stories from our studio</p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border border-[#c9a96e]/30 rounded-lg overflow-hidden bg-black/40">
          <div className="relative h-96 md:h-full min-h-96">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded text-sm font-medium ${categoryColors[featuredPost.category]}`}>
                {featuredPost.category}
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
              {featuredPost.title}
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{featuredPost.date}</span>
              <a href="#" className="text-[#c9a96e] hover:text-[#b8985f] transition-colors font-semibold">
                Read More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16" style={{ fontFamily: 'Playfair Display' }}>
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gridPosts.map((post) => (
            <div key={post.id} className="group border border-gray-700 rounded-lg overflow-hidden bg-black/30 hover:border-[#c9a96e] transition-all duration-300">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gray-800">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Content Container */}
              <div className="p-6">
                <div className="mb-3">
                  <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 line-clamp-2" style={{ fontFamily: 'Playfair Display' }}>
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{post.date}</span>
                  <a href="#" className="text-[#c9a96e] hover:text-[#b8985f] transition-colors font-semibold">
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-black/60 border-t border-[#c9a96e]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Playfair Display' }}>
            Subscribe to Our Design Insights
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Get the latest design trends, tips, and exclusive project updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a96e] transition-colors"
            />
            <button className="px-8 py-3 bg-[#c9a96e] text-black font-semibold rounded hover:bg-[#b8985f] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
