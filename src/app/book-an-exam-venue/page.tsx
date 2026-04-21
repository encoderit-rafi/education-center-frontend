import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book an Exam Venue | TEPTH",
  description: "Hire premium exam venues in Dubai Silicon Oasis. World-class infrastructure for computer-based and paper-based high-stakes exams.",
};

const features = [
  { icon: "description", title: "Service License" },
  { icon: "computer", title: "Computer-based Exams" },
  { icon: "volume_off", title: "Noise Free Environment" },
  { icon: "article", title: "Paper-based Exams" },
  { icon: "videocam", title: "CCTV" },
  { icon: "settings_suggest", title: "Exam Delivery Machines" },
  { icon: "near_me", title: "Strategic Location" },
  { icon: "accessible", title: "Wheelchair Accessible" },
  { icon: "domain", title: "Top-Notch Premises" },
  { icon: "badge", title: "Experienced Invigilators" },
  { icon: "room_service", title: "Special Accommodation" },
  { icon: "groups", title: "Seating Capacity" },
];

const reasons = [
  "Well-formed organization in Dubai licensed by Dubai Silicon Oasis Authority and permitted by KHDA.",
  "Three 40-seat computer rooms and a 20-seat classroom available for hire.",
  "Fabric acoustic panels, carpeted floors, and white noise machines to reduce noise.",
  "140 workstations total with state-of-the-art peripherals.",
  "Certified and highly trained administrators and proctors for all exam types.",
];

export default function BookExamVenuePage() {
  return (
    <div className="bg-[#fff8f7] font-sans antialiased text-[#261817]">
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden bg-[#fff0ef]">
          <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
            <div className="z-10">
              <span className="text-[#760009] font-bold tracking-widest text-xs uppercase mb-4 block">
                PREMIUM EXAM VENUE HIRE
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-[#261817] tracking-tight leading-[1.1] mb-6">
                Need to hire an exam venue? <span className="text-[#760009]">Try TEPTH</span>
              </h1>
              <p className="text-lg text-[#59413e] mb-10 leading-relaxed max-w-lg">
                We provide the best services in the region, offering world-class infrastructure designed specifically
                for high-stakes testing environments.
              </p>
              <div className="bg-white/50 backdrop-blur-sm border-l-4 border-[#760009] p-6 rounded-r-lg shadow-sm max-w-lg">
                <div className="flex flex-col gap-4">
                  <p className="text-xl font-bold text-[#261817] italic">
                    If you want to book an exam venue, please contact us.
                  </p>
                  <Link
                    href="/contact-us"
                    className="bg-[#760009] text-white w-fit px-8 py-3 rounded-lg font-bold text-sm tracking-wide hover:opacity-90 transition-all active:scale-95 text-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#760009]/5 rounded-xl blur-3xl group-hover:bg-[#760009]/10 transition-all duration-700"></div>
              <div className="relative rounded-xl shadow-2xl z-10 w-full h-[450px] overflow-hidden">
                <Image
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCZCenNV-uI7-wpeDtejBg9twXpjRMucv_rsvFids9XtLMcN-tk1HpZ2F4479kFttQ_oWaT-GJPOPpP25rHRTta6BYpBtxBtLAJPXaRGMXJLaF2QTFqGAz7A99K_xFbKSGFR11SS9__ZarBInrWDPEYNJiemTZVXOyGiNADYABtfhVZcnhjUjDEoj-YcLREaLYyv7ZkHmfNV5qTDCoicKjjSU5hT75pN4UmHbZQWg6156PZ3eyN8yYKiB83Ks22l-iwfr8-e94IYgl"
                  alt="Modern spacious computer lab with rows of sleek monitors and ergonomic seating in a clean professional environment"
                  fill
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 hidden lg:block border border-[#e1bfbb]/10">
                <div className="flex items-center gap-4">
                  <div className="bg-[#ffdad6] p-3 rounded-full">
                    <span
                      className="material-symbols-outlined text-[#760009]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      verified
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#261817]">KHDA Permitted</p>
                    <p className="text-xs text-[#59413e]">Dubai Silicon Oasis Authority</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="py-24 bg-[#ffffff]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-[#261817]">Comprehensive Exam Infrastructure</h2>
              <div className="h-1 w-20 bg-[#760009] mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#ffe9e6] rounded-xl hover:bg-[#fce2df] transition-colors group cursor-default"
                >
                  <span className="material-symbols-outlined text-[#760009] text-3xl mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </span>
                  <h3 className="font-bold text-[#261817] leading-tight">{feature.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose TEPTH Section */}
        <section className="py-24 bg-[#fce2df]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-extrabold text-[#261817] mb-8 tracking-tight">Why Choose TEPTH?</h2>
                <div className="space-y-6">
                  {reasons.map((reason, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-xl bg-[#ffffff] shadow-sm">
                      <span
                        className="material-symbols-outlined text-[#760009] shrink-0"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      <p className="text-[#59413e] font-medium">{reason}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-md">
                  <Image
                    className="object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcQ1iVsaqi2j-CVC_SRR9ql373eTA5pCxaeLfpQ1UsFU_7bFWj0gb9V2icuTaHIMpQozomaCS1nwcm7x2zfJTzaUSt4GMUcFKnphpIGy3vmVtWb6lLFeGpjO_JPng2chdUvkWG6SajaIZZMD8lsJgaxjf1R3beAjWOu2SWXUPUpbuKj1_yvaYS4PDIhQMIHIGEZHx5V8hOSSV9AnvZyvxnNrukO_7bb0k3xEHNGXjTvWzns9RzamN1jk1OlZjuOIjkXCbDtfMJpzVA"
                    alt="TEPTH interior"
                    fill
                  />
                </div>
                <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-md">
                  <Image
                    className="object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuClmG83fbtb6gqFBBVMNN2TXC7HUQwJFszsO-HHqBHiOxeypWhXIoJUYCoa-3aMkCqTOBSkL6_LWKmElvry105Kfutyad95tGxwJn5uum0fLyGzfnoqZEQ_bUqZGDU--tvAXBOiel9E7KV7Mz_sVddq1jQJu050d-5eT0350erpHISxiVJs4eR6hG_f7iR9DVtmJq9Xid0GPkTvXhr7d3coRI_UwGauLGgfC-pXH7qODdnhvcD13ywQuN5rEn4QgqhP4fDb3xzIvy1G"
                    alt="Proctoring services"
                    fill
                  />
                </div>
                <div className="relative h-64 w-full col-span-2 rounded-xl overflow-hidden shadow-md">
                  <Image
                    className="object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5ptd7GO33H0CvoX9CnICWQ7SYJBxg5fHZ_4tpEzcIczesDDJphhSucQFQ4dH6-LfcxLxsXcERAhyEkV249cijX3JuPy_Wf2SJFGo4IV_Kv8B2GTdJpYcxa3IxOT9BdAITgYqKzvYfdsEQNcibfWIBNEzukgBj-kC0bVYzv4ZSVYYrl2agx1dNKN1HkhS_zwhKJ16gaJRox387OeRTk_97jTtjtwKqgNw7pqw7v7ZcL_LzfphypvIsRECYsflAX4FytyB2v7DdBPbp"
                    alt="Exam lab"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-8">
            <div className="bg-[#760009] rounded-2xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#991b1b] opacity-20 -mr-32 -mt-32 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#991b1b] opacity-20 -ml-24 -mb-24 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 relative z-10">Secure Your Exam Venue Today</h2>
              <p className="text-[#ffb4ac] text-lg mb-10 max-w-2xl mx-auto relative z-10">
                Contact our academic team to discuss capacity requirements, technical specifications, and custom
                scheduling for your organization.
              </p>
              <div className="relative z-10 py-6">
                <div className="flex flex-col items-center gap-6">
                  <p className="text-2xl md:text-3xl font-black text-white">
                    If you want to book an exam venue, please contact us.
                  </p>
                  <Link
                    href="/contact-us"
                    className="bg-white text-[#760009] px-10 py-4 rounded-lg font-bold text-lg tracking-wide hover:bg-opacity-90 transition-all active:scale-95 text-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
