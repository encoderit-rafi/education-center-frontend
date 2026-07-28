"use client";

import React, { useState, useRef } from "react";
import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ALLOWED_TYPES = ["application/pdf", "image/png", "image/jpeg", "image/jpg"];
const ALLOWED_EXTENSIONS = [".pdf", ".png", ".jpg", ".jpeg"];
const MAX_SIZE_MB = 5;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

interface FileUploadFieldProps {
  value?: File;
  onChange: (file: File | undefined) => void;
  /** Hint text shown below the input */
  hint?: string;
}

export function FileUploadField({ value, onChange, hint }: FileUploadFieldProps) {
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const ext = "." + file.name.split(".").pop()?.toLowerCase();
    const typeOk =
      ALLOWED_TYPES.includes(file.type) || ALLOWED_EXTENSIONS.includes(ext);

    if (!typeOk) {
      setError("Invalid file type. Allowed formats: PDF, PNG, JPG, JPEG.");
      if (inputRef.current) inputRef.current.value = "";
      onChange(undefined);
      return;
    }

    if (file.size > MAX_SIZE_BYTES) {
      setError(
        `File is too large. Maximum allowed size is ${MAX_SIZE_MB}MB (your file: ${(file.size / (1024 * 1024)).toFixed(2)}MB).`
      );
      if (inputRef.current) inputRef.current.value = "";
      onChange(undefined);
      return;
    }

    setError(null);
    onChange(file);
  };

  const handleRemove = () => {
    setError(null);
    onChange(undefined);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="flex flex-col gap-2">
      {!value ? (
        <Input
          ref={inputRef}
          type="file"
          accept=".pdf,.png,.jpg,.jpeg"
          className="h-auto py-2 px-3 border-2 border-dashed border-slate-200 hover:border-primary/50 transition-colors cursor-pointer file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
          onChange={handleChange}
        />
      ) : (
        <div className="flex flex-col items-center justify-between gap-3 p-3 rounded-xl border border-green-500/50 bg-green-100/30">
          <div className="size-9 rounded-full bg-emerald-100 border border-green-500/50 flex items-center justify-center text-emerald-600">
            <Save className="size-[17px]" />
          </div>
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-700 truncate max-w-[200px]">
                {value.name}
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                {(value.size / (1024 * 1024)).toFixed(2)} MB
              </span>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleRemove}
              className="size-8 p-0 rounded-full hover:bg-red-50 hover:text-red-600"
            >
              <span className="text-lg">×</span>
            </Button>
          </div>
        </div>
      )}

      {error && (
        <p className="text-[12px] font-semibold text-destructive animate-in fade-in slide-in-from-top-1 duration-200">
          {error}
        </p>
      )}

      {hint && (
        <p className="text-[12px] text-slate-900 font-medium">{hint}</p>
      )}
    </div>
  );
}
