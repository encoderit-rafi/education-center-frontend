"use client";

import { Suspense, useState, useMemo, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn, omitEmpty } from "@/lib/utils";
import { VAT_PERCENT, calculateVatForCountry } from "@/lib/vat";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldContent,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PhoneInput } from "@/components/ui/phone-input";
import { CountryDropdown } from "@/components/ui/country-dropdown";

import { CheckCircle2, Info, Calendar, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { notFound, useSearchParams } from "next/navigation";
import Stepper from "@/components/stepper";
import { PriceDisplay } from "@/components/ui/price-display";
import { useQuery, useMutation } from "@tanstack/react-query";
import api from "@/axios";
import Image from "next/image";
import { format } from "date-fns";


const baseBookingSchema = z.object({
  mockTestId: z.string().min(1, "Please select a mock test"),
  varient: z.string().optional(),
  testLocation: z.string().optional(),
  firstName: z
    .string()
    .trim()
    .min(1, "First Name is required")
    .min(2, "First name must be at least 2 characters"),
  lastName: z
    .string()
    .trim()
    .min(1, "Family name is required"),
  email: z
    .string()
    .trim()
    .min(1, "Email Address is required")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required"),
  dateOfBirth: z.any().optional(),
  gender: z.string().optional(),
  address: z
    .string()
    .trim()
    .min(1, "Address is required"),
  city: z
    .string()
    .trim()
    .min(1, "Emirate / City is required"),
  country: z
    .string()
    .trim()
    .min(1, "Country is required"),
  paymentMethod: z.enum(["stripe", "paypal"]),
});

type BookingValues = z.infer<typeof baseBookingSchema>;

const createBookingSchema = (variants?: string[] | null) =>
  baseBookingSchema.superRefine((data, ctx) => {
    if (variants && variants.length > 0 && !data.varient) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please select an exam variant",
        path: ["varient"],
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
  const t = useTranslations("PaidMockTestsPage");
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

  const schema = useMemo(
    () => createBookingSchema(data?.variant),
    [data?.variant],
  );

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
      varient: searchParams.get("variant") || "",
      testLocation: searchParams.get("location")?.toLowerCase() === "center-based" ? "Center-based" : "Home-based",
      paymentMethod: "stripe",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: undefined,
      gender: "",
      address: "",
      city: "",
      country: "",
    },
  });

  // Pre-fill variant & location from URL query params
  useEffect(() => {
    const variantFromUrl = searchParams.get("variant");
    if (variantFromUrl) {
      setValue("varient", variantFromUrl, { shouldValidate: false });
    } else if (data?.name) {
      setValue("varient", data.name, { shouldValidate: false });
    }
    const locationFromUrl = searchParams.get("location");
    if (locationFromUrl) {
      const normalized = locationFromUrl.toLowerCase() === "center-based" ? "Center-based" : "Home-based";
      setValue("testLocation", normalized, { shouldValidate: false });
    }
  }, [searchParams, setValue, data?.name]);

  const selectedPaymentMethod = watch("paymentMethod");
  const formData = watch();

  const activeLocation = formData.testLocation || (
    searchParams.get("location")?.toLowerCase() === "center-based"
      ? "Center-based"
      : "Home-based"
  );
  const priceParam = searchParams.get("price");
  const variantParam = formData.varient || searchParams.get("variant") || data?.name || "";
  const rawCenterPrice = data?.details?.center_price ?? data?.center_price;

  const parsedPriceParam = priceParam ? parseFloat(priceParam) : 0;
  const defaultHomePrice = data?.price && parseFloat(data.price) > 0 ? parseFloat(data.price) : 350;
  const defaultCenterPrice = rawCenterPrice && parseFloat(String(rawCenterPrice)) > 0 ? parseFloat(String(rawCenterPrice)) : 450;
  const defaultPrice = activeLocation === "Center-based" ? defaultCenterPrice : defaultHomePrice;

  const base_price = (parsedPriceParam > 0 && activeLocation.toLowerCase() === (searchParams.get("location") || "Home-based").toLowerCase())
    ? parsedPriceParam
    : defaultPrice;
  const selectedCountry = formData.country;
  const isUae =
    selectedCountry?.toLowerCase() === "united arab emirates" ||
    selectedCountry?.toLowerCase() === "uae";
  const vatAmount = isUae ? calculateVatForCountry(base_price, "United Arab Emirates") : 0;
  const PRICE = base_price + vatAmount;
  const CURRENCY = "AED";

  const examKey = data?.slug
    ? data.slug.replace(/-\d+$/, "").toLowerCase().includes("ielts")
      ? "ielts"
      : data.slug.replace(/-\d+$/, "").toLowerCase().includes("pte")
        ? "pte"
        : null
    : null;

  const examTypesLabel =
    examKey === "ielts"
      ? t("ieltsType")
      : examKey === "pte"
        ? t("pteType")
        : t("examTypes");

  const examTypeLabel =
    examKey === "ielts"
      ? t("ieltsType")
      : examKey === "pte"
        ? t("pteType")
        : t("examType");

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
    const selectedLocation = formData.testLocation || activeLocation;
    const siteLocation = selectedLocation;
    const mockTestType = formData.varient || variantParam || data?.name || "";

    const formattedDob = formData.dateOfBirth
      ? typeof formData.dateOfBirth === "string"
        ? formData.dateOfBirth
        : format(new Date(formData.dateOfBirth), "yyyy-MM-dd")
      : undefined;

    const examInfoList = [
      { name: "firstName", label: "First Name", value: formData.firstName },
      { name: "lastName", label: "Family Name", value: formData.lastName },
      { name: "email", label: "Email", value: formData.email },
      { name: "mobileNumber", label: "Phone Number", value: formData.phone },
      { name: "country", label: "Country", value: formData.country },
      { name: "city", label: "Town / City", value: formData.city },
      { name: "address", label: "Address", value: formData.address },
    ];

    const feesList = [
      { name: "price", label: "Price", value: String(base_price) },
      { name: "vat_amount", label: "VAT", value: String(vatAmount) },
      { name: "total_amount", label: "Total Amount", value: String(PRICE) },
    ];

    const payload: Record<string, any> = {
      mock_test_id: data?.id || id || formData.mockTestId || "",
      variant: siteLocation,
      varient: siteLocation,
      mock_test_type_name: mockTestType,
      mock_test_type: mockTestType,
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      phone_number: formData.phone,
      mobile: formData.phone,
      mobile_number: formData.phone,
      date_of_birth: formattedDob || null,
      dob: formattedDob || null,
      dateOfBirth: formattedDob || null,
      gender: formData.gender || null,
      sex: formData.gender || null,
      city: formData.city,
      country: formData.country,
      address: formData.address,
      total_amount: PRICE,
      vat_amount: vatAmount,
      price: base_price,
      payment_methods: formData.paymentMethod,
      form_data: {
        fees: feesList,
        exam_info: examInfoList,
      },
      formData: {
        fees: feesList,
        exam_info: examInfoList,
      },
    };


    mutation.mutate({
      ...omitEmpty(payload),
      gender: formData.gender || "",
      date_of_birth: formattedDob || "",
    });
  };

  const isPending = mutation.isPending || paymentMutation.isPending;

  if (isLoading) {
    return (
      <div className="min-h-100 flex items-center justify-center bg-slate-50 animate-pulse">
        <div className="text-slate-500 font-medium">
          {t("loadingDetails")}
        </div>
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
            {t("bookingConfirmed")}
          </h2>
          <p className="text-emerald-700/80 text-base leading-relaxed font-medium">
            {t("bookingSuccessMsg")}
          </p>
        </div>
        <button
          onClick={() => setIsSuccess(false)}
          className="px-10 py-3 bg-emerald-600 text-white font-headline font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20"
        >
          {t("close")}
        </button>
      </div>
    );
  }

  return (
    <div className=" bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 base-px base-py">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl text-center font-black leading-[1.1] tracking-tight text-slate-900 lg:text-4xl xl:text-5xl mb-4">
            <span className="text-primary">{t("regTitle")}</span>
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={cn("space-y-5 base-px base-py", className)}
          >
            <section className="grid md:grid-cols-2 gap-5">
              <div className="space-y-3">
                <Stepper step={1}>{t("yourInfo")}</Stepper>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field data-invalid={!!errors.firstName}>
                    <FieldLabel required>{t("firstName")}</FieldLabel>
                    <FieldContent>
                      <Input
                        type="text"
                        placeholder={t("firstNamePlaceholder")}
                        aria-invalid={!!errors.firstName}
                        {...register("firstName")}
                      />
                      <FieldError errors={[errors.firstName]} />
                    </FieldContent>
                  </Field>
                  <Field data-invalid={!!errors.lastName}>
                    <FieldLabel required>{t("familyName")}</FieldLabel>
                    <FieldContent>
                      <Input
                        type="text"
                        placeholder={t("lastNamePlaceholder")}
                        aria-invalid={!!errors.lastName}
                        {...register("lastName")}
                      />
                      <FieldError errors={[errors.lastName]} />
                    </FieldContent>
                  </Field>
                </div>

                {data?.variant &&
                  Array.isArray(data.variant) &&
                  data.variant.length > 0 && (
                    <Field data-invalid={!!errors.varient}>
                      <FieldLabel required>{examTypesLabel}</FieldLabel>
                      <FieldContent>
                        <Select
                          value={formData.varient || undefined}
                          onValueChange={(val: string | null) => {
                            if (val) setValue("varient", val, { shouldValidate: true });
                          }}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder={t("selectType")} />
                          </SelectTrigger>
                          <SelectContent>
                            {data.variant.map((variantName: string) => (
                              <SelectItem key={variantName} value={variantName}>
                                {variantName}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FieldError errors={[errors.varient]} />
                      </FieldContent>
                    </Field>
                  )}

                <Field data-invalid={!!errors.email}>
                  <FieldLabel required>{t("email")}</FieldLabel>
                  <FieldContent>
                    <Input
                      type="text"
                      placeholder={t("emailPlaceholder")}
                      aria-invalid={!!errors.email}
                      {...register("email")}
                    />
                    <FieldError errors={[errors.email]} />
                  </FieldContent>
                </Field>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field data-invalid={!!errors.phone}>
                    <FieldLabel required>{t("phoneNumber")}</FieldLabel>
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
                        placeholder={t("searchCountry")}
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
                      placeholder={t("addressPlaceholder")}
                      aria-invalid={!!errors.address}
                      {...register("address")}
                    />
                    <FieldError errors={[errors.address]} />
                  </FieldContent>
                </Field>

                <Field data-invalid={!!errors.city}>
                  <FieldLabel required>{t("emirateCity")}</FieldLabel>
                  <FieldContent>
                    <Input
                      type="text"
                      placeholder={t("cityPlaceholder")}
                      aria-invalid={!!errors.city}
                      {...register("city")}
                    />
                    <FieldError errors={[errors.city]} />
                  </FieldContent>
                </Field>
              </div>
              <div className="space-y-4">
                {/* Mock Test Details Card */}
                {data && (
                  <div className="bg-slate-50 border rounded-2xl p-5 space-y-4 shadow-sm">
                    <h3 className="font-headline font-black text-xs text-slate-800 border-b pb-2 flex items-center gap-2">
                      <Calendar className="w-4.5 h-4.5 text-primary" /> {t("detailsTitle")}
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="text-xs text-slate-400">{t("mockTest")}</p>
                        <p className="font-bold text-slate-900 text-base">
                          {data.name}
                        </p>
                      </div>

                      {data.type && (
                        <div>
                          <p className="text-xs text-slate-400">{t("type")}</p>
                          <p className="font-semibold text-slate-700 capitalize">
                            {data.type.replace("_", " ")}
                          </p>
                        </div>
                      )}

                      {/* Show selected exam type / variant from URL */}
                      {variantParam && (
                        <div>
                          <p className="text-xs text-slate-400">{examTypeLabel}</p>
                          <p className="font-semibold text-primary">
                            {variantParam}
                          </p>
                        </div>
                      )}

                      <div>
                        <p className="text-xs text-slate-400">{t("location")}</p>
                        <p className="font-semibold text-slate-700">
                          {activeLocation === "Center-based" ? t("testCenter") : t("homeOnline")}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-2">
                        {data.duration && (
                          <div className="bg-white border rounded-xl p-3 text-center">
                            <p className="text-xs text-slate-400">{t("duration")}</p>
                            <p className="font-extrabold text-slate-900 text-sm mt-0.5">
                              {data.duration}
                            </p>
                          </div>
                        )}
                        {data.subTitle && (
                          <div className="bg-white border rounded-xl p-3 text-center">
                            <p className="text-xs text-slate-400">
                              {t("examCategory")}
                            </p>
                            <p className="font-extrabold text-primary text-sm mt-0.5">
                              {data.subTitle}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <Stepper step={2}>
                  {t("payment")}{" "}
                  <span className="bg-primary/10 px-3 py-1 rounded-full text-sm font-semibold text-primary">
                    <PriceDisplay amount={PRICE} />
                  </span>
                </Stepper>

                {/* Fee Breakdown */}
                <div className="bg-white border rounded-lg p-4 space-y-2 mb-4 text-sm">
                  <div className="flex justify-between items-center text-slate-600">
                    <span>Mock Test Price</span>
                    <span>
                      <PriceDisplay amount={base_price} />
                    </span>
                  </div>
                  {vatAmount > 0 && (
                    <div className="flex justify-between items-center text-slate-600">
                      <span>VAT ({VAT_PERCENT}%)</span>
                      <span>
                        <PriceDisplay amount={vatAmount} />
                      </span>
                    </div>
                  )}
                  <div className="pt-2 mt-2 border-t flex justify-between items-center font-bold text-slate-900 text-base">
                    <span>{t("total")}</span>
                    <span>
                      <PriceDisplay amount={PRICE} />
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
                      {/* <span className="font-semibold text-sm">
                        Credit Card (Stripe)
                      </span> */}
                      <div className="flex items-center justify-between gap-2 w-full flex-1">
                        {/* <Image
                          src="/images/stripe-logo.png"
                          alt="Stripe"
                          width={50}
                          height={50}
                        /> */}
                        <span className="font-semibold text-sm">{t("creditDebitCard")}</span>
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
                  disabled={isPending}
                >
                  {isPending ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {t("processing")}
                    </span>
                  ) : (
                    t("acceptPay")
                  )}
                </Button>
                {mutation.isError && (
                  <p className="text-red-500 text-sm mt-2">
                    {t("errorProcessing")}
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
  const t = useTranslations("PaidMockTestsPage");
  return (
    <Suspense fallback={<div><Loader2 className="w-4 h-4 animate-spin" />
      {t("processing")}
    </div>}>
      <PaidMockTestRegistrationForm />
    </Suspense>
  );
}
