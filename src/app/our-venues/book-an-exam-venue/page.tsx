import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BadgeCheck,
  FileText,
  Monitor,
  VolumeX,
  Video,
  Cpu,
  MapPin,
  Accessibility,
  Building2,
  Award,
  HeartHandshake,
  Users,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { CampusGallery } from "@/components/blocks/campus-gallery";

const infrastructureItems = [
  {
    icon: FileText,
    title: "Service License",
    iconColor: "text-red-800",
    description:
      "The Exam Preparation & Testing House is a well-formed organization in Dubai with vast experience in test delivery and exam prep. services. TEPTH is licensed by Dubai Silicon Oasis Authority and permitted by KHDA with Testing Centre activity.",
  },
  {
    icon: Monitor,
    title: "Computer-based Exams",
    iconColor: "text-red-800",
    description:
      "Three 40-seat computer rooms and 20-seat classroom to administer computer-based exams.",
  },
  {
    icon: VolumeX,
    title: "Noise Free Environment",
    iconColor: "text-red-800",
    description:
      "Fabric acoustic panels are fixed onto the partitions of workstations to help reduce the noise level. Our floors at the testing rooms are carpeted to eliminate distraction. We have also spaced out our workstations as this helps in reducing the noise. Additionally, we are using white noise machines in our computer labs to help reduce noise. We also use quiet keyboards and high-quality headsets to further minimize distractions.",
  },
  {
    icon: FileText,
    title: "Paper-based Exams",
    iconColor: "text-red-800",
    description:
      "We provide a dedicated 20-seat classroom specifically designed to accommodate paper-based examination formats.",
  },
  {
    icon: Video,
    title: "CCTV Surveillance",
    iconColor: "text-red-800",
    description:
      "To maintain exam security and integrity, we have implemented a comprehensive CCTV system in our computer labs. Each workstation is monitored by a security camera, and exam providers may be granted access to recordings upon request.",
  },
  {
    icon: Cpu,
    title: "Exam Delivery Machines",
    iconColor: "text-red-800",
    description:
      "Our venues are equipped with high-specification computers that meet or exceed all official exam provider requirements for performance and security.",
  },
  {
    icon: MapPin,
    title: "Strategic Location",
    iconColor: "text-red-800",
    description:
      "Our center is conveniently located in Dubai Silicon Oasis, one of the most strategic areas in Dubai, and in close proximity to Academic City.",
  },
  {
    icon: Accessibility,
    title: "Wheelchair Accessible",
    iconColor: "text-red-800",
    description:
      "All our facilities are fully wheelchair accessible. We also provide adjustable chairs to ensure comfort for all candidates during their exams.",
  },
  {
    icon: Building2,
    title: "Top-Notch Premises",
    iconColor: "text-red-800",
    description:
      "Our modern, air-conditioned venues are professionally built and well-equipped with waiting areas and secure lockers for test-takers. Features include built-in ceiling speakers for events and specialized training.",
  },
  {
    icon: Award,
    title: "Experienced Invigilators",
    iconColor: "text-red-800",
    description:
      "All administrators and proctors at TEPTH are certified and highly trained to supervise various types of international exams with the highest level of professionalism.",
  },
  {
    icon: HeartHandshake,
    title: "Special Accommodation",
    iconColor: "text-red-800",
    description:
      "We can accommodate test-takers requiring extra time or private rooms for special needs, ensuring a fair and supportive testing environment for everyone.",
  },
  {
    icon: Users,
    title: "Seating Capacity",
    iconColor: "text-red-800",
    description:
      "With a total capacity of 140 workstations across three 40-seat computer rooms and a 20-seat classroom, we can administer exams for up to 140 candidates in a single session.",
  },
];

export default function BookAnExamVenuePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Comprehensive Exam Infrastructure Accordion */}
      <section className="py-24 bg-surface container-lowest">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-on-surface font-headline">
              Comprehensive Exam Infrastructure
            </h2>
            <div className="h-1.5 w-24 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>

          <Accordion
            type="single"
            className="flex flex-col gap-4 border-none space-y-0 max-w-4xl mx-auto"
          >
            {infrastructureItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl overflow-hidden border border-outline/100 transition-all duration-300 data-[state=open]:border-primary data-[state=open]:shadow-lg h-fit"
              >
                <AccordionTrigger className="flex items-center justify-between p-6 cursor-pointer hover:no-underline group/trigger text-left">
                  <div className="flex items-center gap-4">
                    <item.icon
                      className={cn(
                        "w-6 h-6 transition-transform group-hover/trigger:scale-110 text-on-surface-variant group-data-[state=open]/trigger:text-primary",
                        item.iconColor,
                      )}
                    />
                    <h3 className="text-lg font-bold text-on-surface transition-colors group-data-[state=open]/trigger:text-primary">
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

      <CampusGallery />
    </div>
  );
}
