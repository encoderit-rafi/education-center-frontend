import api from "@/axios";

export const CHAT_SESSION_KEY_STORAGE = "chatSessionKey";

export interface ApiChatMessage {
  id?: number | string;
  role: "user" | "assistant";
  content?: string;
  message?: string;
  createdAt?: string;
}

function getMessageText(msg: ApiChatMessage): string {
  return msg.content ?? msg.message ?? "";
}

function extractSessionKey(data: unknown): string | null {
  if (!data || typeof data !== "object") return null;
  const record = data as Record<string, unknown>;
  if (typeof record.sessionKey === "string") return record.sessionKey;
  if (record.data && typeof record.data === "object") {
    const nested = record.data as Record<string, unknown>;
    if (typeof nested.sessionKey === "string") return nested.sessionKey;
  }
  return null;
}

function extractMessages(data: unknown): ApiChatMessage[] {
  if (Array.isArray(data)) return data as ApiChatMessage[];
  if (!data || typeof data !== "object") return [];
  const record = data as Record<string, unknown>;
  if (Array.isArray(record.data)) return record.data as ApiChatMessage[];
  if (Array.isArray(record.messages)) return record.messages as ApiChatMessage[];
  return [];
}

export function extractAssistantReply(data: unknown): string | null {
  if (!data) return null;
  if (typeof data === "string") return data;
  if (typeof data !== "object") return null;

  const record = data as Record<string, unknown>;

  if (typeof record.content === "string" && record.role === "assistant") {
    return record.content;
  }
  if (typeof record.message === "string" && record.role === "assistant") {
    return record.message;
  }
  if (typeof record.reply === "string") return record.reply;
  if (typeof record.message === "string") return record.message;

  const assistantMessage = record.assistantMessage;
  if (assistantMessage && typeof assistantMessage === "object") {
    const nested = assistantMessage as Record<string, unknown>;
    if (typeof nested.content === "string") return nested.content;
    if (typeof nested.message === "string") return nested.message;
  }

  return null;
}

export async function createChatSession(): Promise<string> {
  const res = await api.post("/chat/sessions");
  const sessionKey = extractSessionKey(res.data);
  if (!sessionKey) {
    throw new Error("Failed to create chat session");
  }
  localStorage.setItem(CHAT_SESSION_KEY_STORAGE, sessionKey);
  return sessionKey;
}

export function getStoredSessionKey(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(CHAT_SESSION_KEY_STORAGE);
}

export function clearStoredSessionKey(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(CHAT_SESSION_KEY_STORAGE);
}

export async function getOrCreateChatSession(): Promise<string> {
  const stored = getStoredSessionKey();
  if (stored) return stored;
  return createChatSession();
}

export async function loadChatMessages(sessionKey: string): Promise<ApiChatMessage[]> {
  const res = await api.get(`/chat/sessions/${sessionKey}/messages`);
  return extractMessages(res.data);
}

export async function sendChatMessage(
  sessionKey: string,
  message: string,
): Promise<unknown> {
  const res = await api.post(`/chat/sessions/${sessionKey}/messages`, {
    message,
  });
  return res.data?.data ?? res.data;
}

export { getMessageText };
