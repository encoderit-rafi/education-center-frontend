import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Elena Rodriguez",
      role: "Oxford Graduate Candidate",
      quote: `"TEPTH transformed my approach to the TOEFL. Their editorial insights into the reading section were a game changer for my score."`,
      color: "bg-blue-100 text-blue-700"
    },
    {
      name: "Marcus Chen",
      role: "LSE Scholarship Winner",
      quote: `"Finally a service that treats you like a person, not a number. The personalized feedback sessions gave me the confidence I needed to succeed."`,
      color: "bg-red-100 text-red-700"
    },
    {
      name: "Sarah Jenkins",
      role: "International MBA Applicant",
      quote: `"Professional, punctual, and premium. TEPTH is the gold standard for testing services. Highly recommended."`,
      color: "bg-amber-100 text-amber-700"
    },
    {
      name: "Marah belt",
      role: "International MBA Applicant",
      quote: `"Professional, punctual, and premium. TEPTH is the gold standard for testing services. Highly recommended."`,
      color: "bg-amber-100 text-amber-700"
    },
    {
      name: "Sarah jeams",
      role: "International MBA Applicant",
      quote: `"Professional, punctual, and premium. TEPTH is the gold standard for testing services. Highly recommended."`,
      color: "bg-amber-100 text-amber-700"
    }
  ];

  return (
    <section className="py-32 px-8 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h3 className="text-3xl font-headline font-bold text-secondary">
          Trusted by Tomorrow's Leaders
        </h3>
      </div>
      <div className="relative max-w-7xl mx-auto px-12 group">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-8">
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="pl-8 md:basis-1/2 lg:basis-1/3">
                <div className="h-full bg-surface p-10 rounded-3xl shadow-sm relative hover:-translate-y-2 transition-transform duration-300">
                  <span className="material-symbols-outlined text-6xl text-gray-100 absolute -top-4 left-6 opacity-50">
                    format_quote
                  </span>
                  <p className="text-on-surface text-lg italic leading-relaxed mb-8 relative z-10">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${t.color}`}>
                      {t.name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-secondary">{t.name}</div>
                      <div className="text-xs text-on-surface-variant">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="flex h-10 w-10 hover:bg-red-50 hover:text-red-900 absolute -left-12 top-1/2 !translate-y-[-50%] active:!translate-y-[-50%] z-10 bg-white/90 border-none shadow-md opacity-100 transition-opacity" />
          <CarouselNext className="flex h-10 w-10 hover:bg-red-50 hover:text-red-900 absolute -right-12 top-1/2 !translate-y-[-50%] active:!translate-y-[-50%] z-10 bg-white/90 border-none shadow-md opacity-100 transition-opacity" />
        </Carousel>
      </div>
    </section>
  );
}
