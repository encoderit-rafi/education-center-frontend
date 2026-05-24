"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import {
  X,
  Copy,
  Check,
  RefreshCw,
  HelpCircle,
  Mail,
  Home,
  ShieldAlert,
  BookOpen,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PaymentFailedClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [formattedDate, setFormattedDate] = useState("");

  // Extract query parameters
  const rawAmount = searchParams.get("amount");
  const currency = searchParams.get("currency") || "AED";
  const examName = searchParams.get("exam") || searchParams.get("course") || searchParams.get("item") || "TEPTH Premium Exam Prep";
  const reference = searchParams.get("reference") || searchParams.get("payment_intent") || searchParams.get("session_id") || `TXN-${Math.floor(100000 + Math.random() * 900000)}`;
  const errorMessage = searchParams.get("error_message") || searchParams.get("reason") || "The transaction was declined by the card issuer or cancelled.";
  const retryUrl = searchParams.get("retry_url") || "/exams";

  // Format amount
  const amount = rawAmount
    ? parseFloat(rawAmount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    : null;

  useEffect(() => {
    // Generate current date beautifully on client
    const today = new Date();
    setFormattedDate(
      today.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      })
    );
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(reference);
    setCopied(true);
    toast.success("Support reference ID copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRetry = () => {
    if (retryUrl === "back") {
      router.back();
    } else {
      router.push(retryUrl);
    }
  };

  return (
    <div className="relative min-h-[85vh] w-full flex items-center justify-center bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100/70 py-16 px-4 md:px-6 overflow-hidden">
      {/* Aesthetic Background Blobs */}
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-rose-200/20 blur-3xl animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-maroon-100/10 blur-3xl animate-pulse duration-[10000ms] delay-2000" />
      <div className="absolute top-1/2 right-2/3 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-amber-100/15 blur-3xl animate-pulse duration-[9000ms] delay-1000" />

      {/* Main Glassmorphic Container */}
      <div className="relative w-full max-w-xl bg-white/80 backdrop-blur-md border border-white/60 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.05)] rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-[0_32px_70px_-10px_rgba(0,0,0,0.08)]">

        {/* Modern Failed Gradient Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-rose-400 via-red-500 to-maroon-700" />

        {/* Card Body */}
        <div className="p-6 md:p-8 text-center flex flex-col items-center">

          {/* Animated Warning Badge */}
          <div className="relative flex items-center justify-center mb-6 mt-4">
            <div className="absolute w-24 h-24 rounded-full bg-rose-50 border border-rose-100 animate-ping opacity-60 duration-1000" />
            <div className="absolute w-20 h-20 rounded-full bg-rose-100/60 border border-rose-200 animate-pulse duration-2000" />
            <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-tr from-rose-500 to-red-600 flex items-center justify-center text-white shadow-lg shadow-rose-500/30 transition-transform duration-300 hover:scale-105">
              <X className="w-8 h-8 stroke-[3]" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-headline text-3xl font-black text-slate-900 tracking-tight mb-2">
            Payment Failed
          </h1>
          <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
            We were unable to complete your transaction. Don't worry, if any funds were reserved by your bank, they will be released shortly.
          </p>
          {/* Action Buttons */}
          <div className="w-full flex flex-col sm:flex-row gap-3 mt-4 justify-center items-stretch sm:items-center">
            <Link href="/" className="grow sm:grow-0">
              <Button>
                <Home className="w-4 h-4" />
                <span>Go to Home</span>
              </Button>
            </Link>

            <Link href="/contact-us" className="grow sm:grow-0">
              <Button
                variant="outline"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Support</span>
              </Button>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
