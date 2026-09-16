import { MaterialIcon } from "@/components/material-icon";
import { whatsappLink } from "@/lib/site-config";

export function WhatsAppButton() {
  const href = whatsappLink("Hi Rolling Sleeves, I'd like to talk about my restaurant project.");
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Rolling Sleeves on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-black/30 transition-transform hover:scale-[1.03] md:bottom-8 md:right-8"
    >
      <MaterialIcon name="chat" filled className="text-xl" />
      <span>WhatsApp</span>
    </a>
  );
}
