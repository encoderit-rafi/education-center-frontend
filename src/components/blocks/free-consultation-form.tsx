"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Field, FieldError } from "@/components/ui/field";
import { useState } from "react";
import { cn } from "@/lib/utils";

const consultationSchema = z.object({
  consultationType: z.enum(["exam_prep", "general"], {
    message: "Please select a consultation focus.",
  }),
  course: z.string().optional(),
  date: z.string().min(1, { message: "Please select a date." }),
  timeSlot: z.string().min(1, { message: "Please select a time slot." }),
  document: z.any().optional(),
});

type ConsultationFormValues = z.infer<typeof consultationSchema>;

export default function FreeConsultationForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [fileName, setFileName] = useState("");

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      date: "",
      timeSlot: "",
      course: "",
    },
  });

  const selectedType = watch("consultationType");
  const selectedCourse = watch("course");
  const selectedDate = watch("date");
  const selectedTimeSlot = watch("timeSlot");

  const onSubmit = async (data: ConsultationFormValues) => {
    console.log("Consultation Booked:", data);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSuccess(true);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      setValue("document", e.target.files[0]);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-3xl p-16 text-center space-y-6 shadow-sm">
        <span className="material-symbols-outlined text-7xl text-emerald-500">check_circle</span>
        <h2 className="text-3xl font-headline font-extrabold text-secondary">Discovery Session Confirmed!</h2>
        <p className="text-emerald-700 text-lg">
          Your free 15-minute consultation has been scheduled. A calendar link has been sent to your email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Option Cards Column */}
      <Field className="lg:col-span-4" data-invalid={!!errors.consultationType}>
        <div className="space-y-8">
          {/* Option 1 */}
          <div
            onClick={() => setValue("consultationType", "exam_prep", { shouldValidate: true })}
            className={cn(
              "p-8 rounded-xl transition-all cursor-pointer relative",
              selectedType === "exam_prep"
                ? "bg-white border-2 border-primary shadow-xl ring-4 ring-primary/5"
                : "bg-white border border-slate-200 hover:border-primary/50 text-slate-500"
            )}
          >
            {selectedType === "exam_prep" && (
              <div className="absolute -top-3 -right-3 bg-primary text-white text-[10px] font-black px-2 py-1 rounded">
                SELECTED
              </div>
            )}
            <div
              className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center mb-6",
                selectedType === "exam_prep" ? "bg-red-50 text-primary" : "bg-slate-50 text-slate-400"
              )}
            >
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <h3 className={cn("text-xl font-bold mb-2", selectedType === "exam_prep" ? "text-secondary" : "")}>
              Exam Prep Consultation
            </h3>
            <p className="text-sm leading-relaxed min-h-[3rem]">
              IELTS, TOEFL, OET performance analysis and study planning.
            </p>
          </div>

          {/* Option 2 */}
          <div
            onClick={() => setValue("consultationType", "general", { shouldValidate: true })}
            className={cn(
              "p-8 rounded-xl transition-all cursor-pointer relative",
              selectedType === "general"
                ? "bg-white border-2 border-primary shadow-xl ring-4 ring-primary/5"
                : "bg-white border border-slate-200 hover:border-primary/50 text-slate-500"
            )}
          >
            {selectedType === "general" && (
              <div className="absolute -top-3 -right-3 bg-primary text-white text-[10px] font-black px-2 py-1 rounded">
                SELECTED
              </div>
            )}
            <div
              className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center mb-6",
                selectedType === "general" ? "bg-red-50 text-primary" : "bg-slate-50 text-slate-400"
              )}
            >
              <span className="material-symbols-outlined text-3xl">description</span>
            </div>
            <h3 className={cn("text-xl font-bold mb-2", selectedType === "general" ? "text-secondary" : "")}>
              General Consultation
            </h3>
            <p className="text-sm leading-relaxed min-h-[3rem]">
              Requirement assessment and registration support for any exam.
            </p>
          </div>
        </div>
        {errors.consultationType && <FieldError className="mt-4">{errors.consultationType.message}</FieldError>}
      </Field>

      {/* Booking Interface Column */}
      <div className="lg:col-span-8">
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Course & Calendar */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-slate-100">
              <label className="block text-sm font-bold text-secondary mb-4">1. Select Course</label>
              <Field data-invalid={!!errors.course}>
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {["IELTS", "OET", "PTE"].map((course) => (
                    <button
                      key={course}
                      type="button"
                      onClick={() => setValue("course", course, { shouldValidate: true })}
                      disabled={selectedType === "general"}
                      className={cn(
                        "py-3 px-2 rounded-lg font-bold text-xs transition-all",
                        selectedCourse === course && selectedType !== "general"
                          ? "border-2 border-primary bg-red-50 text-primary"
                          : "border border-slate-200 text-slate-500 hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      )}
                    >
                      {course}
                    </button>
                  ))}
                </div>
              </Field>

              <label className="block text-sm font-bold text-secondary mb-4">2. Select Date</label>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-bold text-secondary">September 2024</span>
                  <div className="flex gap-2">
                    <button type="button" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-200 cursor-pointer">
                      <span className="material-symbols-outlined text-sm">chevron_left</span>
                    </button>
                    <button type="button" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-200 cursor-pointer">
                      <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-7 text-[10px] text-center font-bold text-slate-400 mb-2">
                  <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
                </div>
                <Field data-invalid={!!errors.date}>
                  <div className="grid grid-cols-7 text-sm text-center">
                    <div className="py-2 text-slate-300">25</div>
                    <div className="py-2 text-slate-300">26</div>
                    <div className="py-2 text-slate-300">27</div>
                    <div className="py-2 text-slate-300">28</div>
                    <div className="py-2 text-slate-300">29</div>
                    <div className="py-2 text-slate-300">30</div>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22].map((day) => {
                      const dateStr = `Sep ${day.toString().padStart(2, "0")}, 2024`;
                      const isSelected = selectedDate === dateStr;
                      return (
                        <div
                          key={day}
                          onClick={() => setValue("date", dateStr, { shouldValidate: true })}
                          className={cn(
                            "py-2 rounded-lg cursor-pointer transition-colors",
                            isSelected ? "bg-primary text-white font-bold" : "hover:bg-slate-200 text-slate-700 font-medium"
                          )}
                        >
                          {day}
                        </div>
                      );
                    })}
                  </div>
                  {errors.date && <FieldError className="mt-2">{errors.date.message}</FieldError>}
                </Field>
              </div>

              <div className="mt-8">
                <label className="block text-sm font-bold text-secondary mb-4">3. Upload Supporting Documents</label>
                <div className="relative border-2 border-dashed border-slate-200 rounded-xl p-6 text-center hover:border-primary transition-colors group bg-slate-50 hover:bg-red-50/50">
                  <span className="material-symbols-outlined text-4xl text-slate-300 group-hover:text-primary transition-colors mb-2">
                    cloud_upload
                  </span>
                  <p className="text-xs font-semibold text-slate-600 mb-1">
                    {fileName ? (
                      <span className="text-primary font-bold">{fileName}</span>
                    ) : (
                      <>
                        Drag & drop files or <span className="text-primary underline">browse</span>
                      </>
                    )}
                  </p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">Max 10MB (PDF, JPG, PNG)</p>
                  <input
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    id="consultation-file-upload"
                    type="file"
                    onChange={handleFileUpload}
                  />
                </div>
              </div>
            </div>

            {/* Right: Time Slots */}
            <div className="p-8 flex flex-col">
              <label className="block text-sm font-bold text-secondary mb-4">4. Select Time (GST)</label>
              <Field data-invalid={!!errors.timeSlot} className="mb-auto">
                <div className="grid grid-cols-2 gap-3">
                  {["09:00 AM", "10:30 AM", "11:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"].map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setValue("timeSlot", time, { shouldValidate: true })}
                      className={cn(
                        "py-3 px-4 rounded-lg text-sm transition-all cursor-pointer",
                        selectedTimeSlot === time
                          ? "border-2 border-primary bg-red-50 text-primary font-bold"
                          : "border border-slate-200 text-slate-600 font-medium hover:border-primary hover:text-primary"
                      )}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                {errors.timeSlot && <FieldError className="mt-4">{errors.timeSlot.message}</FieldError>}
              </Field>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-primary-variant transition-all shadow-lg shadow-primary/20 cursor-pointer active:scale-95 disabled:opacity-75"
                >
                  {isSubmitting ? "Processing..." : "Confirm Selection"}
                </button>
                <p className="text-center text-[11px] text-slate-500 mt-3 font-semibold uppercase tracking-wider">
                  Personalized link will be sent to your email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
