"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCT_INTEREST_OPTIONS } from "@/lib/content";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "xdaqazvg";

function slugToLabel(slug: string): string | undefined {
  return PRODUCT_INTEREST_OPTIONS.find((o) => o.slug === slug)?.value;
}

export interface QuoteFormItem {
  id: string;
  label: string;
}

interface QuoteFormProps {
  /** Pre-select a product category by slug (e.g. "benches") */
  defaultCategory?: string;
  /** Specific products/models the visitor can pick (e.g. BN-01 — Lily VS1) */
  specificItems?: QuoteFormItem[];
}

export function QuoteForm({ defaultCategory, specificItems }: QuoteFormProps) {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category") ?? "";
  const itemFromUrl = searchParams.get("item") ?? "";

  const resolvedCategory = defaultCategory || categoryFromUrl;
  const defaultLabel = slugToLabel(resolvedCategory);

  const matchedItemLabel = useMemo(() => {
    if (!specificItems?.length || !itemFromUrl) return undefined;
    return specificItems.find(
      (i) => i.id === itemFromUrl || i.label === itemFromUrl
    )?.label;
  }, [specificItems, itemFromUrl]);

  const [selected, setSelected] = useState<string[]>(
    defaultLabel ? [defaultLabel] : []
  );
  const [selectedItems, setSelectedItems] = useState<string[]>(
    matchedItemLabel ? [matchedItemLabel] : []
  );
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  useEffect(() => {
    if (matchedItemLabel) {
      setSelectedItems((prev) =>
        prev.includes(matchedItemLabel) ? prev : [...prev, matchedItemLabel]
      );
    }
  }, [matchedItemLabel]);

  const available = useMemo(
    () => PRODUCT_INTEREST_OPTIONS.filter((o) => !selected.includes(o.value)),
    [selected]
  );

  const availableItems = useMemo(
    () =>
      (specificItems ?? []).filter((o) => !selectedItems.includes(o.label)),
    [specificItems, selectedItems]
  );

  function addCategory(value: string) {
    if (value && !selected.includes(value)) {
      setSelected((prev) => [...prev, value]);
    }
  }

  function removeCategory(value: string) {
    setSelected((prev) => prev.filter((v) => v !== value));
  }

  function addItem(value: string) {
    if (value && !selectedItems.includes(value)) {
      setSelectedItems((prev) => [...prev, value]);
    }
  }

  function removeItem(value: string) {
    setSelectedItems((prev) => prev.filter((v) => v !== value));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (selected.length === 0) {
      alert("Please choose at least one product category.");
      return;
    }

    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    selected.forEach((item) => data.append("product_interest", item));
    selectedItems.forEach((item) => data.append("specific_item", item));

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setSelected(defaultLabel ? [defaultLabel] : []);
        setSelectedItems([]);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-white p-10 text-center">
        <p className="font-display text-2xl text-charcoal">Thank you</p>
        <p className="mt-3 text-muted-foreground">
          Your quote request has been received. We will respond with options and
          pricing within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-border bg-white p-8 shadow-sm"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">Name *</span>
          <input
            name="name"
            required
            className="mt-1.5 w-full rounded-lg border border-border bg-ivory px-4 py-2.5 text-sm outline-none focus:border-accent"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium">Email *</span>
          <input
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded-lg border border-border bg-ivory px-4 py-2.5 text-sm outline-none focus:border-accent"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium">Phone</span>
          <input
            name="phone"
            type="tel"
            className="mt-1.5 w-full rounded-lg border border-border bg-ivory px-4 py-2.5 text-sm outline-none focus:border-accent"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium">Organization</span>
          <input
            name="organization"
            className="mt-1.5 w-full rounded-lg border border-border bg-ivory px-4 py-2.5 text-sm outline-none focus:border-accent"
          />
        </label>
      </div>

      <div>
        <span className="text-sm font-medium">Product Interest *</span>
        <div className="mt-2 flex flex-wrap gap-2">
          {selected.length === 0 && (
            <span className="text-sm text-muted-foreground">
              Add a product category below
            </span>
          )}
          {selected.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full bg-charcoal px-3 py-1.5 text-xs font-medium text-ivory"
            >
              {item}
              <button
                type="button"
                onClick={() => removeCategory(item)}
                className="text-ivory/70 hover:text-white"
                aria-label={`Remove ${item}`}
              >
                ×
              </button>
            </span>
          ))}
        </div>
        <select
          className="mt-3 w-full rounded-lg border border-border bg-ivory px-4 py-2.5 text-sm outline-none focus:border-accent"
          defaultValue=""
          onChange={(e) => {
            addCategory(e.target.value);
            e.target.value = "";
          }}
        >
          <option value="">Add a product category…</option>
          {available.map((opt) => (
            <option key={opt.slug} value={opt.value}>
              {opt.value}
            </option>
          ))}
        </select>
      </div>

      {specificItems && specificItems.length > 0 && (
        <div>
          <span className="text-sm font-medium">Specific bench</span>
          <p className="mt-1 text-xs text-muted-foreground">
            Click a bench label below any photo, or pick from the list.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {selectedItems.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1.5 text-xs font-medium text-charcoal"
              >
                {item}
                <button
                  type="button"
                  onClick={() => removeItem(item)}
                  className="text-charcoal/50 hover:text-charcoal"
                  aria-label={`Remove ${item}`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <select
            className="mt-3 w-full rounded-lg border border-border bg-ivory px-4 py-2.5 text-sm outline-none focus:border-accent"
            defaultValue=""
            onChange={(e) => {
              addItem(e.target.value);
              e.target.value = "";
            }}
          >
            <option value="">Add a specific bench…</option>
            {availableItems.map((opt) => (
              <option key={opt.id} value={opt.label}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      )}

      <label className="block">
        <span className="text-sm font-medium">Project Details</span>
        <textarea
          name="project_details"
          rows={5}
          placeholder="Quantities, finishes, timeline, site plans, or drawings…"
          className="mt-1.5 w-full rounded-lg border border-border bg-ivory px-4 py-2.5 text-sm outline-none focus:border-accent"
        />
      </label>

      <input
        type="text"
        name="_gotcha"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or contact us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-charcoal px-8 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-charcoal/90 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send Quote Request"}
      </button>
    </form>
  );
}
