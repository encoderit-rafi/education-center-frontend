"use client";

import { Suspense, useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTranslations } from "next-intl";
import { format } from "date-fns";
import { cn, omitEmpty } from "@/lib/utils";
import { VAT_PERCENT, calculateVat } from "@/lib/vat";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldContent,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { CheckCircle2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import Stepper from "@/components/stepper";
import { PriceDisplay } from "@/components/ui/price-display";
import { useQuery, useMutation } from "@tanstack/react-query";
import api from "@/axios";
import Image from "next/image";
import { PhoneInput } from "@/components/ui/phone-input";
import { CountryDropdown } from "@/components/ui/country-dropdown";

interface WorkshopDetail {
  id: string;
  courseId: string | null;
  name: string;
  slug: string;
  title: string;
  subTitle: string;
  shortDescription: string | null;
  description: string | null;
  logo: string | null;
  bannerImage: string | null;
  startTime: string | null;
  endTime: string | null;
  type: string;
  isActive: boolean;
  duration: string;
  price: string;
  discountValue: string;
  discountType: string;
  vatRate: string;
}

interface CourseDetail {
  id: string;
  name: string;
  description?: string;
  workshops: WorkshopDetail[];
}

const getBookingSchema = (t: (key: string) => string) =>
  z.object({
    firstName: z
      .string()
      .trim()
      .min(1, t("validation.firstNameRequired"))
      .min(2, t("validation.firstNameMin")),
    middleName: z.string().optional(),
    lastName: z
      .string()
      .trim()
      .min(1, t("validation.lastNameRequired")),
    email: z
      .string()
      .trim()
      .min(1, t("validation.emailRequired"))
      .email(t("validation.emailInvalid")),
    phone: z
      .string()
      .trim()
      .min(1, t("validation.phoneRequired")),
    address: z
      .string()
      .trim()
      .min(1, t("validation.addressRequired")),
    city: z
      .string()
      .trim()
      .min(1, t("validation.cityRequired")),
    country: z
      .string()
      .trim()
      .min(1, t("validation.countryRequired")),
    paymentMethod: z.enum(["stripe", "paypal"]),
  });

type BookingValues = z.infer<ReturnType<typeof getBookingSchema>>;

function WorkshopRegistrationForm({ className }: { className?: string }) {
  const t = useTranslations("WorkshopRegistration");
  const searchParams = useSearchParams();
  const examId = searchParams.get("examId"); // e.g. "ielts"
  const workshopId = searchParams.get("workshopId"); // workshop ID (UUID)
  const priceParam = searchParams.get("price");
  const typeParam = searchParams.get("workshop_type") || searchParams.get("type");

  const bookingSchema = useMemo(() => getBookingSchema(t), [t]);

  // Fetch course details (includes workshops array)
  const { data: courseData, isLoading } = useQuery({
    queryKey: ["course", examId],
    queryFn: async () => {
      const res = await api.get<{ data: CourseDetail }>(`/courses/${examId}`);
      return res.data.data;
    },
    enabled: !!examId,
  });

  // Derive the specific workshop from course's embedded workshops
  const workshop = courseData?.workshops?.find((w) => w.id === workshopId);

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

  // Calculate pricing based on dynamic workshop data
  const base_price = workshop
    ? parseFloat(workshop.price)
    : Number(priceParam) || 0;
  const discount_amount = workshop
    ? parseFloat(workshop.discountValue) || 0
    : 0;
  const subtotal = workshop
    ? workshop.discountType === "PERCENTAGE"
      ? Math.round(base_price * (1 - discount_amount / 100))
      : base_price - discount_amount
    : base_price;

  const selectedCountry = formData.country;
  const registrationType = (typeParam || workshop?.type || "").toLowerCase();
  const isInPerson = registrationType === "in-person";
  const isOnline = registrationType === "online";
  const isUae = selectedCountry === "United Arab Emirates";

  const vatAmount = isInPerson || (isOnline && isUae) ? calculateVat(subtotal) : 0;
  const total_amount = subtotal + vatAmount;

  const paymentMutation = useMutation({
    mutationFn: (body: Record<string, unknown>) =>
      api.post("/payments/initiate", body),
    onSuccess: (response) => {
      const checkoutUrl = response.data?.data?.checkoutUrl;
      if (checkoutUrl) {
        if (window.top && window.top !== window) {
          window.top.location.href = checkoutUrl;
        } else {
          window.location.href = checkoutUrl;
        }
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
      api.post("/workshop-bookings", newBooking),
    onSuccess: (response) => {
      const bookingId = response.data?.data?.id;
      paymentMutation.mutate({
        booking_type: "workshop_booking",
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
    const formattedDob = (formData as any).dateOfBirth
      ? typeof (formData as any).dateOfBirth === "string"
        ? (formData as any).dateOfBirth
        : format(new Date((formData as any).dateOfBirth), "yyyy-MM-dd")
      : undefined;

    const examInfoList = [
      { name: "firstName", label: "First Name", value: formData.firstName },
      ...(formData.middleName ? [{ name: "middleName", label: "Middle Name", value: formData.middleName }] : []),
      { name: "lastName", label: "Family Name", value: formData.lastName },
      { name: "email", label: "Email", value: formData.email },
      { name: "mobileNumber", label: "Phone Number", value: formData.phone },
      ...(formattedDob ? [{ name: "dateOfBirth", label: "Date of Birth", value: formattedDob }] : []),
      ...((formData as any).gender ? [{ name: "gender", label: "Gender", value: (formData as any).gender.charAt(0).toUpperCase() + (formData as any).gender.slice(1) }] : []),
      { name: "country", label: "Country", value: formData.country },
      { name: "city", label: "Town / City", value: formData.city },
      { name: "address", label: "Address", value: formData.address },
    ];

    const payload: Record<string, any> = {
      course_id: courseData?.id || "",
      workshop_id: workshop?.id || "",
      first_name: formData.firstName,
      middle_name: formData.middleName || "",
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      phone_number: formData.phone,
      mobile: formData.phone,
      date_of_birth: formattedDob,
      dob: formattedDob,
      gender: (formData as any).gender || undefined,
      sex: (formData as any).gender || undefined,
      country: formData.country,
      city: formData.city,
      address: formData.address,
      base_price,
      discount_amount:
        workshop?.discountType === "PERCENTAGE"
          ? Math.round(base_price * (discount_amount / 100))
          : discount_amount,
      total_amount,
      vat_amount: vatAmount,
      payment_methods: formData.paymentMethod,
      workshop_type: typeParam || "",
      form_data: {
        exam_info: examInfoList,
      },
      formData: {
        exam_info: examInfoList,
      },
    };

    mutation.mutate(omitEmpty(payload));
  };

  if (isLoading) {
    return (
      <div className="min-h-100 flex items-center justify-center bg-slate-50 animate-pulse">
        <div className="text-slate-500 font-medium">
          {t("loading")}
        </div>
      </div>
    );
  }

  const titleName = workshop?.name || t("workshopLabel");

  const formatWorkshopType = (type: string) => {
    const lower = type.toLowerCase();
    if (lower === "in-person") return t("types.inPerson");
    if (lower === "online") return t("types.online");
    return type;
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-[2.5rem] p-10 text-center space-y-6 max-w-2xl mx-auto shadow-2xl animate-in zoom-in-95 duration-500 my-12">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl font-headline font-black text-emerald-900 tracking-tight">
            {t("success.title")}
          </h2>
          <p className="text-emerald-700/80 text-base leading-relaxed font-medium">
            {t("success.description", { name: titleName })}
          </p>
        </div>
        <button
          onClick={() => setIsSuccess(false)}
          className="px-10 py-3 bg-emerald-600 text-white font-headline font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20"
        >
          {t("success.close")}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 base-px base-py">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl text-center font-black leading-[1.1] tracking-tight text-slate-900 lg:text-4xl xl:text-5xl mb-4">
            <span className="text-primary">{t("title")}</span>
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={cn("space-y-5 base-px base-py", className)}
          >
            <section className="grid md:grid-cols-2 gap-5">
              <div className="space-y-3">
                <Stepper step={1}>{t("yourInformation")}</Stepper>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field data-invalid={!!errors.firstName}>
                    <FieldLabel required>{t("firstName")}</FieldLabel>
                    <FieldContent>
                      <Input
                        type="text"
                        placeholder={t("placeholders.firstName")}
                        aria-invalid={!!errors.firstName}
                        {...register("firstName")}
                      />
                      <FieldError errors={[errors.firstName]} />
                    </FieldContent>
                  </Field>
                  <Field data-invalid={!!errors.middleName}>
                    <FieldLabel>{t("middleName")}</FieldLabel>
                    <FieldContent>
                      <Input
                        type="text"
                        placeholder={t("placeholders.middleName")}
                        aria-invalid={!!errors.middleName}
                        {...register("middleName")}
                      />
                      <FieldError errors={[errors.middleName]} />
                    </FieldContent>
                  </Field>
                  <Field className="col-span-2" data-invalid={!!errors.lastName}>
                    <FieldLabel required>{t("lastName")}</FieldLabel>
                    <FieldContent>
                      <Input
                        type="text"
                        placeholder={t("placeholders.lastName")}
                        aria-invalid={!!errors.lastName}
                        {...register("lastName")}
                      />
                      <FieldError errors={[errors.lastName]} />
                    </FieldContent>
                  </Field>
                </div>
                <Field data-invalid={!!errors.email}>
                  <FieldLabel required>{t("email")}</FieldLabel>
                  <FieldContent>
                    <Input
                      type="email"
                      placeholder={t("placeholders.email")}
                      aria-invalid={!!errors.email}
                      {...register("email")}
                    />
                    <FieldError errors={[errors.email]} />
                  </FieldContent>
                </Field>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field data-invalid={!!errors.phone}>
                    <FieldLabel required>{t("phone")}</FieldLabel>
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
                    <FieldLabel required>{t("country")}</FieldLabel>
                    <FieldContent>
                      <CountryDropdown
                        name="country"
                        placeholder={t("placeholders.searchCountry")}
                        value={formData.country}
                        aria-invalid={!!errors.country}
                        onChange={(country) => setValue("country", country.name, { shouldValidate: true })}
                      />
                      <FieldError errors={[errors.country]} />
                    </FieldContent>
                  </Field>
                </div>
                <Field data-invalid={!!errors.address}>
                  <FieldLabel required>{t("address")}</FieldLabel>
                  <FieldContent>
                    <Input
                      type="text"
                      placeholder={t("placeholders.address")}
                      aria-invalid={!!errors.address}
                      {...register("address")}
                    />
                    <FieldError errors={[errors.address]} />
                  </FieldContent>
                </Field>
                <Field data-invalid={!!errors.city}>
                  <FieldLabel required>{t("city")}</FieldLabel>
                  <FieldContent>
                    <Input
                      type="text"
                      placeholder={t("placeholders.city")}
                      aria-invalid={!!errors.city}
                      {...register("city")}
                    />
                    <FieldError errors={[errors.city]} />
                  </FieldContent>
                </Field>
              </div>
              <div className="space-y-4">
                {/* Workshop & Course Details Card */}
                <div className="bg-slate-50 border rounded-2xl p-5 space-y-4 shadow-sm">
                  <h3 className="font-headline font-black text-xs text-slate-800 border-b pb-2 flex items-center gap-2">
                    <Calendar className="w-4.5 h-4.5 text-primary" />{t("workshopDetails")}
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-xs text-slate-500">{t("workshopLabel")}</p>
                      <p className="font-bold text-slate-900 text-base">
                        {t("workshopTitleFormat", {
                          duration: workshop?.duration || "",
                          courseName: `\u2068${courseData?.name || ""}\u2069`,
                        })}
                      </p>
                    </div>
                    {typeParam && (
                      <div>
                        <p className="text-xs text-slate-500">{t("workshopType")}</p>
                        <p className="font-bold text-slate-900 text-base">
                          {formatWorkshopType(typeParam)}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <Stepper step={2}>
                  {t("payment")}{" "}
                  <span className="bg-primary/10 px-3 py-1 rounded-full text-sm font-semibold text-primary">
                    <PriceDisplay amount={total_amount} />
                  </span>
                </Stepper>

                {/* Fee Breakdown */}
                <div className="bg-white border rounded-lg p-4 space-y-2 mb-4 text-sm">
                  <div className="flex justify-between items-center text-slate-600">
                    <span>{t("workshopPrice")}</span>
                    <span>
                      <PriceDisplay amount={base_price} />
                    </span>
                  </div>
                  {discount_amount > 0 && (
                    <div className="flex justify-between items-center text-emerald-600">
                      <span>{t("discount")}</span>
                      <span>
                        - <PriceDisplay amount={discount_amount} />
                      </span>
                    </div>
                  )}
                  {vatAmount > 0 && (
                    <>
                      {discount_amount > 0 && (
                        <div className="flex justify-between items-center text-slate-600 pt-2 mt-2 border-t">
                          <span className="font-semibold text-slate-500">{t("subtotal")}</span>
                          <span>
                            <PriceDisplay amount={subtotal} />
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between items-center text-slate-600">
                        <span>{t("vat", { percent: VAT_PERCENT })}</span>
                        <span>
                          <PriceDisplay amount={vatAmount} />
                        </span>
                      </div>
                    </>
                  )}
                  <div className="pt-2 mt-2 border-t flex justify-between items-center font-bold text-slate-900 text-base">
                    <span>{t("total")}</span>
                    <span>
                      <PriceDisplay amount={total_amount} />
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <FieldLabel required>{t("paymentMethod")}</FieldLabel>
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
                      <div className="w-full flex items-center justify-between gap-2 ">
                        <span className="font-semibold">{t("creditCard")}</span>
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
                  {mutation.isPending ? t("processing") : t("submit")}
                </Button>
                {mutation.isError && (
                  <p className="text-red-500 text-sm mt-2">
                    {t("errorMessage")}
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

export default function WorkshopRegistration() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WorkshopRegistrationForm />
    </Suspense>
  );
}
