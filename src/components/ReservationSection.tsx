"use client";

import { useState } from "react";

const TIME_OPTIONS = [
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
];

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
  "w-full border-0 border-b border-charcoal/20 bg-transparent py-3 text-charcoal placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none";

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
      <label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-widest text-charcoal/50"
      >
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
      <label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-widest text-charcoal/50"
      >
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

export default function ReservationSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-cream px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-terracotta">
            Reservations
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-charcoal sm:text-4xl md:text-5xl">
            Your table awaits.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/70 sm:text-lg">
            Join us at Casa Luce for an evening of modern Italian dining,
            warm hospitality, and Marina views.
          </p>

          <div className="mt-10 max-w-md space-y-3 border-t border-charcoal/10 pt-8">
            <div className="flex items-baseline justify-between gap-4 text-sm">
              <span className="uppercase tracking-widest text-charcoal/50">
                Location
              </span>
              <span className="text-charcoal">Dubai Marina, Dubai</span>
            </div>
            <div className="flex items-baseline justify-between gap-4 text-sm">
              <span className="uppercase tracking-widest text-charcoal/50">
                Dinner Service
              </span>
              <span className="text-charcoal">6:00 PM &ndash; 10:00 PM</span>
            </div>
          </div>

          <p className="mt-8 max-w-md text-sm leading-relaxed text-charcoal/60">
            Reservations are subject to availability. Our team will confirm
            your booking shortly.
          </p>
        </div>

        <div>
          {submitted ? (
            <div
              role="status"
              className="flex min-h-[320px] flex-col justify-center border-t border-charcoal/10 pt-8"
            >
              <h3 className="font-serif text-2xl text-charcoal">
                Thank you.
              </h3>
              <p className="mt-3 text-base leading-relaxed text-charcoal/70">
                Your reservation request has been received. Our team will
                confirm your booking shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                <FormField id="name" label="Name" autoComplete="name" />
                <FormField
                  id="email"
                  label="Email"
                  type="email"
                  autoComplete="email"
                />
              </div>
              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                <FormField
                  id="phone"
                  label="Phone"
                  type="tel"
                  autoComplete="tel"
                />
                <FormField id="date" label="Date" type="date" />
              </div>
              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                <FormSelect id="time" label="Time" options={TIME_OPTIONS} />
                <FormSelect
                  id="guests"
                  label="Guests"
                  options={GUEST_OPTIONS}
                />
              </div>
              <button
                type="submit"
                className="mt-3 w-full rounded-full bg-terracotta px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-cream transition-colors hover:bg-terracotta/90"
              >
                Request a Table
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
