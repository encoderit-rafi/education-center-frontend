import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function BookAnExamVenuePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-surface-container-low">
        <div className="container mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="max-w-xl">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">
              PREMIUM EXAM VENUE HIRE
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-on-surface tracking-tight leading-[1.05] mb-8 font-headline animate-in fade-in slide-in-from-bottom-6 duration-1000">
              Need to hire an <span className="text-primary">exam venue?</span> Try TEPTH
            </h1>
            <p className="text-lg text-on-surface-variant mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000">
              We provide the best services in the region, offering world-class
              infrastructure designed specifically for high-stakes testing
              environments. Professional, secure, and fully equipped.
            </p>
            <div className="bg-white/50 backdrop-blur-sm border-l-4 border-primary p-8 rounded-r-xl shadow-sm animate-in fade-in slide-in-from-bottom-10 duration-1000">
              <div className="flex flex-col gap-6">
                <p className="text-xl font-bold text-on-surface italic leading-tight">
                  If you want to book an exam venue, please contact us.
                </p>
                <Link
                  href="/contact-us"
                  className="bg-primary text-white w-fit px-10 py-4 rounded-lg font-bold text-sm tracking-wide hover:opacity-90 transition-all active:scale-95 shadow-md shadow-primary/20"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="relative group animate-in fade-in zoom-in duration-1000">
            <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10 border border-outline/10">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCZCenNV-uI7-wpeDtejBg9twXpjRMucv_rsvFids9XtLMcN-tk1HpZ2F4479kFttQ_oWaT-GJPOPpP25rHRTta6BYpBtxBtLAJPXaRGMXJLaF2QTFqGAz7A99K_xFbKSGFR11SS9__ZarBInrWDPEYNJiemTZVXOyGiNADYABtfhVZcnhjUjDEoj-YcLREaLYyv7ZkHmfNV5qTDCoicKjjSU5hT75pN4UmHbZQWg6156PZ3eyN8yYKiB83Ks22l-iwfr8-e94IYgl"
                alt="Modern computer lab"
                width={800}
                height={600}
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-1000"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface p-6 rounded-xl shadow-xl z-20 border border-outline/10 hidden lg:block animate-in fade-in slide-in-from-left-10 duration-1000 delay-500">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">KHDA Permitted</p>
                  <p className="text-xs text-on-surface-variant font-medium">Dubai Silicon Oasis Authority</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Exam Infrastructure Accordion */}
      <section className="py-24 bg-surface container-lowest">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-on-surface font-headline">
              Comprehensive Exam Infrastructure
            </h2>
            <div className="h-1.5 w-24 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>

          <Accordion className="space-y-4 border-none">
            {infrastructureItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-surface-container-low rounded-xl overflow-hidden border border-transparent transition-all duration-300 data-[state=open]:border-primary/20 data-[state=open]:shadow-md border-none"
              >
                <AccordionTrigger className="flex items-center justify-between p-6 cursor-pointer hover:no-underline group/trigger">
                  <div className="flex items-center gap-4">
                    <span className={cn("material-symbols-outlined text-2xl transition-transform group-hover/trigger:scale-110", item.iconColor)}>
                      {item.icon}
                    </span>
                    <h3 className="text-lg font-bold text-on-surface transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0">
                  <p className="text-on-surface leading-relaxed border-t border-primary/10 pt-4">
                    {item.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Why Choose TEPTH Section */}
      <section className="py-24 bg-surface-container-high overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold text-on-surface mb-10 tracking-tight font-headline">
                Why Choose <span className="text-primary tracking-tighter">TEPTH?</span>
              </h2>
              <div className="grid gap-6">
                {reasons.map((reason, index) => (
                  <div
                    key={index}
                    className="flex gap-5 p-5 rounded-2xl bg-surface border border-outline/5 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="bg-primary/10 p-2 rounded-full h-fit shrink-0">
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                        check_circle
                      </span>
                    </div>
                    <p className="text-on-surface-variant font-medium leading-relaxed">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6 relative">
              <div className="absolute inset-0 bg-primary/5 -rotate-6 scale-110 rounded-3xl -z-10"></div>
              <div className="space-y-6">
                <div className="h-64 relative rounded-2xl overflow-hidden shadow-lg border border-outline/10 group">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcQ1iVsaqi2j-CVC_SRR9ql373eTA5pCxaeLfpQ1UsFU_7bFWj0gb9V2icuTaHIMpQozomaCS1nwcm7x2zfJTzaUSt4GMUcFKnphpIGy3vmVtWb6lLFeGpjO_JPng2chdUvkWG6SajaIZZMD8lsJgaxjf1R3beAjWOu2SWXUPUpbuKj1_yvaYS4PDIhQMIHIGEZHx5V8hOSSV9AnvZyvxnNrukO_7bb0k3xEHNGXjTvWzns9RzamN1jk1OlZjuOIjkXCbDtfMJpzVA"
                    alt="TEPTH interior"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="h-80 relative rounded-2xl overflow-hidden shadow-lg border border-outline/10 group">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuClmG83fbtb6gqFBBVMNN2TXC7HUQwJFszsO-HHqBHiOxeypWhXIoJUYCoa-3aMkCqTOBSkL6_LWKmElvry105Kfutyad95tGxwJn5uum0fLyGzfnoqZEQ_bUqZGDU--tvAXBOiel9E7KV7Mz_sVddq1jQJu050d-5eT0350erpHISxiVJs4eR6hG_f7iR9DVtmJq9Xid0GPkTvXhr7d3coRI_UwGauLGgfC-pXH7qODdnhvcD13ywQuN5rEn4QgqhP4fDb3xzIvy1G"
                    alt="Proctor monitoring"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="pt-12">
                <div className="h-full relative rounded-2xl overflow-hidden shadow-lg border border-outline/10 group">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5ptd7GO33H0CvoX9CnICWQ7SYJBxg5fHZ_4tpEzcIczesDDJphhSucQFQ4dH6-LfcxLxsXcERAhyEkV249cijX3JuPy_Wf2SJFGo4IV_Kv8B2GTdJpYcxa3IxOT9BdAITgYqKzvYfdsEQNcibfWIBNEzukgBj-kC0bVYzv4ZSVYYrl2agx1dNKN1HkhS_zwhKJ16gaJRox387OeRTk_97jTtjtwKqgNw7pqw7v7ZcL_LzfphypvIsRECYsflAX4FytyB2v7DdBPbp"
                    alt="Team working"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 max-w-5xl mx-auto px-6 lg:px-12">
        <div className="bg-primary rounded-[2rem] p-12 lg:p-20 text-center text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 opacity-5 -mr-48 -mt-48 rounded-full group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 opacity-5 -ml-32 -mb-32 rounded-full group-hover:scale-110 transition-transform duration-1000 delay-200"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 font-headline leading-tight">
              Secure Your Exam Venue Today
            </h2>
            <p className="text-white/80 text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
              Contact our academic team to discuss capacity requirements, technical
              specifications, and custom scheduling for your organization.
            </p>
            <div className="flex flex-col items-center gap-8">
              <p className="text-2xl lg:text-3xl font-black text-white italic">
                If you want to book an exam venue, please contact us.
              </p>
              <Link
                href="/contact-us"
                className="bg-white text-primary px-12 py-5 rounded-xl font-bold text-lg tracking-wide hover:bg-white/90 transition-all active:scale-95 shadow-xl shadow-black/10"
              >
                Contact Us Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const infrastructureItems = [
  {
    icon: "description",
    title: "Service License",
    iconColor: "text-red-800",
    description: "The Exam Preparation & Testing House is a well-formed organization in Dubai with vast experience in test delivery and exam prep. services. TEPTH is licensed by Dubai Silicon Oasis Authority and permitted by KHDA with Testing Centre activity."
  },
  {
    icon: "computer",
    title: "Computer-based Exams",
    iconColor: "text-red-800",
    description: "Three 40-seat computer rooms and 20-seat classroom to administer computer-based exams."
  },
  {
    icon: "volume_off",
    title: "Noise Free Environment",
    iconColor: "text-red-800",
    description: "Fabric acoustic panels are fixed onto the partitions of workstations to help reduce the noise level. Our floors at the testing rooms are carpeted to eliminate distraction. We have also spaced out our workstations as this helps in reducing the noise. Additionally, we are using white noise machines in our computer labs to help reduce noise. We also use quiet keyboards and high-quality headsets to further minimize distractions."
  },
  {
    icon: "article",
    title: "Paper-based Exams",
    iconColor: "text-red-800",
    description: "We provide a dedicated 20-seat classroom specifically designed to accommodate paper-based examination formats."
  },
  {
    icon: "videocam",
    title: "CCTV Surveillance",
    iconColor: "text-red-800",
    description: "To maintain exam security and integrity, we have implemented a comprehensive CCTV system in our computer labs. Each workstation is monitored by a security camera, and exam providers may be granted access to recordings upon request."
  },
  {
    icon: "settings_suggest",
    title: "Exam Delivery Machines",
    iconColor: "text-red-800",
    description: "Our venues are equipped with high-specification computers that meet or exceed all official exam provider requirements for performance and security."
  },
  {
    icon: "near_me",
    title: "Strategic Location",
    iconColor: "text-red-800",
    description: "Our center is conveniently located in Dubai Silicon Oasis, one of the most strategic areas in Dubai, and in close proximity to Academic City."
  },
  {
    icon: "accessible",
    title: "Wheelchair Accessible",
    iconColor: "text-red-800",
    description: "All our facilities are fully wheelchair accessible. We also provide adjustable chairs to ensure comfort for all candidates during their exams."
  },
  {
    icon: "domain",
    title: "Top-Notch Premises",
    iconColor: "text-red-800",
    description: "Our modern, air-conditioned venues are professionally built and well-equipped with waiting areas and secure lockers for test-takers. Features include built-in ceiling speakers for events and specialized training."
  },
  {
    icon: "badge",
    title: "Experienced Invigilators",
    iconColor: "text-red-800",
    description: "All administrators and proctors at TEPTH are certified and highly trained to supervise various types of international exams with the highest level of professionalism."
  },
  {
    icon: "room_service",
    title: "Special Accommodation",
    iconColor: "text-red-800",
    description: "We can accommodate test-takers requiring extra time or private rooms for special needs, ensuring a fair and supportive testing environment for everyone."
  },
  {
    icon: "groups",
    title: "Seating Capacity",
    iconColor: "text-red-800",
    description: "With a total capacity of 140 workstations across three 40-seat computer rooms and a 20-seat classroom, we can administer exams for up to 140 candidates in a single session."
  }
];


const reasons = [
  "Well-formed organization in Dubai licensed by Dubai Silicon Oasis Authority and permitted by KHDA.",
  "Three 40-seat computer rooms and a 20-seat classroom available for hire.",
  "Fabric acoustic panels, carpeted floors, and white noise machines to reduce noise.",
  "140 workstations total with state-of-the-art peripherals.",
  "Certified and highly trained administrators and proctors for all exam types.",
];
