"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import {
  Check,
  Copy,
  ArrowRight,
  Calendar,
  CreditCard,
  FileText,
  Home,
  ShieldCheck,
  Download,
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PaymentSuccessClient() {
  const searchParams = useSearchParams();
  const [copied, setCopied] = useState(false);
  const [formattedDate, setFormattedDate] = useState("");

  // Extract query parameters
  const rawAmount = searchParams.get("amount");
  const currency = searchParams.get("currency") || "AED";
  const examName = searchParams.get("exam") || searchParams.get("course") || searchParams.get("item") || "TEPTH Premium Exam Prep";
  const reference = searchParams.get("reference") || searchParams.get("payment_intent") || searchParams.get("session_id") || `TXN-${Math.floor(100000 + Math.random() * 900000)}`;
  const paymentMethod = searchParams.get("method") || "Credit / Debit Card";

  // Format amount (e.g. 1250 -> 1,250.00)
  const amount = rawAmount
    ? parseFloat(rawAmount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    : "1,250.00";

  useEffect(() => {
    // Generate current date beautifully on client to avoid hydration mismatch
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
    toast.success("Transaction ID copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="relative min-h-[85vh] w-full flex items-center justify-center bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100/70 py-16 px-4 md:px-6 overflow-hidden">
      {/* Aesthetic Background Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-emerald-200/20 blur-3xl animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-maroon-100/10 blur-3xl animate-pulse duration-[10000ms] delay-2000" />
      <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-teal-100/15 blur-3xl animate-pulse duration-[9000ms] delay-1000" />

      {/* Main Glassmorphic Container */}
      <div className="relative w-full max-w-xl bg-white/80 backdrop-blur-md border border-white/60 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.05)] rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-[0_32px_70px_-10px_rgba(0,0,0,0.08)]">

        {/* Modern Success Gradient Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600" />

        {/* Card Body */}
        <div className="p-6 md:p-8 text-center flex flex-col items-center">

          {/* Animated Success Badge */}
          <div className="relative flex items-center justify-center mb-6 mt-4">
            <div className="absolute w-24 h-24 rounded-full bg-emerald-50 border border-emerald-100 animate-ping opacity-60 duration-1000" />
            <div className="absolute w-20 h-20 rounded-full bg-emerald-100/60 border border-emerald-200 animate-pulse duration-2000" />
            <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 transition-transform duration-300 hover:scale-105">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-headline text-3xl font-black text-slate-900 tracking-tight mb-2 animate-fade-up">
            Payment Successful!
          </h1>
          <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
            Your transaction has been processed securely. A confirmation email and tax invoice are on their way.
          </p>
          <div className="w-full mt-4 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
            <Link href="/" className="grow sm:grow-0">
              <Button
              >
                <Home className="w-4 h-4" />
                <span>Go to Home</span>
              </Button>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
