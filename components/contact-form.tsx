"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { siteConfig, whatsappLink } from "@/lib/site-config";

const selectClass = cn(
  "block w-full bg-transparent border-0 border-b border-cream/25 text-cream py-3 px-0",
  "focus:outline-none focus:border-cream transition-colors appearance-none cursor-pointer [&>option]:text-ink"
);

const projectTypes = [
  "New Restaurant",
  "Café",
  "Cloud Kitchen",
  "Hotel F&B",
  "Renovation",
  "Existing Restaurant Improvement",
  "Multi-Unit Expansion",
  "Other",
];

const projectStages = [
  "Idea",
  "Planning or funding",
  "Site secured",
  "Under construction",
  "Already operating",
];

const fields = [
  { name: "name", label: "Name", type: "text", autoComplete: "name", required: true },
  { name: "company", label: "Company", type: "text", autoComplete: "organization", required: false },
  { name: "email", label: "Email", type: "email", autoComplete: "email", required: true },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel", required: true },
  { name: "location", label: "Location", type: "text", autoComplete: "address-level2", required: false },
] as const;

export type ContactFormProps = {
  fieldIdPrefix?: string;
};

export function ContactForm({ fieldIdPrefix }: ContactFormProps) {
  const [sent, setSent] = useState(false);
  const id = (base: string) => (fieldIdPrefix ? `${fieldIdPrefix}-${base}` : base);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const body = [
      `Name: ${get("name")}`,
      `Company: ${get("company")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Location: ${get("location")}`,
      `Project type: ${get("type")}`,
      `Project stage: ${get("stage")}`,
      "",
      get("message"),
    ].join("\n");

    const wa = whatsappLink(`New enquiry from the website\n\n${body}`);
    const mail = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      `Website enquiry: ${get("type")} (${get("name")})`
    )}&body=${encodeURIComponent(body)}`;
    window.open(wa ?? mail, wa ? "_blank" : "_self");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {fields.map((f) => (
          <div key={f.name} className="space-y-2">
            <Label htmlFor={id(f.name)} className="text-cream/75">
              {f.label}
              {f.required ? "" : " (optional)"}
            </Label>
            <Input
              id={id(f.name)}
              name={f.name}
              type={f.type}
              required={f.required}
              autoComplete={f.autoComplete}
              className="text-cream border-cream/25 focus:border-cream"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <Label htmlFor={id("type")} className="text-cream/75">
            Project type
          </Label>
          <select id={id("type")} name="type" required className={selectClass} defaultValue="">
            <option value="" disabled>
              Select project type
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor={id("stage")} className="text-cream/75">
            Project stage
          </Label>
          <select id={id("stage")} name="stage" required className={selectClass} defaultValue="">
            <option value="" disabled>
              Select project stage
            </option>
            {projectStages.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor={id("message")} className="text-cream/75">
          Message
        </Label>
        <Textarea
          id={id("message")}
          name="message"
          rows={4}
          required
          className="text-cream border-cream/25 focus:border-cream"
        />
      </div>
      {sent && (
        <p className="text-sm text-sand" role="status">
          Thank you. Your enquiry is ready to send in the window that just opened.
        </p>
      )}
      <Button type="submit" className="w-full py-5 justify-center">
        Send enquiry
      </Button>
    </form>
  );
}
