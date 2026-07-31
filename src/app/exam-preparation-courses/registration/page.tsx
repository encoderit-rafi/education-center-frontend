"use client";

import { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn, omitEmpty } from "@/lib/utils";
import { VAT_PERCENT } from "@/lib/vat";
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

import { CheckCircle2, Info, ArrowRight, Tag, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import Stepper from "@/components/stepper";
import { PriceDisplay } from "@/components/ui/price-display";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { AED } from "@/components/ui/aed";

const getBookingSchema = (t: any) =>
  z.object({
    mockTestId: z.string().optional(),
    firstName: z.string().min(2, t("validation.firstName")),
    middleName: z.string().optional(),
    lastName: z.string().min(1, t("validation.lastName")),
    email: z.string().email(t("validation.email")),
    phone: z.string().min(1, t("validation.phone")),
    address: z.string().min(1, t("validation.address")),
    city: z.string().min(1, t("validation.city")),
    country: z.string().min(1, t("validation.country")),
    paymentMethod: z.enum(["stripe", "paypal"]),
  });

type BookingValues = z.infer<ReturnType<typeof getBookingSchema>>;
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

  const t = useTranslations("CourseRegistration");
  const locale = useLocale();
  const bookingSchema = getBookingSchema(t);

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
  const [couponCodeInput, setCouponCodeInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<any | null>(null);
  const [couponError, setCouponError] = useState<React.ReactNode | null>(null);
  const [isValidatingCoupon, setIsValidatingCoupon] = useState(false);

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

  // Calculate coupon discount
  let couponDiscount = 0;
  if (appliedCoupon) {
    const value = parseFloat(appliedCoupon.discountValue) || 0;
    if (appliedCoupon.discountType === "PERCENTAGE") {
      couponDiscount = Math.round(base_price * (value / 100));
    } else {
      couponDiscount = value;
    }
    // Cap coupon discount at maxDiscountAmount if specified
    if (
      appliedCoupon.maxDiscountAmount &&
      couponDiscount > parseFloat(appliedCoupon.maxDiscountAmount)
    ) {
      couponDiscount = parseFloat(appliedCoupon.maxDiscountAmount);
    }
    // Cap at base_price to avoid negative total
    couponDiscount = Math.min(couponDiscount, base_price);
  }

  const discount_amount = couponDiscount;
  const subtotal = base_price - discount_amount;
  const selectedCountry = formData.country;
  const isUae =
    selectedCountry?.toLowerCase() === "united arab emirates" ||
    selectedCountry?.toLowerCase() === "uae";
  const vatRateRaw = packageData?.vatRate;
  const hasPackageVat =
    vatRateRaw !== undefined && vatRateRaw !== null && vatRateRaw !== "";
  const parsedVatRate = hasPackageVat ? parseFloat(vatRateRaw) : null;

  const activeVatPercent = isUae
    ? parsedVatRate !== null
      ? parsedVatRate
      : VAT_PERCENT
    : 0;
  const vatAmount = Number((subtotal * (activeVatPercent / 100)).toFixed(2));
  const total_amount = subtotal + vatAmount;

  const handleApplyCoupon = async (e: React.MouseEvent) => {
    e.preventDefault();
    const code = couponCodeInput.trim();
    if (!code) return;

    setIsValidatingCoupon(true);
    setCouponError(null);

    try {
      // 1. Call API to validate coupon code
      const response = await api.post("/coupons/validate", {
        code,
        entity_type: "package",
        entity_id: packageId || "",
        purchase_amount: base_price,
      });

      const result = response.data;

      if (result.success && result.data && result.data.valid) {
        const coupon = result.data.coupon || result.data;

        // Verify coupon parameters on client-side for additional safety
        if (coupon.applicableTo && Array.isArray(coupon.applicableTo)) {
          if (!coupon.applicableTo.includes("package")) {
            setCouponError(t("couponErrors.packageOnly"));
            setIsValidatingCoupon(false);
            return;
          }
        }

        if (
          coupon.applicableEntityIds &&
          Array.isArray(coupon.applicableEntityIds) &&
          coupon.applicableEntityIds.length > 0
        ) {
          if (packageId && !coupon.applicableEntityIds.includes(packageId)) {
            setCouponError(t("couponErrors.notApplicable"));
            setIsValidatingCoupon(false);
            return;
          }
        }

        if (
          coupon.minPurchaseAmount &&
          base_price < parseFloat(coupon.minPurchaseAmount)
        ) {
          setCouponError(
            locale === "ar" ? (
              <span className="flex items-center gap-0.5">
                الحد الأدنى لقيمة الشراء المطلوبة هو{" "}
                <AED className="h-[0.8em] w-auto fill-current inline-block" />{" "}
                {coupon.minPurchaseAmount}
              </span>
            ) : (
              <span className="flex items-center gap-0.5">
                Minimum purchase amount of{" "}
                <AED className="h-[0.8em] w-auto fill-current inline-block" />{" "}
                {coupon.minPurchaseAmount} required.
              </span>
            ),
          );
          setIsValidatingCoupon(false);
          return;
        }

        setAppliedCoupon(coupon);
        setCouponCodeInput("");
      } else {
        setCouponError(
          result?.data?.error || result?.message || t("couponErrors.invalid"),
        );
      }
    } catch (err: any) {
      console.error("Coupon validation error:", err);
      const errMsg =
        err?.response?.data?.message ||
        err?.response?.data?.data?.error ||
        t("couponErrors.failed");
      setCouponError(errMsg);
    } finally {
      setIsValidatingCoupon(false);
    }
  };

  const handleRemoveCoupon = (e: React.MouseEvent) => {
    e.preventDefault();
    setAppliedCoupon(null);
    setCouponError(null);
  };

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
      vat_amount: vatAmount,
      payment_methods: formData.paymentMethod,
      coupon_code: appliedCoupon ? appliedCoupon.code : null,
      coupon: appliedCoupon ? appliedCoupon.code : null,
      coupon_id: appliedCoupon ? (appliedCoupon.id || appliedCoupon._id || null) : null,
      coupon_discount: appliedCoupon ? couponDiscount : null,
    };

    const finalPayload = {
      ...omitEmpty(payload),
      coupon_code: appliedCoupon ? appliedCoupon.code : null,
      coupon: appliedCoupon ? appliedCoupon.code : null,
      coupon_id: appliedCoupon ? (appliedCoupon.id || appliedCoupon._id || null) : null,
      coupon_discount: appliedCoupon ? couponDiscount : null,
    };

    console.log("👉 [Course Registration] Final Payload Sent to API:", finalPayload);

    mutation.mutate(finalPayload);
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
            {t.rich("success.message", {
              courseName: courseName,
              bold: (chunks) => <strong>{chunks}</strong>,
            })}
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
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl mb-12 text-center font-black leading-[1.1] tracking-tight text-slate-900 lg:text-4xl xl:text-5xl">
            {t.rich("title", {
              courseName: courseName,
              primary: (chunks) => (
                <span className="text-primary">{chunks}</span>
              ),
            })}
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className={cn("space-y-5 base-px base-py", className)}
          >
            <section className="grid md:grid-cols-2 gap-5">
              <div className="space-y-3">
                <Stepper step={1}>{t("step1Title")}</Stepper>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field data-invalid={!!errors.firstName}>
                    <FieldLabel required>{t("firstNameLabel")}</FieldLabel>
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
                  <Field data-invalid={!!errors.middleName}>
                    <FieldLabel>{t("middleNameLabel")}</FieldLabel>
                    <FieldContent>
                      <Input
                        type="text"
                        placeholder={t("middleNamePlaceholder")}
                        aria-invalid={!!errors.middleName}
                        {...register("middleName")}
                      />
                      <FieldError errors={[errors.middleName]} />
                    </FieldContent>
                  </Field>
                  <Field
                    className="col-span-2"
                    data-invalid={!!errors.lastName}
                  >
                    <FieldLabel required>{t("lastNameLabel")}</FieldLabel>
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
                <Field data-invalid={!!errors.email}>
                  <FieldLabel required>{t("emailLabel")}</FieldLabel>
                  <FieldContent>
                    <Input
                      type="email"
                      placeholder={t("emailPlaceholder")}
                      aria-invalid={!!errors.email}
                      {...register("email")}
                    />
                    <FieldError errors={[errors.email]} />
                  </FieldContent>
                </Field>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field data-invalid={!!errors.phone}>
                    <FieldLabel required>{t("phoneLabel")}</FieldLabel>
                    <FieldContent>
                      <PhoneInput
                        name="phone"
                        value={formData.phone}
                        onChange={(val) =>
                          setValue("phone", val, { shouldValidate: true })
                        }
                        defaultCountry="AE"
                        aria-invalid={!!errors.phone}
                      />
                      <FieldError errors={[errors.phone]} />
                    </FieldContent>
                  </Field>
                  <Field data-invalid={!!errors.country}>
                    <FieldLabel required>{t("countryLabel")}</FieldLabel>
                    <FieldContent>
                      <CountryDropdown
                        name="country"
                        placeholder={t("countryPlaceholder")}
                        value={formData.country}
                        aria-invalid={!!errors.country}
                        onChange={(country) =>
                          setValue("country", country.name, {
                            shouldValidate: true,
                          })
                        }
                      />
                      <FieldError errors={[errors.country]} />
                    </FieldContent>
                  </Field>
                </div>
                <Field data-invalid={!!errors.address}>
                  <FieldLabel required>{t("addressLabel")}</FieldLabel>
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
                  <FieldLabel required>{t("cityLabel")}</FieldLabel>
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
              <div className="space-y-3">
                <Stepper step={2}>
                  {t("step2Title")}{" "}
                  <span className="bg-primary/10 px-3 py-1 rounded-full text-sm font-semibold text-primary">
                    <PriceDisplay amount={total_amount} />
                  </span>
                </Stepper>

                {/* Promo Code Input */}
                <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-4 space-y-3 mb-4 transition-all duration-300">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    <Tag className="w-3.5 h-3.5 text-primary" />
                    <span>{t("havePromoCode")}</span>
                  </div>

                  {!appliedCoupon ? (
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <Input
                          type="text"
                          placeholder=""
                          value={couponCodeInput}
                          onChange={(e) => {
                            setCouponCodeInput(e.target.value);
                            if (couponError) setCouponError(null);
                          }}
                          className="bg-white uppercase placeholder:normal-case h-10 text-sm font-medium border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary/20"
                          disabled={isValidatingCoupon}
                        />
                        <Button
                          type="button"
                          onClick={handleApplyCoupon}
                          disabled={
                            isValidatingCoupon || !couponCodeInput.trim()
                          }
                          className="h-10 px-5 text-xs font-bold uppercase tracking-wider shrink-0 bg-primary hover:bg-primary/90 text-white rounded-lg shadow-sm hover:shadow transition-all duration-200"
                        >
                          {isValidatingCoupon ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          ) : (
                            t("apply")
                          )}
                        </Button>
                      </div>
                      {couponError && (
                        <p className="text-rose-500 text-xs font-semibold flex items-center gap-1 animate-in fade-in duration-200">
                          <Info className="w-3.5 h-3.5 shrink-0" />
                          {couponError}
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center justify-between bg-emerald-50/60 border border-emerald-100/80 rounded-lg p-2.5 animate-in zoom-in-95 duration-200">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                          <Tag className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <p className="text-xs font-black text-emerald-800 uppercase tracking-wide">
                            {appliedCoupon.code}
                          </p>
                          <p className="text-[10px] font-semibold text-emerald-600 flex items-center gap-0.5">
                            {appliedCoupon.discountType === "PERCENTAGE" ? (
                              t("percentageOff", {
                                value: appliedCoupon.discountValue,
                              })
                            ) : (
                              <>
                                {locale === "ar"
                                  ? "تم تطبيق خصم"
                                  : "Discount of"}{" "}
                                <AED className="h-[0.8em] w-auto fill-current inline-block" />
                                {appliedCoupon.discountValue}{" "}
                                {locale === "ar" ? "" : "applied"}
                              </>
                            )}
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveCoupon}
                        className="w-6 h-6 rounded-full hover:bg-emerald-100/50 flex items-center justify-center text-emerald-700/60 hover:text-emerald-800 transition-colors"
                        title={t("removeCoupon")}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Fee Breakdown */}
                <div className="bg-white border rounded-lg p-4 space-y-2 mb-4 text-sm">
                  <div className="flex justify-between items-center text-slate-600">
                    <span>{t("coursePrice")}</span>
                    <span>
                      <PriceDisplay amount={base_price} />
                    </span>
                  </div>
                  {discount_amount > 0 && (
                    <div className="flex justify-between items-center text-emerald-600 font-medium animate-in slide-in-from-top-1 duration-200">
                      <span className="flex items-center gap-1.5">
                        <Tag className="w-3.5 h-3.5 shrink-0" />
                        {t("couponApplied", { code: appliedCoupon?.code })}
                      </span>
                      <span>
                        - <PriceDisplay amount={discount_amount} />
                      </span>
                    </div>
                  )}
                  {vatAmount > 0 && (
                    <>
                      {discount_amount > 0 && (
                        <div className="flex justify-between items-center text-slate-600 pt-2 mt-2 border-t">
                          <span className="font-semibold text-slate-500">
                            Subtotal
                          </span>
                          <span>
                            <PriceDisplay amount={subtotal} />
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between items-center text-slate-600">
                        <span>VAT ({activeVatPercent}%)</span>
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
                  <FieldLabel required>{t("paymentMethodLabel")}</FieldLabel>
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
                        <span className="font-semibold">
                          {t("creditCardLabel")}
                        </span>
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
                  {mutation.isPending ? t("processing") : t("submitButton")}
                </Button>
                {mutation.isError && (
                  <p className="text-red-500 text-sm mt-2">
                    {t("bookingError")}
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
  const t = useTranslations("CourseRegistration");
  return (
    <Suspense fallback={<div>{t("loading")}</div>}>
      <CourseRegistrationForm />
    </Suspense>
  );
}
