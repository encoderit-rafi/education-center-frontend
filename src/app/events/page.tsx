"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PhoneInput } from "@/components/ui/phone-input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
    CheckCircle,
    Phone,
    Mail,
    CheckCircle2,
    Calendar,
    Clock,
    MapPin,
    CreditCard,
    Loader2,
    RefreshCw
} from "lucide-react";
import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useQuery, useMutation } from "@tanstack/react-query";
import api from "@/axios";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { PaymentMethodSelector } from "@/components/blocks/payment-method-selector";

// Schema for event registration
const getEventSchema = (t: any) => z.object({
    fullName: z.string().min(3, t("form.fullNameError") || "Full name must be at least 3 characters"),
    mobile: z.string().min(7, t("form.mobileError") || "Please enter a valid mobile number"),
    email: z.string().email(t("form.emailError") || "Please enter a valid email address"),
    paymentMethod: z.enum(["stripe", "paypal"]),
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
            className="object-cover transition-transform duration-500 group-hover:scale-105"
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
            paymentMethod: "stripe",
        },
    });

    const paymentMethod = form.watch("paymentMethod");

    const isPaid = parseFloat(event.price) > 0;

    const paymentMutation = useMutation({
        mutationFn: (body: Record<string, unknown>) =>
            api.post("/payments/initiate", body),
        onSuccess: (response) => {
            const checkoutUrl = response.data?.checkoutUrl || response.data?.data?.checkoutUrl;
            if (checkoutUrl) {
                toast.success("Redirecting to payment...", { id: "event-submit" });
                window.location.href = checkoutUrl;
            } else {
                toast.error("Payment checkout link was not returned by the server.", { id: "event-submit" });
            }
        },
        onError: (error: any) => {
            console.error("Payment failed:", error);
            toast.error(error?.response?.data?.message || "Failed to initiate payment.", { id: "event-submit" });
        }
    });

    const bookingMutation = useMutation({
        mutationFn: (newBooking: Record<string, unknown>) =>
            api.post("/event-bookings", newBooking),
        onSuccess: (response) => {
            const bookingId = response.data?.data?.id;
            if (isPaid) {
                toast.loading("Redirecting to checkout...", { id: "event-submit" });
                paymentMutation.mutate({
                    booking_type: "event_booking",
                    booking_id: bookingId,
                    provider: paymentMethod,
                    amount: parseFloat(event.price),
                    currency: "AED",
                });
            } else {
                toast.success("Successfully registered for the event!", { id: "event-submit" });
                setIsSubmitted(true);
                if (onSuccess) onSuccess();
            }
        },
        onError: (error: any) => {
            console.error("Booking error:", error);
            toast.error(error?.response?.data?.message || "Registration failed.", { id: "event-submit" });
        }
    });

    const onSubmit = async (data: z.infer<typeof eventSchema>) => {
        toast.loading("Submitting registration...", { id: "event-submit" });

        // Parse names
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
            country: "AE",
            price: parseFloat(event.price) || 0,
            total_amount: parseFloat(event.price) || 0,
            payment_methods: paymentMethod,
        });
    };

    if (isSubmitted) {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-[#A11D1D]/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-[#A11D1D]" />
                </div>
                <h3 className="text-2xl font-black mb-2 uppercase tracking-tight text-gray-900">{t("successTitle")}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                    {t("successDesc")}
                </p>
                <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="rounded-none border-gray-200 text-gray-900 hover:bg-gray-900 hover:text-white font-bold uppercase tracking-widest text-[10px]"
                >
                    {t("newRegistrationBtn")}
                </Button>
            </div>
        );
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-left">
                <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem className="space-y-1">
                            <FormLabel className="text-[10px] font-black uppercase tracking-widest text-[#A11D1D]">{t("form.fullName")}</FormLabel>
                            <FormControl>
                                <Input className="bg-white border-gray-200 rounded-none h-12 text-[13px] focus:border-[#A11D1D] focus:ring-[#A11D1D]" placeholder={t("form.fullNamePlaceholder")} {...field} />
                            </FormControl>
                            <FormMessage className="text-[10px]" />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                        <FormItem className="space-y-1">
                            <FormLabel className="text-[10px] font-black uppercase tracking-widest text-[#A11D1D]">{t("form.mobile")}</FormLabel>
                            <FormControl>
                                <PhoneInput
                                    {...field}
                                    defaultCountry="AE"
                                    placeholder={t("form.mobilePlaceholder")}
                                    className="bg-white border-gray-200 rounded-none h-12 text-[13px] focus-within:border-[#A11D1D] focus-within:ring-1 focus-within:ring-[#A11D1D]"
                                />
                            </FormControl>
                            <FormMessage className="text-[10px]" />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="space-y-1">
                            <FormLabel className="text-[10px] font-black uppercase tracking-widest text-[#A11D1D]">{t("form.email")}</FormLabel>
                            <FormControl>
                                <Input className="bg-white border-gray-200 rounded-none h-12 text-[13px] focus:border-[#A11D1D] focus:ring-[#A11D1D]" placeholder={t("form.emailPlaceholder")} {...field} />
                            </FormControl>
                            <FormMessage className="text-[10px]" />
                        </FormItem>
                    )}
                />

                {isPaid && (
                    <FormField
                        control={form.control}
                        name="paymentMethod"
                        render={({ field }) => (
                            <FormItem className="space-y-1">
                                <FormControl>
                                    <PaymentMethodSelector
                                        value={field.value}
                                        onChange={field.onChange}
                                        error={form.formState.errors.paymentMethod}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                )}

                <Button
                    type="submit"
                    disabled={bookingMutation.isPending || paymentMutation.isPending}
                    className="w-full h-14 bg-[#A11D1D] hover:bg-[#111827] transition-all rounded-none font-black text-xs uppercase tracking-[0.3em] mt-2"
                >
                    {bookingMutation.isPending || paymentMutation.isPending
                        ? t("form.processing")
                        : isPaid
                            ? `Pay & Register - AED ${event.price}`
                            : t("form.submitBtn")
                    }
                </Button>
            </form>
        </Form>
    );
}

export default function EventsPage() {
    const t = useTranslations("EventsPage");
    const locale = useLocale();
    const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

    // Fetch Events list from standard API
    const { data: eventsResponse, isLoading, isError, refetch } = useQuery({
        queryKey: ["events-list"],
        queryFn: async () => {
            const response = await api.get("/events");
            return response.data;
        }
    });

    const events = eventsResponse?.data?.data || [];

    // Determine active event (first item default, or matched to user selection)
    const activeEvent = events.find((e: any) => e.id === selectedEventId) || events[0] || null;

    const [heroImageError, setHeroImageError] = useState(false);

    React.useEffect(() => {
        setHeroImageError(false);
    }, [activeEvent?.id]);

    // Helper functions for date & time localization formatting
    const formatEventDate = (dateStr: string) => {
        try {
            const date = new Date(dateStr);
            return date.toLocaleDateString(locale === "ar" ? "ar-EG" : "en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
            });
        } catch (e) {
            return dateStr;
        }
    };

    const formatEventTime = (timeStr: string) => {
        try {
            const date = new Date(timeStr);
            return date.toLocaleTimeString(locale === "ar" ? "ar-EG" : "en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true
            });
        } catch (e) {
            return timeStr;
        }
    };

    // Smooth scroll and set active event
    const handleSelectEvent = (eventId: string) => {
        setSelectedEventId(eventId);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // 1. Loading Skeleton Screen
    if (isLoading) {
        return (
            <div className="flex flex-col min-h-screen bg-white">
                <section className="pt-24 pb-12 bg-white animate-pulse">
                    <div className="container px-6 mx-auto sm:px-12 lg:px-24 text-center space-y-4">
                        <div className="h-14 w-64 bg-slate-200 mx-auto rounded" />
                        <div className="h-6 w-96 bg-slate-100 mx-auto rounded" />
                    </div>
                </section>

                <section className="py-24 bg-white flex flex-col items-center justify-center animate-pulse">
                    <div className="container px-6 mx-auto sm:px-12 lg:px-24 flex justify-center">
                        <div className="w-full max-w-7xl min-h-[700px] bg-slate-50 border border-slate-100 rounded-sm p-8 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-7 space-y-8">
                                <div className="h-10 w-48 bg-slate-200 rounded" />
                                <div className="h-24 w-full bg-slate-200 rounded" />
                                <div className="h-40 w-full bg-slate-200 rounded" />
                            </div>
                            <div className="lg:col-span-5 flex justify-end">
                                <div className="w-full max-w-md h-[480px] bg-slate-200 rounded" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    // 2. Error Loading Screen
    if (isError) {
        return (
            <div className="flex flex-col min-h-screen bg-white items-center justify-center p-6 text-center">
                <div className="w-16 h-16 bg-red-100 text-[#A11D1D] rounded-full flex items-center justify-center mb-6">
                    <RefreshCw className="w-8 h-8 animate-spin" />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tight text-gray-900 mb-2">Failed to load events</h2>
                <p className="text-gray-500 max-w-md mb-8">
                    We encountered an error while trying to fetch the list of events. Please try again.
                </p>
                <Button
                    onClick={() => refetch()}
                    className="rounded-none bg-[#A11D1D] hover:bg-[#111827] text-white font-black text-xs uppercase tracking-widest px-8 py-4"
                >
                    Try Again
                </Button>
            </div>
        );
    }

    // 3. Empty List Screen
    if (events.length === 0) {
        return (
            <div className="flex flex-col min-h-screen bg-white">
                <section className="pt-24 pb-12 bg-white">
                    <div className="container px-6 mx-auto sm:px-12 lg:px-24 text-center">
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-none mb-4">
                            {t("title")} <span className="text-[#A11D1D]">{t("titleAccent")}</span>
                        </h1>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
                            {t("subtitle")}
                        </p>
                    </div>
                </section>

                <section className="py-24 bg-white flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-slate-50 text-gray-300 rounded-full flex items-center justify-center mb-6 border border-slate-100">
                        <Calendar className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-2">No events scheduled</h3>
                    <p className="text-gray-400 text-sm max-w-sm mx-auto leading-relaxed">
                        {t("otherEventsDesc")}
                    </p>
                </section>
            </div>
        );
    }

    const otherEvents = events.filter((e: any) => e.id !== activeEvent.id);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header Title */}
            <section className="pt-24 pb-12 bg-white">
                <div className="container px-6 mx-auto sm:px-12 lg:px-24 text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-none mb-4">
                        {t("title")} <span className="text-[#A11D1D]">{t("titleAccent")}</span>
                    </h1>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
                        {t("subtitle")}
                    </p>
                </div>
            </section>

            {/* Featured Event Section */}
            {activeEvent && (
                <section className="py-24 bg-white flex flex-col items-center justify-center">
                    <div className="container px-6 mx-auto sm:px-12 lg:px-24 flex justify-center">
                        <div className="relative w-full max-w-7xl min-h-[780px] lg:min-h-[850px] xl:min-h-[880px] overflow-hidden bg-white shadow-3xl border border-gray-100 rounded-sm">
                            {/* 1. Background Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src={heroImageError ? "/images/study.jpg" : getBannerImageUrl(activeEvent.bannerImage)}
                                    alt=""
                                    fill
                                    className="object-cover object-[20%_center] opacity-40 lg:opacity-60 transition-all duration-500"
                                    onError={() => setHeroImageError(true)}
                                />
                            </div>

                            {/* 2. Large Diagonal Red Shapes (The "Glue") */}
                            {/* Top Left Shape */}
                            <div
                                className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-black via-[#450a0a] to-transparent z-10 opacity-90"
                                style={{ clipPath: 'polygon(0 0, 100% 0, 0 50%)' }}
                            />
                            <div
                                className="absolute top-0 left-0 w-2/3 h-1/2 bg-[#A11D1D] z-20 opacity-80"
                                style={{ clipPath: 'polygon(0 0, 60% 0, 0 100%)' }}
                            />

                            {/* Bottom Right Shape */}
                            <div
                                className="absolute bottom-0 right-0 w-full lg:w-2/3 h-full bg-gradient-to-tl from-[#7f1d1d] via-[#A11D1D] to-[#A11D1D] z-10"
                                style={{ clipPath: 'polygon(100% 20%, 100% 100%, 0 100%, 40% 100%)' }}
                            />
                            <div
                                className="absolute bottom-0 right-0 w-full lg:w-1/2 h-3/4 bg-[#A11D1D] z-20"
                                style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
                            />

                            {/* 3. Main Content Grid (Overlays) */}
                            <div className="relative z-30 h-full w-full grid grid-cols-1 lg:grid-cols-12 items-center p-8 lg:p-16 gap-8">

                                {/* LEFT: Branding & Description */}
                                <div className="lg:col-span-12 xl:col-span-7 space-y-10 text-left">
                                    {/* Branding Hook */}
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full backdrop-blur-sm">
                                                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-yellow-500">
                                                    <path d="M12 2L10 9L3 11L10 13L12 20L14 13L21 11L14 9L12 2Z" fill="currentColor" />
                                                </svg>
                                            </div>
                                            <h4 className="text-2xl font-black text-gray-800 tracking-widest uppercase font-heading">{activeEvent.eventType}</h4>
                                        </div>
                                        <div className="space-y-2">
                                            <h2 className="text-3xl lg:text-5xl font-black text-blue-900 leading-tight tracking-tighter">
                                                {activeEvent.title}
                                            </h2>

                                            {/* Date Time Badge and Location */}
                                            <div className="flex flex-wrap gap-4 pt-2">
                                                <div className="flex items-center gap-1.5 text-sm font-bold text-gray-700 bg-white/60 backdrop-blur-sm px-3 py-1.5 border border-white/20">
                                                    <Calendar className="w-4 h-4 text-[#A11D1D]" />
                                                    <span>{formatEventDate(activeEvent.startDate)}</span>
                                                    {activeEvent.startTime && (
                                                        <>
                                                            <span>|</span>
                                                            <Clock className="w-4 h-4 text-[#A11D1D]" />
                                                            <span>{formatEventTime(activeEvent.startTime)}</span>
                                                        </>
                                                    )}
                                                </div>

                                                <div className="flex items-center gap-1.5 text-sm font-bold text-gray-700 bg-white/60 backdrop-blur-sm px-3 py-1.5 border border-white/20">
                                                    <MapPin className="w-4 h-4 text-[#A11D1D]" />
                                                    <span>{activeEvent.location || "Online"}</span>
                                                </div>

                                                {activeEvent.totalSeats && (
                                                    <div className="flex items-center gap-1.5 text-sm font-bold text-gray-700 bg-white/60 backdrop-blur-sm px-3 py-1.5 border border-white/20">
                                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                                                        <span>{activeEvent.totalSeats - activeEvent.bookedSeats} Seats Left</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description and Agenda */}
                                    <div className="max-w-2xl bg-white/40 backdrop-blur-md p-8 border border-white/20 rounded-sm">
                                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#A11D1D] mb-4">Event Details & Overview</h3>
                                        <div
                                            className="text-xs font-bold text-gray-800 leading-relaxed uppercase tracking-tight prose prose-sm max-h-[250px] overflow-y-auto pr-4 scrollbar-thin"
                                            dangerouslySetInnerHTML={{ __html: activeEvent.description || "" }}
                                        />
                                    </div>
                                </div>

                                {/* RIGHT: Registration Form */}
                                <div className="lg:col-span-12 xl:col-span-5 flex justify-end">
                                    <div className="w-full max-w-md bg-white text-gray-900 p-8 lg:p-10 shadow-2xl relative overflow-hidden border border-gray-100">
                                        <div className="relative z-10">
                                            <h3 className="text-2xl font-black mb-1 font-heading tracking-tight underline decoration-[#A11D1D] decoration-4 underline-offset-8 text-left">{t("registerTitle")}</h3>
                                            <p className="text-gray-500 text-[10px] mb-6 uppercase tracking-[0.2em] font-bold text-left">{t("registerSubtitle")}</p>

                                            <EventRegistrationForm event={activeEvent} />
                                        </div>
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#A11D1D]/5 blur-[80px] -mr-16 -mt-16" />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>
            )}

            {/* More Events Grid Section */}
            {otherEvents.length > 0 && (
                <section className="py-24 bg-gray-50 border-t border-gray-100">
                    <div className="container px-6 mx-auto sm:px-12 lg:px-24">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="text-3xl font-black font-heading tracking-tighter mb-4 text-gray-900">{t("otherEventsTitle")}</h2>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {t("otherEventsDesc")}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {otherEvents.map((event: any) => (
                                <div key={event.id} className="group relative bg-white border border-gray-100 rounded-none overflow-hidden shadow-sm hover:shadow-2xl hover:border-gray-200 transition-all duration-300 flex flex-col h-full">
                                    {/* Banner image with hover zoom */}
                                    <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden">
                                        <EventCardImage
                                            src={getBannerImageUrl(event.bannerImage)}
                                            alt={event.title}
                                        />
                                        {/* Event Type Badge overlay */}
                                        <div className="absolute top-4 left-4 z-10 flex gap-2">
                                            <span className={cn(
                                                "px-3 py-1 text-[9px] font-black tracking-widest uppercase shadow-sm text-white",
                                                event.eventType === "WORKSHOP" ? "bg-[#A11D1D]" : "bg-blue-600"
                                            )}>
                                                {event.eventType}
                                            </span>
                                            {event.totalSeats && (event.totalSeats - event.bookedSeats <= 10) && (
                                                <span className="bg-amber-500 text-white text-[9px] font-black px-2 py-1 uppercase tracking-widest shadow">
                                                    Only {event.totalSeats - event.bookedSeats} Left
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Details container */}
                                    <div className="p-6 flex flex-col flex-grow text-left">
                                        {/* Date & Time */}
                                        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                                            <Calendar className="w-3.5 h-3.5 text-[#A11D1D] shrink-0" />
                                            <span>{formatEventDate(event.startDate)}</span>
                                            {event.startTime && (
                                                <>
                                                    <span className="text-gray-300">|</span>
                                                    <Clock className="w-3.5 h-3.5 text-[#A11D1D] shrink-0" />
                                                    <span>{formatEventTime(event.startTime)}</span>
                                                </>
                                            )}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-lg font-black text-gray-900 line-clamp-2 leading-snug group-hover:text-[#A11D1D] transition-colors mb-2">
                                            {event.title}
                                        </h3>

                                        {/* Description snippet */}
                                        <div
                                            className="text-xs text-gray-500 line-clamp-3 mb-6 leading-relaxed flex-grow"
                                            dangerouslySetInnerHTML={{ __html: event.description || "" }}
                                        />

                                        {/* Location */}
                                        <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-6 bg-slate-50 p-3 border border-slate-100">
                                            <MapPin className="w-4 h-4 text-[#A11D1D] shrink-0" />
                                            <span className="truncate">{event.location || "Online"}</span>
                                        </div>

                                        {/* Card Footer */}
                                        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                                            <div>
                                                <div className="text-[9px] font-bold uppercase tracking-wider text-gray-400">Price</div>
                                                <div className="text-base font-black text-gray-900">
                                                    {parseFloat(event.price) > 0 ? `AED ${event.price}` : "FREE"}
                                                </div>
                                            </div>

                                            <div className="flex gap-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => handleSelectEvent(event.id)}
                                                    className="rounded-none border-gray-200 text-[9px] font-black uppercase tracking-wider hover:bg-slate-50"
                                                >
                                                    Details
                                                </Button>

                                                <Dialog>
                                                    <DialogTrigger
                                                        className="inline-flex items-center justify-center h-9 px-3 rounded-none bg-[#A11D1D] hover:bg-[#111827] text-white text-[9px] font-black uppercase tracking-wider transition-all cursor-pointer"
                                                    >
                                                        Register
                                                    </DialogTrigger>
                                                    <DialogContent className="max-w-lg bg-white border border-gray-100 rounded-none shadow-2xl p-8">
                                                        <DialogHeader className="mb-6">
                                                            <DialogTitle className="text-xl font-black uppercase tracking-tight text-gray-900 text-left">
                                                                Register for <span className="text-[#A11D1D]">{event.title}</span>
                                                            </DialogTitle>
                                                        </DialogHeader>
                                                        <EventRegistrationForm event={event} />
                                                    </DialogContent>
                                                </Dialog>
                                            </div>
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
