import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
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
} from "lucide-react";
import { CampusGallery } from "@/components/blocks/campus-gallery";
import { useTranslations } from "next-intl";

const INFRASTRUCTURE_ICONS = [
  FileText,
  Monitor,
  VolumeX,
  FileText,
  Video,
  Cpu,
  MapPin,
  Accessibility,
  Building2,
  Award,
  HeartHandshake,
  Users,
];

export default function BookAnExamVenuePage() {
  const t = useTranslations("OurVenuesPage.BookAndExamVenuePage");

  const infrastructureItems = (t.raw("infrastructureItems") as { title: string; description: string }[]).map((item, idx) => ({
    ...item,
    icon: INFRASTRUCTURE_ICONS[idx],
    iconColor: "text-red-800",
  }));

  return (
    <div className="flex flex-col min-h-screen">
      {/* Comprehensive Exam Infrastructure Accordion */}
      <section className="py-24 bg-surface container-lowest">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-on-surface font-headline">
              {t("title")}
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
