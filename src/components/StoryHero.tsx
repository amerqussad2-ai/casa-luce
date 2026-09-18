export default function StoryHero() {
  return (
    <section className="relative overflow-hidden bg-charcoal px-6 py-28 sm:py-36 lg:px-10">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(92,100,64,0.18),transparent_60%)]"
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-terracotta-glow">
          Our Story
        </span>
        <div className="mb-6 h-px w-16 bg-cream/25" />
        <h1 className="font-serif text-4xl font-semibold leading-tight text-cream sm:text-5xl md:text-6xl">
          Italian soul, Dubai light.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
          Casa Luce was created around a simple idea: bring the warmth,
          generosity, and rhythm of Italian dining to the waterfront energy
          of Dubai Marina.
        </p>
      </div>
    </section>
  );
}
