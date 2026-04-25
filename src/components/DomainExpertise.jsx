import { BrainCircuit, BarChart3, Settings2, Globe2, Wallet, Users, Lightbulb } from "lucide-react";

export default function DomainExpertise() {
  const domains = [
    { icon: <Lightbulb className="w-8 h-8" />, title: "Product & Innovation Hub" },
    { icon: <BrainCircuit className="w-8 h-8" />, title: "Gen-AI Mastery" },
    { icon: <Users className="w-8 h-8" />, title: "Leadership Elevation" },
    { icon: <BarChart3 className="w-8 h-8" />, title: "Tech & Data Insights" },
    { icon: <Settings2 className="w-8 h-8" />, title: "Operations Excellence" },
    { icon: <Globe2 className="w-8 h-8" />, title: "Digital Enterprise" },
    { icon: <Wallet className="w-8 h-8" />, title: "Fintech Innovation Lab" },
  ];

  return (
    <section className="py-20 pt-5 pb-15 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Our <span className="text-primary">Domain Expertise</span>
        </h2>
        <p className="text-gray-500 mb-16">
          <span className="text-primary/80">Specialized Programs</span> Designed to Fuel Innovation
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {domains.map((domain, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] bg-white border border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center hover:border-primary hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                {domain.icon}
              </div>
              <h3 className="font-bold text-gray-800 text-center">{domain.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
