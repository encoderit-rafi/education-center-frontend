"use client";

import { Button } from "@/components/ui/button";
import { Compass, MapPin, Printer } from "lucide-react";

const routes = [
  {
    from: "Northern Emirates",
    details: "Sharjah, Ajman, Umm Al Quwain, Ras Al-Khaimah, Fujairah. Take Sheikh Mohammad Bin Zayed Road E311, continue and then Exit 44 taking the direction of Al Ain Road E66. Continue until junction 16 where you will see a sign directing you to turn right onto Dubai Academic City Road (D54). Pass Hamdan Bin Mohammed Smart University, Zayed University and Higher college of Technology. Make a U-Turn at the first roundabout, take the first right exit, and then Apricot Tower is on your right."
  },
  {
    from: "Emirates Road (E611)",
    details: "Previously called Dubai Bypass Road. Keep driving till you see a sign directing you to turn right onto Dubai Academic City Road (D54). Continue along Dubai Academic City Road, passing Hamdan Bin Mohammed Smart University, Zayed University and Higher college of Technology on your right. Make a U-Turn at the first roundabout, take the first right exit, and then Apricot Tower is on your right."
  },
  {
    from: "Al Ain",
    details: "Take the Al Ain Road (E66) in the direction of Dubai. Exit at Junction (16), Continue along Dubai Academic City Road (D54) passing Hamdan Bin Mohammed Smart University, Zayed University and Higher college of Technology on your right. Make a U-Turn at the first roundabout, take the first right exit, at first roundabout, take the second exit, Apricot Tower is on your right."
  },
  {
    from: "Abu Dhabi",
    details: "Take Sheikh Mohammad Bin Zayed Road (E311), continue to Academic City Road (D54). Exit from Dubai Al Ain Road (E66), take the exit toward Dubai Academic City Road (D54), passing Hamdan Bin Mohammed Smart University, Zayed University and Higher college of Technology on your right. Make a U-turn at the first roundabout, take the first right exit, at first roundabout, take the second exit, Apricot Tower is on your right."
  },
  {
    from: "Main Entrance of DSO",
    details: "Go straight at the first roundabout, passing the Dubai Silicon Oasis Authority headquarters on your left. Continue driving until you see a sign directing you to turn right onto the Cedar Villas Street. Go straight at the first roundabout and then go right on the second roundabout passing the Choithrams supermarket on your right. Continue driving and then take the first exit at the first roundabout. Apricot Tower is on your right."
  }
];

export function DrivingRoutes() {

  const handleDownloadPDF = () => {
    window.open("/pdf/The-Exam-Preparation-Testing-House-Directions.pdf", "_blank");
  };

  return (
    <section className="py-24 bg-white">
      <div className="container px-6 mx-auto sm:px-12 lg:px-24">
        <div className="max-w-4xl">
          <div className="space-y-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <h2 className="text-4xl font-extrabold text-[#1F1F1F] font-heading tracking-tight">Driving Directions</h2>
            <Button
              onClick={handleDownloadPDF}
              size="lg"
              variant="outline"
              className="text-primary hover:text-red-800 hover:border-red-600 bg-transparent"
            >
              <Printer />
              <span>Download PDF Directions</span>
            </Button>
          </div>
          <div className="w-20 h-1.5 bg-[#A11D1D] mb-20 mt-4" />

          <div className="space-y-8 ">
            {routes.map((route, idx) => (
              <div key={idx} className="flex gap-6 group">
                <div className="shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-[#FFF8F8] flex items-center justify-center border border-[#A11D1D]/10">
                    <Compass className="w-5 h-5 text-[#A11D1D]" />
                  </div>
                </div>
                <div className="space-y-3 pb-8 border-b border-gray-100 w-full group-last:border-none">
                  <h4 className="text-xl font-bold text-[#1F1F1F] font-heading">
                    {route.from}:
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-lg italic">
                    {route.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
