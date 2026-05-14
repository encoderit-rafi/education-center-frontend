"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { PRIMARY_NAV, SECONDARY_NAV } from "@/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const allNavs = [...PRIMARY_NAV, ...SECONDARY_NAV];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Menu className="size-5 text-primary" />} />
      <DialogContent
        className="fixed top-0 left-auto right-0 bottom-0 translate-x-0 translate-y-0 h-full w-[85vw] max-w-sm rounded-none border-l p-0 shadow-2xl flex flex-col data-open:animate-in data-open:slide-in-from-right data-closed:animate-out data-closed:slide-out-to-right"
        overlayClassName="backdrop-blur-sm"
        showCloseButton={false}
      >
        <DialogHeader className="p-4 px-6 border-b shrink-0 flex flex-row items-center justify-between">
          <DialogTitle className="text-left text-lg font-bold text-secondary uppercase tracking-wider">
            Menu
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setOpen(false)}
            className="rounded-full hover:bg-slate-100 transition-colors"
          >
            <X className="size-5 text-slate-500" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto no-scrollbar py-2">
          <Accordion type="single" className="border-none rounded-none w-full">
            {allNavs.map((item) => (
              <React.Fragment key={item.name}>
                {item.type === "single" ? (
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-6 py-4 text-sm font-semibold text-secondary hover:bg-slate-50 transition-colors border-b border-slate-100/50"
                  >
                    <span className="capitalize">{item.name}</span>
                  </Link>
                ) : (
                  <AccordionItem
                    value={item.name}
                    className="border-b border-slate-100/50"
                  >
                    <AccordionTrigger className="hover:no-underline px-6 py-4 text-sm font-semibold text-secondary border-none [&[data-state=open]]:bg-slate-50">
                      <span className="capitalize">{item.name}</span>
                    </AccordionTrigger>
                    <AccordionContent className="p-0 bg-slate-50/50">
                      <div className="flex flex-col">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setOpen(false)}
                            className="px-10 py-3.5 text-sm font-medium text-slate-600 hover:text-primary hover:bg-white transition-all border-t border-slate-100 first:border-t-0"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )}
              </React.Fragment>
            ))}
          </Accordion>
        </div>

        <div className="p-6 border-t bg-slate-50/80 shrink-0">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">
            © {new Date().getFullYear()} TEPTH. All Rights Reserved.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
