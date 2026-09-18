"use client";

import { useEffect, useState } from "react";

const GUEST_OPTIONS = [
  "1 Guest",
  "2 Guests",
  "3 Guests",
  "4 Guests",
  "5 Guests",
  "6 Guests",
  "7+ Guests",
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
}: {
  id: string;
  label: string;
  type?: string;
  autoComplete?: string;
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
        required
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

function getLocalDateString(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function ReservationForm({
  timeOptions,
  includeSpecialRequests = false,
}: {
  timeOptions: string[];
  includeSpecialRequests?: boolean;
}) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const dateInput = document.getElementById("date");
    if (dateInput instanceof HTMLInputElement) {
      dateInput.min = getLocalDateString(new Date());
    }
  }, []);

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
          Your reservation request has been received. Our team will confirm
          your booking shortly.
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
        <FormField id="phone" label="Phone" type="tel" autoComplete="tel" />
        <FormField id="date" label="Date" type="date" />
      </div>
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
        <FormSelect id="time" label="Time" options={timeOptions} />
        <FormSelect id="guests" label="Guests" options={GUEST_OPTIONS} />
      </div>
      {includeSpecialRequests && (
        <div>
          <label htmlFor="notes" className={labelClassName}>
            Special Requests (optional)
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            className={`${fieldClassName} resize-none`}
          />
        </div>
      )}
      <button
        type="submit"
        className="mt-3 w-full rounded-full bg-terracotta-deep px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-cream transition-colors hover:bg-terracotta-deep/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-deep focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
      >
        Request a Table
      </button>
    </form>
  );
}
