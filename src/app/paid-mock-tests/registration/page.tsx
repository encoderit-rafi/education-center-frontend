"use client";

import { Suspense, useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { cn, omitEmpty } from "@/lib/utils";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldContent,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import paid_mock_tests from "@/lib/demo-data/paid-mock-tests";

import {
  CheckCircle2,
  Info,
  Calendar as CalendarIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { notFound, useSearchParams } from "next/navigation";
import Stepper from "@/components/stepper";
import { PriceDisplay } from "@/components/ui/price-display";
import { useQuery, useMutation } from "@tanstack/react-query";
import api from "@/axios";

const baseBookingSchema = z.object({
  mockTestId: z.string().min(1, "Please select a mock test"),
  subExamId: z.string().optional(),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  date: z.date({
    message: "Please select a date",
  }),
  timeSlot: z.string().min(1, "Please select a time slot"),
  paymentMethod: z.enum(["stripe", "paypal"]),
});

type BookingValues = z.infer<typeof baseBookingSchema>;

const createBookingSchema = (variants?: string[] | null) =>
  baseBookingSchema.superRefine((data, ctx) => {
    if (variants && variants.length > 0 && !data.subExamId) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please select an exam variant",
        path: ["subExamId"],
      });
    }
  });

interface MockTestBookingFormProps {
  initialMockTestId?: string;
  className?: string;
}

function PaidMockTestRegistrationForm({
  initialMockTestId,
  className,
}: MockTestBookingFormProps) {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const { data: apiResponse, isLoading } = useQuery({
    queryKey: ["paid-mock-test", id],
    queryFn: async () => {
      if (!id) return null;
      const res = await api.get(`/mock-tests/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  const data = apiResponse?.data;

  const [isSuccess, setIsSuccess] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const schema = useMemo(() => createBookingSchema(data?.variant), [data?.variant]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BookingValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      mockTestId: id || "",
      paymentMethod: "stripe",
    },
  });

  const selectedDate = watch("date");
  const selectedTime = watch("timeSlot");
  const selectedPaymentMethod = watch("paymentMethod");

  const PRICE = data ? parseFloat(data.price || "350") : 350;
  const CURRENCY = "AED";

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
      api.post("/mock-test-bookings", newBooking),
    onSuccess: (response) => {
      const bookingId = response.data?.data?.id;
      paymentMutation.mutate({
        booking_type: "mock_test_booking",
        booking_id: bookingId,
        provider: selectedPaymentMethod,
        amount: PRICE,
        currency: "AED",
      });
    },
    onError: (error) => {
      console.error("Booking failed:", error);
    },
  });

  const onSubmit = (formData: BookingValues) => {
    const payload = {
      mock_test_id: id || formData.mockTestId || "",
      sub_exam_id: formData.subExamId || null,
      first_name: formData.firstName,
      last_name: formData.lastName || "",
      email: formData.email,
      date: formData.date ? format(formData.date, "yyyy-MM-dd") : null,
      time_slot: formData.timeSlot,
      base_price: PRICE,
      discount_amount: 0,
      total_amount: PRICE,
      payment_methods: formData.paymentMethod,
    };

    mutation.mutate(omitEmpty(payload));
  };

  if (isLoading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center bg-slate-50 animate-pulse">
        <div className="text-slate-500 font-medium">Loading test details...</div>
      </div>
    );
  }

  if (!data) {
    notFound();
  }

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
            Your &quot;{data.name}&quot; Mock Test has been successfully scheduled for{" "}
            {selectedDate ? format(selectedDate, "PPP") : ""} at {selectedTime}.
            Check your email for testing credentials.
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
    <div className=" bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 base-px base-py">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl text-center font-black leading-[1.1] tracking-tight text-slate-900 lg:text-4xl xl:text-5xl mb-4">
            {data.name}{" "}
            <span className="text-primary">Paid Mock Test Registration</span>
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

                {data?.variant && Array.isArray(data.variant) && data.variant.length > 0 && (
                  <Field>
                    <FieldLabel required>Exam Variant</FieldLabel>
                    <FieldContent>
                      <Select
                        onValueChange={(val: string | null) => {
                          if (val) setValue("subExamId", val);
                        }}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select variant" />
                        </SelectTrigger>
                        <SelectContent>
                          {data.variant.map((variantName: string) => (
                            <SelectItem key={variantName} value={variantName}>
                              {variantName}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FieldError errors={[errors.subExamId]} />
                    </FieldContent>
                  </Field>
                )}

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
                <Field>
                  <FieldLabel required>Test Date</FieldLabel>
                  <FieldContent>
                    <Popover
                      open={isCalendarOpen}
                      onOpenChange={setIsCalendarOpen}
                    >
                      <PopoverTrigger
                        render={
                          <Button
                            variant="ghost"
                            className={cn(
                              "w-full justify-start text-left font-normal rounded-md border border-slate-200  px-3 py-2 text-sm transition-all outline-none  focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/30 shadow-none hover:shadow-none hover:bg-transparent",
                              !selectedDate && "text-slate-400",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4 text-slate-400" />
                            {selectedDate ? (
                              format(selectedDate, "PPP")
                            ) : (
                              <span>Select test date</span>
                            )}
                          </Button>
                        }
                      />
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={(date) => {
                            setValue("date", date as Date);
                            setIsCalendarOpen(false);
                          }}
                          disabled={(date) =>
                            date <= new Date() || date < new Date("1900-01-01")
                          }
                        />
                      </PopoverContent>
                    </Popover>
                    <FieldError errors={[errors.date]} />
                  </FieldContent>
                </Field>
                <div className="text-primary border border-dashed border-primary/40 p-3 bg-primary/5 rounded-md flex items-start gap-2">
                  <Info className="w-4 h-4 mt-0.5" />
                  <p className="text-[11px] font-medium leading-relaxed">
                    We will send your testing credentials and link to this email
                    address 24 hours before your selected slot.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <Stepper step={2}>
                  Payment{" "}
                  <span className="bg-primary/10 px-3 py-1 rounded-full text-sm font-semibold text-primary">
                    <PriceDisplay amount={PRICE} />
                  </span>
                </Stepper>

                <div className="space-y-3">
                  <FieldLabel required>Payment Method</FieldLabel>
                  <RadioGroup
                    value={selectedPaymentMethod}
                    onValueChange={(val) => setValue("paymentMethod", val as "stripe" | "paypal")}
                    className="grid grid-cols-2 gap-3"
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
                      <RadioGroupItem
                        value="stripe"
                        id="payment-stripe"
                      />
                      <span className="font-semibold text-sm">
                        Credit Card (Stripe)
                      </span>
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
                      <RadioGroupItem
                        value="paypal"
                        id="payment-paypal"
                      />
                      <span className="font-semibold text-sm">PayPal</span>
                    </label>
                  </RadioGroup>
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

export default function PaidMockTestRegistration() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaidMockTestRegistrationForm />
    </Suspense>
  );
}
