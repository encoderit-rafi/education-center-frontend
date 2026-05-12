import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  badgeClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  align?: "left" | "center" | "right";
}

export const SectionHeader = ({
  badge,
  title,
  description,
  className,
  badgeClassName,
  titleClassName,
  descriptionClassName,
  align = "left",
}: SectionHeaderProps) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end",
  };

  return (
    <div
      className={cn(
        "space-y-4 animate-fade-up flex flex-col",
        alignmentClasses[align],
        className
      )}
    >
      {/* Section Badge */}
      {badge && (
        <span
          className={cn(
            "text-primary font-semibold text-sm md:text-lg uppercase tracking-wider",
            badgeClassName
          )}
        >
          {badge}
        </span>
      )}

      {/* Main Heading */}
      <h2
        className={cn(
          "text-4xl md:text-5xl font-bold text-secondary",
          titleClassName
        )}
      >
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={cn(
            "section-description max-w-3xl",
            align === "center" && "mx-auto",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
