import Link from "next/link";

export default function GalleryCTA() {
  return (
    <section className="bg-charcoal px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <span className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-terracotta">
          Join Us
        </span>
        <h2 className="font-serif text-3xl font-semibold leading-tight text-cream sm:text-4xl md:text-5xl">
          See it for yourself.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
          Reserve your table and spend the evening at Casa Luce.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/#reservations"
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
