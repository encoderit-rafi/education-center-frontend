import Image from "next/image";
import Link from "next/link";
import { Handshake, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VendorPartnershipsPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Hero — image + intro text side by side */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 p-1.5">
              <Image
                className="w-full h-auto rounded-xl object-contain block"
                alt="Professional vendor partnership exam delivery center at TEPTH"
                src="/images/exam-vendors.jpg"
                width={600}
                height={450}
                priority
              />
            </div>
          </div>

          {/* Right — content */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[11px] font-bold bg-maroon-50 text-maroon-800 border border-maroon-100 mb-5 w-fit">
              <Handshake className="w-3.5 h-3.5" />
              <span>MUTUAL COLLABORATION</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-black text-slate-900 leading-tight mb-6 tracking-tight">
              Vendor{" "}
              <span className="text-primary italic">Partnerships</span>
            </h1>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-light">
              <p>
                At TEPTH, we are actively seeking to expand our network of
                delivery partners and warmly encourage vendors with active exam
                provider agreements to utilize our advanced testing facilities.
                We believe in building sustainable, win-win collaborations that
                drive mutual value.
              </p>
              <p>
                By channeling your exam volumes through our state-of-the-art
                center, you gain an instantly accessible, highly secure, and
                turnkey testing environment that satisfies the stringent
                standards of your exam providers—without the burden of facility
                overhead. In turn, our center optimizes its seating capacity and
                technical resources.
              </p>
              <p>
                This symbiotic relationship ensures that your candidates
                experience a seamless, professional testing environment, while
                both of our organizations benefit from predictable operational
                scalability and shared success.
              </p>
            </div>

            {/* Contact CTA */}
            <div className="mt-8 pt-8 border-t border-slate-100">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                Get in touch to partner with us
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="tel:+97165531250">
                  <Button className="bg-primary text-white hover:bg-primary/90 px-5 py-3 rounded-lg font-bold text-sm flex items-center gap-2 cursor-pointer h-10 shadow-md shadow-primary/10 transition-all duration-300">
                    <Phone className="w-4 h-4" />
                    +971 6 553 1250
                  </Button>
                </Link>
                <Link href="mailto:info@tepth.org">
                  <Button
                    variant="outline"
                    className="border-slate-200 text-slate-700 hover:bg-slate-50 px-5 py-3 rounded-lg font-bold text-sm flex items-center gap-2 cursor-pointer h-10 transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    info@tepth.org
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
