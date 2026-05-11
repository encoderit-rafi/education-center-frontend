"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
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
import { EXAM_FEES } from "../fees/page";

const bookingSchema = z.object({
  mockTestId: z.string().optional(),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  paymentMethod: z.literal("card"),
});

type BookingValues = z.infer<typeof bookingSchema>;

export default function CourseRegistration({
  className,
}: {
  className?: string;
}) {
  const searchParams = useSearchParams();
  const examId = searchParams.get("examId");
  const courseId = searchParams.get("courseId");
  const priceParam = searchParams.get("price");
  const currencyParam = searchParams.get("currency");

  const data = EXAM_FEES.find((item) => item.id === examId);

  if (!data) {
    notFound();
  }

  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      paymentMethod: "card",
    },
  });

  const onSubmit = (data: BookingValues) => {
    console.log("Booking Data:", data);
    setIsSuccess(true);
  };

  const PRICE = Number(priceParam) || 0;
  const CURRENCY = currencyParam || "AED";

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-[2.5rem] p-10 text-center space-y-6 max-w-2xl mx-auto shadow-2xl animate-in zoom-in-95 duration-500">
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
            <span className="text-primary">Workshop Registration</span>
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
                        placeholder="Jhon"
                        {...register("firstName")}
                      />
                      <FieldError errors={[errors.firstName]} />
                    </FieldContent>
                  </Field>
                  <Field>
                    <FieldLabel required>Last Name</FieldLabel>
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
                      type="text"
                      placeholder="example@gmail.com"
                      {...register("email")}
                    />
                    <FieldError errors={[errors.email]} />
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
                  Secure Payment{" "}
                  <span className="bg-primary/10 px-3 py-1 rounded-full text-sm font-semibold text-primary">
                    {PRICE}{" "}
                    <span className="font-normal text-xs">{CURRENCY}</span>
                  </span>
                </Stepper>
                <Payment amount={PRICE} currency={CURRENCY} />
                <Button type="submit" className="w-full mt-6 py-3">
                  Register
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </section>
          </form>
        </div>
      </section>
    </div>
  );
}
