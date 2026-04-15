"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Field, FieldError } from "@/components/ui/field";
import { useState } from "react";
import { cn } from "@/lib/utils";

const bookingSchema = z.object({
  examType: z.enum(["IELTS", "OET", "PTE"], {
    message: "Please select an examination type.",
  }),
  date: z.string().min(1, { message: "Please select a test date." }),
  timeSlot: z.string().min(1, { message: "Please select a time slot." }),
  paymentMethod: z.enum(["credit_card", "digital_wallet"], {
    message: "Please select a secure payment method.",
  }),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function MockTestBookingForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      date: "",
      timeSlot: "",
    },
  });

  const selectedExam = watch("examType");
  const selectedDate = watch("date");
  const selectedTimeSlot = watch("timeSlot");
  const selectedPayment = watch("paymentMethod");

  const getExamPrice = (exam?: string) => {
    switch (exam) {
      case "IELTS":
        return 45;
      case "OET":
        return 60;
      case "PTE":
        return 50;
      default:
        return 0;
    }
  };

  const totalPrice = getExamPrice(selectedExam).toFixed(2);

  const onSubmit = async (data: BookingFormValues) => {
    console.log("Booking processed:", data);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-3xl p-16 text-center space-y-6 max-w-2xl mx-auto shadow-sm">
        <span className="material-symbols-outlined text-7xl text-emerald-500">task_alt</span>
        <h2 className="text-3xl font-headline font-extrabold text-emerald-900">Booking Confirmed!</h2>
        <p className="text-emerald-700 text-lg">
          Your mock test has been successfully scheduled. We've sent a detailed confirmation email and calendar invite.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Left Column: Course Selection & Payment */}
      <div className="lg:col-span-7 space-y-12">
        {/* Section: Course Selection */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
              1
            </span>
            <h2 className="text-2xl font-bold">Select Examination</h2>
          </div>
          <Field data-invalid={!!errors.examType}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* IELTS Card */}
              <div
                onClick={() => setValue("examType", "IELTS", { shouldValidate: true })}
                className={cn(
                  "p-6 rounded-xl transition-all duration-300 cursor-pointer border-2",
                  selectedExam === "IELTS"
                    ? "bg-red-50 border-primary ring-4 ring-primary/10"
                    : "bg-surface border-transparent hover:bg-slate-50"
                )}
              >
                <div className={cn("font-bold text-xs tracking-widest uppercase mb-2", selectedExam === "IELTS" ? "text-primary" : "text-slate-400")}>
                  Most Popular
                </div>
                <h3 className="text-xl font-bold text-secondary mb-1">IELTS</h3>
                <div className="text-3xl font-black text-secondary mb-4">$45.00</div>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                  Full academic simulation including all four modules.
                </p>
                <div
                  className={cn(
                    "w-full font-bold py-3 rounded-lg flex items-center justify-center transition-colors text-sm",
                    selectedExam === "IELTS"
                      ? "bg-primary text-white gap-2"
                      : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                  )}
                >
                  {selectedExam === "IELTS" ? (
                    <>
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                        check_circle
                      </span>
                      Selected
                    </>
                  ) : (
                    "Select"
                  )}
                </div>
              </div>

              {/* OET Card */}
              <div
                onClick={() => setValue("examType", "OET", { shouldValidate: true })}
                className={cn(
                  "p-6 rounded-xl transition-all duration-300 cursor-pointer border-2",
                  selectedExam === "OET"
                    ? "bg-red-50 border-primary ring-4 ring-primary/10"
                    : "bg-surface border-transparent hover:bg-slate-50"
                )}
              >
                <div className={cn("font-bold text-xs tracking-widest uppercase mb-2", selectedExam === "OET" ? "text-primary" : "text-slate-400")}>
                  Healthcare
                </div>
                <h3 className="text-xl font-bold text-secondary mb-1">OET</h3>
                <div className="text-3xl font-black text-secondary mb-4">$60.00</div>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                  Profession-specific English test for medical workers.
                </p>
                <div
                  className={cn(
                    "w-full font-bold py-3 rounded-lg flex items-center justify-center transition-colors text-sm",
                    selectedExam === "OET"
                      ? "bg-primary text-white gap-2"
                      : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                  )}
                >
                  {selectedExam === "OET" ? (
                    <>
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                        check_circle
                      </span>
                      Selected
                    </>
                  ) : (
                    "Select"
                  )}
                </div>
              </div>

              {/* PTE Card */}
              <div
                onClick={() => setValue("examType", "PTE", { shouldValidate: true })}
                className={cn(
                  "p-6 rounded-xl transition-all duration-300 cursor-pointer border-2",
                  selectedExam === "PTE"
                    ? "bg-red-50 border-primary ring-4 ring-primary/10"
                    : "bg-surface border-transparent hover:bg-slate-50"
                )}
              >
                <div className={cn("font-bold text-xs tracking-widest uppercase mb-2", selectedExam === "PTE" ? "text-primary" : "text-slate-400")}>
                  Pearson
                </div>
                <h3 className="text-xl font-bold text-secondary mb-1">PTE</h3>
                <div className="text-3xl font-black text-secondary mb-4">$50.00</div>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                  AI-scored academic English proficiency test.
                </p>
                <div
                  className={cn(
                    "w-full font-bold py-3 rounded-lg flex items-center justify-center transition-colors text-sm",
                    selectedExam === "PTE"
                      ? "bg-primary text-white gap-2"
                      : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                  )}
                >
                  {selectedExam === "PTE" ? (
                    <>
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                        check_circle
                      </span>
                      Selected
                    </>
                  ) : (
                    "Select"
                  )}
                </div>
              </div>
            </div>
            {errors.examType && <FieldError className="mt-2">{errors.examType.message}</FieldError>}
          </Field>
        </section>

        {/* Section: Payment Methods */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
              3
            </span>
            <h2 className="text-2xl font-bold">Secure Payment</h2>
          </div>
          <div className="bg-slate-50 p-8 rounded-xl space-y-6">
            <Field data-invalid={!!errors.paymentMethod}>
              <div className="grid grid-cols-2 gap-4">
                <div
                  onClick={() => setValue("paymentMethod", "credit_card", { shouldValidate: true })}
                  className={cn(
                    "p-6 rounded-lg border-2 transition-all flex flex-col items-center gap-3 cursor-pointer",
                    selectedPayment === "credit_card"
                      ? "border-primary bg-white ring-2 ring-primary/10"
                      : "border-transparent bg-white hover:border-slate-300"
                  )}
                >
                  <img
                    alt="Stripe"
                    className={cn("h-8 transition-all", selectedPayment === "credit_card" ? "grayscale-0" : "grayscale")}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtc74ic5afrunBrWiUmBpb2se_7U_oPpX4vuh9Uy1p9w0qfbNuBldu14CBon1S9hHGKaw1TuhIz8JvHwxlap5U2gwlsLmpEdCwn_FH1_xiPfhp3ybI_KSEK19gahsU5z_7Eu_b4PwWEcFJdS4kM52LBRf4HWPvnspArBO4_1iFsjtDLkdKhBtqaOuQJZUxfVKfeMBKiPKsObdymkK8TxR23UCQPDuCV4t1KWK8XYjShdW8adssIn_0MeJ_iDBYC_SxlMiOMWRJwr98"
                  />
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    Credit Card
                  </span>
                </div>
                <div
                  onClick={() => setValue("paymentMethod", "digital_wallet", { shouldValidate: true })}
                  className={cn(
                    "p-6 rounded-lg border-2 transition-all flex flex-col items-center gap-3 cursor-pointer",
                    selectedPayment === "digital_wallet"
                      ? "border-primary bg-white ring-2 ring-primary/10"
                      : "border-transparent bg-white hover:border-slate-300"
                  )}
                >
                  <img
                    alt="PayPal"
                    className={cn("h-8 transition-all", selectedPayment === "digital_wallet" ? "grayscale-0" : "grayscale")}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4adgOoSa5jNfJOyss8El_UyWRWArAhCv-vtBe2A4iEHySu2Q56oMSi0Zd1SeGIyiPMDW89TAN3oJyuBo6myYhFDIqwCKf8LCajsVCQ8op_jrfp3jZXC93A1L4PgSwkYbzcp0ciC528834k3_8NSD69Ye2r60pqba45gmpKkrbw09Ikfa1VKR_Fzvd4jsiGXwdDAo8XW156tY4WwpEKFe3EbfNo4s_rFTFkqbMUPkPQErY9xvyweTGj4oRSPbvbyhNhJ2QKBmDqovN"
                  />
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    Digital Wallet
                  </span>
                </div>
              </div>
              {errors.paymentMethod && <FieldError>{errors.paymentMethod.message}</FieldError>}
            </Field>

            <div className="p-4 bg-white rounded-lg flex items-center gap-4 border border-slate-100 shadow-sm">
              <span className="material-symbols-outlined text-primary">lock</span>
              <p className="text-sm text-slate-500 leading-tight">
                Your payment information is encrypted and processed through secure
                PCI-compliant gateways.
              </p>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full crimson-gradient text-white font-bold py-5 rounded-lg text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Processing..." : "Proceed to Checkout"}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </section>
      </div>

      {/* Right Column: Date Selection & Summary */}
      <div className="lg:col-span-5">
        <div className="sticky top-28 space-y-8">
          {/* Section: Date Selection */}
          <section className="bg-white border border-slate-100 p-8 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                2
              </span>
              <h2 className="text-2xl font-bold">Select Date & Time</h2>
            </div>
            
            {/* Interactive Calendar (Static Repr) */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg text-secondary">November 2024</h3>
                <div className="flex gap-2">
                  <button type="button" className="p-2 rounded-full hover:bg-slate-100 transition-colors">
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                  </button>
                  <button type="button" className="p-2 rounded-full hover:bg-slate-100 transition-colors">
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-slate-400 mb-2">
                <span>MON</span>
                <span>TUE</span>
                <span>WED</span>
                <span>THU</span>
                <span>FRI</span>
                <span>SAT</span>
                <span>SUN</span>
              </div>
              <Field data-invalid={!!errors.date}>
                <div className="grid grid-cols-7 gap-2">
                  <div className="p-3 text-slate-300 text-center">28</div>
                  <div className="p-3 text-slate-300 text-center">29</div>
                  <div className="p-3 text-slate-300 text-center">30</div>
                  <div className="p-3 text-slate-300 text-center">31</div>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28].map(
                    (day) => {
                      const isPast = day > 19;
                      const dateStr = `Nov ${day.toString().padStart(2, '0')}, 2024`;
                      const isSelected = selectedDate === dateStr;

                      return (
                        <button
                          key={day}
                          type="button"
                          onClick={() => {
                            if (!isPast) setValue("date", dateStr, { shouldValidate: true });
                          }}
                          className={cn(
                            "p-3 font-bold rounded-lg transition-colors",
                            isSelected
                              ? "bg-primary text-white"
                              : isPast
                              ? "text-primary hover:bg-slate-50 cursor-pointer"
                              : "hover:bg-slate-100 cursor-pointer text-slate-700"
                          )}
                        >
                          {day}
                        </button>
                      );
                    }
                  )}
                </div>
                {errors.date && <FieldError className="mt-2">{errors.date.message}</FieldError>}
              </Field>
            </div>

            {/* Time Slot Selection */}
            <div>
              <h3 className="font-bold mb-4 text-secondary">Available Time Slots</h3>
              <Field data-invalid={!!errors.timeSlot}>
                <div className="grid grid-cols-2 gap-3">
                  {["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"].map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setValue("timeSlot", time, { shouldValidate: true })}
                      className={cn(
                        "py-3 px-4 border rounded-lg text-sm transition-colors cursor-pointer",
                        selectedTimeSlot === time
                          ? "border-primary bg-primary text-white font-bold"
                          : "border-slate-200 font-medium hover:bg-slate-50 text-slate-700"
                      )}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                {errors.timeSlot && <FieldError className="mt-2">{errors.timeSlot.message}</FieldError>}
              </Field>
            </div>
          </section>

          {/* Order Summary Floating Card */}
          <div className="bg-secondary text-white p-8 rounded-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-16 -mt-16"></div>
            <h3 className="text-xl font-bold mb-6 flex items-center justify-between relative z-10">
              Order Summary
              <span className="text-xs px-2 py-1 bg-white/10 rounded uppercase tracking-widest font-normal">
                Details
              </span>
            </h3>
            <div className="space-y-4 mb-8 relative z-10">
              <div className="flex justify-between text-slate-400">
                <span>{selectedExam ? `${selectedExam} Academic Mock` : "Selecting Exam..."}</span>
                <span className="text-white font-bold">${totalPrice}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Test Date</span>
                <span className="text-white font-bold">{selectedDate || "-"}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Time Slot</span>
                <span className="text-white font-bold">{selectedTimeSlot || "-"}</span>
              </div>
              <div className="h-px bg-white/10 my-4"></div>
              <div className="flex justify-between text-xl font-black">
                <span>Total Amount</span>
                <span className="text-red-400">${totalPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
