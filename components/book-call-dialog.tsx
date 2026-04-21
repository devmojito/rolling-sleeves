"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SectionLabel } from "@/components/section-label";
import { ContactForm } from "@/components/contact-form";

type BookCallDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function BookCallDialog({ open, onOpenChange }: BookCallDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader className="mb-8">
          <SectionLabel className="text-xs px-3 py-1 mb-4 w-fit">
            Free consultation
          </SectionLabel>
          <DialogTitle className="font-headline font-bold text-2xl md:text-3xl uppercase tracking-wide text-cream">
            Tell us about your project
          </DialogTitle>
          <DialogDescription className="text-cream/65 text-sm leading-relaxed pt-2">
            Book a free, no-obligation call. We&apos;ll get back to you within one
            business day.
          </DialogDescription>
        </DialogHeader>
        <ContactForm fieldIdPrefix="nav-book-call" />
      </DialogContent>
    </Dialog>
  );
}
