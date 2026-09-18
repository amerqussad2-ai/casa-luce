import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-24 items-center justify-center overflow-hidden bg-charcoal"
    >
      <Image
        src="/images/casa-luce-hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_38%]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-charcoal/35" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/35 to-charcoal/70"
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center">
        <span className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-terracotta">
          Italian Kitchen &middot; Dubai Marina
        </span>
        <h1 className="font-serif text-4xl font-semibold leading-tight text-cream sm:text-5xl md:text-6xl">
          A Taste of Italy,
          <br className="hidden sm:block" /> Lit by Dubai
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
          Modern Italian cooking, warm hospitality, and timeless evenings by
          the Marina.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/reservations"
            className="rounded-full bg-terracotta-deep px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-cream transition-colors hover:bg-terracotta-deep/90"
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
