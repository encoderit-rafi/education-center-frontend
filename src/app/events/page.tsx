"use client";

import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Field,
    FieldLabel,
    FieldContent,
    FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PhoneInput } from "@/components/ui/phone-input";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
    CheckCircle2,
    Calendar,
    Clock,
    MapPin,
    ArrowRight,
    Loader2,
    RefreshCw,
    Users,
    ChevronRight,
} from "lucide-react";
import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useQuery, useMutation } from "@tanstack/react-query";
import api from "@/axios";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
// Schema for event registration
const getEventSchema = (t: any) => z.object({
    fullName: z.string().min(1, t("form.fullNameError") || "Full Name is required"),
    mobile: z.string().min(1, t("form.mobileError") || "Phone Number is required"),
    email: z.string().min(1, t("form.emailError") || "Email Address is required").email("Please enter a valid email address"),
    country: z.string().min(1, t("form.countryError") || "Country is required"),
    city: z.string().min(1, t("form.cityError") || "Emirate / City is required"),
});

// Helper to resolve dynamic event banner images
const getBannerImageUrl = (bannerImage: string | null) => {
    if (!bannerImage) return "/images/study.jpg";
    if (bannerImage.startsWith("http")) return bannerImage;
    if (bannerImage.startsWith("api/")) {
        return `https://vote.encoder-test-vpn.space/${bannerImage}`;
    }
    return `https://vote.encoder-test-vpn.space/api/v1/uploads/${bannerImage}`;
};

// Reusable event card image component with automatic fallback for broken links
function EventCardImage({ src, alt }: { src: string; alt: string }) {
    const [error, setError] = useState(false);
    return (
        <Image
            src={error ? "/images/study.jpg" : src}
            alt={alt}
            fill
            className="object-contain transition-transform duration-700 group-hover:scale-110"
            onError={() => setError(true)}
        />
    );
}

interface EventRegistrationFormProps {
    event: any;
    onSuccess?: () => void;
}

// Reusable registration form component
function EventRegistrationForm({ event, onSuccess }: EventRegistrationFormProps) {
    const t = useTranslations("EventsPage");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const eventSchema = getEventSchema(t);
    const form = useForm<z.infer<typeof eventSchema>>({
        resolver: zodResolver(eventSchema),
        defaultValues: {
            fullName: "",
            mobile: "",
            email: "",
            country: "",
            city: "",
        },
    });

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = form;

    const bookingMutation = useMutation({
        mutationFn: (newBooking: Record<string, unknown>) =>
            api.post("/event-bookings", newBooking),
        onSuccess: () => {
            toast.success("Successfully registered for the event!", { id: "event-submit" });
            setIsSubmitted(true);
            if (onSuccess) onSuccess();
        },
        onError: (error: any) => {
            toast.error(error?.response?.data?.message || "Registration failed.", { id: "event-submit" });
        }
    });

    const onSubmit = async (data: z.infer<typeof eventSchema>) => {
        toast.loading("Submitting registration...", { id: "event-submit" });
        const fullNameVal = data.fullName.trim();
        const firstSpaceIndex = fullNameVal.indexOf(" ");
        let firstName = fullNameVal;
        let lastName = "";
        if (firstSpaceIndex !== -1) {
            firstName = fullNameVal.substring(0, firstSpaceIndex);
            lastName = fullNameVal.substring(firstSpaceIndex + 1).trim();
        }
        bookingMutation.mutate({
            event_id: event.id,
            first_name: firstName,
            last_name: lastName || "Student",
            email: data.email,
            phone: data.mobile,
            country: data.country,
            city: data.city,
            price: 0,
            total_amount: 0,
            payment_methods: "stripe",
        });
    };

    if (isSubmitted) {
        return (
            <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4 border border-green-100">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-black mb-1 text-gray-900">{t("successTitle")}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">{t("successDesc")}</p>
                <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    size="sm"
                    className="rounded-md border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold text-xs"
                >
                    {t("newRegistrationBtn")}
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
            <Field data-invalid={!!errors.fullName}>
                <FieldLabel required className="text-xs font-semibold text-gray-700">{t("form.fullName")}</FieldLabel>
                <FieldContent>
                    <Input
                        className="h-11 rounded-md border-gray-200 bg-gray-50 focus:bg-white focus:border-[#A11D1D] focus:ring-[#A11D1D]/20 text-sm transition-all"
                        placeholder={t("form.fullNamePlaceholder")}
                        {...register("fullName")}
                    />
                </FieldContent>
                {errors.fullName && (
                    <FieldError className="text-xs">{errors.fullName.message}</FieldError>
                )}
            </Field>

            <Field data-invalid={!!errors.mobile}>
                <FieldLabel required className="text-xs font-semibold text-gray-700">{t("form.mobile")}</FieldLabel>
                <FieldContent>
                    <Controller
                        control={control}
                        name="mobile"
                        render={({ field }) => (
                            <PhoneInput
                                {...field}
                                defaultCountry="AE"
                                placeholder={t("form.mobilePlaceholder")}
                                className="h-11 rounded-md border-gray-200 bg-gray-50 text-sm focus-within:bg-white focus-within:border-[#A11D1D] focus-within:ring-1 focus-within:ring-[#A11D1D]/20"
                            />
                        )}
                    />
                </FieldContent>
                {errors.mobile && (
                    <FieldError className="text-xs">{errors.mobile.message}</FieldError>
                )}
            </Field>

            <Field data-invalid={!!errors.email}>
                <FieldLabel required className="text-xs font-semibold text-gray-700">{t("form.email")}</FieldLabel>
                <FieldContent>
                    <Input
                        className="h-11 rounded-md border-gray-200 bg-gray-50 focus:bg-white focus:border-[#A11D1D] focus:ring-[#A11D1D]/20 text-sm transition-all"
                        placeholder={t("form.emailPlaceholder")}
                        {...register("email")}
                    />
                </FieldContent>
                {errors.email && (
                    <FieldError className="text-xs">{errors.email.message}</FieldError>
                )}
            </Field>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Field data-invalid={!!errors.country}>
                    <FieldLabel required className="text-xs font-semibold text-gray-700">{t("form.country")}</FieldLabel>
                    <FieldContent>
                        <Controller
                            control={control}
                            name="country"
                            render={({ field }) => (
                                <CountryDropdown
                                    value={field.value}
                                    onChange={(country) =>
                                        field.onChange(country.name)
                                    }
                                    placeholder={t("form.countryPlaceholder")}
                                />
                            )}
                        />
                    </FieldContent>
                    {errors.country && (
                        <FieldError className="text-xs">{errors.country.message}</FieldError>
                    )}
                </Field>

                <Field data-invalid={!!errors.city}>
                    <FieldLabel required className="text-xs font-semibold text-gray-700">{t("form.city")}</FieldLabel>
                    <FieldContent>
                        <Input
                            className="h-11 rounded-md border-gray-200 bg-gray-50 focus:bg-white focus:border-[#A11D1D] focus:ring-[#A11D1D]/20 text-sm transition-all"
                            placeholder={t("form.cityPlaceholder")}
                            {...register("city")}
                        />
                    </FieldContent>
                    {errors.city && (
                        <FieldError className="text-xs">{errors.city.message}</FieldError>
                    )}
                </Field>
            </div>

            <Button
                type="submit"
                disabled={bookingMutation.isPending}
                className="w-full h-12 bg-[#A11D1D] hover:bg-[#8a1818] transition-all rounded-md font-bold text-sm mt-2 flex items-center justify-center gap-2 shadow-sm"
            >
                {bookingMutation.isPending ? (
                    <><Loader2 className="w-4 h-4 animate-spin" />{t("form.processing")}</>
                ) : (
                    <><span>{t("form.submitBtn")}</span><ArrowRight className="w-4 h-4 rtl:rotate-180" /></>
                )}
            </Button>
        </form>
    );
}

export default function EventsPage() {
    const t = useTranslations("EventsPage");
    const locale = useLocale();
    const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

    const { data: eventsResponse, isLoading, isError, refetch } = useQuery({
        queryKey: ["events-list"],
        queryFn: async () => {
            const response = await api.get("/events");
            return response.data;
        }
    });

    const events = eventsResponse?.data?.data || [];
    const activeEvent = events.find((e: any) => e.id === selectedEventId) || events[0] || null;
    const [heroImageError, setHeroImageError] = useState(false);

    React.useEffect(() => {
        setHeroImageError(false);
    }, [activeEvent?.id]);

    const formatEventDate = (dateStr: string) => {
        try {
            const date = new Date(dateStr);
            return date.toLocaleDateString(locale === "ar" ? "ar-EG" : "en-US", {
                month: "long", day: "numeric", year: "numeric"
            });
        } catch { return dateStr; }
    };

    const formatEventTime = (timeStr: string) => {
        try {
            const date = new Date(timeStr);
            return date.toLocaleTimeString(locale === "ar" ? "ar-EG" : "en-US", {
                hour: "2-digit", minute: "2-digit", hour12: true
            });
        } catch { return timeStr; }
    };

    const handleSelectEvent = (eventId: string) => {
        setSelectedEventId(eventId);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // ─── Loading ──────────────────────────────────────────────────────────────
    if (isLoading) {
        return (
            <div className="flex flex-col min-h-screen bg-white">
                <section className="pt-32 pb-16 bg-white">
                    <div className="container px-6 mx-auto sm:px-12 lg:px-24 text-center space-y-4 animate-pulse">
                        <div className="h-12 w-72 bg-slate-100 mx-auto rounded-lg" />
                        <div className="h-5 w-96 bg-slate-50 mx-auto rounded-lg" />
                    </div>
                </section>
                <section className="pb-24">
                    <div className="container px-6 mx-auto sm:px-12 lg:px-24 animate-pulse">
                        <div className="w-full h-130 bg-slate-100 rounded-2xl mb-12" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="h-72 bg-slate-50 rounded-xl border border-slate-100" />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    // ─── Error ────────────────────────────────────────────────────────────────
    if (isError) {
        return (
            <div className="flex flex-col min-h-screen bg-white items-center justify-center p-6 text-center">
                <div className="w-16 h-16 bg-red-50 text-[#A11D1D] rounded-full flex items-center justify-center mb-6 border border-red-100">
                    <RefreshCw className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-black text-gray-900 mb-2">Failed to load events</h2>
                <p className="text-gray-500 text-sm max-w-sm mb-8 leading-relaxed">
                    We encountered an error while fetching events. Please check your connection and try again.
                </p>
                <Button onClick={() => refetch()} className="rounded-md bg-[#A11D1D] hover:bg-[#8a1818] text-white font-bold px-8">
                    Try Again
                </Button>
            </div>
        );
    }

    // ─── Empty ────────────────────────────────────────────────────────────────
    if (events.length === 0) {
        return (
            <div className="flex flex-col min-h-screen bg-white">
                <section className="pt-32 pb-12 bg-white text-center">
                    <div className="container px-6 mx-auto sm:px-12 lg:px-24">
                        <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter leading-none mb-4">
                            {t("title")} <span className="text-[#A11D1D]">{t("titleAccent")}</span>
                        </h1>
                    </div>
                </section>
                <section className="flex-1 flex flex-col items-center justify-center text-center py-24">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 border border-slate-100">
                        <Calendar className="w-9 h-9 text-gray-300" />
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">{t("noEventsTitle")}</h3>
                    <p className="text-gray-400 text-sm max-w-xs leading-relaxed">{t("otherEventsDesc")}</p>
                </section>
            </div>
        );
    }

    const otherEvents = events.filter((e: any) => e.id !== activeEvent?.id);

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">

            {/* ── Page Header ──────────────────────────────────────────── */}
            <section className="pt-28 pb-10 bg-white border-b border-gray-100">
                <div className="container px-6 mx-auto sm:px-12 lg:px-24 text-center">
                    <span className="inline-block text-[#A11D1D] text-xs font-black uppercase tracking-[0.3em] mb-3">
                        Education Center
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-none mb-4">
                        {t("title")} <span className="text-[#A11D1D]">{t("titleAccent")}</span>
                    </h1>
                    <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
                        {t("subtitle")}
                    </p>
                </div>
            </section>

            {/* ── Featured Event ───────────────────────────────────────── */}
            {activeEvent && (
                <section className="py-12">
                    <div className="container px-6 mx-auto sm:px-12 lg:px-24">

                        {/* Label */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-1 h-5 bg-[#A11D1D] rounded-full" />
                            <span className="text-xs font-black uppercase tracking-widest text-gray-500">{t("featuredEvent")}</span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">

                            {/* Left: Banner Image */}
                            <div className="lg:col-span-7 relative aspect-16/10 lg:min-h-100 overflow-hidden bg-slate-100">
                                {/* Image */}
                                <Image
                                    src={heroImageError ? "/images/study.jpg" : getBannerImageUrl(activeEvent.bannerImage)}
                                    alt={activeEvent.title}
                                    fill
                                    className="object-cover transition-all duration-700"
                                    onError={() => setHeroImageError(true)}
                                />
                                {/* Dark gradient overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

                                {/* Badges */}
                                <div className="absolute top-5 left-5 flex flex-wrap gap-2 z-10">
                                    <span className="bg-[#A11D1D] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow">
                                        {activeEvent.eventType}
                                    </span>
                                </div>

                                {/* Event info overlay at bottom */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 z-10">
                                    <h2 className="text-2xl lg:text-4xl font-black text-white leading-tight tracking-tight mb-4">
                                        {activeEvent.title}
                                    </h2>
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex items-center gap-1.5 text-white/90 text-xs font-semibold bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                            <Calendar className="w-3.5 h-3.5 text-[#ff6b6b]" />
                                            <span>{formatEventDate(activeEvent.startDate)}</span>
                                        </div>
                                        {activeEvent.startTime && (
                                            <div className="flex items-center gap-1.5 text-white/90 text-xs font-semibold bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                                <Clock className="w-3.5 h-3.5 text-[#ff6b6b]" />
                                                <span>{formatEventTime(activeEvent.startTime)}</span>
                                            </div>
                                        )}
                                        <div className="flex items-center gap-1.5 text-white/90 text-xs font-semibold bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                            <MapPin className="w-3.5 h-3.5 text-[#ff6b6b]" />
                                            <span>{activeEvent.location || "Online"}</span>
                                        </div>
                                        {activeEvent.totalSeats && (
                                            <div className="flex items-center gap-1.5 text-white/90 text-xs font-semibold bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                                <Users className="w-3.5 h-3.5 text-[#ff6b6b]" />
                                                <span>{t("seatsAvailable", { count: activeEvent.totalSeats - activeEvent.bookedSeats })}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Right: Details + Form */}
                            <div className="lg:col-span-5 flex flex-col p-6 lg:p-8 gap-6 overflow-y-auto">

                                {/* Seats chip layout */}
                                {activeEvent.totalSeats && (
                                    <div className="flex items-center gap-2 text-sm text-gray-700 font-bold bg-gray-50 px-4 py-2 rounded-full border border-gray-200 self-start shadow-sm">
                                        <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                                        {t("totalSeats", { count: activeEvent.totalSeats })}
                                    </div>
                                )}

                                {/* Description */}
                                {activeEvent.description && (
                                    <div>
                                        <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">{t("aboutThisEvent")}</h3>
                                        <div
                                            className="text-sm text-gray-600 leading-relaxed max-h-36 overflow-y-auto pr-1 prose prose-sm"
                                            dangerouslySetInnerHTML={{ __html: activeEvent.description }}
                                        />
                                    </div>
                                )}

                                {/* Divider */}
                                <div className="border-t border-gray-100" />

                                {/* Registration form */}
                                <div>
                                    <h3 className="text-lg font-black text-gray-900 mb-1">{t("registerTitle")}</h3>
                                    <p className="text-xs text-gray-400 mb-4">{t("registerSubtitle")}</p>
                                    <EventRegistrationForm event={activeEvent} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* ── More Events Grid ─────────────────────────────────────── */}
            {otherEvents.length > 0 && (
                <section className="py-12 pb-24">
                    <div className="container px-6 mx-auto sm:px-12 lg:px-24">

                        {/* Section header */}
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-1 h-5 bg-[#A11D1D] rounded-full" />
                                    <span className="text-xs font-black uppercase tracking-widest text-gray-500">More Events</span>
                                </div>
                                <h2 className="text-2xl font-black text-gray-900 tracking-tight">{t("otherEventsTitle")}</h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {otherEvents.map((event: any) => (
                                <div
                                    key={event.id}
                                    className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                                >
                                    {/* Banner image */}
                                    <div className="relative aspect-video w-full bg-slate-100 overflow-hidden">
                                        <EventCardImage
                                            src={getBannerImageUrl(event.bannerImage)}
                                            alt={event.title}
                                        />
                                        {/* Badges */}
                                        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                                            <span className={cn(
                                                "px-2.5 py-0.5 text-[9px] font-black tracking-wider uppercase rounded-full text-white shadow-sm",
                                                event.eventType === "WORKSHOP" ? "bg-[#A11D1D]" : "bg-blue-600"
                                            )}>
                                                {event.eventType}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card body */}
                                    <div className="p-5 flex flex-col grow">
                                        {/* Meta: date & location */}
                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
                                            <div className="flex items-center gap-1 text-[10px] font-semibold text-gray-400">
                                                <Calendar className="w-3 h-3 text-[#A11D1D]" />
                                                <span>{formatEventDate(event.startDate)}</span>
                                            </div>
                                            {event.startTime && (
                                                <div className="flex items-center gap-1 text-[10px] font-semibold text-gray-400">
                                                    <Clock className="w-3 h-3 text-[#A11D1D]" />
                                                    <span>{formatEventTime(event.startTime)}</span>
                                                </div>
                                            )}
                                            <div className="flex items-center gap-1 text-[10px] font-semibold text-gray-400">
                                                <MapPin className="w-3 h-3 text-[#A11D1D]" />
                                                <span className="truncate max-w-25">{event.location || "Online"}</span>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-base font-black text-gray-900 line-clamp-2 leading-snug group-hover:text-[#A11D1D] transition-colors mb-2">
                                            {event.title}
                                        </h3>

                                        {/* Description */}
                                        <div
                                            className="text-xs text-gray-500 line-clamp-2 leading-relaxed grow mb-4"
                                            dangerouslySetInnerHTML={{ __html: event.description || "" }}
                                        />

                                        {/* Card footer */}
                                        <div className="flex items-center gap-2 pt-4 border-t border-gray-100 mt-auto">
                                            <Button

                                                size="sm"
                                                onClick={() => handleSelectEvent(event.id)}
                                                className="flex-1 gap-1 h-9"
                                            >
                                                Details <ChevronRight className="w-3 h-3" />
                                            </Button>

                                            <Dialog>
                                                <DialogTrigger
                                                    className="flex-1 inline-flex items-center justify-center gap-1 h-9 px-3 rounded-lg bg-[#A11D1D] hover:bg-[#8a1818] text-white text-xs font-bold transition-colors cursor-pointer"
                                                >
                                                    Register <ArrowRight className="w-3 h-3 rtl:rotate-180" />
                                                </DialogTrigger>
                                                <DialogContent className="max-w-md bg-white border border-gray-100 rounded-2xl shadow-2xl p-7">
                                                    <DialogHeader className="mb-4">
                                                        <DialogTitle className="text-xl font-black text-gray-900 text-left leading-snug">
                                                            Register for{" "}
                                                            <span className="text-[#A11D1D]">{event.title}</span>
                                                        </DialogTitle>
                                                    </DialogHeader>
                                                    <EventRegistrationForm event={event} />
                                                </DialogContent>
                                            </Dialog>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
