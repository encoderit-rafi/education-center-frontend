"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Car, CircleParking, ExternalLink, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

export default function HowToFindUs() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-8 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <SectionHeader
            badge="LOCATION GUIDE"
            title={
              <>
                How to <span className="text-primary">Find Our Center</span>
              </>
            }
            description="Reaching our center in Sharjah is straightforward. We've compiled this comprehensive guide to help you navigate your journey with ease."
            className="space-y-4"
          />

          {/* Right Visual */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-3xl opacity-50 transition-opacity group-hover:opacity-100"></div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-us/infrastructure-center.png"
                alt="Our Center"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-8 max-w-screen-2xl mx-auto border-t border-slate-50">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <SectionHeader
              badge="LOCATION MAP"
              title={
                <>
                  Interactive <span className="text-primary">Navigation</span>
                </>
              }
              className="space-y-4"
            />
            <div className="space-y-4 text-base leading-relaxed font-medium">
              <p>
                Route to our centre is too easy to follow and reach the destination. We have incorporated Google Location Map to make it more understandable for you.
              </p>
              <p>
                From the small box on lower-left corner of the map, you can select to view street map or the satellite imagery. You can also view larger map to be more certain about our location.
              </p>
              <p className="text-slate-900 font-bold">
                This visual representation will help you with the driving directions to arrive at <span className="text-primary">The Exam Preparation & Testing House L.L.C</span> in Sharjah.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="/images/about-us/TEPTH-Sharjah-Location-Map.jpg"
              alt="TEPTH Location Map"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Visit Our Centre Section */}
      <section className="py-24 px-8 max-w-screen-2xl mx-auto border-t border-slate-50" id="map">
        <SectionHeader
          title="Visit Our Centre"
          description="Al Mamzar, Sharjah — located in the strategic Tabarak Tower, close to all major transport links. All facilities are wheelchair accessible."
          align="center"
          className="mb-16"
        />

        <div className="relative group rounded-xl overflow-hidden shadow-2xl border border-slate-100">
          <div className="absolute top-6 right-6 z-20">
            <Link
              href="https://www.google.com/maps/dir//The+Exam+Preparation+and+Testing+House(TEPTH),+Tabarak+Tower+Suite+701+,+7th+Floor+-+Corniche+Rd+-+Al+Mamzar+-+Sharjah+-+United+Arab+Emirates/@25.313693,55.361475,15z"
              target="_blank"
              className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl flex items-center gap-2 text-sm font-black text-slate-900 shadow-xl hover:bg-white transition-all group/btn"
            >
              Open in Maps <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </Link>
          </div>
          <div className="relative aspect-[21/9] min-h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.2843818318043!2d55.3589000751671!3d25.31369297763539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5bdc6cfb106d%3A0x26ff2a834eecd8fe!2sThe%20Exam%20Preparation%20and%20Testing%20House(TEPTH)!5e0!3m2!1sen!2sae!4v1715083800000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Transportation Options */}
      <section className="py-32 bg-white px-8 relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          {/* Section Header */}
          <SectionHeader
            badge="MOVEMENT & ACCESS"
            title={
              <>
                Ways to <span className="text-primary">Reach Us</span>
              </>
            }
            description="We have mapped out the most efficient routes to ensure your journey to our center is as smooth as possible."
            className="max-w-3xl mb-32"
          />

          <div className="space-y-40">
            {/* 01. By Taxicab */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
              <div className="space-y-8 order-2 lg:order-1">
                <div className="flex items-center gap-4">
                  <span className="text-7xl font-black text-primary/10">01</span>
                  <h5 className="text-primary text-3xl font-black uppercase tracking-tight">By Taxicab</h5>
                </div>
                <div className="space-y-6 text-base leading-relaxed font-medium">
                  <p>
                    From anywhere in Sharjah, you can hire a taxi and it will take you to your final destination.<br /> Call <span className="text-primary font-semibold">600-525-252</span> to book a taxicab with Sharjah Taxi Corporation. Taxicab drivers will pick you up from your specified location and take you to our centre. For location map, please <Link href="#map" className="text-primary font-black hover:underline">click here</Link>.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl order-1 lg:order-2">
                <Image src="/images/about-us/taxi.jpg" alt="Sharjah Taxi" fill className="object-cover" />
              </div>
            </div>

            {/* 02. Public Bus */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                <Image src="/images/about-us/bus.jpg" alt="Sharjah Public Bus" fill className="object-cover" />
              </div>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <span className="text-7xl font-black text-primary/10">02</span>
                  <h5 className="text-primary text-3xl font-black uppercase tracking-tight">Public Bus</h5>
                </div>
                <div className="space-y-6 text-base leading-relaxed">
                  <p>Take a Sharjah public bus towards Al Mamzar or Al Taawun, disembarking at the nearest bus stop to Tabarak Tower. The bus ride will get you within a short walking distance of the center.</p>
                </div>
              </div>
            </div>

            {/* 03. Dubai Metro & Bus */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
              <div className="space-y-8 order-2 lg:order-1">
                <div className="flex items-center gap-4">
                  <span className="text-7xl font-black text-primary/10">03</span>
                  <h5 className="text-3xl font-black text-primary uppercase tracking-tight">Metro & Bus</h5>
                </div>
                <div className="space-y-6 text-base leading-relaxed font-medium">
                  <p>Although Sharjah does not have its own metro, you can combine the Dubai Metro with bus services to reach our Sharjah office.</p>

                  <div className="space-y-4">
                    <p className="font-bold">1. Take the Dubai Metro:</p>
                    <p>— Board the Red Line and alight at Union Metro Station.</p>
                  </div>

                  <div className="space-y-4">
                    <p className="font-bold">2. Transfer to a Bus:</p>
                    <p>— From Union Metro Station, proceed to the adjacent Union Square Bus Station.</p>
                    <p>— Board the E303 bus, which operates between Union Square Bus Station in Dubai and Al Jubail Bus Station in Sharjah.</p>
                  </div>

                  <div className="space-y-4">
                    <p className="font-bold">3. From Al Jubail Bus Station:</p>
                    <p>— Upon arrival at Al Jubail Bus Station in Sharjah, you can hire a taxi to reach Tabarak Tower in Al Mamzar, Sharjah.</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <p className="font-bold mb-2">Alternative Bus Routes:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>E306 Bus Service: Departs from Al Ghubaiba Bus Station in Dubai and arrives at Al Jubail Bus Station in Sharjah.</li>
                      <li>E307 Bus Service: Departs from Deira City Centre Bus Station in Dubai and arrives at Al Jubail Bus Station in Sharjah.</li>
                    </ul>
                  </div>

                  <p className="text-[#d12c2c] font-bold">Note: Please allow extra travel time as bus routes can be affected by traffic conditions.</p>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl order-1 lg:order-2">
                <Image src="/images/about-us/metro.jpg" alt="Dubai Metro" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-16 px-8 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <SectionHeader
              badge="DRIVING DIRECTIONS"
              title="Get Directions"
              className="mb-12"
              titleClassName="text-3xl md:text-4xl"
            />
            <div className="space-y-10">
              {[
                { from: "Dubai", text: "Take Al Ittihad Road (E11) towards Sharjah. Follow the signs towards Al Mamzar. Turn right onto Al Mamzar Road and continue until you reach Tabarak Tower on your right." },
                { from: "Ajman, Umm Al Quwain, or Ras Al Khaimah", text: "Drive towards Sharjah on Sheikh Mohammed Bin Zayed Road (E311). Take the exit for Al Mamzar, and follow the signs to reach Al Mamzar Road. Tabarak Tower will be on your right." },
                { from: "Abu Dhabi", text: "Head towards Dubai on Sheikh Zayed Road (E11). Continue towards Al Ittihad Road (E11) into Sharjah. Follow the signs to Al Mamzar, and turn right onto Al Mamzar Road. Tabarak Tower will be on your right." }
              ].map((route, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <span className="text-slate-200 text-5xl font-black group-hover:text-primary/20 transition-colors">0{idx + 1}</span>
                  <div className="space-y-2">
                    <h6 className="text-primary font-black uppercase text-base">From {route.from}</h6>
                    <p className="text-base leading-relaxed font-medium">{route.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary rounded-[2.5rem] p-10 md:p-14 text-white space-y-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>

            <div className="relative z-10 space-y-10">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Parking <br />Information</h3>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <p className="text-white font-black uppercase text-sm tracking-[0.2em]">On-Site Parking</p>
                  </div>
                  <p className="text-white/80 text-base leading-relaxed font-medium pl-5">
                    There are visitor parking spaces available at the back of <span className="text-white font-black">Tabarak Tower</span>.
                  </p>
                </div>

                <div className="h-px bg-white/20 w-full"></div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <p className="text-white font-black uppercase text-sm tracking-[0.2em]">Public Parking</p>
                  </div>
                  <div className="space-y-5 pl-5">
                    <p className="text-white/80 text-base leading-relaxed font-medium">
                      Metered parking is also available near the tower at a rate of <span className="text-white font-black">AED 2 per hour</span>. Please check with SRTA in Sharjah for recent updates.
                    </p>
                    <div className="bg-white/10 p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
                      <p className="text-white font-medium leading-relaxed italic">
                        "This guide is aimed at helping you reach The Exam Preparation & Testing House L.L.C in Sharjah with ease."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-white/20">
                <p className="text-base text-white mb-6">For Further Assistance</p>
                <Link href="tel:+97165531250" className="group/phone flex items-center gap-4">
                  <span className="text-2xl md:text-3xl font-black text-white hover:text-white/80 transition-all">
                    +971 6 553 1250
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
