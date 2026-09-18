import Link from "next/link";

export default function LocationContact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-charcoal px-6 py-24 sm:py-32 lg:px-10"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-terracotta-glow">
            Visit Casa Luce
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-cream sm:text-4xl md:text-5xl">
            Find us by the Marina.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream/70 sm:text-lg">
            An evening at Casa Luce begins in the heart of Dubai Marina
            &mdash; surrounded by waterfront views, city lights, and the
            energy of Dubai.
          </p>

          <address className="mt-10 max-w-md space-y-3 border-t border-cream/15 pt-8 text-sm not-italic">
            <div className="flex items-baseline justify-between gap-4">
              <span className="uppercase tracking-widest text-cream/50">
                Location
              </span>
              <span className="text-right text-cream">
                Dubai Marina, Dubai
                <br />
                United Arab Emirates
              </span>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <span className="uppercase tracking-widest text-cream/50">
                Hours
              </span>
              <span className="text-right text-cream">
                Monday &ndash; Sunday
                <br />
                6:00 PM &ndash; 11:00 PM
              </span>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <span className="uppercase tracking-widest text-cream/50">
                Phone
              </span>
              <a
                href="tel:+97145550188"
                className="text-cream transition-colors hover:text-terracotta"
              >
                +971 4 555 0188
              </a>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <span className="uppercase tracking-widest text-cream/50">
                Email
              </span>
              <a
                href="mailto:hello@casaluce.ae"
                className="text-cream transition-colors hover:text-terracotta"
              >
                hello@casaluce.ae
              </a>
            </div>
          </address>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Dubai+Marina%2C+Dubai%2C+United+Arab+Emirates"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-terracotta-deep px-8 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-cream transition-colors hover:bg-terracotta-deep/90"
            >
              Get Directions
            </a>
            <Link
              href="/contact"
              className="-my-1.5 inline-flex items-center gap-2 py-1.5 text-sm font-semibold uppercase tracking-widest text-olive-glow transition-colors hover:text-terracotta-glow"
            >
              Contact Us
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-charcoal ring-1 ring-cream/15">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-olive/20 via-charcoal to-terracotta/10"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(248,244,236,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(248,244,236,0.06)_1px,transparent_1px)] bg-[size:44px_44px]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(248,244,236,0.08),_transparent_65%)]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-terracotta"
            />
            <span className="font-serif text-lg tracking-[0.2em] text-cream/70 sm:text-xl">
              Dubai Marina
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
