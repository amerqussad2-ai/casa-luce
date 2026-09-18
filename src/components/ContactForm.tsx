"use client";

import { useState } from "react";

const SUBJECT_OPTIONS = [
  "General Enquiry",
  "Reservation Question",
  "Private Dining",
  "Celebration",
  "Press & Partnerships",
  "Other",
];

const fieldClassName =
  "w-full border-0 border-b border-charcoal/20 bg-transparent py-3 text-charcoal placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream";

const labelClassName =
  "text-xs font-semibold uppercase tracking-widest text-charcoal/70";

function FormField({
  id,
  label,
  type = "text",
  autoComplete,
  required = true,
}: {
  id: string;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={fieldClassName}
      />
    </div>
  );
}

function FormSelect({
  id,
  label,
  options,
}: {
  id: string;
  label: string;
  options: string[];
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          name={id}
          required
          defaultValue=""
          className={`${fieldClassName} appearance-none pr-6`}
        >
          <option value="" disabled>
            Select
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/40"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>
  );
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        role="status"
        className="flex min-h-[320px] flex-col justify-center border-t border-charcoal/10 pt-8"
      >
        <h3 className="font-serif text-2xl text-charcoal">Thank you.</h3>
        <p className="mt-3 text-base leading-relaxed text-charcoal/70">
          Your message has been received. Our team will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7">
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
        <FormField id="name" label="Name" autoComplete="name" />
        <FormField id="email" label="Email" type="email" autoComplete="email" />
      </div>
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
        <FormField
          id="phone"
          label="Phone (optional)"
          type="tel"
          autoComplete="tel"
          required={false}
        />
        <FormSelect id="subject" label="Subject" options={SUBJECT_OPTIONS} />
      </div>
      <div>
        <label htmlFor="message" className={labelClassName}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={`${fieldClassName} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="mt-3 w-full rounded-full bg-terracotta-deep px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-cream transition-colors hover:bg-terracotta-deep/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-deep focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
      >
        Send Message
      </button>
    </form>
  );
}
