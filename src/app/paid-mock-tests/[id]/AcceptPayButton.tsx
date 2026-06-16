"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Home, MapPin, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { PriceDisplay } from "@/components/ui/price-display";

interface AcceptPayButtonProps {
  data: {
    slug: string;
    price: string;
    center_price?: string;
    details?: {
      center_price?: string | number;
    } | null;
  };
  className?: string;
  children?: React.ReactNode;
}

export function AcceptPayButton({
  data,
  className,
  children,
}: AcceptPayButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<"home" | "center">(
    "home",
  );
  const router = useRouter();

  const homePrice = parseFloat(data.price || "350");
  const rawCenterPrice = data.details?.center_price ?? data.center_price;
  const centerPrice = rawCenterPrice ? parseFloat(String(rawCenterPrice)) : 450;

  const handleContinue = () => {
    setIsOpen(false);
    const selectedPrice = selectedLocation === "center" ? centerPrice : homePrice;
    router.push(
      `/paid-mock-tests/registration?id=${data.slug}&location=${selectedLocation}&price=${selectedPrice}`,
    );
  };


  return (
    <>
      <button onClick={() => setIsOpen(true)} className={className}>
        {children || "I Accept, Pay"}
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-lg p-6 bg-white rounded-2xl shadow-xl">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-xl font-black text-slate-900 tracking-tight">
              Select Test Location
            </DialogTitle>
            <DialogDescription className="text-sm text-slate-500 mt-1">
              Please choose where you would like to take the mock test. Prices
              vary based on the location.
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
            {/* Home Option */}
            <div
              onClick={() => setSelectedLocation("home")}
              className={cn(
                "relative flex flex-col p-5 border-2 rounded-2xl cursor-pointer transition-all duration-300 select-none group",
                selectedLocation === "home"
                  ? "border-primary bg-primary/5 shadow-md shadow-primary/5"
                  : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/50",
              )}
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className={cn(
                    "p-2.5 rounded-xl transition-colors",
                    selectedLocation === "home"
                      ? "bg-primary/10 text-primary"
                      : "bg-slate-100 text-slate-500",
                  )}
                >
                  <Home className="w-5 h-5" />
                </div>
                {selectedLocation === "home" && (
                  <CheckCircle2 className="w-5 h-5 text-primary animate-in zoom-in-50 duration-200" />
                )}
              </div>
              <h4 className="font-bold text-slate-800 text-base mb-1">
                At Home
              </h4>
              <p className="text-xs text-slate-500 mb-4 flex-1">
                Take the exam online from the comfort of your own device.
              </p>
              <div className="text-lg font-black text-slate-900 mt-auto">
                <PriceDisplay amount={homePrice} />
              </div>
            </div>

            {/* Center Option */}
            <div
              onClick={() => setSelectedLocation("center")}
              className={cn(
                "relative flex flex-col p-5 border-2 rounded-2xl cursor-pointer transition-all duration-300 select-none group",
                selectedLocation === "center"
                  ? "border-primary bg-primary/5 shadow-md shadow-primary/5"
                  : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/50",
              )}
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className={cn(
                    "p-2.5 rounded-xl transition-colors",
                    selectedLocation === "center"
                      ? "bg-primary/10 text-primary"
                      : "bg-slate-100 text-slate-500",
                  )}
                >
                  <MapPin className="w-5 h-5" />
                </div>
                {selectedLocation === "center" && (
                  <CheckCircle2 className="w-5 h-5 text-primary animate-in zoom-in-50 duration-200" />
                )}
              </div>
              <h4 className="font-bold text-slate-800 text-base mb-1">
                At Center
              </h4>
              <p className="text-xs text-slate-500 mb-4 flex-1">
                Take the exam at our accredited, fully-equipped test center.
              </p>
              <div className="text-lg font-black text-slate-900 mt-auto">
                <PriceDisplay amount={centerPrice} />
              </div>
            </div>
          </div>

          <DialogFooter className="mt-6 flex flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
            <Button onClick={handleContinue} className="w-full sm:w-auto px-8">
              Continue to Pay
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
