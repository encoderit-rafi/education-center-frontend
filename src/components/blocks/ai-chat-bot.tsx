import { useState, useRef, useEffect } from "react";

// ─── Shadcn/ui / Base UI imports ─────────────────────────────────────────────
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { ScrollArea } from "../ui/scroll-area";

// ─── Types ──────────────────────────────────────────────────────────────────
interface Message {
    id: number;
    role: "user" | "assistant";
    content: string;
    time: string;
    reaction: string | null;
}

// ─── Constants ───────────────────────────────────────────────────────────────
const EMOJIS = ["👍", "❤️", "😂", "😮", "😢", "🔥"];

const SUGGESTIONS = [
    "What can you help with?",
    "Write a haiku about coding",
    "Explain async/await in JS",
    "Give me a productivity tip",
];

const SYSTEM_PROMPT =
    "You are a helpful, friendly AI assistant. Keep responses concise and conversational. Use markdown sparingly — only for code blocks or emphasis when it genuinely helps.";

// ─── Helpers ─────────────────────────────────────────────────────────────────
function formatTime(): string {
    return new Date().toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
    });
}

function renderMarkdown(text: string): string {
    // Basic sanitization to prevent simple XSS when using dangerouslySetInnerHTML
    const sanitized = text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    // Very lightweight markdown → HTML (code blocks, inline code, bold, italic)
    return sanitized
        .replace(/```([\s\S]*?)```/g, '<pre className="bg-muted p-2 rounded-md my-2 overflow-x-auto"><code>$1</code></pre>')
        .replace(/`([^`]+)`/g, '<code className="bg-muted px-1 rounded">$1</code>')
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/g, "<em>$1</em>")
        .replace(/\n/g, "<br />");
}

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Animated typing indicator */
function TypingIndicator() {
    return (
        <div className="flex gap-1 items-center py-1 px-1">
            {[0, 1, 2].map((i) => (
                <span
                    key={i}
                    className="w-2 h-2 rounded-full bg-purple-400 inline-block animate-bounce"
                    style={{ animationDelay: `${i * 0.18}s` }}
                />
            ))}
        </div>
    );
}

interface ReactionPopoverProps {
    children: React.ReactNode;
    onReact: (emoji: string) => void;
}

/** Emoji reaction popover triggered on a message bubble */
function ReactionPopover({ children, onReact }: ReactionPopoverProps) {
    const [open, setOpen] = useState(false);
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger>{children}</PopoverTrigger>
            <PopoverContent
                side="top"
                align="start"
                className="flex gap-1 p-2 w-auto"
            >
                {EMOJIS.map((em) => (
                    <button
                        key={em}
                        className="text-lg hover:scale-125 transition-transform rounded px-1 hover:bg-muted"
                        onClick={() => {
                            onReact(em);
                            setOpen(false);
                        }}
                    >
                        {em}
                    </button>
                ))}
            </PopoverContent>
        </Popover>
    );
}

interface MessageBubbleProps {
    msg: Message;
    onReact: (msgId: number, emoji: string | null) => void;
}

/** A single message bubble */
function MessageBubble({ msg, onReact }: MessageBubbleProps) {
    const isUser = msg.role === "user";

    return (
        <div
            className={`flex gap-2 items-end ${isUser ? "flex-row-reverse" : "flex-row"}`}
        >
            {/* Avatar */}
            <Avatar className="w-7 h-7 shrink-0">
                <AvatarFallback
                    className={
                        isUser
                            ? "bg-blue-100 text-blue-800 text-[10px]"
                            : "bg-purple-100 text-purple-800 text-[10px]"
                    }
                >
                    {isUser ? "You" : "AI"}
                </AvatarFallback>
            </Avatar>

            {/* Bubble + meta */}
            <div
                className={`flex flex-col gap-1 max-w-[75%] ${isUser ? "items-end" : "items-start"}`}
            >
                <ReactionPopover onReact={(em) => onReact(msg.id, em)}>
                    <div
                        className={`
              px-3 py-2 rounded-2xl text-sm leading-relaxed cursor-pointer select-text
              ${isUser
                                ? "bg-blue-600 text-white rounded-br-sm"
                                : "bg-muted text-foreground border border-border/60 rounded-bl-sm"
                            }
            `}
                        title="Click to react"
                        dangerouslySetInnerHTML={
                            isUser ? undefined : { __html: renderMarkdown(msg.content) }
                        }
                    >
                        {isUser ? msg.content : undefined}
                    </div>
                </ReactionPopover>

                {/* Time + reaction badge */}
                <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-muted-foreground">{msg.time}</span>
                    {msg.reaction && (
                        <Badge
                            variant="outline"
                            className="text-xs px-1.5 py-0 h-5 cursor-pointer hover:bg-muted"
                            onClick={() => onReact(msg.id, null)}
                            title="Click to remove"
                        >
                            {msg.reaction}
                        </Badge>
                    )}
                </div>
            </div>
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function AIChatbot() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const bottomRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Auto-scroll on new messages
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isLoading]);

    // Auto-resize textarea
    useEffect(() => {
        const ta = textareaRef.current;
        if (!ta) return;
        ta.style.height = "auto";
        ta.style.height = Math.min(ta.scrollHeight, 120) + "px";
    }, [input]);

    const handleReact = (msgId: number, emoji: string | null) => {
        setMessages((prev) =>
            prev.map((m) =>
                m.id === msgId
                    ? { ...m, reaction: m.reaction === emoji ? null : emoji }
                    : m
            )
        );
    };

    const sendMessage = async (text?: string) => {
        const content = (text ?? input).trim();
        if (!content || isLoading) return;

        setInput("");
        setError(null);

        const userMsg: Message = {
            id: Date.now(),
            role: "user",
            content,
            time: formatTime(),
            reaction: null,
        };

        setMessages((prev) => [...prev, userMsg]);
        setIsLoading(true);

        // MOCK MODE: Since direct browser calls to Anthropic are blocked by CORS
        // and insecure (exposes API key), we implement a mock response for UI testing.
        const IS_MOCK_MODE = true;

        if (IS_MOCK_MODE) {
            // Simulate network delay
            setTimeout(() => {
                const mockReply = `I'm currently in **Mock Mode** because direct browser calls to my API are restricted by [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). 

To enable real responses, please set up a secure backend route that proxies your requests.

You said: *"${content}"*`;

                setMessages((prev) => [
                    ...prev,
                    {
                        id: Date.now() + 1,
                        role: "assistant",
                        content: mockReply,
                        time: formatTime(),
                        reaction: null,
                    },
                ]);
                setIsLoading(false);
                textareaRef.current?.focus();
            }, 1000);
            return;
        }

        // Real API call logic (will likely fail in browser due to CORS)
        try {
            const apiHistory = [...messages, userMsg].map(({ role, content }) => ({
                role,
                content,
            }));

            // IMPORTANT: API Keys should NEVER be stored in the frontend.
            // This URL is for demonstration purposes. Use a backend proxy.
            const res = await fetch("https://api.anthropic.com/v1/messages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": "YOUR_API_KEY_HERE", // DO NOT DO THIS IN PRODUCTION
                    "anthropic-version": "2023-06-01"
                },
                body: JSON.stringify({
                    model: "claude-3-sonnet-20240229",
                    max_tokens: 1000,
                    system: SYSTEM_PROMPT,
                    messages: apiHistory,
                }),
            });

            const data = await res.json();
            if (data.error) throw new Error(data.error.message);

            const reply = data.content?.map((b: { text?: string }) => b.text || "").join("") ?? "";

            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now() + 1,
                    role: "assistant",
                    content: reply,
                    time: formatTime(),
                    reaction: null,
                },
            ]);
        } catch (err: any) {
            setError(err.message || "Failed to fetch response");
        } finally {
            setIsLoading(false);
            textareaRef.current?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const clearChat = () => {
        setMessages([]);
        setError(null);
    };

    // ── Render ──────────────────────────────────────────────────────────────────
    return (
        <div className="flex flex-col h-[500px] md:h-[600px] w-full max-w-full md:max-w-[500px] mx-auto border border-border rounded-2xl overflow-hidden bg-background shadow-lg">

            {/* ── Header ── */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-muted/50">
                <Avatar className="w-9 h-9">
                    <AvatarFallback className="bg-purple-100 text-purple-700 text-sm font-medium">
                        AI
                    </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                    <p className="text-sm font-semibold leading-none">Claude</p>
                    <p className="text-[10px] text-muted-foreground mt-1 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse" />
                        Available Now
                    </p>
                </div>
                <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2 hover:bg-destructive/10 hover:text-destructive group"
                    onClick={clearChat}
                >
                    <span className="text-[10px] uppercase tracking-wider font-bold">Clear Chat</span>
                </Button>
            </div>

            {/* ── Messages ── */}
            <ScrollArea className="flex-1">
                <div className="px-3 py-4 md:px-4 md:py-6">
                    {messages.length === 0 ? (
                        // Empty state
                        <div className="flex flex-col items-center justify-center min-h-[350px] md:min-h-[400px] gap-6 text-center animate-in fade-in duration-700">
                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-3xl bg-purple-50 flex items-center justify-center text-2xl md:text-3xl">✦</div>
                            <div className="space-y-2 px-4">
                                <h3 className="text-base md:text-lg font-bold text-foreground">
                                    How can I help you today?
                                </h3>
                                <p className="text-xs md:text-sm text-muted-foreground max-w-[240px] md:max-w-[280px] mx-auto leading-relaxed">
                                    Ask me anything or choose a starting point from below to get started.
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2 max-w-full md:max-w-[320px] px-4">
                                {SUGGESTIONS.map((s) => (
                                    <button
                                        key={s}
                                        onClick={() => sendMessage(s)}
                                        className="text-xs px-4 py-2 rounded-xl border border-border bg-background hover:border-purple-200 hover:bg-purple-50/50 hover:text-purple-700 transition-all duration-300"
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-6">
                            {messages.map((msg) => (
                                <MessageBubble key={msg.id} msg={msg} onReact={handleReact} />
                            ))}

                            {/* Typing indicator */}
                            {isLoading && (
                                <div className="flex gap-2 items-end">
                                    <Avatar className="w-7 h-7 shrink-0">
                                        <AvatarFallback className="bg-purple-100 text-purple-800 text-[10px]">
                                            AI
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="bg-muted border border-border/60 rounded-2xl rounded-bl-sm px-3 py-2">
                                        <TypingIndicator />
                                    </div>
                                </div>
                            )}

                            {/* Error notice */}
                            {error && (
                                <div className="text-xs text-destructive bg-destructive/10 border border-destructive/20 rounded-xl px-4 py-3 flex gap-2 items-start">
                                    <span className="material-symbols-outlined text-sm shrink-0 mt-0.5">error</span>
                                    <span>{error}</span>
                                </div>
                            )}

                            <div ref={bottomRef} className="h-4" />
                        </div>
                    )}
                </div>
            </ScrollArea>

            {/* ── Input ── */}
            <div className="p-3 md:p-4 border-t border-border bg-background">
                <div className="flex items-end gap-2 bg-muted/30 border border-border rounded-2xl px-3 py-2 focus-within:ring-2 focus-within:ring-purple-500/20 focus-within:border-purple-500/50 transition-all duration-300">
                    <Textarea
                        ref={textareaRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type your message..."
                        className="flex-1 resize-none border-0 shadow-none focus-visible:ring-0 p-1 min-h-[24px] max-h-[120px] text-sm bg-transparent"
                        rows={1}
                    />
                    <Button
                        size="icon"
                        className="rounded-xl w-8 h-8 shrink-0 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20"
                        onClick={() => sendMessage()}
                        disabled={isLoading || !input.trim()}
                    >
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                        </svg>
                    </Button>
                </div>
                <p className="text-[9px] text-center text-muted-foreground mt-3 tracking-wide">
                    Powered by Claude 3.5 Sonnet
                </p>
            </div>
        </div>
    );
}