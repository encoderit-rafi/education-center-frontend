"use client";

import { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import api from "@/axios";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldContent,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Payment from "@/components/blocks/payment";

import { CheckCircle2, Info, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EXAM_PREPARATION_COURSES_DATA } from "@/data";
import { notFound, useSearchParams } from "next/navigation";
import Stepper from "@/components/stepper";
import { PriceDisplay } from "@/components/ui/price-display";

const bookingSchema = z.object({
  mockTestId: z.string().optional(),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  middleName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  address: z.string().optional(),
  country: z.string().optional(),
  paymentMethod: z.enum(["stripe", "paypal"]),
});

type BookingValues = z.infer<typeof bookingSchema>;

function CourseRegistrationForm({ className }: { className?: string }) {
  const searchParams = useSearchParams();
  const examId = searchParams.get("examId");
  const courseId = searchParams.get("courseId");
  const priceParam = searchParams.get("price");
  const currencyParam = searchParams.get("currency");

  const data = EXAM_PREPARATION_COURSES_DATA.find((item) => item.id === examId);

  if (!data) {
    notFound();
  }

  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      paymentMethod: "stripe",
    },
  });

  const selectedPaymentMethod = watch("paymentMethod");

  const PRICE = Number(priceParam) || 0;

  // Derive Fee Breakdown
  const courseData = data?.courses.find((c) => c.id === courseId);
  const base_price = PRICE;
  const discountPercentage = courseData?.general_discount || 0;
  const discount_amount = (base_price * discountPercentage) / 100;
  const total_amount = base_price - discount_amount;

  const mutation = useMutation({
    mutationFn: (newBooking: Record<string, unknown>) => {
      return api.post("/course-bookings", newBooking);
    },
    onSuccess: () => {
      setIsSuccess(true);
    },
    onError: (error) => {
      console.error("Booking failed:", error);
      // In a real scenario, you'd show a toast or error message here.
    },
  });

  const onSubmit = (formData: BookingValues) => {
    console.log("Booking Data:", formData);

    const payload = {
      ...formData,
      first_name: formData.firstName,
      middle_name: formData.middleName,
      last_name: formData.lastName,
      course_id: courseId || "",
      sub_course_id: courseId || "", // Assuming sub_course_id is mapped from courseId or examId if missing
      package_id: examId || "", // Using examId as package_id as a fallback
      base_price: base_price,
      discount_amount: discount_amount,
      total_amount: total_amount,
      payment_methods: formData.paymentMethod,
    };

    mutation.mutate(payload, {
      onSuccess: (res) => {
        console.log("👉 ~ onSubmit ~ res:", res);
        // setIsSuccess(true);
        //CODE HERE
      },
      onError: (error) => {
        console.error("Booking failed:", error);
        // In a real scenario, you'd show a toast or error message here.
      },
    });
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-[2.5rem] p-10 text-center space-y-6 max-w-2xl mx-auto shadow-2xl animate-in zoom-in-95 duration-500 my-12">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl font-headline font-black text-emerald-900 tracking-tight">
            Booking Confirmed
          </h2>
          <p className="text-emerald-700/80 text-base leading-relaxed font-medium">
            Your registration for the <strong>{data.name}</strong> preparation
            course has been received. Check your email for further instructions
            and your enrollment details.
          </p>
        </div>
        <button
          onClick={() => setIsSuccess(false)}
          className="px-10 py-3 bg-emerald-600 text-white font-headline font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 base-px base-py">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl text-center font-black leading-[1.1] tracking-tight text-slate-900 lg:text-4xl xl:text-5xl mb-4">
            {data.name}{" "}
            <span className="text-primary">Course Registration</span>
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={cn("space-y-5 base-px base-py", className)}
          >
            <section className="grid md:grid-cols-2 gap-5">
              <div className="space-y-3">
                <Stepper step={1}>Your Information</Stepper>
                <div className="grid grid-cols-2 gap-3">
                  <Field>
                    <FieldLabel required>First Name</FieldLabel>
                    <FieldContent>
                      <Input
                        type="text"
                        placeholder="John"
                        {...register("firstName")}
                      />
                      <FieldError errors={[errors.firstName]} />
                    </FieldContent>
                  </Field>
                  <Field>
                    <FieldLabel>Middle Name</FieldLabel>
                    <FieldContent>
                      <Input
                        type="text"
                        placeholder="William"
                        {...register("middleName")}
                      />
                      <FieldError errors={[errors.middleName]} />
                    </FieldContent>
                  </Field>
                  <Field className="col-span-2">
                    <FieldLabel>Last Name</FieldLabel>
                    <FieldContent>
                      <Input
                        type="text"
                        placeholder="Doe"
                        {...register("lastName")}
                      />
                      <FieldError errors={[errors.lastName]} />
                    </FieldContent>
                  </Field>
                </div>
                <Field>
                  <FieldLabel required>Email</FieldLabel>
                  <FieldContent>
                    <Input
                      type="email"
                      placeholder="example@gmail.com"
                      {...register("email")}
                    />
                    <FieldError errors={[errors.email]} />
                  </FieldContent>
                </Field>
                <div className="grid grid-cols-2 gap-3">
                  <Field>
                    <FieldLabel>Phone Number</FieldLabel>
                    <FieldContent>
                      <Input
                        type="tel"
                        placeholder="+971 50 123 4567"
                        {...register("phone")}
                      />
                      <FieldError errors={[errors.phone]} />
                    </FieldContent>
                  </Field>
                  <Field>
                    <FieldLabel>Country</FieldLabel>
                    <FieldContent>
                      <Input
                        type="text"
                        placeholder="United Arab Emirates"
                        {...register("country")}
                      />
                      <FieldError errors={[errors.country]} />
                    </FieldContent>
                  </Field>
                </div>
                <Field>
                  <FieldLabel>Address</FieldLabel>
                  <FieldContent>
                    <Input
                      type="text"
                      placeholder="123 Main St, City"
                      {...register("address")}
                    />
                    <FieldError errors={[errors.address]} />
                  </FieldContent>
                </Field>

                <div className="text-primary border border-dashed border-primary/40 p-3 bg-primary/5 rounded-md flex items-start gap-2">
                  <Info className="w-4 h-4 mt-0.5" />
                  <p className="text-[11px] font-medium leading-relaxed">
                    We will send your credentials and link to this email address
                    24 hours before your selected slot.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <Stepper step={2}>
                  Payment{" "}
                  <span className="bg-primary/10 px-3 py-1 rounded-full text-sm font-semibold text-primary">
                    <PriceDisplay amount={total_amount} />
                  </span>
                </Stepper>

                {/* Fee Breakdown */}
                <div className="bg-white border rounded-lg p-4 space-y-2 mb-4 text-sm">
                  <div className="flex justify-between items-center text-slate-600">
                    <span>Base Price</span>
                    <span>
                      <PriceDisplay amount={base_price} />
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-slate-600">
                    <span>Discount</span>
                    <span className="text-emerald-600">
                      - <PriceDisplay amount={discount_amount} />
                    </span>
                  </div>

                  <div className="pt-2 mt-2 border-t flex justify-between items-center font-bold text-slate-900 text-base">
                    <span>Total</span>
                    <span>
                      <PriceDisplay amount={total_amount} />
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <FieldLabel required>Payment Method</FieldLabel>
                  <div className="grid grid-cols-2 gap-3">
                    <label
                      className={cn(
                        "flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-colors",
                        selectedPaymentMethod === "stripe"
                          ? "border-primary bg-primary/5"
                          : "hover:bg-slate-50",
                      )}
                    >
                      <input
                        type="radio"
                        value="stripe"
                        {...register("paymentMethod")}
                        className="sr-only"
                      />
                      <div
                        className={cn(
                          "w-4 h-4 rounded-full border flex items-center justify-center",
                          selectedPaymentMethod === "stripe"
                            ? "border-primary"
                            : "border-slate-300",
                        )}
                      >
                        {selectedPaymentMethod === "stripe" && (
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        )}
                      </div>
                      <span className="font-semibold text-sm">
                        Credit Card (Stripe)
                      </span>
                    </label>
                    <label
                      className={cn(
                        "flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-colors",
                        selectedPaymentMethod === "paypal"
                          ? "border-primary bg-primary/5"
                          : "hover:bg-slate-50",
                      )}
                    >
                      <input
                        type="radio"
                        value="paypal"
                        {...register("paymentMethod")}
                        className="sr-only"
                      />
                      <div
                        className={cn(
                          "w-4 h-4 rounded-full border flex items-center justify-center",
                          selectedPaymentMethod === "paypal"
                            ? "border-primary"
                            : "border-slate-300",
                        )}
                      >
                        {selectedPaymentMethod === "paypal" && (
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        )}
                      </div>
                      <span className="font-semibold text-sm">PayPal</span>
                    </label>
                  </div>
                  <FieldError errors={[errors.paymentMethod]} />
                </div>

                <Button
                  type="submit"
                  className="w-full mt-6 py-3"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Processing..." : "Purchase"}
                </Button>
                {mutation.isError && (
                  <p className="text-red-500 text-sm mt-2">
                    There was an error processing your booking. Please try
                    again.
                  </p>
                )}
              </div>
            </section>
          </form>
        </div>
      </section>
    </div>
  );
}

export default function CourseRegistration() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CourseRegistrationForm />
    </Suspense>
  );
}
