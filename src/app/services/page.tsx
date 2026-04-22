import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Luxury Interior Design Studio",
  description:
    "Comprehensive interior design services for residential, commercial, hospitality, and turnkey projects. Luxury design tailored to your vision.",
};

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Residential Interiors",
      description:
        "Transform your living spaces into sanctuaries of style and comfort. From intimate apartments to sprawling estates, we create homes that reflect your lifestyle and aspirations.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
      features: [
        "Space Planning",
        "Custom Furniture",
        "Lighting Design",
        "Color Consultation",
      ],
    },
    {
      id: 2,
      title: "Commercial Interiors",
      description:
        "Design workspaces that inspire creativity and productivity. We craft professional environments that elevate your brand and enhance employee wellbeing.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      features: [
        "Brand-aligned Design",
        "Ergonomic Planning",
        "Acoustic Solutions",
      ],
    },
    {
      id: 3,
      title: "Hospitality Design",
      description:
        "Create unforgettable guest experiences through thoughtful design. Our hospitality projects blend luxury, functionality, and unique storytelling.",
      image: "https://images.unsplash.com/photo-1590490360182-c33d955e4c47",
      features: [
        "Guest Experience Design",
        "Theme Development",
        "Luxury Amenities",
      ],
    },
    {
      id: 4,
      title: "Turnkey Projects",
      description:
        "End-to-end design and execution with seamless coordination. We manage every detail from concept to completion, ensuring perfection at every stage.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
      features: [
        "Project Management",
        "Vendor Coordination",
        "Quality Assurance",
        "Timeline Management",
      ],
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consultation",
      description: "Understanding your vision, needs, and preferences",
    },
    {
      number: "02",
      title: "Concept",
      description: "Creating initial design directions and mood boards",
    },
    {
      number: "03",
      title: "Design",
      description: "Developing detailed plans, 3D models, and specifications",
    },
    {
      number: "04",
      title: "Execution",
      description: "Material sourcing and meticulous implementation",
    },
    {
      number: "05",
      title: "Handover",
      description: "Final walkthrough and project completion",
    },
  ];

  return (
    <main className="min-h-screen bg-stone-950">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[28rem] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80"
          alt="Services Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1
              className="text-5xl md:text-7xl font-light mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto">
              Comprehensive design solutions tailored to your unique vision
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="group overflow-hidden rounded-lg"
              >
                {/* Image Container */}
                <div className="relative h-72 md:h-96 overflow-hidden rounded-lg mb-6">
                  <img
                    src={`${service.image}?w=600&q=80`}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div>
                  <h3
                    className="text-3xl md:text-4xl font-light mb-3 transition-colors duration-300"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#c9a96e",
                    }}
                  >
                    {service.title}
                  </h3>

                  <p className="text-stone-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle
                          size={20}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: "#c9a96e" }}
                        />
                        <span className="text-stone-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-stone-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-light mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Process
            </h2>
            <p className="text-lg text-stone-300 max-w-2xl mx-auto">
              A refined approach to design that ensures excellence at every step
            </p>
          </div>

          {/* Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Step Card */}
                <div className="bg-stone-800/50 border border-stone-700 rounded-lg p-6 h-full hover:border-yellow-600/50 transition-colors duration-300">
                  <div
                    className="text-4xl font-light mb-4"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#c9a96e",
                    }}
                  >
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight
                      size={24}
                      style={{ color: "#c9a96e" }}
                      className="opacity-60"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-light mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-stone-300 mb-10 max-w-2xl mx-auto">
            Let's collaborate to create an exceptional design that exceeds your
            expectations
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg transition-all duration-300 hover:gap-4"
            style={{ backgroundColor: "#c9a96e", color: "#0c0a09" }}
          >
            Start Your Project
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
