import React from "react";
import { BookOpen } from "lucide-react";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import { SearchableDropdown } from "@/components/ui/searchable-dropdown";
import { PriceDisplay } from "@/components/ui/price-display";
import { Badge } from "@/components/ui/badge";

export interface AddonServicesSectionProps {
  coursesData: any;
  workshopsData: any;
  selectedCourse: string | undefined;
  selectedWorkshop: string | undefined;
  onCourseChange: (val: string) => void;
  onWorkshopChange: (val: string) => void;
  courseError?: boolean;
  workshopError?: boolean;
  description?: string;
}

export function AddonServicesSection({
  coursesData,
  workshopsData,
  selectedCourse = "",
  selectedWorkshop = "",
  onCourseChange,
  onWorkshopChange,
  courseError,
  workshopError,
  description,
}: AddonServicesSectionProps) {
  return (
    <div className="pt-8 border-t border-slate-100 space-y-6">
      <div className="flex items-center gap-2 text-slate-400 mb-4">
        <BookOpen className="size-5" />
        <h3 className="text-lg font-bold tracking-tight text-slate-800">
          Add-on Services
        </h3>
      </div>

      {description && (
        <p className="section-description text-sm">{description}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Field>
          <FieldLabel>Courses</FieldLabel>
          <FieldContent>
            <SearchableDropdown
              name="selectedCourse"
              options={[
                { label: "None", value: "" },
                ...Object.values(coursesData || {}).map((c: any) => ({
                  label: c.name,
                  description: c.discounted_price != null ? (
                    <span className="flex flex-col gap-1.5 mt-1">
                      <span className="inline-flex items-center gap-1">
                        <PriceDisplay
                          amount={c.discounted_price}
                          minimumFractionDigits={2}
                          maximumFractionDigits={2}
                          className="text-primary font-semibold"
                        />
                        <span className="text-primary font-semibold">
                          ({Math.round((1 - c.discounted_price / c.price) * 100)}% OFF)
                        </span>
                        <PriceDisplay
                          amount={c.price}
                          minimumFractionDigits={2}
                          maximumFractionDigits={2}
                          className="line-through text-muted-foreground"
                        />
                      </span>
                      <span className="flex items-center gap-1.5 flex-wrap">
                        {["Free Prep. Material", "Free Consultation", "Free Mock Test"].map((item, index) => (
                          <Badge key={index}>{item}</Badge>
                        ))}
                      </span>
                    </span>
                  ) : c.special_discount ? (
                    <span className="flex flex-col gap-1.5 mt-1">
                      <span className="inline-flex items-center gap-1">
                        <PriceDisplay
                          amount={c.price * (1 - c.special_discount / 100)}
                          minimumFractionDigits={2}
                          maximumFractionDigits={2}
                          className="text-primary font-semibold"
                        />
                        <span className="text-primary font-semibold">
                          ({c.special_discount}% OFF)
                        </span>
                        <PriceDisplay
                          amount={c.price}
                          minimumFractionDigits={2}
                          maximumFractionDigits={2}
                          className="line-through text-muted-foreground"
                        />
                      </span>
                      <span className="flex items-center gap-1.5 flex-wrap">
                        {["Free Prep. Material", "Free Consultation", "Free Mock Test"].map((item, index) => (
                          <Badge key={index}>{item}</Badge>
                        ))}
                      </span>
                    </span>
                  ) : (
                    <PriceDisplay
                      amount={c.price}
                      minimumFractionDigits={0}
                      maximumFractionDigits={0}
                    />
                  ),
                  value: c.id,
                })),
              ]}
              placeholder="Select a course"
              value={selectedCourse}
              onChange={onCourseChange}
              aria-invalid={courseError}
            />
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel>Workshops</FieldLabel>
          <FieldContent>
            <SearchableDropdown
              name="selectedWorkshop"
              options={[
                { label: "None", value: "" },
                ...Object.values(workshopsData || {}).map((w: any) => ({
                  label: w.name,
                  description: w.duration ? (
                    <span className="flex items-center gap-1">
                      {w.duration} •{" "}
                      <PriceDisplay
                        amount={w.price}
                        minimumFractionDigits={0}
                        maximumFractionDigits={0}
                      />
                    </span>
                  ) : (
                    <PriceDisplay
                      amount={w.price}
                      minimumFractionDigits={0}
                      maximumFractionDigits={0}
                    />
                  ),
                  value: w.id,
                })),
              ]}
              placeholder="Select a workshop"
              value={selectedWorkshop}
              onChange={onWorkshopChange}
              aria-invalid={workshopError}
            />
          </FieldContent>
        </Field>
      </div>
    </div>
  );
}
