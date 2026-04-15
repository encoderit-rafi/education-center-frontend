import { cn } from "@/lib/utils";

const partners = [
  {
    name: "Pearson VUE Authorized",
    description: "As a Select Partner, TEPTH maintains the rigorous security protocols required to deliver Pearson's high-stakes professional certifications.",
    logo: "PEARSON VUE",
    logoColor: "text-blue-600",
  },
  {
    name: "IDP IELTS Center",
    description: "Official testing venue for IELTS, providing the gold standard in English proficiency testing for global migration and higher education.",
    logo: "idp | IELTS",
    logoColor: "text-red-600",
  },
  {
    name: "ETS Global Partner",
    description: "TEPTH is fully accredited to conduct TOEFL iBT and GRE assessments, adhering to strict international standards for test delivery.",
    logo: "ETS",
    logoColor: "text-blue-800",
  },
];

export function PartnershipGrid() {
  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="container px-6 mx-auto sm:px-12 lg:px-24">
        {/* Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F1F1F] font-heading mb-4">
            Official Testing Partners
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are an authorized delivery partner for the world's most prestigious examination bodies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, idx) => (
            <div 
              key={idx} 
              className="bg-gray-50/50 p-10 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group text-center"
            >
              {/* Logo Placeholder */}
              <div className="h-20 mb-8 flex items-center justify-center">
                <div className={cn(
                  "text-3xl font-black tracking-tighter grayscale group-hover:grayscale-0 transition-all duration-300",
                  partner.logoColor
                )}>
                  {partner.logo}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#1F1F1F] font-heading mb-4">
                {partner.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
