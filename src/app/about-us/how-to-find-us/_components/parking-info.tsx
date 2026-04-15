import { Info, Clock, CreditCard } from "lucide-react";

export function ParkingInfo() {
  return (
    <section className="py-24 bg-[#A11D1D] text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]" />
      
      <div className="container px-6 mx-auto sm:px-12 lg:px-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-16 text-center">
            <h2 className="text-4xl font-extrabold font-heading tracking-tight">Parking Details</h2>
            <div className="w-20 h-1.5 bg-white mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 space-y-6">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                <Info className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold font-heading">Tower Parking</h4>
              <ul className="space-y-4 text-white/80 leading-relaxed font-medium">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                  All-day parking is available on the left side and in front of Apricot Tower.
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                  There are 24 parking lots available, including 3 accessible parking lots for people with disabilities.
                </li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-3xl space-y-6 shadow-2xl">
              <div className="w-14 h-14 bg-[#FFF8F8] rounded-2xl flex items-center justify-center">
                <Clock className="w-8 h-8 text-[#A11D1D]" />
              </div>
              <h4 className="text-2xl font-bold font-heading text-[#1F1F1F]">Visitor Parking</h4>
              <div className="space-y-4 text-gray-600 leading-relaxed font-medium">
                <p>14 parking lots located in the back of the building.</p>
                <div className="flex items-center justify-between p-4 bg-[#FFF8F8] rounded-xl border border-[#A11D1D]/10">
                  <span className="font-bold text-[#1F1F1F]">Complimentary</span>
                  <span className="text-[#A11D1D] font-black uppercase text-xs tracking-widest">First 1 Hour</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="font-bold text-[#1F1F1F]">Chargeable</span>
                  <span className="text-gray-900 font-black uppercase text-xs tracking-widest">AED 11 / HR</span>
                </div>
                <p className="text-sm italic opacity-80">Permits are given by the building security guard and paid on exit.</p>
              </div>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-xl p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center gap-8">
            <div className="shrink-0">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="space-y-2">
              <h5 className="text-xl font-bold font-heading">On-Street Parking</h5>
              <p className="text-white/70 leading-relaxed">
                Paid on-street parking is available at <span className="text-white font-bold">AED 4 per hour</span>. Payment via SMS or coins. *Seasonal pre-paid parking cards are not accepted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
