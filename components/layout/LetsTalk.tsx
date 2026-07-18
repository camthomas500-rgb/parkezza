"use client";

import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { getEmailAddress, getPhoneNumber } from "@/lib/contact";
import { cn } from "@/lib/utils";

interface LetsTalkProps {
  variant?: "header" | "footer" | "inline";
  className?: string;
  showLabel?: boolean;
}

const actionClass =
  "inline-flex items-center justify-center gap-2 rounded-full bg-bronze px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-bronze/90";

export function LetsTalk({
  variant = "header",
  className,
  showLabel = true,
}: LetsTalkProps) {
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const phone = showPhone ? getPhoneNumber() : null;
  const email = showEmail ? getEmailAddress() : null;
  const telHref = phone ? `tel:+1${phone.replace(/\D/g, "")}` : undefined;

  const labelClass = "text-sm font-medium text-bronze";

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2",
        variant === "inline" && "justify-center",
        className
      )}
    >
      {showLabel && <span className={labelClass}>Let&apos;s Talk</span>}

      {showPhone ? (
        <a href={telHref} className={actionClass}>
          <Phone className="size-4 shrink-0" aria-hidden />
          {phone}
        </a>
      ) : (
        <button
          type="button"
          onClick={() => setShowPhone(true)}
          className={actionClass}
          aria-label="Show phone number"
        >
          <Phone className="size-4" aria-hidden />
        </button>
      )}

      {showEmail ? (
        <a href={`mailto:${email}`} className={actionClass}>
          <Mail className="size-4 shrink-0" aria-hidden />
          {email}
        </a>
      ) : (
        <button
          type="button"
          onClick={() => setShowEmail(true)}
          className={actionClass}
          aria-label="Show email address"
        >
          <Mail className="size-4" aria-hidden />
        </button>
      )}
    </div>
  );
}
