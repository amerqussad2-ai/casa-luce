import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-charcoal">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(189,91,58,0.35),_transparent_60%),radial-gradient(ellipse_at_bottom,_rgba(92,100,64,0.4),_transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal/95"
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center">
        <span className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-terracotta">
          Italian Kitchen &middot; Dubai Marina
        </span>
        <h1 className="font-serif text-4xl font-semibold leading-tight text-cream sm:text-5xl md:text-6xl">
          A Taste of Italy, Lit by Dubai
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
          Modern Italian cooking, warm hospitality, and timeless evenings by
          the Marina.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/reservations"
            className="rounded-full bg-terracotta px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-cream transition-colors hover:bg-terracotta/90"
          >
            Reserve a Table
          </Link>
          <Link
            href="/menu"
            className="rounded-full border border-cream/50 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-cream transition-colors hover:bg-cream/10"
          >
            Explore the Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
