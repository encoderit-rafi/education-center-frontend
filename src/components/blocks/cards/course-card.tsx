import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  BaseCard,
  BaseCardTitle,
  BaseCardDescription,
  BaseCardList,
} from "@/components/blocks/cards/base-card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { PriceDisplay } from "@/components/ui/price-display";

export interface CoursePackage {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: string;
  discountType: "PERCENTAGE" | "FIXED" | null;
  discountValue: number | null;
  specialDiscountType?: "PERCENTAGE" | "FIXED" | null;
  specialDiscount?: string | number | null;
  duration: string;
  totalHours: string;
  scheduleInfo: string;
  bestFor: string[];
  image?: string | null;
}

export interface CourseCardProps {
  pkg: CoursePackage;
  examSlug: string;
  showDetails?: boolean;
}

export default function CourseCard({
  pkg,
  examSlug,
  showDetails = false,
}: CourseCardProps) {
  const basePrice = parseFloat(pkg.price) || 0;
  let discount = 0;
  let discountType: "PERCENTAGE" | "FIXED" | null = pkg.discountType;

  if (pkg.discountValue !== null && pkg.discountValue !== undefined) {
    discount =
      typeof pkg.discountValue === "string"
        ? parseFloat(pkg.discountValue)
        : pkg.discountValue;
  } else if (
    pkg.specialDiscount !== null &&
    pkg.specialDiscount !== undefined
  ) {
    discount =
      typeof pkg.specialDiscount === "string"
        ? parseFloat(pkg.specialDiscount)
        : pkg.specialDiscount;
    if (pkg.specialDiscountType) {
      discountType = pkg.specialDiscountType as "PERCENTAGE" | "FIXED";
    }
  }

  const discountedPrice =
    discountType === "PERCENTAGE"
      ? Math.round(basePrice * (1 - discount / 100))
      : basePrice - discount;

  return (
    <BaseCard className="p-0 flex flex-col justify-between overflow-hidden border-slate-200 group relative hover:border-primary/30 hover:shadow-2xl transition-all duration-500 ease-out h-full bg-white">
      <div className="relative aspect-video w-full overflow-hidden bg-slate-50/50 border-b border-slate-100">
        <Image
          src={pkg.image || "/images/hero/image-3.jpg"}
          alt={pkg.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
        {discount > 0 && (
          <div className="absolute top-4 right-4 z-10">
            <Badge className="py-1 px-3 font-bold shadow-lg">
              SAVE {discount}
              {discountType === "PERCENTAGE" ? "%" : ""}
            </Badge>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6 justify-between space-y-6">
        <div className="space-y-4">
          <BaseCardTitle className="text-2xl font-black text-slate-900 tracking-tight leading-snug">
            {pkg.name}
          </BaseCardTitle>

          <div className="flex items-baseline gap-3">
            <PriceDisplay
              amount={discountedPrice}
              className="text-3xl font-black text-primary"
            />
            {discount > 0 && (
              <span className="text-sm text-slate-400 line-through decoration-slate-300 flex items-center gap-1">
                <PriceDisplay amount={basePrice} iconClassName="h-[0.7em]" />
              </span>
            )}
          </div>

          {/* <BaseCardDescription className="text-sm text-slate-600 font-medium leading-relaxed line-clamp-3">
            {pkg.description}
          </BaseCardDescription> */}
          <BaseCardList items={pkg.bestFor} checked />
        </div>

        <div className="pt-2">
          <Link
            href={`/exam-preparation-courses/${examSlug}/packages/${pkg.id}`}
            className={cn(
              buttonVariants(),
              "font-bold h-11 shadow-sm px-4 w-full flex items-center justify-center gap-2 transition-all duration-300",
            )}
          >
            View Details
          </Link>
        </div>
      </div>
    </BaseCard>
  );
}
