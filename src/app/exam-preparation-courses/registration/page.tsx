"use client";

import { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn, omitEmpty } from "@/lib/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import api from "@/axios";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldContent,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Payment from "@/components/blocks/payment";
import { PhoneInput } from "@/components/ui/phone-input";
import { CountryDropdown } from "@/components/ui/country-dropdown";

import { CheckCircle2, Info, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import Stepper from "@/components/stepper";
import { PriceDisplay } from "@/components/ui/price-display";
import Image from "next/image";

const bookingSchema = z.object({
  mockTestId: z.string().optional(),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Family name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "Emirate / City is required"),
  country: z.string().min(1, "Country is required"),
  paymentMethod: z.enum(["stripe", "paypal"]),
});

type BookingValues = z.infer<typeof bookingSchema>;
type CoursePackage = {
  id: string;
  courseId: string;
  subCourseId: string | null;

  name: string;
  slug: string;
  description: string | null;

  price: string;

  discountType: "PERCENTAGE" | "FIXED" | string;
  discountValue: string;

  specialDiscountType: "PERCENTAGE" | "FIXED" | string;
  specialDiscount: string;

  vatRate: string;

  deliveryType: "CLASSROOM" | "ONLINE" | "HYBRID" | string;

  duration: string;
  noOfDaysPerWeek: number;
  totalHours: string;

  requirements: string | null;
  image: string | null;
  scheduleInfo: string | null;
  bestFor: string | null;
  classSize: string | number | null;

  isActive: boolean;
  orderIndex: number;
};
function CourseRegistrationForm({ className }: { className?: string }) {
  const searchParams = useSearchParams();
  // examId = course slug (e.g. "ielts"), courseId = package UUID
  const courseSlug = searchParams.get("examId");
  const packageId = searchParams.get("courseId");
  const priceParam = searchParams.get("price");

  // Fetch course details from API
  const { data: courseData } = useQuery({
    queryKey: ["course", courseSlug],
    queryFn: async () => {
      const res = await api.get<{
        data: { id: string; name: string; packages: CoursePackage[] };
      }>(`/courses/${courseSlug}`);
      return res.data.data;
    },
    enabled: !!courseSlug,
  });
  console.log("👉 ~ CourseRegistrationForm ~ courseData:", courseData);

  const courseName = courseData?.name ?? courseSlug?.toUpperCase() ?? "";
  const packageData = courseData?.packages?.find((p) => p.id === packageId);
  console.log("👉 ~ CourseRegistrationForm ~ packageData:", packageData);

  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      paymentMethod: "stripe",
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: "",
    },
  });

  const selectedPaymentMethod = watch("paymentMethod");
  const formData = watch();

  // Fee breakdown — price comes pre-calculated from the course page
  const base_price = Number(priceParam) || 0;
  const discount_amount = 0; // discount already applied upstream
  const total_amount = base_price - discount_amount;

  const paymentMutation = useMutation({
    mutationFn: (body: Record<string, unknown>) =>
      api.post("/payments/initiate", body),
    onSuccess: (response) => {
      const checkoutUrl = response.data?.data?.checkoutUrl;
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      } else {
        console.error("Checkout URL not found in response");
      }
    },
    onError: (error) => {
      console.error("Payment intent failed:", error);
    },
  });

  const mutation = useMutation({
    mutationFn: (newBooking: Record<string, unknown>) =>
      api.post("/course-bookings", newBooking),
    onSuccess: (response) => {
      const bookingId = response.data?.data?.id;
      paymentMutation.mutate({
        booking_type: "course_booking",
        booking_id: bookingId,
        provider: selectedPaymentMethod,
        amount: total_amount,
        currency: "AED",
      });
    },
    onError: (error) => {
      console.error("Booking failed:", error);
    },
  });

  const onSubmit = (formData: BookingValues) => {
    const payload = {
      course_id: courseData?.id || courseSlug || "",
      sub_course_id: null,
      package_id: packageId || "",
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      city: formData.city,
      address: formData.address,
      base_price,
      discount_amount,
      total_amount,
      payment_methods: formData.paymentMethod,
    };

    mutation.mutate(omitEmpty(payload));
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
            Your registration for the <strong>{courseName}</strong> preparation
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
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl mb-12 text-center font-black leading-[1.1] tracking-tight text-slate-900 lg:text-4xl xl:text-5xl">
            {courseName}{" "}
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
                  <Field data-invalid={!!errors.firstName}>
                    <FieldLabel required>First Name</FieldLabel>
                    <FieldContent>
                      <Input
                        type="text"
                        placeholder="John"
                        aria-invalid={!!errors.firstName}
                        {...register("firstName")}
                      />
                      <FieldError errors={[errors.firstName]} />
                    </FieldContent>
                  </Field>
                  <Field data-invalid={!!errors.middleName}>
                    <FieldLabel>Middle Name</FieldLabel>
                    <FieldContent>
                      <Input
                        type="text"
                        placeholder="William"
                        aria-invalid={!!errors.middleName}
                        {...register("middleName")}
                      />
                      <FieldError errors={[errors.middleName]} />
                    </FieldContent>
                  </Field>
                  <Field className="col-span-2" data-invalid={!!errors.lastName}>
                    <FieldLabel required>Family Name</FieldLabel>
                    <FieldContent>
                      <Input
                        type="text"
                        placeholder="Doe"
                        aria-invalid={!!errors.lastName}
                        {...register("lastName")}
                      />
                      <FieldError errors={[errors.lastName]} />
                    </FieldContent>
                  </Field>
                </div>
                <Field data-invalid={!!errors.email}>
                  <FieldLabel required>Email</FieldLabel>
                  <FieldContent>
                    <Input
                      type="email"
                      placeholder="example@gmail.com"
                      aria-invalid={!!errors.email}
                      {...register("email")}
                    />
                    <FieldError errors={[errors.email]} />
                  </FieldContent>
                </Field>
                <div className="grid grid-cols-2 gap-3">
                  <Field data-invalid={!!errors.phone}>
                    <FieldLabel required>Phone Number</FieldLabel>
                    <FieldContent>
                      <PhoneInput
                        name="phone"
                        value={formData.phone}
                        onChange={(val) => setValue("phone", val, { shouldValidate: true })}
                        defaultCountry="AE"
                        aria-invalid={!!errors.phone}
                      />
                      <FieldError errors={[errors.phone]} />
                    </FieldContent>
                  </Field>
                  <Field data-invalid={!!errors.country}>
                    <FieldLabel required>Country</FieldLabel>
                    <FieldContent>
                      <CountryDropdown
                        name="country"
                        placeholder="Search country..."
                        value={formData.country}
                        aria-invalid={!!errors.country}
                        onChange={(country) => setValue("country", country.name, { shouldValidate: true })}
                      />
                      <FieldError errors={[errors.country]} />
                    </FieldContent>
                  </Field>
                </div>
                <Field data-invalid={!!errors.address}>
                  <FieldLabel required>Address</FieldLabel>
                  <FieldContent>
                    <Input
                      type="text"
                      placeholder="123 Main St"
                      aria-invalid={!!errors.address}
                      {...register("address")}
                    />
                    <FieldError errors={[errors.address]} />
                  </FieldContent>
                </Field>
                <Field data-invalid={!!errors.city}>
                  <FieldLabel required>Emirate / City</FieldLabel>
                  <FieldContent>
                    <Input
                      type="text"
                      placeholder="Dubai"
                      aria-invalid={!!errors.city}
                      {...register("city")}
                    />
                    <FieldError errors={[errors.city]} />
                  </FieldContent>
                </Field>
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
                    <span>Course Price</span>
                    <span>
                      <PriceDisplay amount={base_price} />
                    </span>
                  </div>
                  {/* <div className="flex justify-between items-center text-slate-600">
                    <span>Discount</span>
                    <span className="text-emerald-600">
                      {discount_amount > 0 ? (
                        <>
                          - <PriceDisplay amount={discount_amount} />
                        </>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </span>
                  </div> */}

                  <div className="pt-2 mt-2 border-t flex justify-between items-center font-bold text-slate-900 text-base">
                    <span>Total</span>
                    <span>
                      <PriceDisplay amount={total_amount} />
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <FieldLabel required>Payment Method</FieldLabel>
                  <RadioGroup
                    value={selectedPaymentMethod}
                    onValueChange={(val) =>
                      setValue("paymentMethod", val as "stripe" | "paypal")
                    }
                    className="grid gap-3"
                  >
                    <label
                      htmlFor="payment-stripe"
                      className={cn(
                        "flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-colors",
                        selectedPaymentMethod === "stripe"
                          ? "border-primary bg-primary/5"
                          : "hover:bg-slate-50",
                      )}
                    >
                      <RadioGroupItem value="stripe" id="payment-stripe" />
                      {/* <span className="font-semibold text-sm">
                        Credit Card (Stripe)
                      </span> */}
                      <div className="w-full flex items-center justify-between gap-2 ">
                        <span className="font-semibold">Credit/Debit Card</span>
                        <Image
                          src="/images/cards.png"
                          alt="Stripe"
                          width={50}
                          height={50}
                        />
                      </div>
                    </label>
                    <label
                      htmlFor="payment-paypal"
                      className={cn(
                        "flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-colors",
                        selectedPaymentMethod === "paypal"
                          ? "border-primary bg-primary/5"
                          : "hover:bg-slate-50",
                      )}
                    >
                      <RadioGroupItem value="paypal" id="payment-paypal" />
                      {/* <span className="font-semibold text-sm">PayPal</span> */}
                      <Image
                        src="/images/paypal-logo.png"
                        alt="PayPal"
                        width={80}
                        height={80}
                      />
                    </label>
                  </RadioGroup>
                  <FieldError errors={[errors.paymentMethod]} />
                </div>

                <Button
                  type="submit"
                  className="w-full mt-6 py-3"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Processing..." : "I Accept, Pay"}
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
