import { Star, Lightbulb, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const values = [
  {
    title: "Excellence",
    description: "We strive for the highest quality in every assessment and resource we provide, setting the benchmark for academic standards.",
    icon: Star,
  },
  {
    title: "Innovation",
    description: "We embrace digital-first solutions to lead the future of educational certification, ensuring our tools remain at the cutting edge.",
    icon: Lightbulb,
  },
  {
    title: "Integrity",
    description: "We maintain transparency and accuracy in all our results and interactions, building trust within our global community.",
    icon: ShieldCheck,
  },
];

export function VisionMissionValues() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container px-6 mx-auto sm:px-12 lg:px-24">
        {/* Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] font-heading mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Rooted in excellence, we uphold the highest standards to empower our global community through dedicated service and innovative solutions.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <Card key={idx} className="border-none shadow-none bg-transparent flex flex-col items-center text-center">
              <CardHeader className="flex flex-col items-center pb-2">
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F8] flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[#8A1818]">
                  <value.icon className="w-6 h-6 text-[#8A1818] transition-colors duration-300 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[#1F1F1F] font-heading">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
