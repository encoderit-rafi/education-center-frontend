import Image from "next/image";

export default function HowToFindUs() {
  return (
    <main className="py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-black text-[#A11D1D] tracking-tight">
              How to Find Us
            </h1>
            <div className="h-2 w-24 bg-[#A11D1D] rounded-full" />
          </div>

          {/* Location Map Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-black text-slate-900">Location Map</h2>
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="lg:pt-4 flex-1">
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  Route to our centre is too easy to follow and reach the destination. We have incorporated Google Location Map to make it more understandable for you. From the small box on lower-left corner of the map, you can select to view street map or the satellite imagery. You can also view larger map to be more certain about our location. This visual representation will help you with the driving directions to arrive at <strong className="font-black text-[#A11D1D]">The Exam Preparation & Testing House L.L.C</strong> in Sharjah.
                </p>
              </div>
              <div className="relative w-full lg:w-1/2 min-h-[400px] md:min-h-[500px] lg:min-h-[600px]  overflow-hidden bg-slate-50 shrink-0">
                <Image
                  src="/images/about-us/TEPTH-Sharjah-Location-Map.jpg"
                  alt="TEPTH Sharjah Location Map"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </section>

          {/* Transportation Sections */}
          <div className="space-y-12">
            {/* By Taxicab */}
            <section className="space-y-6">
              <h3 className="text-2xl font-black text-slate-900">By Taxicab:</h3>
              <div className="relative aspect-[16/9] w-full max-w-2xl rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
                <Image
                  src="/images/about-us/taxi.png"
                  alt="Sharjah Taxi"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                From anywhere in Sharjah, you can hire a taxi and it will take you to your final destination. <strong className="font-black text-slate-900">Call 600-525-252</strong> to book a taxicab with Sharjah Taxi Corporation. Taxicab drivers will pick you up from your specified location and take you to our centre. For location map, please <span className="text-[#A11D1D] underline font-bold cursor-pointer">click here</span>.
              </p>
            </section>

            {/* By Public Bus */}
            <section className="space-y-6">
              <h3 className="text-2xl font-black text-slate-900">By Public Bus:</h3>
              <div className="relative aspect-[16/9] w-full max-w-2xl rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
                <Image
                  src="/images/about-us/public-bus.png"
                  alt="Sharjah Public Bus"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                Take a Sharjah public bus towards Al Mamzar or Al Taawun, disembarking at the nearest bus stop to Tabarak Tower. The bus ride will get you within a short walking distance of the center.
              </p>
            </section>

            {/* By Dubai Metro and Bus */}
            <section className="space-y-6">
              <h3 className="text-2xl font-black text-slate-900">By Dubai Metro and Bus:</h3>
              <div className="relative aspect-[16/9] w-full max-w-2xl rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
                <Image
                  src="/images/about-us/metro.png"
                  alt="Dubai Metro"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Although Sharjah does not have its own metro, you can combine the Dubai Metro with bus services to reach our Sharjah office.
              </p>

              <div className="space-y-6 bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                <div className="space-y-4">
                  <p className="font-black text-slate-900 text-lg">1. Take the Dubai Metro:</p>
                  <ul className="list-disc ml-6 text-slate-700">
                    <li>Board the Red Line and alight at Union Metro Station.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <p className="font-black text-slate-900 text-lg">2. Transfer to a Bus:</p>
                  <ul className="list-disc ml-6 space-y-2 text-slate-700">
                    <li>From Union Metro Station, proceed to the adjacent Union Square Bus Station.</li>
                    <li>Board the E303 bus, which operates between Union Square Bus Station in Dubai and Al Jubail Bus Station in Sharjah.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <p className="font-black text-slate-900 text-lg">3. From Al Jubail Bus Station:</p>
                  <ul className="list-disc ml-6 text-slate-700">
                    <li>Upon arrival at Al Jubail Bus Station in Sharjah, you can hire a taxi to reach Tabarak Tower in Al Mamzar, Sharjah.</li>
                  </ul>
                </div>

                <div className="pt-4 space-y-3">
                  <p className="font-black text-slate-900">Alternative Bus Routes:</p>
                  <ul className="list-disc ml-6 space-y-2 text-slate-700">
                    <li>E306 Bus Service: Departs from Al Ghubaiba Bus Station in Dubai and arrives at Al Jubail Bus Station in Sharjah.</li>
                    <li>E307 Bus Service: Departs from Deira City Centre Bus Station in Dubai and arrives at Al Jubail Bus Station in Sharjah.</li>
                  </ul>
                </div>

                <p className="text-[#A11D1D] font-black text-lg pt-4">
                  Note: Please allow extra travel time as bus routes can be affected by traffic conditions.
                </p>
              </div>
            </section>
          </div>

          {/* Driving Directions */}
          <section className="space-y-8 pt-8 border-t border-slate-100">
            <h2 className="text-3xl font-black text-slate-900">Driving Directions:</h2>
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="text-lg font-black text-slate-900">1. From Dubai:</p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Take Al Ittihad Road (E11) towards Sharjah. Follow the signs towards Al Mamzar. Turn right onto Al Mamzar Road and continue until you reach Tabarak Tower on your right.
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-lg font-black text-slate-900">2. From Ajman, Umm Al Quwain, or Ras Al Khaimah:</p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Drive towards Sharjah on Sheikh Mohammed Bin Zayed Road (E311). Take the exit for Al Mamzar, and follow the signs to reach Al Mamzar Road. Tabarak Tower will be on your right.
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-lg font-black text-slate-900">3. From Abu Dhabi:</p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Head towards Dubai on Sheikh Zayed Road (E11). Continue towards Al Ittihad Road (E11) into Sharjah. Follow the signs to Al Mamzar, and turn right onto Al Mamzar Road. Tabarak Tower will be on your right.
                </p>
              </div>
            </div>
          </section>

          {/* Parking Information */}
          <section className="bg-slate-900 text-white rounded-[2.5rem] p-10 md:p-14 space-y-8">
            <h2 className="text-3xl font-black">Parking Information:</h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="w-2 h-2 rounded-full bg-[#A11D1D] mt-3 shrink-0" />
                <p className="text-lg leading-relaxed">
                  <strong className="font-black text-white">On-site Parking:</strong> There are visitor parking spaces available at the back of Tabarak Tower.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="w-2 h-2 rounded-full bg-[#A11D1D] mt-3 shrink-0" />
                <p className="text-lg leading-relaxed">
                  <strong className="font-black text-white">Public Parking:</strong> Metered parking is also available near the tower at a rate of AED 2 per hour. Please check with SRTA in Sharjah for any recent updates on metered parking and payment options. This guide is aimed at helping you reach <strong className="font-black text-[#A11D1D]">The Exam Preparation & Testing House L.L.C</strong> in Sharjah with ease. For further assistance, feel free to call us at <span className="font-black text-[#A11D1D] underline">+971 6 553 1250</span>.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
