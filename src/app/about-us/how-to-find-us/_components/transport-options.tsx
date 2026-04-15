import Image from 'next/image';

const options = [
  {
    title: "By Taxicab:",
    content: (
      <>
        <p>From anywhere in Dubai, you can hire a taxi and it will take you to your final destination of Silicon Oasis.</p>
        <p>Call at <span className="font-bold text-[#A11D1D]">04 208 0000</span> to book with Dubai Taxi Corporation for taxi. Taxicab drivers will pick you up from your specified location and take you to the Silicon Oasis.</p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1000&auto=format&fit=crop",
    alt: "Dubai taxi car on the road",
  },
  {
    title: "By Dubai Metro:",
    content: (
      <>
        <p>From your place, Take the Metro to Rashidiya Metro Station that is located near Rashidiya Park.</p>
        <p>From here, take (RTA) Dubai Bus No. <span className="font-bold text-[#A11D1D]">320</span> which will take you directly to Dubai Silicon Oasis.</p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    alt: "Modern Dubai Metro station and skyline",
  },
  {
    title: "By Public Bus:",
    content: (
      <>
        <p>From Ghubaiba Bus Station R, Dubai, it will take half an hour to reach Silicon Oasis. With less traffic, you can reach in just 25 minutes.</p>
        <p>Take the bus heading North toward 16th St. then keep on the same street toward Khalid Bin Al Waleed Rd/D79 and then left onto Sheikh Rashid Rd/D75 leading to the E66 road toward the DSO destination.</p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop",
    alt: "Public transit bus at a terminal",
  },
];

export function TransportOptions() {
  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="container px-6 mx-auto sm:px-12 lg:px-24">
        <div className="space-y-32">
          {options.map((option, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}
            >
              {/* Image Component */}
              <div className="lg:w-1/3 w-full">
                <div className="relative aspect-square rounded-[3rem] shadow-xl border border-gray-100 overflow-hidden group hover:scale-105 transition-transform duration-500">
                  <Image
                    src={option.image}
                    alt={option.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    priority={idx === 0}
                    loading={idx === 1 ? "eager" : undefined}
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="lg:w-2/3 w-full space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-[#1F1F1F] font-heading tracking-tight">{option.title}</h3>
                  <div className="w-16 h-1.5 bg-[#A11D1D]" />
                </div>
                <div className="text-gray-600 leading-relaxed text-lg space-y-6">
                  {option.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}