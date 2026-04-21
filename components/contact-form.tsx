"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MaterialIcon } from "@/components/material-icon";
import { cn } from "@/lib/utils";

const selectClass = cn(
  "block w-full bg-transparent border-0 border-b-2 border-outline-variant/30 text-cream py-3 px-0",
  "focus:outline-none focus:border-primary-container transition-colors appearance-none cursor-pointer"
);

function fieldId(prefix: string | undefined, base: string) {
  return prefix ? `${prefix}-${base}` : base;
}

export type ContactFormProps = {
  /** Avoid duplicate DOM ids when another contact form is on the page (e.g. modal + /contact). */
  fieldIdPrefix?: string;
};

export function ContactForm({ fieldIdPrefix }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const id = (base: string) => fieldId(fieldIdPrefix, base);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <Label htmlFor={id("name")} className="text-cream/80">
            Full Name
          </Label>
          <Input
            id={id("name")}
            name="name"
            required
            autoComplete="name"
            className="text-cream border-outline-variant/30 focus:border-primary-container"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={id("email")} className="text-cream/80">
            Email Address
          </Label>
          <Input
            id={id("email")}
            name="email"
            type="email"
            required
            autoComplete="email"
            className="text-cream border-outline-variant/30 focus:border-primary-container"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <Label htmlFor={id("phone")} className="text-cream/80">
            Phone Number
          </Label>
          <Input
            id={id("phone")}
            name="phone"
            type="tel"
            autoComplete="tel"
            className="text-cream border-outline-variant/30 focus:border-primary-container"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={id("business")} className="text-cream/80">
            Business Name (Optional)
          </Label>
          <Input
            id={id("business")}
            name="business"
            autoComplete="organization"
            className="text-cream border-outline-variant/30 focus:border-primary-container"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <Label htmlFor={id("type")} className="text-cream/80">
            Concept Type
          </Label>
          <select id={id("type")} name="type" required className={selectClass}>
            <option value="">Select concept type</option>
            <option value="fine-dining">Fine Dining</option>
            <option value="casual">Casual Dining</option>
            <option value="cafe">Cafe / Coffee Shop</option>
            <option value="qsr">Quick Service (QSR)</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor={id("stage")} className="text-cream/80">
            Current Stage
          </Label>
          <select id={id("stage")} name="stage" required className={selectClass}>
            <option value="">Current stage</option>
            <option value="idea">Just an Idea</option>
            <option value="planning">Planning / Funding</option>
            <option value="location">Location Secured</option>
            <option value="operating">Already Operating</option>
          </select>
        </div>
      </div>
      <div className="space-y-2 pt-2">
        <Label htmlFor={id("project")} className="text-cream/80">
          Tell us about your vision
        </Label>
        <Textarea
          id={id("project")}
          name="project"
          rows={4}
          required
          className="text-cream border-outline-variant/30 focus:border-primary-container"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor={id("source")} className="text-cream/80">
          How did you hear about us?
        </Label>
        <select id={id("source")} name="source" className={selectClass}>
          <option value="">Select an option</option>
          <option value="search">Search Engine</option>
          <option value="social">Social Media</option>
          <option value="referral">Referral</option>
          <option value="other">Other</option>
        </select>
      </div>
      {submitted && (
        <p className="text-sm text-gold font-medium" role="status">
          Thanks — we&apos;ll respond within one business day.
        </p>
      )}
      <Button
        type="submit"
        variant="gradient"
        className="w-full py-5 justify-center"
      >
        Request consultation
        <MaterialIcon name="arrow_forward" />
      </Button>
    </form>
  );
}
