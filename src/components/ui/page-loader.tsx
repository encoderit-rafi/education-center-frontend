import React from "react";
import { Loader2 } from "lucide-react";

export function PageLoader() {
  return (
    <div className="min-h-[60vh] w-full flex flex-col items-center justify-center py-20 px-4 bg-white">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[#A11D1D]/10 animate-ping" />
          <div className="relative w-16 h-16 rounded-full border-4 border-slate-100 border-t-[#A11D1D] animate-spin flex items-center justify-center shadow-sm">
            <Loader2 className="w-6 h-6 text-[#A11D1D] animate-spin" />
          </div>
        </div>
        <div className="text-center space-y-1">
          <p className="text-sm font-bold text-slate-800 tracking-wider uppercase">
            Loading...
          </p>
          <p className="text-xs text-slate-400 font-medium">
            Preparing content, please wait...
          </p>
        </div>
      </div>
    </div>
  );
}

export default PageLoader;
