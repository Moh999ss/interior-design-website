"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: "Residential" | "Commercial" | "Hospitality";
  location: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "The Grand Penthouse",
    category: "Residential",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
  },
  {
    id: 2,
    title: "Sunrise Villa",
    category: "Residential",
    location: "Goa",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 3,
    title: "Azure Office Hub",
    category: "Commercial",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
  },
  {
    id: 4,
    title: "The Velvet Lounge",
    category: "Hospitality",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14",
  },
  {
    id: 5,
    title: "Coastal Retreat Spa",
    category: "Hospitality",
    location: "Kerala",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136",
  },
  {
    id: 6,
    title: "Modern Minimalist Loft",
    category: "Residential",
    location: "Pune",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  },
  {
    id: 7,
    title: "Heritage Haveli Restoration",
    category: "Residential",
    location: "Jaipur",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
  },
  {
    id: 8,
    title: "Tech Startup Campus",
    category: "Commercial",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
  {
    id: 9,
    title: "Boutique Hotel Lobby",
    category: "Hospitality",
    location: "Udaipur",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
  },
];

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Hospitality",
] as const;

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<
    typeof categories[number]
  >("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Grid layout with mixed sizes: alternating pattern
  const getGridClass = (index: number): string => {
    const pattern = index % 6;
    if (pattern === 0 || pattern === 5) return "md:col-span-2 md:row-span-2";
    return "md:col-span-1 md:row-span-1";
  };

  return (
    <main className="min-h-screen bg-stone-950">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[28rem] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80"
          alt="Portfolio Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1
              className="text-5xl md:text-7xl font-light mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Portfolio
            </h1>
            <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto">
              Showcasing our finest projects and design excellence
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 px-4 md:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-medium text-sm md:text-base ${
                  activeCategory === category
                    ? "text-stone-950"
                    : "text-stone-300 border border-stone-700 hover:border-yellow-600/50"
                }`}
                style={{
                  backgroundColor:
                    activeCategory === category ? "#c9a96e" : "transparent",
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-lg cursor-pointer ${getGridClass(index)}`}
              >
                {/* Image */}
                <img
                  src={`${project.image}?w=600&q=80`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <h3
                    className="text-2xl md:text-3xl font-light mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#c9a96e",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-stone-200 mb-1 text-sm">{project.category}</p>
                  <p className="text-stone-300 text-sm">{project.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-stone-400 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-stone-900/50 border-t border-stone-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-light mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Have a project in mind?
          </h2>
          <p className="text-lg text-stone-300 mb-10 max-w-2xl mx-auto">
            Let's collaborate and bring your vision to life with our expertise
            and passion for design
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg transition-all duration-300 hover:gap-4"
            style={{ backgroundColor: "#c9a96e", color: "#0c0a09" }}
          >
            Get In Touch
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
