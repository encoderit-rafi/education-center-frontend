import ContactForm from "@/app/contact-us/_components/form-contact";
import FormIELTSRegistration from "@/components/forms/ielts-exam-registration/form-ielts-exam-registration";
import FormPTEAcademicRegistration from "@/components/forms/pte-academic-registration/form-pte-academic-registration";
import FormPTECoreRegistration from "@/components/forms/pte-core-registration/form-pte-core-registration";
import FormPTEHomeRegistration from "@/components/forms/pte-home-registration/form-pte-home-registration";
import FormTOEFLIBTRegistration from "@/components/forms/toefl-ibt-exam-registration/form-toefl-ibt-registration";
import { MapPin, Clock } from "lucide-react";


export default function ContactUs() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Form Side */}
          <div className="flex-1">
            <h2 className="text-4xl font-headline font-bold text-secondary tracking-tight mb-4">
              Get in Touch
            </h2>
            <p className="text-on-surface-variant mb-12">
              Whether you're preparing for an entrance exam or need deep
              editorial review, we're here to guide you.
            </p>
            <ContactForm />
          </div>
          {/* Map & Info Side */}
          <div className="flex-1 space-y-12">
            <div className="rounded-lg overflow-hidden shadow-lg h-80 relative group border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.3787723223!2d55.384274999999995!3d25.11196800848383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA2JzQzLjEiTiA1NcKwMjMnMDMuNCJF!5e0!3m2!1sen!2sae!4v1600000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="TEPTH Dubai Silicon Oasis Location"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-secondary flex items-center gap-2 shadow-sm border border-slate-100">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Office Open
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {/* Working Hours Card */}
              <div className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Clock className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-secondary mb-3">
                  Working Hours
                </h4>
                <div className="text-sm text-on-surface-variant leading-relaxed space-y-1">
                  <p className="text-sm text-primary leading-relaxed">
                    Saturday to Thursday
                  </p>
                  <p className="text-sm text-primary leading-relaxed">
                    9:00 AM to 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="mt-16">
        <FormTOEFLIBTRegistration />
        <FormIELTSRegistration />
        <FormPTEAcademicRegistration />
        <FormPTECoreRegistration />
        <FormPTEHomeRegistration />
      </section>
    </section>
  );
}
