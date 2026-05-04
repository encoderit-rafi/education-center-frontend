import ContactForm from "@/app/contact-us/_components/form-contact";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 md:gap-x-32 gap-y-12">
          {/* Row 1: Headings */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-[#A11D1D] tracking-tight">
              Get in Touch
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Whether you're preparing for an entrance exam or need deep
              editorial review, we're here to guide you.
            </p>
          </div>

          <div className="space-y-6 lg:pt-6">
            <h3 className="text-3xl font-black text-slate-900 tracking-tight">Our Contact Info</h3>
            <div className="h-2 w-24 bg-[#A11D1D] rounded-full" />
          </div>

          {/* Row 2: Cards (Aligned perfectly) */}
          <div className="bg-white p-8 md:p-12 h-full">
            <ContactForm />
          </div>

          <div className="p-10 md:p-14 space-y-16 h-full flex flex-col justify-between">
            <div className="space-y-12">
              {/* Working Hours Section */}
              <div className="flex items-start gap-8">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-md text-[#A11D1D] shrink-0">
                  <Clock className="w-8 h-8" />
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-black text-slate-900">Working Hours</h4>
                  <div className="space-y-1">
                    <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Saturday to Thursday</p>
                    <p className="text-2xl font-black text-[#A11D1D]">9:00 AM – 9:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Address Section */}
              <div className="flex items-start gap-8">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-md text-[#A11D1D] shrink-0">
                  <MapPin className="w-8 h-8" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-black text-slate-900">Our Address</h4>
                  <div className="space-y-2">
                    <p className="text-lg font-black text-slate-900 border-b-2 border-[#A11D1D] inline-block pb-0.5">The Exam Preparation & Testing House L.L.C</p>
                    <div className="text-slate-600 font-medium leading-relaxed">
                      <p>Suite 701, 7th Floor, Tabarak Tower,</p>
                      <p>Corniche Road, Al Mamzar, Sharjah, UAE.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Links */}
            <div className="pt-10 border-t border-slate-200 space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-[#A11D1D]">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-xl font-black text-slate-900">+971 6 553 1250</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-[#A11D1D]">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xl font-black text-slate-900">info@tepth.org</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
