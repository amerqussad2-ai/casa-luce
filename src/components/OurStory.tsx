import Link from "next/link";

export default function OurStory() {
  return (
    <section className="bg-cream px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto mb-16 h-px w-16 bg-terracotta sm:mb-20" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-gradient-to-br from-olive/15 via-cream to-terracotta/10 ring-1 ring-charcoal/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-2xl tracking-[0.3em] text-charcoal/25">
              CASA LUCE
            </span>
          </div>
          <div className="absolute bottom-8 left-8 h-px w-16 bg-terracotta/60" />
        </div>

        <div className="flex flex-col">
          <span className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-terracotta">
            Our Story
          </span>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-charcoal sm:text-4xl md:text-5xl">
            Italian soul, Dubai light.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-charcoal/70 sm:text-lg">
            Casa Luce brings the warmth of Italian dining to the heart of
            Dubai Marina &mdash; a place for slow dinners, generous plates,
            and evenings that linger.
          </p>
          <p className="mt-4 text-base leading-relaxed text-charcoal/70 sm:text-lg">
            Our kitchen is inspired by the simplicity of Italian cooking:
            beautiful ingredients, familiar flavours, and dishes made to be
            shared around the table.
          </p>
          <Link
            href="/our-story"
            className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-widest text-olive transition-colors hover:text-terracotta"
          >
            Discover Our Story
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
