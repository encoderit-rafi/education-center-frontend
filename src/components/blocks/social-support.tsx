"use client";

import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "../ui/button";

export default function SocialSupport() {
  return (
    <div className="fixed bottom-8 left-8 z-50">
      <Popover>
        <PopoverTrigger
          openOnHover={true}
          render={
            <Button
              className="group relative flex h-16 items-center gap-3 rounded-full bg-[#25D366] px-4 text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 sm:px-6"
              aria-label="Contact Support"
            >
              {/* Pulsing background effect */}
              <span className="absolute inset-0 animate-pulse rounded-full bg-white/20" />

              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:rotate-12">
                <MessageCircle className="h-6 w-6" />
              </div>

              <span className="hidden text-sm font-black uppercase tracking-wider sm:block">
                Support
              </span>

              {/* Online Status Dot */}
              <span className="absolute right-2 top-2 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
              </span>
            </Button>
          }
        />
        <PopoverContent
          side="top"
          align="start"
          sideOffset={15}
          className="w-72 p-0 overflow-hidden border-none shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-3xl"
        >
          <div className="bg-white dark:bg-slate-900">
            <div className="p-5 bg-gradient-to-br from-[#25D366]/10 to-sky-500/10 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Contact Support</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">We usually respond within minutes.</p>
            </div>

            <div className="p-3 space-y-2">
              <a
                href="https://wa.me/+97143333616"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-2xl hover:bg-[#25D366]/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#25D366] text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-slate-800 dark:text-slate-100">WhatsApp Support</div>
                  <div className="text-xs text-slate-500">Direct chat with our team</div>
                </div>
              </a>

              <a
                href="https://t.me/your_telegram_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-2xl hover:bg-sky-500/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#0088cc] text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-slate-800 dark:text-slate-100">Telegram Chatbot</div>
                  <div className="text-xs text-slate-500">Automated assistance 24/7</div>
                </div>
              </a>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 text-[10px] text-center text-slate-400 uppercase tracking-widest font-bold">
              Available 9AM - 6PM GST
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
