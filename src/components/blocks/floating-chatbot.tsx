"use client";

import { useState } from "react";
import AIChatbot from "./ai-chat-bot";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function FloatingChatbot() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
            {/* Chat Window */}
            <div
                className={cn(
                    "transition-all duration-500 origin-bottom-right transform scale-0 opacity-0",
                    isOpen && "scale-100 opacity-100 translate-y-0"
                )}
            >
                {isOpen && (
                    <div className="w-[380px] sm:w-[500px] shadow-2xl rounded-2xl overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-500">
                        <AIChatbot />
                    </div>
                )}
            </div>

            {/* Toggle Button & Label */}
            <div className="flex items-center gap-4">
                {!isOpen && (
                    <div className="bg-white px-5 py-2.5 rounded-2xl shadow-xl border border-blue-50 animate-in slide-in-from-right-4 fade-in duration-500 hidden sm:block">
                        <p className="text-red-800 font-bold text-sm whitespace-nowrap">
                            How can I help you?
                        </p>
                    </div>
                )}
                <Button
                    size="icon"
                    className={cn(
                        "w-16 h-16 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95",
                        isOpen ? "bg-muted text-foreground" : "bg-red-800 text-white"
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="material-symbols-outlined text-3xl font-bold">
                        {isOpen ? "close" : "smart_toy"}
                    </span>
                </Button>
            </div>
        </div>
    );
}
